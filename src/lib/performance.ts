/**
 * Performance optimization utilities for analytics
 */

// Debounce function for high-frequency events
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Queue for batching analytics events
class EventQueue {
  private queue: Array<{ type: string; data: any; timestamp: number }> = [];
  private batchSize = 10;
  private flushInterval = 5000; // 5 seconds
  private timer: NodeJS.Timeout | null = null;

  constructor(
    private onFlush: (events: Array<{ type: string; data: any; timestamp: number }>) => void
  ) {
    this.startTimer();
  }

  add(type: string, data: any) {
    this.queue.push({
      type,
      data,
      timestamp: Date.now(),
    });

    if (this.queue.length >= this.batchSize) {
      this.flush();
    }
  }

  flush() {
    if (this.queue.length === 0) return;

    const events = [...this.queue];
    this.queue = [];
    this.onFlush(events);
    this.resetTimer();
  }

  private startTimer() {
    this.timer = setTimeout(() => {
      this.flush();
      this.startTimer();
    }, this.flushInterval);
  }

  private resetTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.startTimer();
  }

  destroy() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.flush(); // Send any remaining events
  }
}

// Lazy loading utility for analytics scripts
export function loadScript(src: string, attributes: Record<string, string> = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;

    // Add custom attributes
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    document.head.appendChild(script);
  });
}

// Intersection Observer for efficient element tracking
export class ElementTracker {
  private observer: IntersectionObserver | null = null;
  private trackedElements = new Map<Element, () => void>();

  constructor(
    private onElementVisible: (element: Element) => void,
    options: IntersectionObserverInit = { threshold: 0.5 }
  ) {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = this.trackedElements.get(entry.target);
            if (callback) {
              callback();
              this.untrack(entry.target); // Track only once
            }
          }
        });
      }, options);
    }
  }

  track(element: Element, callback?: () => void) {
    if (!this.observer) return;

    const trackingCallback = callback || (() => this.onElementVisible(element));
    this.trackedElements.set(element, trackingCallback);
    this.observer.observe(element);
  }

  untrack(element: Element) {
    if (!this.observer) return;

    this.observer.unobserve(element);
    this.trackedElements.delete(element);
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.trackedElements.clear();
  }
}

// Performance monitoring
export class PerformanceMonitor {
  private metrics: Record<string, number> = {};

  startTiming(name: string) {
    this.metrics[`${name}_start`] = performance.now();
  }

  endTiming(name: string): number {
    const startTime = this.metrics[`${name}_start`];
    if (startTime === undefined) {
      console.warn(`No start time found for metric: ${name}`);
      return 0;
    }

    const duration = performance.now() - startTime;
    this.metrics[name] = duration;
    delete this.metrics[`${name}_start`];
    
    return duration;
  }

  getMetric(name: string): number | undefined {
    return this.metrics[name];
  }

  getAllMetrics(): Record<string, number> {
    return { ...this.metrics };
  }

  // Get Core Web Vitals
  getCoreWebVitals(): Promise<Record<string, number>> {
    return new Promise((resolve) => {
      const vitals: Record<string, number> = {};

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            vitals.lcp = lastEntry.startTime;
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              vitals.fid = entry.processingStart - entry.startTime;
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                vitals.cls = clsValue;
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // Resolve after a short delay to collect initial metrics
          setTimeout(() => resolve(vitals), 1000);
        } catch (error) {
          console.warn('Error collecting Core Web Vitals:', error);
          resolve(vitals);
        }
      } else {
        resolve(vitals);
      }
    });
  }
}

// Memory-efficient event storage
export class EventStorage {
  private maxEvents = 100;
  private events: Array<any> = [];

  add(event: any) {
    this.events.push(event);
    
    // Keep only the most recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }
  }

  getEvents(): Array<any> {
    return [...this.events];
  }

  clear() {
    this.events = [];
  }

  getSize(): number {
    return this.events.length;
  }
}

// Export instances for use across the application
export const eventQueue = typeof window !== 'undefined' 
  ? new EventQueue((events) => {
      // In a real implementation, this would send events to your analytics endpoint
      console.log('Flushing analytics events:', events);
    })
  : null;

export const performanceMonitor = new PerformanceMonitor();
export const eventStorage = new EventStorage();
