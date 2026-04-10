import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const role = document.getElementById("role").value;
    if (role === "Admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input type="email" placeholder="Enter Gmail" />
        <input type="password" placeholder="Enter Password" />

        <select id="role">
          <option>User</option>
          <option>Admin</option>
        </select>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="login-footer">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </div>
      </div>
    </div>
  );
}

export default Login;