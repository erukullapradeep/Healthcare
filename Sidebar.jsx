import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo"><span className="highlight">Health</span>care.</h2>
      <ul className="nav">
        <li className="active">Dashboard</li>
        <li>History</li>
        <li>Calendar</li>
        <li>Appointments</li>
        <li>Statistics</li>
        <li>Chat</li>
        <li>Support</li>
        <li>Setting</li>
      </ul>
    </div>
  );
};

export default Sidebar;