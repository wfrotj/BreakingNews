import React from "react";
import { Link, useLocation } from "react-router-dom";

import GetWeatherData from "./Weather/GetWeatherData";

function HeroContent() {
  const location = useLocation();

  return (
    <div className="hero-content flex justify-between z-10 sticky top-0 border-solid bg-black ">
      <div className="flex items-center gap-8 text-2xl pl-4 text-white ">
        <h3>Categories</h3>
        <section className=" flex row-auto gap-8 items-center ml-8 mr-4 font-bold ">
          <div
            className={`${
              location.pathname === "/business"
                ? "text-white "
                : "text-yellow-500"
            } transition ease-in-out delay-10`}
          >
            <Link to="/business">Business</Link>
          </div>
          <div
            className={`${
              location.pathname === "/entertainment"
                ? "text-white"
                : "text-yellow-500"
            } transition ease-in-out delay-10`}
          >
            <Link to="/entertainment">Entertainment</Link>
          </div>
          <div
            className={`${
              location.pathname === "/health" ? "text-white" : "text-yellow-500"
            } transition ease-in-out delay-10`}
          >
            <Link to="/health">Health</Link>
          </div>
          <div
            className={`${
              location.pathname === "/sports" ? "text-white" : "text-yellow-500"
            } transition ease-in-out delay-10`}
          >
            <Link to="/sports">Sports</Link>
          </div>
          <div
            className={`${
              location.pathname === "/science"
                ? "text-white"
                : "text-yellow-500"
            } transition ease-in-out delay-10`}
          >
            <Link to="/science">Science</Link>
          </div>
          <div
            className={`${
              location.pathname === "/technology"
                ? "text-white"
                : "text-yellow-500"
            } transition ease-in-out delay-10`}
          >
            <Link to="/technology">Technology</Link>
          </div>
        </section>
      </div>
      <div className="bg-white">
        <GetWeatherData />
      </div>
    </div>
  );
}

export default HeroContent;
