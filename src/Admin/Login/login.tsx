// src/Admin/Login/login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

const API_BASE_URL = "http://localhost:5000/api";

interface LoginResponse {
  success: boolean;
  msg: string;
  token?: string;
  admin?: {
    id: string;
    username: string;
    role: string;
    lastLogin: string;
  };
}

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data: LoginResponse = await response.json();

      if (data.success && data.token) {
        // Store token and admin data in localStorage
        localStorage.setItem("adminToken", data.token);
        if (data.admin) {
          localStorage.setItem("adminData", JSON.stringify(data.admin));
        }
        
        // Redirect to admin dashboard
        navigate("/admin/dashboard");
      } else {
        setError(data.msg || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Network error. Please check if the server is running.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h2>Admin Login</h2>
        {error && <div className="admin-login-error">{error}</div>}
        <div className="admin-input-group">
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            required
            disabled={isLoading}
          />
        </div>
        <div className="admin-input-group">
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            required
            disabled={isLoading}
          />
        </div>
        <button 
          type="submit" 
          className="admin-login-button"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;