'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useEventTracking } from './useAnalytics';
import { throttle, debounce, ElementTracker } from '@/lib/performance';

interface AdvancedTrackingOptions {
  trackScrollDepth?: boolean;
  trackReadingProgress?: boolean;
  trackClickHeatmap?: boolean;
  trackUserJourney?: boolean;
  trackEngagement?: boolean;
  trackPerformance?: boolean;
}

export function useAdvancedTracking(options: AdvancedTrackingOptions = {}) {
  const {
    trackScrollDepth = true,
    trackReadingProgress = true,
    trackClickHeatmap = true,
    trackUserJourney = true,
    trackEngagement = true,
    trackPerformance = true,
  } = options;

  const { trackEvent } = useEventTracking();
  const scrollDepthTracked = useRef(new Set<number>());
  const readingProgress = useRef(0);
  const engagementStartTime = useRef(Date.now());
  const lastScrollTime = useRef(Date.now());
  const userJourney = useRef<Array<{ section: string; timestamp: number; duration: number }>>([]);
  const currentSection = useRef<string>('');
  const sectionStartTime = useRef(Date.now());

  // Scroll depth tracking with throttling
  useEffect(() => {
    if (!trackScrollDepth) return;

    const handleScroll = throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Track scroll depth milestones
      const milestones = [10, 25, 50, 75, 90, 100];
      milestones.forEach((milestone) => {
        if (scrollPercentage >= milestone && !scrollDepthTracked.current.has(milestone)) {
          scrollDepthTracked.current.add(milestone);
          trackEvent('Scroll Depth', {
            depth: milestone,
            page: window.location.pathname,
            timestamp: Date.now(),
          });
        }
      });

      lastScrollTime.current = Date.now();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth, trackEvent]);

  // Reading progress tracking for blog posts and long content
  useEffect(() => {
    if (!trackReadingProgress) return;

    const trackReading = throttle(() => {
      const content = document.querySelector('main, article, .content');
      if (!content) return;

      const contentTop = content.offsetTop;
      const contentHeight = content.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      const contentStart = contentTop;
      const contentEnd = contentTop + contentHeight - windowHeight;
      const progress = Math.min(100, Math.max(0, 
        ((scrollTop - contentStart) / (contentEnd - contentStart)) * 100
      ));

      const roundedProgress = Math.round(progress / 10) * 10; // Round to nearest 10%
      
      if (roundedProgress > readingProgress.current && roundedProgress >= 10) {
        readingProgress.current = roundedProgress;
        trackEvent('Reading Progress', {
          progress: roundedProgress,
          page: window.location.pathname,
          contentType: document.querySelector('article') ? 'article' : 'page',
        });
      }
    }, 200);

    window.addEventListener('scroll', trackReading, { passive: true });
    return () => window.removeEventListener('scroll', trackReading);
  }, [trackReadingProgress, trackEvent]);

  // Click heatmap tracking
  useEffect(() => {
    if (!trackClickHeatmap) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = Math.round((event.clientX / window.innerWidth) * 100);
      const y = Math.round((event.clientY / window.innerHeight) * 100);

      trackEvent('Click Heatmap', {
        x,
        y,
        element: target.tagName.toLowerCase(),
        className: target.className,
        id: target.id || undefined,
        text: target.textContent?.slice(0, 50) || undefined,
        page: window.location.pathname,
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [trackClickHeatmap, trackEvent]);

  // User journey tracking across sections
  useEffect(() => {
    if (!trackUserJourney) return;

    const elementTracker = new ElementTracker((element) => {
      const sectionName = element.getAttribute('data-section') || 
                         element.id || 
                         element.className.split(' ')[0] || 
                         'unknown';

      // Record previous section duration
      if (currentSection.current) {
        const duration = Date.now() - sectionStartTime.current;
        userJourney.current.push({
          section: currentSection.current,
          timestamp: sectionStartTime.current,
          duration,
        });

        trackEvent('Section Exit', {
          section: currentSection.current,
          duration,
          nextSection: sectionName,
        });
      }

      // Start tracking new section
      currentSection.current = sectionName;
      sectionStartTime.current = Date.now();

      trackEvent('Section Enter', {
        section: sectionName,
        timestamp: Date.now(),
        journey: userJourney.current.map(j => j.section).join(' → '),
      });
    }, { threshold: 0.5 });

    // Track all sections
    const sections = document.querySelectorAll('section, [data-section]');
    sections.forEach(section => elementTracker.track(section));

    return () => elementTracker.destroy();
  }, [trackUserJourney, trackEvent]);

  // Engagement tracking
  useEffect(() => {
    if (!trackEngagement) return;

    const trackEngagementMetrics = debounce(() => {
      const now = Date.now();
      const timeOnPage = now - engagementStartTime.current;
      const timeSinceLastScroll = now - lastScrollTime.current;
      const isEngaged = timeSinceLastScroll < 30000; // Active if scrolled in last 30s

      trackEvent('Engagement Update', {
        timeOnPage: Math.round(timeOnPage / 1000),
        isEngaged,
        scrollActivity: timeSinceLastScroll < 5000,
        page: window.location.pathname,
      });
    }, 10000); // Track every 10 seconds

    const interval = setInterval(trackEngagementMetrics, 10000);
    return () => clearInterval(interval);
  }, [trackEngagement, trackEvent]);

  // Performance tracking
  useEffect(() => {
    if (!trackPerformance) return;

    const trackPerformanceMetrics = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          trackEvent('Performance Metrics', {
            loadTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
            domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
            firstPaint: Math.round(navigation.responseStart - navigation.fetchStart),
            page: window.location.pathname,
          });
        }

        // Track Core Web Vitals if available
        if ('PerformanceObserver' in window) {
          try {
            // Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1] as any;
              trackEvent('Core Web Vitals', {
                metric: 'LCP',
                value: Math.round(lastEntry.startTime),
                page: window.location.pathname,
              });
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay
            const fidObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry: any) => {
                trackEvent('Core Web Vitals', {
                  metric: 'FID',
                  value: Math.round(entry.processingStart - entry.startTime),
                  page: window.location.pathname,
                });
              });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
          } catch (error) {
            console.warn('Performance tracking error:', error);
          }
        }
      }
    };

    // Track performance after page load
    if (document.readyState === 'complete') {
      setTimeout(trackPerformanceMetrics, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(trackPerformanceMetrics, 1000);
      });
    }
  }, [trackPerformance, trackEvent]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Track final engagement metrics
      if (trackEngagement) {
        const timeOnPage = Date.now() - engagementStartTime.current;
        trackEvent('Page Exit', {
          timeOnPage: Math.round(timeOnPage / 1000),
          scrollDepth: Math.max(...Array.from(scrollDepthTracked.current)),
          readingProgress: readingProgress.current,
          sectionsVisited: userJourney.current.length,
        });
      }
    };
  }, [trackEngagement, trackEvent]);

  // Return tracking functions for manual use
  return {
    trackCustomEvent: trackEvent,
    getCurrentJourney: useCallback(() => userJourney.current, []),
    getEngagementTime: useCallback(() => Date.now() - engagementStartTime.current, []),
    getScrollDepth: useCallback(() => Math.max(...Array.from(scrollDepthTracked.current), 0), []),
    getReadingProgress: useCallback(() => readingProgress.current, []),
  };
}

// Specialized hook for portfolio sections
export function usePortfolioTracking() {
  const { trackEvent } = useEventTracking();

  const trackProjectView = useCallback((projectName: string, projectType: string) => {
    trackEvent('Project Viewed', {
      project: projectName,
      type: projectType,
      page: window.location.pathname,
    });
  }, [trackEvent]);

  const trackSkillInteraction = useCallback((skill: string, action: 'hover' | 'click') => {
    trackEvent('Skill Interaction', {
      skill,
      action,
      page: window.location.pathname,
    });
  }, [trackEvent]);

  const trackContactIntent = useCallback((source: string) => {
    trackEvent('Contact Intent', {
      source, // e.g., 'hero-button', 'footer-link', 'project-cta'
      page: window.location.pathname,
    });
  }, [trackEvent]);

  const trackDownload = useCallback((fileName: string, fileType: string) => {
    trackEvent('File Download', {
      file: fileName,
      type: fileType,
      page: window.location.pathname,
    });
  }, [trackEvent]);

  return {
    trackProjectView,
    trackSkillInteraction,
    trackContactIntent,
    trackDownload,
  };
}
