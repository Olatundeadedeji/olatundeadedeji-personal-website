'use client';

import { useState } from 'react';
import { usePageTracking, useEventTracking, useFormTracking } from '@/hooks/useAnalytics';
import { useAdvancedTracking } from '@/hooks/useAdvancedTracking';

export default function TestAnalyticsPage() {
  const [events, setEvents] = useState<string[]>([]);
  const { trackEvent } = useEventTracking();
  const { trackFormStart, trackFormSubmit } = useFormTracking('Test Form');
  const { trackCustomEvent, getEngagementTime } = useAdvancedTracking();

  // This will automatically track page view, scroll depth, etc.
  usePageTracking();

  const addEvent = (eventName: string) => {
    setEvents(prev => [...prev, `${new Date().toLocaleTimeString()}: ${eventName}`]);
  };

  const testBasicEvent = () => {
    trackEvent('Test Button Clicked', { 
      test: 'basic-event',
      timestamp: Date.now() 
    });
    addEvent('Basic Event Tracked');
  };

  const testCustomEvent = () => {
    trackCustomEvent('Custom Test Event', {
      customProperty: 'test-value',
      engagementTime: getEngagementTime(),
    });
    addEvent('Custom Event Tracked');
  };

  const testFormEvent = () => {
    trackFormStart();
    addEvent('Form Start Tracked');
    
    setTimeout(() => {
      trackFormSubmit(true);
      addEvent('Form Submit Tracked');
    }, 1000);
  };

  const testPerformanceEvent = () => {
    const startTime = performance.now();
    
    // Simulate some work
    setTimeout(() => {
      const duration = performance.now() - startTime;
      trackEvent('Performance Test', {
        duration: Math.round(duration),
        type: 'simulated-work'
      });
      addEvent(`Performance Event Tracked (${Math.round(duration)}ms)`);
    }, 100);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Analytics Testing Page</h1>
          <p className="text-slate-600 dark:text-slate-400">
            This page helps you test the analytics implementation. Open your browser's 
            developer console to see analytics events being fired.
          </p>
        </div>

        {/* Test Buttons */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Event Testing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={testBasicEvent}
              className="btn-primary rounded-xl"
            >
              Test Basic Event
            </button>
            
            <button
              onClick={testCustomEvent}
              className="btn-ghost rounded-xl"
            >
              Test Custom Event
            </button>
            
            <button
              onClick={testFormEvent}
              className="btn-primary rounded-xl"
            >
              Test Form Events
            </button>
            
            <button
              onClick={testPerformanceEvent}
              className="btn-ghost rounded-xl"
            >
              Test Performance Event
            </button>
          </div>
        </div>

        {/* Scroll Depth Test */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Scroll Depth Testing</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Scroll down this page to test scroll depth tracking. Events will be fired at 25%, 50%, 75%, and 90% scroll depth.
          </p>
          <div className="h-96 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl flex items-center justify-center">
            <p className="text-lg font-medium">Scroll Test Area</p>
          </div>
        </div>

        {/* Click Heatmap Test */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Click Heatmap Testing</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Click anywhere in the area below to test click heatmap tracking.
          </p>
          <div 
            className="h-64 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center cursor-pointer hover:from-green-100 hover:to-green-200 dark:hover:from-green-800 dark:hover:to-green-700 transition-colors"
            onClick={() => addEvent('Click Heatmap Area Clicked')}
          >
            <p className="text-lg font-medium">Click Test Area</p>
          </div>
        </div>

        {/* Form Testing */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Form Interaction Testing</h2>
          <form 
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              trackFormSubmit(true);
              addEvent('Test Form Submitted');
            }}
          >
            <div>
              <label htmlFor="test-name" className="block text-sm font-medium mb-2">
                Test Name Field
              </label>
              <input
                id="test-name"
                type="text"
                placeholder="Focus to trigger tracking"
                onFocus={() => addEvent('Name Field Focused')}
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
            </div>
            
            <div>
              <label htmlFor="test-email" className="block text-sm font-medium mb-2">
                Test Email Field
              </label>
              <input
                id="test-email"
                type="email"
                placeholder="Focus to trigger tracking"
                onFocus={() => addEvent('Email Field Focused')}
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
            </div>
            
            <button type="submit" className="btn-primary rounded-xl">
              Submit Test Form
            </button>
          </form>
        </div>

        {/* Event Log */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Event Log</h2>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 max-h-64 overflow-y-auto">
            {events.length === 0 ? (
              <p className="text-slate-500 text-sm">No events tracked yet. Try the buttons above!</p>
            ) : (
              <ul className="space-y-1 text-sm font-mono">
                {events.map((event, index) => (
                  <li key={index} className="text-slate-700 dark:text-slate-300">
                    {event}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            onClick={() => setEvents([])}
            className="mt-4 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            Clear Log
          </button>
        </div>

        {/* Instructions */}
        <div className="card p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
            Testing Instructions
          </h2>
          <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
            <div>
              <h3 className="font-medium">1. Check Browser Console</h3>
              <p>Open Developer Tools (F12) and check the Console tab for analytics events.</p>
            </div>
            <div>
              <h3 className="font-medium">2. Test Different Interactions</h3>
              <p>Try clicking buttons, scrolling, filling forms, and clicking different areas.</p>
            </div>
            <div>
              <h3 className="font-medium">3. Verify Privacy Settings</h3>
              <p>Check that the consent banner appears and privacy settings work correctly.</p>
            </div>
            <div>
              <h3 className="font-medium">4. Test Performance</h3>
              <p>Monitor network requests and ensure minimal performance impact.</p>
            </div>
          </div>
        </div>

        {/* Spacer for scroll testing */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">End of Page</h3>
            <p className="text-slate-600 dark:text-slate-400">
              You should have triggered 100% scroll depth tracking by now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
