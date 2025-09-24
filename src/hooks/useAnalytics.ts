'use client';

import { useEffect, useCallback, useRef } from 'react';
import { getAnalytics, initAnalytics, AnalyticsConfig, PageViewData } from '@/lib/analytics';

interface UseAnalyticsOptions {
  trackPageView?: boolean;
  trackScrollDepth?: boolean;
  trackTimeOnPage?: boolean;
  scrollDepthThresholds?: number[];
}

interface AnalyticsHook {
  trackEvent: (name: string, props?: Record<string, string | number | boolean>) => void;
  trackPageView: (data?: Partial<PageViewData>) => void;
  trackScrollDepth: (depth: number) => void;
  trackTimeOnPage: () => void;
  isEnabled: boolean;
}

export function useAnalytics(
  config?: Partial<AnalyticsConfig>,
  options: UseAnalyticsOptions = {}
): AnalyticsHook {
  const {
    trackPageView = true,
    trackScrollDepth = true,
    trackTimeOnPage = true,
    scrollDepthThresholds = [25, 50, 75, 90],
  } = options;

  const analytics = useRef(getAnalytics());
  const scrollDepthTracked = useRef(new Set<number>());
  const pageStartTime = useRef(Date.now());
  const timeTracked = useRef(false);

  // Initialize analytics on first use
  useEffect(() => {
    if (!analytics.current) {
      analytics.current = initAnalytics(config);
    }
  }, [config]);

  // Track page view on mount
  useEffect(() => {
    if (trackPageView && analytics.current) {
      analytics.current.trackPageView();
      pageStartTime.current = Date.now();
      timeTracked.current = false;
      scrollDepthTracked.current.clear();
    }
  }, [trackPageView]);

  // Track scroll depth
  useEffect(() => {
    if (!trackScrollDepth || !analytics.current) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      scrollDepthThresholds.forEach((threshold) => {
        if (scrollPercentage >= threshold && !scrollDepthTracked.current.has(threshold)) {
          scrollDepthTracked.current.add(threshold);
          analytics.current?.trackEvent('Scroll Depth', {
            depth: threshold,
            page: window.location.pathname,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth, scrollDepthThresholds]);

  // Track time on page when user leaves
  useEffect(() => {
    if (!trackTimeOnPage || !analytics.current) return;

    const handleBeforeUnload = () => {
      if (!timeTracked.current) {
        const timeOnPage = Math.round((Date.now() - pageStartTime.current) / 1000);
        analytics.current?.trackEvent('Time on Page', {
          duration: timeOnPage,
          page: window.location.pathname,
        });
        timeTracked.current = true;
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && !timeTracked.current) {
        const timeOnPage = Math.round((Date.now() - pageStartTime.current) / 1000);
        analytics.current?.trackEvent('Time on Page', {
          duration: timeOnPage,
          page: window.location.pathname,
        });
        timeTracked.current = true;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [trackTimeOnPage]);

  // Memoized functions
  const trackEvent = useCallback((name: string, props?: Record<string, string | number | boolean>) => {
    analytics.current?.trackEvent(name, props);
  }, []);

  const trackPageViewManual = useCallback((data?: Partial<PageViewData>) => {
    analytics.current?.trackPageView(data);
  }, []);

  const trackScrollDepthManual = useCallback((depth: number) => {
    if (!scrollDepthTracked.current.has(depth)) {
      scrollDepthTracked.current.add(depth);
      analytics.current?.trackEvent('Scroll Depth', {
        depth,
        page: window.location.pathname,
      });
    }
  }, []);

  const trackTimeOnPageManual = useCallback(() => {
    if (!timeTracked.current) {
      const timeOnPage = Math.round((Date.now() - pageStartTime.current) / 1000);
      analytics.current?.trackEvent('Time on Page', {
        duration: timeOnPage,
        page: window.location.pathname,
      });
      timeTracked.current = true;
    }
  }, []);

  return {
    trackEvent,
    trackPageView: trackPageViewManual,
    trackScrollDepth: trackScrollDepthManual,
    trackTimeOnPage: trackTimeOnPageManual,
    isEnabled: !!analytics.current?.getSession(),
  };
}

// Specialized hooks for common tracking scenarios

export function usePageTracking(config?: Partial<AnalyticsConfig>) {
  return useAnalytics(config, {
    trackPageView: true,
    trackScrollDepth: true,
    trackTimeOnPage: true,
  });
}

export function useEventTracking(config?: Partial<AnalyticsConfig>) {
  return useAnalytics(config, {
    trackPageView: false,
    trackScrollDepth: false,
    trackTimeOnPage: false,
  });
}

export function useFormTracking(formName: string) {
  const { trackEvent } = useEventTracking();

  const trackFormStart = useCallback(() => {
    trackEvent('Form Started', { form: formName });
  }, [trackEvent, formName]);

  const trackFormSubmit = useCallback((success: boolean = true) => {
    trackEvent('Form Submitted', { 
      form: formName, 
      success: success ? 'true' : 'false' 
    });
  }, [trackEvent, formName]);

  const trackFormError = useCallback((error: string) => {
    trackEvent('Form Error', { 
      form: formName, 
      error 
    });
  }, [trackEvent, formName]);

  const trackFieldFocus = useCallback((fieldName: string) => {
    trackEvent('Form Field Focus', { 
      form: formName, 
      field: fieldName 
    });
  }, [trackEvent, formName]);

  return {
    trackFormStart,
    trackFormSubmit,
    trackFormError,
    trackFieldFocus,
  };
}

export function useClickTracking() {
  const { trackEvent } = useEventTracking();

  const trackClick = useCallback((elementName: string, props?: Record<string, string | number | boolean>) => {
    trackEvent('Click', { 
      element: elementName,
      ...props 
    });
  }, [trackEvent]);

  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    trackEvent('Button Click', { 
      button: buttonName,
      location: location || window.location.pathname,
    });
  }, [trackEvent]);

  const trackLinkClick = useCallback((linkText: string, href: string, isExternal: boolean = false) => {
    trackEvent('Link Click', { 
      text: linkText,
      href,
      external: isExternal ? 'true' : 'false',
    });
  }, [trackEvent]);

  return {
    trackClick,
    trackButtonClick,
    trackLinkClick,
  };
}
