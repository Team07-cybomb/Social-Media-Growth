// src/pages/SettingsPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Settings {
  emailNotifications: boolean;
  darkMode: boolean;
}

export default function SettingsPage() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState<Settings>({
    emailNotifications: true,
    darkMode: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("settings");
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  const saveSettings = (newSettings: Settings) => {
    setSettings(newSettings);
    localStorage.setItem("settings", JSON.stringify(newSettings));
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      localStorage.removeItem("user");
      localStorage.removeItem("settings");
      navigate("/");
    }
  };

  return (
    <>
      {/* Enhanced Internal CSS */}
      <style>
        {`
          .settings-container {
            max-width: 600px;
            margin: 2rem auto;
            padding: 0 1.5rem;
            font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
            color: #1a1d23;
          }

          .settings-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
          }

          .settings-card {
            background: #ffffff;
            border: 1px solid #e1e8f0;
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 
              0 4px 6px -1px rgba(0, 0, 0, 0.05),
              0 10px 15px -3px rgba(0, 0, 0, 0.08);
            margin-bottom: 2rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
          }

          .settings-card:hover {
            box-shadow: 
              0 10px 25px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transform: translateY(-2px);
          }

          .settings-option {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.25rem 0;
            font-size: 1.05rem;
            color: #374151;
            border-bottom: 1px solid #f3f4f6;
            transition: all 0.2s ease;
          }

          .settings-option:hover {
            background: linear-gradient(90deg, #f8fafc 0%, transparent 100%);
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            margin: 0 -0.75rem;
            border-radius: 12px;
          }

          .settings-option:last-child {
            border-bottom: none;
          }

          .option-label {
            font-weight: 500;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }

          .option-description {
            font-size: 0.875rem;
            color: #6b7280;
            font-weight: 400;
          }

          /* Modern Toggle Switch */
          .toggle-switch {
            position: relative;
            display: inline-block;
            width: 52px;
            height: 28px;
          }

          .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #e5e7eb;
            border-radius: 34px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 2px solid transparent;
          }

          .toggle-slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 2px;
            bottom: 2px;
            background: white;
            border-radius: 50%;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }

          input:checked + .toggle-slider {
            background: linear-gradient(135deg, #667eea, #764ba2);
          }

          input:checked + .toggle-slider:before {
            transform: translateX(24px);
          }

          input:focus + .toggle-slider {
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          }

          /* Danger Zone */
          .danger-zone {
            border-color: #fecaca;
            background: linear-gradient(135deg, #fef2f2, #fff);
          }

          .danger-zone-title {
            font-size: 1.375rem;
            font-weight: 600;
            color: #dc2626;
            margin-bottom: 1.25rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .danger-zone-title::before {
            content: "⚠️";
            font-size: 1.25rem;
          }

          .danger-description {
            color: #7f1d1d;
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
            line-height: 1.5;
            background: #fef2f2;
            padding: 1rem;
            border-radius: 8px;
            border-left: 4px solid #dc2626;
          }

          .button-group {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .btn {
            padding: 0.875rem 1.75rem;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            min-height: 48px;
          }

          .btn-danger {
            background: linear-gradient(135deg, #dc2626, #b91c1c);
            color: white;
            box-shadow: 0 4px 6px rgba(220, 38, 38, 0.25);
          }

          .btn-danger:hover {
            background: linear-gradient(135deg, #b91c1c, #991b1b);
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(220, 38, 38, 0.35);
          }

          .btn-danger:active {
            transform: translateY(0);
          }

          .btn-secondary {
            background: #f8fafc;
            color: #475569;
            border: 1.5px solid #e2e8f0;
          }

          .btn-secondary:hover {
            background: #f1f5f9;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            border-color: #cbd5e1;
          }

          /* Responsive Design */
          @media (max-width: 640px) {
            .settings-container {
              margin: 1rem auto;
              padding: 0 1rem;
            }

            .settings-title {
              font-size: 1.75rem;
              margin-bottom: 1.5rem;
            }

            .settings-card {
              padding: 1.5rem;
              margin-bottom: 1.5rem;
            }

            .settings-option {
              flex-direction: column;
              align-items: flex-start;
              gap: 1rem;
              padding: 1rem 0;
            }

            .button-group {
              flex-direction: column;
            }

            .btn {
              width: 100%;
              justify-content: center;
            }
          }

          /* Loading animation */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .settings-card {
            animation: fadeIn 0.5s ease-out;
          }

          .settings-card:nth-child(2) {
            animation-delay: 0.1s;
          }
        `}
      </style>

      <div className="settings-container">
        <h1 className="settings-title">Settings</h1>

        {/* Settings Options Card */}
        <div className="settings-card">
          <div className="settings-option">
            <div className="option-label">
              Email Notifications
              <span className="option-description">
                Receive email updates about your account activity
              </span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={() =>
                  saveSettings({
                    ...settings,
                    emailNotifications: !settings.emailNotifications,
                  })
                }
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="settings-option">
            <div className="option-label">
              Dark Mode
              <span className="option-description">
                Switch between light and dark theme
              </span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={() =>
                  saveSettings({
                    ...settings,
                    darkMode: !settings.darkMode,
                  })
                }
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        {/* Danger Zone Card */}
        <div className="settings-card danger-zone">
          <h2 className="danger-zone-title">Danger Zone</h2>
          <p className="danger-description">
            Once you delete your account, there is no going back. All your data will be permanently removed.
          </p>
          <div className="button-group">
            <button onClick={handleDeleteAccount} className="btn btn-danger">
              <span>🗑️</span>
              Delete Account
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="btn btn-secondary"
            >
              <span>←</span>
              Back to Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}