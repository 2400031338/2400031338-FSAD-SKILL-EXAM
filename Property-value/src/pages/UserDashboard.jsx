import React, { useState } from "react";
import "../styles/Dashboard.css";

function UserDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    if (activeTab === "profile") {
      return (
        <div>
          <h3>Your Profile</h3>
          <p><b>Name:</b> Balu</p>
          <p><b>Email:</b> balu@gmail.com</p>
          <p><b>Role:</b> User</p>
        </div>
      );
    }

    if (activeTab === "addProperty") {
      return (
        <div>
          <h3>Add Property Details</h3>
          <form className="property-form">
            <input type="text" placeholder="Property Title" />
            <input type="text" placeholder="Location" />
            <input type="number" placeholder="Budget (₹)" />
            <textarea placeholder="Property Description"></textarea>
            <button type="submit">Submit Property</button>
          </form>
        </div>
      );
    }

    if (activeTab === "recommendations") {
      return (
        <div>
          <h3>Recommended Ideas</h3>
          <ul>
            <li>Modular Kitchen Upgrade</li>
            <li>False Ceiling Design</li>
            <li>Smart Lighting System</li>
          </ul>
        </div>
      );
    }

    if (activeTab === "savedIdeas") {
      return (
        <div>
          <h3>Saved Ideas</h3>
          <p>No saved ideas yet.</p>
        </div>
      );
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>User Panel</h2>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("addProperty")}>Add Properties</button>
        <button onClick={() => setActiveTab("recommendations")}>Recommendations</button>
        <button onClick={() => setActiveTab("savedIdeas")}>Saved Ideas</button>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {renderContent()}
      </div>
    </div>
  );
}

export default UserDashboard;