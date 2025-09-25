// src/Admin/Analytics.tsx
import { useState, useEffect } from "react";

// Type definitions
interface AnalyticsOverview {
  totalRevenue: string;
  totalRequests: number;
  conversionRate: string;
  avgCompletionTime: string;
}

interface ServicePerformance {
  name: string;
  revenue: string;
  requests: number;
}

interface PlatformDistribution {
  platform: string;
  percentage: number;
}

interface AnalyticsData {
  overview: AnalyticsOverview;
  revenueChart: number[];
  requestsChart: number[];
  topServices: ServicePerformance[];
  platformDistribution: PlatformDistribution[];
}

const Analytics = () => {
  const [timeRange, setTimeRange] = useState<string>("30days");
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    // Mock analytics data
    const mockData: AnalyticsData = {
      overview: {
        totalRevenue: "$2,450",
        totalRequests: 156,
        conversionRate: "68%",
        avgCompletionTime: "2.3 days"
      },
      revenueChart: [1200, 1900, 1500, 2000, 1800, 2400, 2450],
      requestsChart: [45, 52, 38, 24, 33, 26, 21],
      topServices: [
        { name: "YouTube Subscribers", revenue: "$850", requests: 45 },
        { name: "Instagram Followers", revenue: "$720", requests: 38 },
        { name: "Facebook Likes", revenue: "$480", requests: 28 },
        { name: "Twitter Followers", revenue: "$300", requests: 22 }
      ],
      platformDistribution: [
        { platform: "YouTube", percentage: 35 },
        { platform: "Instagram", percentage: 30 },
        { platform: "Facebook", percentage: 20 },
        { platform: "Twitter", percentage: 15 }
      ]
    };
    setAnalyticsData(mockData);
  }, [timeRange]);

  const styles = {
    pageContainer: {
      padding: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
    } as React.CSSProperties,
    pageHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
    } as React.CSSProperties,
    pageTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1a202c',
      marginBottom: '0.5rem',
    } as React.CSSProperties,
    pageSubtitle: {
      fontSize: '1.2rem',
      color: '#718096',
    } as React.CSSProperties,
    timeFilter: {
      padding: '0.5rem 1rem',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      background: 'white',
    } as React.CSSProperties,
    overviewGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
    } as React.CSSProperties,
    overviewCard: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center' as const,
    } as React.CSSProperties,
    overviewValue: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '0.5rem',
    } as React.CSSProperties,
    overviewLabel: {
      color: '#718096',
      fontSize: '0.875rem',
    } as React.CSSProperties,
    chartsGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '2rem',
      marginBottom: '2rem',
    } as React.CSSProperties,
    chartCard: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    } as React.CSSProperties,
    chartTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1rem',
    } as React.CSSProperties,
    chartContainer: {
      height: '300px',
      background: '#f8fafc',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6b7280',
    } as React.CSSProperties,
    serviceList: {
      marginTop: '1rem',
    } as React.CSSProperties,
    serviceItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem 0',
      borderBottom: '1px solid #f1f5f9',
    } as React.CSSProperties,
    serviceInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    } as React.CSSProperties,
    serviceIcon: {
      fontSize: '1.5rem',
    } as React.CSSProperties,
    platformDistribution: {
      marginTop: '1rem',
    } as React.CSSProperties,
    platformItem: {
      marginBottom: '1rem',
    } as React.CSSProperties,
    platformHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
    } as React.CSSProperties,
    platformBar: {
      height: '8px',
      background: '#e2e8f0',
      borderRadius: '4px',
      overflow: 'hidden',
    } as React.CSSProperties,
    platformFill: {
      height: '100%',
      borderRadius: '4px',
    } as React.CSSProperties,
    '@media (max-width: 1024px)': {
      chartsGrid: {
        gridTemplateColumns: '1fr',
      },
    } as React.CSSProperties,
  };

  if (!analyticsData) {
    return <div style={styles.pageContainer}>Loading analytics data...</div>;
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.pageTitle}>Analytics Dashboard</h1>
          <p style={styles.pageSubtitle}>Track performance metrics and business insights</p>
        </div>
        <select 
          style={styles.timeFilter}
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
          <option value="90days">Last 90 Days</option>
          <option value="1year">Last Year</option>
        </select>
      </div>

      <div style={styles.overviewGrid}>
        <div style={styles.overviewCard}>
          <div style={{...styles.overviewValue, color: '#10b981'}}>
            {analyticsData.overview.totalRevenue}
          </div>
          <div style={styles.overviewLabel}>Total Revenue</div>
        </div>
        <div style={styles.overviewCard}>
          <div style={{...styles.overviewValue, color: '#3b82f6'}}>
            {analyticsData.overview.totalRequests}
          </div>
          <div style={styles.overviewLabel}>Total Requests</div>
        </div>
        <div style={styles.overviewCard}>
          <div style={{...styles.overviewValue, color: '#f59e0b'}}>
            {analyticsData.overview.conversionRate}
          </div>
          <div style={styles.overviewLabel}>Conversion Rate</div>
        </div>
        <div style={styles.overviewCard}>
          <div style={{...styles.overviewValue, color: '#8b5cf6'}}>
            {analyticsData.overview.avgCompletionTime}
          </div>
          <div style={styles.overviewLabel}>Avg. Completion Time</div>
        </div>
      </div>

      <div style={styles.chartsGrid}>
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Revenue Overview</h3>
          <div style={styles.chartContainer}>
            Revenue Chart - Integrate with Chart.js or similar library
          </div>
        </div>
        
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Requests Trend</h3>
          <div style={styles.chartContainer}>
            Requests Chart - Integrate with Chart.js or similar library
          </div>
        </div>
      </div>

      <div style={styles.chartsGrid}>
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Top Performing Services</h3>
          <div style={styles.serviceList}>
            {analyticsData.topServices.map((service: ServicePerformance, index: number) => (
              <div key={index} style={styles.serviceItem}>
                <div style={styles.serviceInfo}>
                  <span style={styles.serviceIcon}>
                    {service.name.includes('YouTube') ? '📺' : 
                     service.name.includes('Instagram') ? '📷' :
                     service.name.includes('Facebook') ? '👍' : '🐦'}
                  </span>
                  <span>{service.name}</span>
                </div>
                <div>
                  <strong>{service.revenue}</strong> ({service.requests} requests)
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Platform Distribution</h3>
          <div style={styles.platformDistribution}>
            {analyticsData.platformDistribution.map((platform: PlatformDistribution, index: number) => (
              <div key={index} style={styles.platformItem}>
                <div style={styles.platformHeader}>
                  <span>{platform.platform}</span>
                  <span>{platform.percentage}%</span>
                </div>
                <div style={styles.platformBar}>
                  <div style={{
                    ...styles.platformFill,
                    width: `${platform.percentage}%`,
                    background: index === 0 ? '#3b82f6' : 
                               index === 1 ? '#8b5cf6' :
                               index === 2 ? '#10b981' : '#f59e0b'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
