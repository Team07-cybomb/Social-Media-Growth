// src/Admin/Settings.tsx
import { useState } from "react";

// Type definitions
interface SettingsState {
  general: {
    businessName: string;
    contactEmail: string;
    currency: string;
    timezone: string;
  };
  notifications: {
    emailNotifications: boolean;
    newRequestAlert: boolean;
    completionAlert: boolean;
    weeklyReports: boolean;
  };
  services: {
    autoApprove: boolean;
    minBudget: number;
    maxRequestsPerDay: number;
  };
  security: {
    twoFactorAuth: boolean;
    sessionTimeout: number;
    loginAlerts: boolean;
  };
}

const Settings = () => {
  const [activeTab, setActiveTab] = useState<string>("general");
  const [settings, setSettings] = useState<SettingsState>({
    general: {
      businessName: "PromoManager",
      contactEmail: "admin@promomanager.com",
      currency: "USD",
      timezone: "UTC-5"
    },
    notifications: {
      emailNotifications: true,
      newRequestAlert: true,
      completionAlert: true,
      weeklyReports: true
    },
    services: {
      autoApprove: false,
      minBudget: 20,
      maxRequestsPerDay: 10
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 60,
      loginAlerts: true
    }
  });

  const updateSettings = (category: keyof SettingsState, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const styles = {
    pageContainer: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    } as React.CSSProperties,
    pageHeader: {
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
    settingsLayout: {
      display: 'grid',
      gridTemplateColumns: '250px 1fr',
      gap: '2rem',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      overflow: 'hidden',
    } as React.CSSProperties,
    sidebar: {
      background: '#f8fafc',
      padding: '2rem 0',
    } as React.CSSProperties,
    tabButton: {
      display: 'block',
      width: '100%',
      padding: '1rem 2rem',
      border: 'none',
      background: 'transparent',
      textAlign: 'left' as const,
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
    } as React.CSSProperties,
    tabButtonActive: {
      background: '#4f46e5',
      color: 'white',
    } as React.CSSProperties,
    content: {
      padding: '2rem',
    } as React.CSSProperties,
    section: {
      marginBottom: '2rem',
    } as React.CSSProperties,
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: '#1a202c',
    } as React.CSSProperties,
    formGroup: {
      marginBottom: '1.5rem',
    } as React.CSSProperties,
    formLabel: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
      color: '#374151',
    } as React.CSSProperties,
    formInput: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      fontSize: '1rem',
      maxWidth: '400px',
    } as React.CSSProperties,
    formSelect: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      fontSize: '1rem',
      maxWidth: '400px',
      background: 'white',
    } as React.CSSProperties,
    toggleSwitch: {
      position: 'relative',
      display: 'inline-block',
      width: '60px',
      height: '34px',
    } as React.CSSProperties,
    toggleSlider: {
      position: 'absolute',
      cursor: 'pointer',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#ccc',
      transition: '0.4s',
      borderRadius: '34px',
    } as React.CSSProperties,
    toggleSliderBefore: {
      position: 'absolute',
      content: '""',
      height: '26px',
      width: '26px',
      left: '4px',
      bottom: '4px',
      background: 'white',
      transition: '0.4s',
      borderRadius: '50%',
    } as React.CSSProperties,
    toggleChecked: {
      background: '#4f46e5',
    } as React.CSSProperties,
    toggleCheckedBefore: {
      transform: 'translateX(26px)',
    } as React.CSSProperties,
    saveButton: {
      background: '#4f46e5',
      color: 'white',
      border: 'none',
      padding: '0.75rem 2rem',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '1rem',
    } as React.CSSProperties,
    checkboxGroup: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem',
    } as React.CSSProperties,
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
    } as React.CSSProperties,
  };

  const renderGeneralSettings = () => (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>General Settings</h3>
      <div style={styles.formGroup}>
        <label style={styles.formLabel}>Business Name</label>
        <input
          type="text"
          style={styles.formInput}
          value={settings.general.businessName}
          onChange={(e) => updateSettings('general', 'businessName', e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.formLabel}>Contact Email</label>
        <input
          type="email"
          style={styles.formInput}
          value={settings.general.contactEmail}
          onChange={(e) => updateSettings('general', 'contactEmail', e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.formLabel}>Currency</label>
        <select
          style={styles.formSelect}
          value={settings.general.currency}
          onChange={(e) => updateSettings('general', 'currency', e.target.value)}
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="INR">INR (₹)</option>
        </select>
      </div>
      <div style={styles.formGroup}>
        <label style={styles.formLabel}>Timezone</label>
        <select
          style={styles.formSelect}
          value={settings.general.timezone}
          onChange={(e) => updateSettings('general', 'timezone', e.target.value)}
        >
          <option value="UTC-5">EST (UTC-5)</option>
          <option value="UTC-8">PST (UTC-8)</option>
          <option value="UTC+0">GMT (UTC+0)</option>
          <option value="UTC+5:30">IST (UTC+5:30)</option>
        </select>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Notification Settings</h3>
      <div style={styles.checkboxGroup}>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={settings.notifications.emailNotifications}
            onChange={(e) => updateSettings('notifications', 'emailNotifications', e.target.checked)}
          />
          Enable Email Notifications
        </label>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={settings.notifications.newRequestAlert}
            onChange={(e) => updateSettings('notifications', 'newRequestAlert', e.target.checked)}
          />
          New Request Alerts
        </label>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={settings.notifications.completionAlert}
            onChange={(e) => updateSettings('notifications', 'completionAlert', e.target.checked)}
          />
          Service Completion Alerts
        </label>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={settings.notifications.weeklyReports}
            onChange={(e) => updateSettings('notifications', 'weeklyReports', e.target.checked)}
          />
          Weekly Performance Reports
        </label>
      </div>
    </div>
  );

  const renderServiceSettings = () => (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Service Settings</h3>
      <div style={styles.formGroup}>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={settings.services.autoApprove}
            onChange={(e) => updateSettings('services', 'autoApprove', e.target.checked)}
          />
          Auto-approve new requests
        </label>
      </div>
      <div style={styles.formGroup}>
        <label style={styles.formLabel}>Minimum Budget ($)</label>
        <input
          type="number"
          style={styles.formInput}
          value={settings.services.minBudget}
          onChange={(e) => updateSettings('services', 'minBudget', parseInt(e.target.value))}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.formLabel}>Maximum Requests Per Day</label>
        <input
          type="number"
          style={styles.formInput}
          value={settings.services.maxRequestsPerDay}
          onChange={(e) => updateSettings('services', 'maxRequestsPerDay', parseInt(e.target.value))}
        />
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Security Settings</h3>
      <div style={styles.formGroup}>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={settings.security.twoFactorAuth}
            onChange={(e) => updateSettings('security', 'twoFactorAuth', e.target.checked)}
          />
          Enable Two-Factor Authentication
        </label>
      </div>
      <div style={styles.formGroup}>
        <label style={styles.formLabel}>Session Timeout (minutes)</label>
        <input
          type="number"
          style={styles.formInput}
          value={settings.security.sessionTimeout}
          onChange={(e) => updateSettings('security', 'sessionTimeout', parseInt(e.target.value))}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={settings.security.loginAlerts}
            onChange={(e) => updateSettings('security', 'loginAlerts', e.target.checked)}
          />
          Login Alert Notifications
        </label>
      </div>
    </div>
  );

  return (
    <div style={styles.pageContainer}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Settings</h1>
        <p style={styles.pageSubtitle}>Configure system settings and preferences</p>
      </div>

      <div style={styles.settingsLayout}>
        <div style={styles.sidebar}>
          <button
            style={{
              ...styles.tabButton,
              ...(activeTab === 'general' && styles.tabButtonActive)
            }}
            onClick={() => setActiveTab('general')}
          >
            ⚙️ General
          </button>
          <button
            style={{
              ...styles.tabButton,
              ...(activeTab === 'notifications' && styles.tabButtonActive)
            }}
            onClick={() => setActiveTab('notifications')}
          >
            🔔 Notifications
          </button>
          <button
            style={{
              ...styles.tabButton,
              ...(activeTab === 'services' && styles.tabButtonActive)
            }}
            onClick={() => setActiveTab('services')}
          >
            🛠️ Services
          </button>
          <button
            style={{
              ...styles.tabButton,
              ...(activeTab === 'security' && styles.tabButtonActive)
            }}
            onClick={() => setActiveTab('security')}
          >
            🔒 Security
          </button>
        </div>

        <div style={styles.content}>
          {activeTab === 'general' && renderGeneralSettings()}
          {activeTab === 'notifications' && renderNotificationSettings()}
          {activeTab === 'services' && renderServiceSettings()}
          {activeTab === 'security' && renderSecuritySettings()}
          
          <button style={styles.saveButton}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;