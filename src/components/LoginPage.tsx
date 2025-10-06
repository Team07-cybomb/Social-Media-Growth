import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

interface LoginPageProps {
  onLogin: (userData: { name: string; email: string }) => void;
}

interface LoginResponse {
  success: boolean;
  data?: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    token: string;
  };
  message?: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setMessage(""); // Clear message when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      console.log("Attempting login with:", { email: formData.email });
      
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data: LoginResponse = await response.json();
      console.log("Login response:", data);

      if (response.ok && data.success && data.data) {
        // ✅ Login successful - save token and user data
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data));

        // ✅ Update global state
        onLogin({
          name: data.data.name,
          email: data.data.email,
        });

        setMessage("Login successful! Redirecting...");
        
        // Navigate after a short delay
        setTimeout(() => {
          navigate("/home");
        }, 1000);
        
      } else {
        setMessage(data.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Test function to check if password reset worked
  const testPasswordReset = async () => {
    try {
      const testEmail = "test@example.com"; // Replace with actual test email
      const testPassword = "newpassword123"; // Replace with actual test password
      
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: testEmail,
          password: testPassword,
        }),
      });
      
      const data = await response.json();
      console.log("Test login result:", data);
    } catch (error) {
      console.error("Test error:", error);
    }
  };

  return (
    <>
      <style>
        {`
          .login-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5rem 1rem;
          }

          .login-container {
            max-width: 28rem;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }

          .login-card {
            background: white;
            border-radius: 0.5rem;
            padding: 2rem;
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
          }

          .login-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }

          .section-heading {
            font-size: 2.25rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 2rem;
            text-align: center;
          }

          @media (min-width: 768px) {
            .section-heading {
              font-size: 3rem;
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

          .forgot-password-link {
            display: block;
            text-align: right;
            margin-top: 0.5rem;
            color: #3b82f6;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 500;
            transition: color 0.3s ease;
            cursor: pointer;
          }

          .forgot-password-link:hover {
            color: #2563eb;
            text-decoration: underline;
          }

          .login-link {
            text-align: center;
            margin-top: 1.5rem;
            color: #64748b;
            font-size: 0.875rem;
          }

          .login-link a {
            color: #3b82f6;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            cursor: pointer;
          }

          .login-link a:hover {
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
            .login-page {
              padding: 3rem 1rem;
            }
           
            .section-heading {
              font-size: 2rem;
            }
           
            .login-card {
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

          .login-card > * {
            animation: fadeInUp 0.6s ease-out;
          }

          .login-card > *:nth-child(1) { animation-delay: 0.1s; }
          .login-card > *:nth-child(2) { animation-delay: 0.2s; }
          .login-card > *:nth-child(3) { animation-delay: 0.3s; }
          .login-card > *:nth-child(4) { animation-delay: 0.4s; }
          .login-card > *:nth-child(5) { animation-delay: 0.5s; }
          .login-card > *:nth-child(6) { animation-delay: 0.6s; }
        `}
      </style>

      <div className="login-page">
        <div className="login-container">
          <div className="login-card">
            <h2 className="section-heading">
              Welcome <span className="gradient-text">Back</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="login-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="login-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="login-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="login-input"
                  placeholder="Enter your password"
                  required
                />
                <Link to="/forgot-password" className="forgot-password-link">
                  Forgot Password?
                </Link>
              </div>

              {message && (
                <div className={`message ${message.includes("successful") ? "success" : "error"}`}>
                  {message}
                </div>
              )}

              <button 
                type="submit" 
                className="login-button"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="login-link">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Register
                </Link>
              </p>
            </div>

            {/* Debug button - remove in production */}
            {process.env.NODE_ENV === 'development' && (
              <button 
                onClick={testPasswordReset}
                style={{ 
                  marginTop: '10px', 
                  padding: '5px 10px', 
                  fontSize: '12px',
                  background: '#f0f0f0',
                  border: '1px solid #ccc'
                }}
              >
                Test Password Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;