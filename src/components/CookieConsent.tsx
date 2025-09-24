'use client';

import { useState, useEffect } from 'react';
import { getAnalytics } from '@/lib/analytics';

interface CookieConsentProps {
  className?: string;
}

export default function CookieConsent({ className = '' }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('analytics-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    const analytics = getAnalytics();
    analytics?.setConsent(true);
    hideBanner();
  };

  const handleDecline = () => {
    const analytics = getAnalytics();
    analytics?.setConsent(false);
    hideBanner();
  };

  const hideBanner = () => {
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300); // Wait for animation
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      } ${className}`}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-lg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 
                id="cookie-consent-title" 
                className="font-semibold text-slate-900 dark:text-slate-100 mb-1"
              >
                Privacy-Friendly Analytics
              </h3>
              <p 
                id="cookie-consent-description" 
                className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl"
              >
                I use privacy-first analytics to understand how visitors interact with my portfolio. 
                No personal data is collected, no cookies are stored, and your privacy is fully respected. 
                You can opt out at any time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors border border-slate-300 dark:border-slate-600 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                type="button"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm font-medium text-white bg-brand hover:bg-brand-700 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                type="button"
              >
                Accept Analytics
              </button>
            </div>
          </div>
          
          {/* Privacy details */}
          <details className="mt-3 text-xs text-slate-500 dark:text-slate-500">
            <summary className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              What data is collected?
            </summary>
            <div className="mt-2 pl-4 border-l-2 border-slate-200 dark:border-slate-700">
              <ul className="space-y-1">
                <li>• Page views and navigation patterns</li>
                <li>• Referrer sources (where you came from)</li>
                <li>• Device type and browser (anonymized)</li>
                <li>• Geographic location (country level only)</li>
                <li>• Time spent on pages</li>
                <li>• No personal information or IP addresses</li>
                <li>• No cross-site tracking or advertising</li>
              </ul>
              <p className="mt-2 text-slate-400 dark:text-slate-600">
                All data is processed anonymously and used solely to improve the website experience.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

// Privacy settings component for users to change their preferences
export function PrivacySettings() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(localStorage.getItem('analytics-consent'));
  }, []);

  const handleToggleConsent = () => {
    const analytics = getAnalytics();
    const newConsent = consent !== 'granted';
    
    analytics?.setConsent(newConsent);
    setConsent(newConsent ? 'granted' : 'denied');
  };

  const clearData = () => {
    localStorage.removeItem('analytics-consent');
    localStorage.removeItem('analytics-visitor');
    setConsent(null);
    
    // Reload to reset analytics
    window.location.reload();
  };

  return (
    <div className="card p-6">
      <h3 className="font-semibold text-lg mb-4">Privacy Settings</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Analytics Tracking</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Allow anonymous analytics to help improve the website
            </p>
          </div>
          <button
            onClick={handleToggleConsent}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 ${
              consent === 'granted' ? 'bg-brand' : 'bg-slate-300 dark:bg-slate-600'
            }`}
            role="switch"
            aria-checked={consent === 'granted'}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                consent === 'granted' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
          <h4 className="font-medium mb-2">Data Management</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Current status: {
              consent === 'granted' ? 'Analytics enabled' : 
              consent === 'denied' ? 'Analytics disabled' : 
              'No preference set'
            }
          </p>
          <button
            onClick={clearData}
            className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
          >
            Clear all data and reset preferences
          </button>
        </div>
      </div>
    </div>
  );
}
