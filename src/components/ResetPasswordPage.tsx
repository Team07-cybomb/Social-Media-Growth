import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  const { email, otp } = location.state || {};

  useEffect(() => {
    if (!email || !otp) {
      navigate("/forgot-password");
    }
  }, [email, otp, navigate]);

  useEffect(() => {
    if (password) {
      const strength = checkPasswordStrength(password);
      setPasswordStrength(strength);
    } else {
      setPasswordStrength("");
    }
  }, [password]);

  const checkPasswordStrength = (pass: string) => {
    if (pass.length < 6) return "weak";
    if (pass.length < 8) return "medium";
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(pass)) {
      return "strong";
    }
    return "medium";
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case "weak": return "#ef4444";
      case "medium": return "#f59e0b";
      case "strong": return "#10b981";
      default: return "#6b7280";
    }
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case "weak": return "Weak";
      case "medium": return "Medium";
      case "strong": return "Strong";
      default: return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email, 
          otp,
          newPassword: password,
          confirmPassword 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Password reset successfully! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage(data.message || "Failed to reset password. Please try again.");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      setMessage("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          .reset-password-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5rem 1rem;
          }

          .reset-password-container {
            max-width: 28rem;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }

          .reset-password-card {
            background: white;
            border-radius: 0.5rem;
            padding: 2rem;
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
          }

          .reset-password-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }

          .section-heading {
            font-size: 2.25rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1rem;
            text-align: center;
          }

          .section-subheading {
            color: #64748b;
            text-align: center;
            margin-bottom: 2rem;
            font-size: 1rem;
          }

          .login-label {
            display: block;
            color: #374151;
            font-weight: 500;
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
          }

          .login-input {
            width: 100%;
            padding: 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            font-size: 1rem;
            background: white;
            color: #1e293b;
          }

          .login-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }

          .password-strength {
            height: 4px;
            background: #e5e7eb;
            border-radius: 2px;
            margin-top: 0.5rem;
            overflow: hidden;
          }

          .password-strength-bar {
            height: 100%;
            transition: all 0.3s ease;
            border-radius: 2px;
          }

          .password-strength-text {
            font-size: 0.75rem;
            margin-top: 0.25rem;
            text-align: right;
            font-weight: 500;
          }

          .login-button {
            width: 100%;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 0.5rem;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 1.5rem;
          }

          .login-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
          }

          .login-button:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
          }

          .back-to-login {
            text-align: center;
            margin-top: 1.5rem;
            color: #64748b;
            font-size: 0.875rem;
          }

          .back-to-login a {
            color: #3b82f6;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            cursor: pointer;
          }

          .back-to-login a:hover {
            color: #2563eb;
            text-decoration: underline;
          }

          .message {
            text-align: center;
            margin-top: 1rem;
            padding: 0.75rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
          }

          .message.success {
            background-color: #d1fae5;
            color: #065f46;
            border: 1px solid #a7f3d0;
          }

          .message.error {
            background-color: #fee2e2;
            color: #991b1b;
            border: 1px solid #fecaca;
          }

          /* Form spacing */
          .space-y-6 > * + * {
            margin-top: 1.5rem;
          }

          @media (max-width: 768px) {
            .reset-password-page {
              padding: 3rem 1rem;
            }
           
            .section-heading {
              font-size: 2rem;
            }
           
            .reset-password-card {
              padding: 1.5rem;
            }
          }

          /* Animation for form elements */
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

          .reset-password-card > * {
            animation: fadeInUp 0.6s ease-out;
          }

          .reset-password-card > *:nth-child(1) { animation-delay: 0.1s; }
          .reset-password-card > *:nth-child(2) { animation-delay: 0.2s; }
          .reset-password-card > *:nth-child(3) { animation-delay: 0.3s; }
          .reset-password-card > *:nth-child(4) { animation-delay: 0.4s; }
          .reset-password-card > *:nth-child(5) { animation-delay: 0.5s; }
        `}
      </style>

      <div className="reset-password-page">
        <div className="reset-password-container">
          <div className="reset-password-card">
            <h2 className="section-heading">
              Reset <span className="gradient-text">Password</span>
            </h2>
            
            <p className="section-subheading">
              Enter your new password below
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="login-label">
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  placeholder="Enter your new password"
                  required
                  minLength={6}
                />
                {password && (
                  <>
                    <div className="password-strength">
                      <div 
                        className="password-strength-bar"
                        style={{
                          width: passwordStrength === "weak" ? "33%" : 
                                 passwordStrength === "medium" ? "66%" : "100%",
                          backgroundColor: getPasswordStrengthColor()
                        }}
                      />
                    </div>
                    <div 
                      className="password-strength-text"
                      style={{ color: getPasswordStrengthColor() }}
                    >
                      {getPasswordStrengthText()}
                    </div>
                  </>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="login-label">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="login-input"
                  placeholder="Confirm your new password"
                  required
                  minLength={6}
                />
                {confirmPassword && password !== confirmPassword && (
                  <div style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: "0.25rem" }}>
                    Passwords do not match
                  </div>
                )}
              </div>

              {message && (
                <div className={`message ${message.includes("successfully") ? "success" : "error"}`}>
                  {message}
                </div>
              )}

              <button 
                type="submit" 
                className="login-button"
                disabled={isLoading || password !== confirmPassword || password.length < 6}
              >
                {isLoading ? "Resetting..." : "Reset Password"}
              </button>
            </form>

            <div className="back-to-login">
              <p>
                Remember your password?{" "}
                <Link to="/login" className="text-blue-600 hover:underline font-medium">
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;