import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const VerifyOTPPage: React.FC = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...otp];
      pastedData.split('').forEach((char, index) => {
        if (index < 6) {
          newOtp[index] = char;
        }
      });
      setOtp(newOtp);
      inputRefs.current[Math.min(pastedData.length - 1, 5)]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    
    if (otpString.length !== 6) {
      setMessage("Please enter the complete 6-digit OTP");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      // Use the new verify-otp endpoint
      const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email, 
          otp: otpString
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("OTP verified successfully!");
        // Navigate to reset password page
        setTimeout(() => {
          navigate("/reset-password", { 
            state: { 
              email, 
              otp: otpString 
            } 
          });
        }, 1000);
      } else {
        setMessage(data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      setMessage("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("New OTP sent to your email!");
        setCountdown(60); // 60 seconds cooldown
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      } else {
        setMessage(data.message || "Failed to resend OTP.");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      setMessage("Network error. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  // Fixed ref function - returns void instead of the element
  const setInputRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  };

  return (
    <>
      <style>
        {`
          .verify-otp-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5rem 1rem;
          }

          .verify-otp-container {
            max-width: 28rem;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }

          .verify-otp-card {
            background: white;
            border-radius: 0.5rem;
            padding: 2rem;
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
          }

          .verify-otp-card:hover {
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

          .email-display {
            background: #f1f5f9;
            padding: 0.75rem;
            border-radius: 0.5rem;
            text-align: center;
            font-weight: 600;
            color: #475569;
            margin-bottom: 2rem;
          }

          .otp-container {
            display: flex;
            gap: 0.75rem;
            justify-content: center;
            margin-bottom: 2rem;
          }

          .otp-input {
            width: 3.5rem;
            height: 3.5rem;
            border: 2px solid #d1d5db;
            border-radius: 0.5rem;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 600;
            background: white;
            color: #1e293b;
            transition: all 0.3s ease;
          }

          .otp-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            transform: scale(1.05);
          }

          .otp-input.filled {
            border-color: #10b981;
            background-color: #f0fdf4;
          }

          .resend-otp {
            text-align: center;
            margin: 1.5rem 0;
          }

          .resend-button {
            background: none;
            border: none;
            color: #3b82f6;
            font-weight: 500;
            cursor: pointer;
            text-decoration: underline;
            transition: color 0.3s ease;
          }

          .resend-button:hover:not(:disabled) {
            color: #2563eb;
          }

          .resend-button:disabled {
            color: #9ca3af;
            cursor: not-allowed;
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
            margin-top: 1rem;
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

          .verify-otp-card > * {
            animation: fadeInUp 0.6s ease-out;
          }

          .verify-otp-card > *:nth-child(1) { animation-delay: 0.1s; }
          .verify-otp-card > *:nth-child(2) { animation-delay: 0.2s; }
          .verify-otp-card > *:nth-child(3) { animation-delay: 0.3s; }
          .verify-otp-card > *:nth-child(4) { animation-delay: 0.4s; }
          .verify-otp-card > *:nth-child(5) { animation-delay: 0.5s; }

          @media (max-width: 768px) {
            .verify-otp-page {
              padding: 3rem 1rem;
            }
           
            .section-heading {
              font-size: 2rem;
            }
           
            .verify-otp-card {
              padding: 1.5rem;
            }

            .otp-input {
              width: 3rem;
              height: 3rem;
              font-size: 1.25rem;
            }
          }
        `}
      </style>

      <div className="verify-otp-page">
        <div className="verify-otp-container">
          <div className="verify-otp-card">
            <h2 className="section-heading">
              Verify <span className="gradient-text">OTP</span>
            </h2>
            
            <p className="section-subheading">
              Enter the 6-digit OTP sent to your email address
            </p>

            <div className="email-display">
              {email}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={setInputRef(index)}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className={`otp-input ${digit ? 'filled' : ''}`}
                    autoFocus={index === 0}
                  />
                ))}
              </div>

              {message && (
                <div className={`message ${message.includes("successfully") ? "success" : "error"}`}>
                  {message}
                </div>
              )}

              <button 
                type="submit" 
                className="login-button"
                disabled={isLoading || otp.join('').length !== 6}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>

            <div className="resend-otp">
              <p>
                Didn't receive the OTP?{" "}
                <button
                  onClick={handleResendOTP}
                  disabled={isResending || countdown > 0}
                  className="resend-button"
                >
                  {isResending 
                    ? "Sending..." 
                    : countdown > 0 
                    ? `Resend in ${countdown}s` 
                    : "Resend OTP"
                  }
                </button>
              </p>
            </div>

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

export default VerifyOTPPage;