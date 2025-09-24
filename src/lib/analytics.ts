/**
 * Analytics Configuration and Utilities
 * Privacy-first analytics implementation with support for multiple providers
 * Optimized for performance with batching, throttling, and efficient tracking
 */

import { debounce, throttle, eventQueue, performanceMonitor } from './performance';

export interface AnalyticsConfig {
  provider: 'plausible' | 'ga4' | 'custom';
  domain: string;
  apiHost?: string;
  trackLocalhost?: boolean;
  enableAutoPageviews?: boolean;
  enableOutboundLinks?: boolean;
  enableFileDownloads?: boolean;
  enableRevenue?: boolean;
}

export interface AnalyticsEvent {
  name: string;
  props?: Record<string, string | number | boolean>;
  revenue?: {
    currency: string;
    amount: number;
  };
}

export interface PageViewData {
  url: string;
  title: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

export interface UserSession {
  sessionId: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  isNewVisitor: boolean;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  browser: string;
  os: string;
  country?: string;
}

// Default configuration
export const defaultAnalyticsConfig: AnalyticsConfig = {
  provider: 'plausible',
  domain: typeof window !== 'undefined' ? window.location.hostname : '',
  trackLocalhost: false,
  enableAutoPageviews: true,
  enableOutboundLinks: true,
  enableFileDownloads: true,
  enableRevenue: false,
};

// Privacy-compliant analytics class
export class PrivacyAnalytics {
  private config: AnalyticsConfig;
  private isEnabled: boolean = false;
  private session: UserSession | null = null;

  constructor(config: Partial<AnalyticsConfig> = {}) {
    this.config = { ...defaultAnalyticsConfig, ...config };
    this.init();
  }

  private init() {
    if (typeof window === 'undefined') return;

    // Check if analytics should be enabled
    this.isEnabled = this.shouldEnableAnalytics();
    
    if (this.isEnabled) {
      this.initializeSession();
      this.setupEventListeners();
    }
  }

  private shouldEnableAnalytics(): boolean {
    // Don't track on localhost unless explicitly enabled
    if (window.location.hostname === 'localhost' && !this.config.trackLocalhost) {
      return false;
    }

    // Check for Do Not Track header
    if (navigator.doNotTrack === '1') {
      return false;
    }

    // Check for user consent (can be extended with cookie consent)
    const consent = localStorage.getItem('analytics-consent');
    return consent !== 'denied';
  }

  private initializeSession() {
    const sessionId = this.generateSessionId();
    const isNewVisitor = !localStorage.getItem('analytics-visitor');
    
    if (isNewVisitor) {
      localStorage.setItem('analytics-visitor', 'true');
    }

    this.session = {
      sessionId,
      startTime: Date.now(),
      lastActivity: Date.now(),
      pageViews: 0,
      isNewVisitor,
      deviceType: this.getDeviceType(),
      browser: this.getBrowser(),
      os: this.getOS(),
    };
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  private getBrowser(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Other';
  }

  private getOS(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Other';
  }

  private setupEventListeners() {
    // Track outbound links with throttling
    if (this.config.enableOutboundLinks) {
      const throttledLinkClick = throttle(this.handleLinkClick.bind(this), 100);
      document.addEventListener('click', throttledLinkClick);
    }

    // Track file downloads with throttling
    if (this.config.enableFileDownloads) {
      const throttledFileDownload = throttle(this.handleFileDownload.bind(this), 100);
      document.addEventListener('click', throttledFileDownload);
    }

    // Update session activity with debouncing
    const debouncedVisibilityChange = debounce(this.handleVisibilityChange.bind(this), 500);
    document.addEventListener('visibilitychange', debouncedVisibilityChange);
  }

  private handleLinkClick(event: Event) {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href) {
      const url = new URL(link.href);
      const currentDomain = window.location.hostname;
      
      // Track outbound links
      if (url.hostname !== currentDomain) {
        this.trackEvent('Outbound Link', {
          url: link.href,
          text: link.textContent || '',
        });
      }
    }
  }

  private handleFileDownload(event: Event) {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href) {
      const fileExtensions = /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar|mp3|mp4|avi|mov)$/i;
      if (fileExtensions.test(link.href)) {
        this.trackEvent('File Download', {
          file: link.href,
          type: link.href.split('.').pop() || 'unknown',
        });
      }
    }
  }

  private handleVisibilityChange() {
    if (this.session) {
      this.session.lastActivity = Date.now();
    }
  }

  // Public methods
  public trackPageView(data?: Partial<PageViewData>) {
    if (!this.isEnabled || !this.session) return;

    const pageData: PageViewData = {
      url: window.location.pathname + window.location.search,
      title: document.title,
      referrer: document.referrer,
      ...this.extractUTMParams(),
      ...data,
    };

    this.session.pageViews++;
    this.sendToProvider('pageview', pageData);
  }

  public trackEvent(name: string, props?: Record<string, string | number | boolean>) {
    if (!this.isEnabled) return;

    const event: AnalyticsEvent = { name, props };
    this.sendToProvider('event', event);
  }

  private extractUTMParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utmSource: urlParams.get('utm_source') || undefined,
      utmMedium: urlParams.get('utm_medium') || undefined,
      utmCampaign: urlParams.get('utm_campaign') || undefined,
      utmTerm: urlParams.get('utm_term') || undefined,
      utmContent: urlParams.get('utm_content') || undefined,
    };
  }

  private sendToProvider(type: 'pageview' | 'event', data: any) {
    // Use event queue for batching if available
    if (eventQueue) {
      eventQueue.add(type, data);
    } else {
      this.sendDirectly(type, data);
    }
  }

  private sendDirectly(type: 'pageview' | 'event', data: any) {
    switch (this.config.provider) {
      case 'plausible':
        this.sendToPlausible(type, data);
        break;
      case 'ga4':
        this.sendToGA4(type, data);
        break;
      case 'custom':
        this.sendToCustom(type, data);
        break;
    }
  }

  private sendToPlausible(type: 'pageview' | 'event', data: any) {
    if (typeof window.plausible === 'undefined') return;

    if (type === 'pageview') {
      window.plausible('pageview', { props: data });
    } else {
      window.plausible(data.name, { props: data.props });
    }
  }

  private sendToGA4(type: 'pageview' | 'event', data: any) {
    if (typeof window.gtag === 'undefined') return;

    if (type === 'pageview') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: data.title,
        page_location: window.location.href,
      });
    } else {
      window.gtag('event', data.name, data.props);
    }
  }

  private sendToCustom(type: 'pageview' | 'event', data: any) {
    // Custom analytics implementation
    console.log('Custom Analytics:', type, data);
  }

  // Consent management
  public setConsent(granted: boolean) {
    localStorage.setItem('analytics-consent', granted ? 'granted' : 'denied');
    
    if (granted && !this.isEnabled) {
      this.isEnabled = true;
      this.init();
    } else if (!granted && this.isEnabled) {
      this.isEnabled = false;
      this.session = null;
    }
  }

  public getSession(): UserSession | null {
    return this.session;
  }
}

// Global analytics instance
let analyticsInstance: PrivacyAnalytics | null = null;

export function initAnalytics(config?: Partial<AnalyticsConfig>): PrivacyAnalytics {
  if (!analyticsInstance) {
    analyticsInstance = new PrivacyAnalytics(config);
  }
  return analyticsInstance;
}

export function getAnalytics(): PrivacyAnalytics | null {
  return analyticsInstance;
}

// Type declarations for external scripts
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
    gtag?: (...args: any[]) => void;
  }
}
