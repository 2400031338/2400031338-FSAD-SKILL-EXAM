import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      {/* Project Name - Top Left */}
      <h1 className="project-title">
        HomeValue+ Smart Property Enhancement Platform
      </h1>

      {/* Login & Register - Top Right */}
      <div className="auth-buttons">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>

      <div className="center-content">
        <h2>Enhance Your Property Value Smartly 🏡</h2>
        <p>
          Get personalized recommendations to improve your residential property
          and increase its market value.
        </p>
      </div>

    </div>
  );
}

export default Home;