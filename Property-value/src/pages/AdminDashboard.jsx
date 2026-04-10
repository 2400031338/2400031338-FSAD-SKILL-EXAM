import React from "react";
import "../styles/Dashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        <li>Give Recommendations</li>
        <li>Review User Properties</li>
      </ul>
    </div>
  );
}

export default AdminDashboard;