// src/components/LoginPage.tsx
<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
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

          .login-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
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

          /* Text Center Utility */
          .text-center {
            text-align: center;
          }

          .mx-auto {
            margin-left: auto;
            margin-right: auto;
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
        `}
      </style>

      <div className="login-page">
        <div className="login-container">
          <div className="login-card">
            <h2 className="section-heading">
              Welcome <span className="gradient-text">Back</span>
            </h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="login-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
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
                  className="login-input"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="login-button"
              >
                Login
              </button>
            </form>

            <div className="login-link">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 hover:underline font-medium">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
=======
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
>>>>>>> 7201db0e6bd271d98de5541bfb21099d8ac48f76
