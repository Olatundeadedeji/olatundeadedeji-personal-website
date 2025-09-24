'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { initAnalytics } from '@/lib/analytics';

interface PlausibleAnalyticsProps {
  domain: string;
  src?: string;
  trackLocalhost?: boolean;
  enableAutoPageviews?: boolean;
  enableOutboundLinks?: boolean;
  enableFileDownloads?: boolean;
  enableRevenue?: boolean;
}

export default function PlausibleAnalytics({
  domain,
  src = 'https://plausible.io/js/script.js',
  trackLocalhost = false,
  enableAutoPageviews = true,
  enableOutboundLinks = true,
  enableFileDownloads = true,
  enableRevenue = false,
}: PlausibleAnalyticsProps) {
  
  useEffect(() => {
    // Initialize our privacy-first analytics wrapper
    initAnalytics({
      provider: 'plausible',
      domain,
      trackLocalhost,
      enableAutoPageviews,
      enableOutboundLinks,
      enableFileDownloads,
      enableRevenue,
    });
  }, [domain, trackLocalhost, enableAutoPageviews, enableOutboundLinks, enableFileDownloads, enableRevenue]);

  // Build script src with extensions
  const buildScriptSrc = () => {
    const extensions = [];
    
    if (enableOutboundLinks) extensions.push('outbound-links');
    if (enableFileDownloads) extensions.push('file-downloads');
    if (enableRevenue) extensions.push('revenue');
    if (trackLocalhost) extensions.push('local');

    if (extensions.length === 0) {
      return src;
    }

    // Replace script.js with script.{extensions}.js
    const baseUrl = src.replace('/script.js', '');
    return `${baseUrl}/script.${extensions.join('.')}.js`;
  };

  const scriptSrc = buildScriptSrc();

  return (
    <Script
      src={scriptSrc}
      data-domain={domain}
      strategy="afterInteractive"
      onLoad={() => {
        console.log('Plausible Analytics loaded');
      }}
      onError={(e) => {
        console.error('Failed to load Plausible Analytics:', e);
      }}
    />
  );
}

// Alternative self-hosted Plausible component
export function SelfHostedPlausible({
  domain,
  apiHost,
  trackLocalhost = false,
  enableAutoPageviews = true,
  enableOutboundLinks = true,
  enableFileDownloads = true,
}: {
  domain: string;
  apiHost: string;
  trackLocalhost?: boolean;
  enableAutoPageviews?: boolean;
  enableOutboundLinks?: boolean;
  enableFileDownloads?: boolean;
}) {
  
  useEffect(() => {
    initAnalytics({
      provider: 'plausible',
      domain,
      apiHost,
      trackLocalhost,
      enableAutoPageviews,
      enableOutboundLinks,
      enableFileDownloads,
    });
  }, [domain, apiHost, trackLocalhost, enableAutoPageviews, enableOutboundLinks, enableFileDownloads]);

  const extensions = [];
  if (enableOutboundLinks) extensions.push('outbound-links');
  if (enableFileDownloads) extensions.push('file-downloads');
  if (trackLocalhost) extensions.push('local');

  const scriptName = extensions.length > 0 ? `script.${extensions.join('.')}.js` : 'script.js';
  const scriptSrc = `${apiHost}/js/${scriptName}`;

  return (
    <Script
      src={scriptSrc}
      data-domain={domain}
      data-api={`${apiHost}/api/event`}
      strategy="afterInteractive"
      onLoad={() => {
        console.log('Self-hosted Plausible Analytics loaded');
      }}
      onError={(e) => {
        console.error('Failed to load self-hosted Plausible Analytics:', e);
      }}
    />
  );
}

// Google Analytics 4 alternative component
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  
  useEffect(() => {
    initAnalytics({
      provider: 'ga4',
      domain: typeof window !== 'undefined' ? window.location.hostname : '',
    });
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
}

// Custom analytics component for complete privacy control
export function CustomAnalytics({ endpoint }: { endpoint: string }) {
  
  useEffect(() => {
    initAnalytics({
      provider: 'custom',
      domain: typeof window !== 'undefined' ? window.location.hostname : '',
    });

    // Custom implementation could send data to your own endpoint
    // This is just a placeholder for demonstration
    console.log('Custom analytics initialized with endpoint:', endpoint);
  }, [endpoint]);

  return null; // No external scripts needed for custom implementation
}
