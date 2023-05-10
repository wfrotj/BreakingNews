import React from "react";
import { Link } from "react-router-dom";
import "./HeroContent.css";

function HeroContent() {
  return (
    <div className="hero-content">
      <h3>Categories</h3>
      <ul className="category-list">
        <li>
          <Link to="/business">Business</Link>
        </li>
        <li>
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="/health">Health</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/science">Science</Link>
        </li>
        <li>
          <Link to="/technology">Tehnology</Link>
        </li>
      </ul>
      <div>Weather</div>
    </div>
  );
}

export default HeroContent;
