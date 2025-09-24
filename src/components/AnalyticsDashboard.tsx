'use client';

import { useState, useEffect } from 'react';
import { getAnalytics } from '@/lib/analytics';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  topReferrers: Array<{ source: string; visits: number }>;
  deviceBreakdown: Array<{ device: string; percentage: number }>;
  geographicData: Array<{ country: string; visitors: number }>;
}

interface RealTimeData {
  currentVisitors: number;
  recentEvents: Array<{
    timestamp: number;
    event: string;
    page: string;
    props?: Record<string, any>;
  }>;
}

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [realTimeData, setRealTimeData] = useState<RealTimeData | null>(null);
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('7d');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would fetch data from your analytics API
    // For demo purposes, we'll simulate data
    const fetchAnalyticsData = async () => {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockData: AnalyticsData = {
        pageViews: 1247,
        uniqueVisitors: 892,
        bounceRate: 34.2,
        avgSessionDuration: 142,
        topPages: [
          { page: '/', views: 456 },
          { page: '/projects', views: 234 },
          { page: '/about', views: 189 },
          { page: '/contact', views: 156 },
          { page: '/blog', views: 98 },
        ],
        topReferrers: [
          { source: 'Direct', visits: 423 },
          { source: 'Google', visits: 298 },
          { source: 'LinkedIn', visits: 87 },
          { source: 'GitHub', visits: 54 },
          { source: 'Twitter', visits: 30 },
        ],
        deviceBreakdown: [
          { device: 'Desktop', percentage: 58.3 },
          { device: 'Mobile', percentage: 35.7 },
          { device: 'Tablet', percentage: 6.0 },
        ],
        geographicData: [
          { country: 'United States', visitors: 234 },
          { country: 'United Kingdom', visitors: 123 },
          { country: 'Canada', visitors: 89 },
          { country: 'Germany', visitors: 67 },
          { country: 'Australia', visitors: 45 },
        ],
      };

      const mockRealTime: RealTimeData = {
        currentVisitors: 12,
        recentEvents: [
          { timestamp: Date.now() - 30000, event: 'Page View', page: '/' },
          { timestamp: Date.now() - 45000, event: 'Button Click', page: '/projects', props: { button: 'View Project' } },
          { timestamp: Date.now() - 60000, event: 'Form Started', page: '/contact', props: { form: 'Contact Form' } },
          { timestamp: Date.now() - 90000, event: 'Scroll Depth', page: '/', props: { depth: 75 } },
        ],
      };

      setAnalyticsData(mockData);
      setRealTimeData(mockRealTime);
      setLoading(false);
    };

    fetchAnalyticsData();
  }, [timeRange]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="card p-6">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-2"></div>
                <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!analyticsData || !realTimeData) {
    return (
      <div className="card p-6 text-center">
        <p className="text-slate-600 dark:text-slate-400">No analytics data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <div className="flex gap-2">
          {(['24h', '7d', '30d'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                timeRange === range
                  ? 'bg-brand text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Page Views"
          value={analyticsData.pageViews.toLocaleString()}
          change="+12.3%"
          positive={true}
        />
        <MetricCard
          title="Unique Visitors"
          value={analyticsData.uniqueVisitors.toLocaleString()}
          change="+8.7%"
          positive={true}
        />
        <MetricCard
          title="Bounce Rate"
          value={`${analyticsData.bounceRate}%`}
          change="-2.1%"
          positive={true}
        />
        <MetricCard
          title="Avg. Session"
          value={`${Math.floor(analyticsData.avgSessionDuration / 60)}m ${analyticsData.avgSessionDuration % 60}s`}
          change="+15.4%"
          positive={true}
        />
      </div>

      {/* Real-time Data */}
      <div className="card p-6">
        <h3 className="font-semibold text-lg mb-4">Real-time Activity</h3>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            {realTimeData.currentVisitors} visitors online now
          </span>
        </div>
        <div className="space-y-2">
          {realTimeData.recentEvents.map((event, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span>{event.event} on {event.page}</span>
              <span className="text-slate-500">
                {Math.floor((Date.now() - event.timestamp) / 1000)}s ago
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-4">Top Pages</h3>
          <div className="space-y-3">
            {analyticsData.topPages.map((page, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm">{page.page}</span>
                <span className="text-sm font-medium">{page.views}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Referrers */}
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {analyticsData.topReferrers.map((referrer, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm">{referrer.source}</span>
                <span className="text-sm font-medium">{referrer.visits}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-4">Device Types</h3>
          <div className="space-y-3">
            {analyticsData.deviceBreakdown.map((device, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm">{device.device}</span>
                <span className="text-sm font-medium">{device.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Data */}
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-4">Top Countries</h3>
          <div className="space-y-3">
            {analyticsData.geographicData.map((country, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm">{country.country}</span>
                <span className="text-sm font-medium">{country.visitors}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ 
  title, 
  value, 
  change, 
  positive 
}: { 
  title: string; 
  value: string; 
  change: string; 
  positive: boolean; 
}) {
  return (
    <div className="card p-6">
      <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold">{value}</span>
        <span className={`text-sm ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}
