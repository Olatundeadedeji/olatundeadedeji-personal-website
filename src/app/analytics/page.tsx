import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import { PrivacySettings } from '@/components/CookieConsent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics Dashboard - Olatunde Adedeji',
  description: 'Portfolio analytics and visitor insights',
  robots: 'noindex, nofollow', // Keep analytics private
};

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Portfolio Analytics</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Privacy-first analytics insights for understanding visitor behavior and improving portfolio effectiveness.
          </p>
        </div>

        <AnalyticsDashboard />

        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
          <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
          <PrivacySettings />
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-4">Analytics Implementation Details</h3>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
            <div>
              <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">What We Track</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>Page views and navigation patterns</li>
                <li>Referrer sources and UTM campaign parameters</li>
                <li>Device type, browser, and operating system (anonymized)</li>
                <li>Geographic location (country level only)</li>
                <li>Session duration and user engagement metrics</li>
                <li>Form interactions and conversion events</li>
                <li>Scroll depth and content engagement</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Privacy Compliance</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>No personal information or IP addresses collected</li>
                <li>No cross-site tracking or advertising cookies</li>
                <li>GDPR and CCPA compliant by design</li>
                <li>User consent respected and easily manageable</li>
                <li>Data processed anonymously and aggregated</li>
                <li>No data sharing with third parties</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Technical Implementation</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>Lightweight tracking script (&lt;1KB impact)</li>
                <li>Privacy-first analytics provider (Plausible)</li>
                <li>Client-side event tracking with React hooks</li>
                <li>Automatic page view and user behavior tracking</li>
                <li>Real-time analytics dashboard</li>
                <li>Performance optimized with minimal overhead</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
