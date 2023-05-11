import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main-menu">
        <h2>Time Display</h2>
        <h1>LOGO</h1>
      </div>

      <div className="menu">
        <ul className="menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="login">
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
