// src/components/RegisterPage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomePage } from "./HomePage";
const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add your API call or validation logic here
  };

  return (
    <>
      <style>
        {`
          .register-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5rem 1rem;
          }
 
          .register-container {
            max-width: 28rem;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }
 
          .register-card {
            background: white;
            border-radius: 0.5rem;
            padding: 2rem;
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
          }
 
          .register-card:hover {
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
 
          .register-label {
            display: block;
            color: #374151;
            font-weight: 500;
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
          }
 
          .register-input {
            width: 100%;
            padding: 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            font-size: 1rem;
            background: white;
            color: #1e293b;
          }
 
          .register-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }
 
          .register-button {
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
 
          .register-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
          }
 
          .register-link {
            text-align: center;
            margin-top: 1.5rem;
            color: #64748b;
            font-size: 0.875rem;
          }
 
          .register-link a {
            color: #3b82f6;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
          }
 
          .register-link a:hover {
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
            .register-page {
              padding: 3rem 1rem;
            }
           
            .section-heading {
              font-size: 2rem;
            }
           
            .register-card {
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
 
          .register-card > * {
            animation: fadeInUp 0.6s ease-out;
          }
 
          .register-card > *:nth-child(1) { animation-delay: 0.1s; }
          .register-card > *:nth-child(2) { animation-delay: 0.2s; }
          .register-card > *:nth-child(3) { animation-delay: 0.3s; }
          .register-card > *:nth-child(4) { animation-delay: 0.4s; }
          .register-card > *:nth-child(5) { animation-delay: 0.5s; }
          .register-card > *:nth-child(6) { animation-delay: 0.6s; }
        `}
      </style>

      <div className="register-page">
        <div className="register-container">
          <div className="register-card">
            <h2 className="section-heading">
              Create <span className="gradient-text">Account</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="register-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="register-input"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="register-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="register-input"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="register-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                  className="register-input"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="register-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                  className="register-input"
                />
              </div>

              {/* Register Button */}
              <button type="submit" className="register-button">
                Register
              </button>
            </form>

            {/* Login Link */}
            <div className="register-link">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
