'use client';

import { ReactNode } from 'react';
import { usePageTracking } from '@/hooks/useAnalytics';

interface AnalyticsWrapperProps {
  children: ReactNode;
  pageName?: string;
}

export default function AnalyticsWrapper({ children, pageName }: AnalyticsWrapperProps) {
  // This will automatically track page views, scroll depth, and time on page
  usePageTracking();

  return <>{children}</>;
}

// Specialized wrapper for tracking specific sections
export function SectionTracker({ 
  children, 
  sectionName, 
  className = '' 
}: { 
  children: ReactNode; 
  sectionName: string; 
  className?: string;
}) {
  const { trackEvent } = usePageTracking();

  const handleSectionView = () => {
    trackEvent('Section Viewed', { section: sectionName });
  };

  return (
    <div 
      className={className}
      onMouseEnter={handleSectionView}
      data-section={sectionName}
    >
      {children}
    </div>
  );
}
