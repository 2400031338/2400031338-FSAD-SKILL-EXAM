import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Here later we will connect backend API
    setMessage("Registered Successfully! Redirecting to Login...");

    // After 2 seconds go to login page
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Account</h2>

        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Gmail Address" required />
          <input type="password" placeholder="New Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <select required>
            <option value="">Select Role</option>
            <option>User</option>
            <option>Admin</option>
          </select>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
}

export default Register;