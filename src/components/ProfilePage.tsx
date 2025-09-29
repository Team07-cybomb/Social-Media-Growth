// src/pages/ProfilePage.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
}

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      setName(parsed.name);
      setEmail(parsed.email);
      // Simulate loading for better UX
      setTimeout(() => setIsLoading(false), 500);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      alert("Please fill in all fields");
      return;
    }
    
    const updated = { name: name.trim(), email: email.trim() };
    localStorage.setItem("user", JSON.stringify(updated));
    setUser(updated);
    setEditing(false);
    
    // Show success feedback
    const successMsg = document.createElement("div");
    successMsg.textContent = "Profile updated successfully!";
    successMsg.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #10b981;
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
      z-index: 1000;
      animation: slideIn 0.3s ease-out;
    `;
    document.body.appendChild(successMsg);
    setTimeout(() => {
      successMsg.style.animation = "slideOut 0.3s ease-in";
      setTimeout(() => document.body.removeChild(successMsg), 300);
    }, 3000);
  };

  if (!user || isLoading) {
    return (
      <>
        <style>
          {`
            .loading-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 50vh;
            }
            .loading-spinner {
              width: 40px;
              height: 40px;
              border: 4px solid #e5e7eb;
              border-top: 4px solid #3b82f6;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Enhanced Internal CSS */}
      <style>
        {`
          .profile-container {
            max-width: 580px;
            margin: 2rem auto;
            padding: 0 1.5rem;
            font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
            color: #111827;
          }

          .profile-title {
            font-size: 2.25rem;
            font-weight: 800;
            margin-bottom: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
            letter-spacing: -0.025em;
          }

          .profile-card, .profile-edit-card {
            background: #ffffff;
            border: 1px solid #f0f4f8;
            border-radius: 20px;
            padding: 2.5rem;
            box-shadow: 
              0 4px 6px -1px rgba(0, 0, 0, 0.05),
              0 10px 15px -3px rgba(0, 0, 0, 0.08),
              0 0 0 1px rgba(255, 255, 255, 0.9);
            margin-bottom: 2rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .profile-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, #667eea, #764ba2);
          }

          .profile-card:hover, .profile-edit-card:hover {
            transform: translateY(-4px);
            box-shadow: 
              0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04),
              0 0 0 1px rgba(255, 255, 255, 0.95);
          }

          .profile-info {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          .info-item {
            display: flex;
            flex-direction: column;
            padding: 1rem 0;
            border-bottom: 1px solid #f3f4f6;
            transition: all 0.2s ease;
          }

          .info-item:hover {
            background: linear-gradient(90deg, #fafbfc 0%, transparent 100%);
            padding-left: 1rem;
            margin: 0 -1rem;
            border-radius: 12px;
          }

          .info-item:last-child {
            border-bottom: none;
          }

          .info-label {
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #6b7280;
            margin-bottom: 0.5rem;
          }

          .info-value {
            font-size: 1.125rem;
            font-weight: 600;
            color: #111827;
            line-height: 1.6;
          }

          .profile-buttons {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
            flex-wrap: wrap;
          }

          .btn {
            padding: 0.875rem 2rem;
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
            position: relative;
            overflow: hidden;
          }

          .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }

          .btn:hover::before {
            left: 100%;
          }

          .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
          }

          .btn-primary:hover {
            background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);
          }

          .btn-secondary {
            background: #ffffff;
            color: #374151;
            border: 2px solid #e5e7eb;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          }

          .btn-secondary:hover {
            background: #f9fafb;
            border-color: #d1d5db;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          }

          .btn-tertiary {
            background: linear-gradient(135deg, #f0f4f8, #ffffff);
            color: #475569;
            border: 2px solid #e2e8f0;
          }

          .btn-tertiary:hover {
            background: linear-gradient(135deg, #e2e8f0, #f8fafc);
            border-color: #cbd5e1;
            transform: translateY(-2px);
          }

          /* Form Styles */
          .form-group {
            margin-bottom: 1.75rem;
          }

          .form-label {
            display: block;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: #374151;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .form-input {
            width: 100%;
            padding: 1rem 1.25rem;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 500;
            color: #111827;
            background: #fafbfc;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          }

          .form-input:focus {
            border-color: #667eea;
            background: #ffffff;
            outline: none;
            box-shadow: 
              0 0 0 3px rgba(102, 126, 234, 0.1),
              0 2px 8px rgba(102, 126, 234, 0.15);
            transform: translateY(-1px);
          }

          .form-input::placeholder {
            color: #9ca3af;
            font-weight: 400;
          }

          /* Animations */
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideOut {
            from {
              transform: translateX(0);
              opacity: 1;
            }
            to {
              transform: translateX(100%);
              opacity: 0;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .profile-card, .profile-edit-card {
            animation: fadeInUp 0.6s ease-out;
          }

          /* Responsive Design */
          @media (max-width: 640px) {
            .profile-container {
              margin: 1rem auto;
              padding: 0 1rem;
            }

            .profile-title {
              font-size: 1.875rem;
              margin-bottom: 1.5rem;
            }

            .profile-card, .profile-edit-card {
              padding: 1.75rem;
              border-radius: 16px;
            }

            .profile-buttons {
              flex-direction: column;
            }

            .btn {
              width: 100%;
              justify-content: center;
            }

            .info-value {
              font-size: 1rem;
            }
          }

          /* Loading state for buttons */
          .btn-loading {
            pointer-events: none;
            opacity: 0.7;
          }

          .btn-loading::after {
            content: '';
            width: 16px;
            height: 16px;
            border: 2px solid transparent;
            border-top: 2px solid currentColor;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-left: 8px;
          }
        `}
      </style>

      <div className="profile-container">
        <h1 className="profile-title">My Profile</h1>

        {!editing ? (
          <div className="profile-card">
            <div className="profile-info">
              <div className="info-item">
                <div className="info-label">Full Name</div>
                <div className="info-value">{user.name}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Email Address</div>
                <div className="info-value">{user.email}</div>
              </div>
            </div>

            <div className="profile-buttons">
              <button
                onClick={() => setEditing(true)}
                className="btn btn-primary"
              >
                <span>✏️</span>
                Edit Profile
              </button>
              <button
                onClick={() => navigate("/settings")}
                className="btn btn-secondary"
              >
                <span>⚙️</span>
                Account Settings
              </button>
            </div>
          </div>
        ) : (
          <div className="profile-edit-card">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>
            <div className="profile-buttons">
              <button
                onClick={handleSave}
                className="btn btn-primary"
                disabled={!name.trim() || !email.trim()}
                style={{ 
                  opacity: (!name.trim() || !email.trim()) ? 0.6 : 1,
                  cursor: (!name.trim() || !email.trim()) ? 'not-allowed' : 'pointer'
                }}
              >
                <span>💾</span>
                Save Changes
              </button>
              <button
                onClick={() => {
                  setName(user.name);
                  setEmail(user.email);
                  setEditing(false);
                }}
                className="btn btn-tertiary"
              >
                <span>↩️</span>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}