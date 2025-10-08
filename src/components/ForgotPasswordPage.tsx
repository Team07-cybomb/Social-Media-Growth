import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("OTP sent to your email address.");
        // Navigate to OTP verification page after a short delay
        setTimeout(() => {
          navigate("/verify-otp", { state: { email } });
        }, 2000);
      } else {
        setMessage(data.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error during password reset request:", error);
      setMessage("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          .forgot-password-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5rem 1rem;
          }

          .forgot-password-container {
            max-width: 28rem;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }

          .forgot-password-card {
            background: white;
            border-radius: 0.5rem;
            padding: 2rem;
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
          }

          .forgot-password-card:hover {
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

          @media (min-width: 768px) {
            .section-heading {
              font-size: 2.5rem;
            }
          }

          .gradient-text {
            background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
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

          /* Global Overrides */
          body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          }

          * {
            box-sizing: border-box;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .forgot-password-page {
              padding: 3rem 1rem;
            }
           
            .section-heading {
              font-size: 2rem;
            }
           
            .forgot-password-card {
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

          .forgot-password-card > * {
            animation: fadeInUp 0.6s ease-out;
          }

          .forgot-password-card > *:nth-child(1) { animation-delay: 0.1s; }
          .forgot-password-card > *:nth-child(2) { animation-delay: 0.2s; }
          .forgot-password-card > *:nth-child(3) { animation-delay: 0.3s; }
          .forgot-password-card > *:nth-child(4) { animation-delay: 0.4s; }
          .forgot-password-card > *:nth-child(5) { animation-delay: 0.5s; }
        `}
      </style>

      <div className="forgot-password-page">
        <div className="forgot-password-container">
          <div className="forgot-password-card">
            <h2 className="section-heading">
              Forgot <span className="gradient-text">Password</span>
            </h2>

            <p className="section-subheading">
              Enter your email address and we'll send you an OTP to reset your
              password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="login-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {message && (
                <div
                  className={`message ${
                    message.includes("sent") ? "success" : "error"
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="login-button"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send OTP"}
              </button>
            </form>

            <div className="back-to-login">
              <p>
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:underline font-medium"
                >
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

export default ForgotPasswordPage;
