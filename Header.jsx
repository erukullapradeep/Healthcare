import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <input className="search" type="text" placeholder="Search" />
      <div className="icons">
        <span className="bell">🔔</span>
        <img
          src="/pk.jpg"
          alt="avatar"
          className="avatar"
        />
        <button className="add">+</button>
      </div>
    </div>
  );
};

export default Header;