import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import GetWeatherData from "../components/Weather/GetWeatherData";
import DateTime from "../components/utils/DateTime";

function Navbar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/login", { replace: true });
    console.log("You have been logged out");
  };
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="bg-gray-300 mobile:flex justify-between p-3 text-l font-semibold ">
      <div className="Time laptop:gap-4  tablet:text-xl text-2xl ">
        <div className="mobile:hidden mobile:items-center tablet:flex laptop:flex laptop:items-center">
          <GetWeatherData />
          <h2 className="mobile:hidden laptop:flex tablet:flex laptop:text-m laptop:mx-4 tablet:mx-10">
            <DateTime />
          </h2>
        </div>
      </div>

      <div>
        <div className="hamburger mobile:text-2xl mobile:mr-0 mobile:flex justify-end tablet:text-2xl tablet:items-center laptop:hidden">
          <button onClick={toggleMenu} className="laptop:hidden ">
            <FiMenu />
          </button>
        </div>
        <div className="laptop:flex mobile:relative mobile:right-40 tablet:right-80 tablet:text-xl">
          <ul
            className={`tablet:mr-2 tablet:mt-8 mobile:mr-16 n  ${
              menuOpen ? "relative" : "hidden"
            } laptop:hidden`}
          >
            <li className="hover:text-white hover:underline ">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-white hover:underline">
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="hover:text-white hover:underline">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="laptop:flex laptop:gap-4 laptop:items-center mobile:hidden">
        <ul className="flex gap-8 text-2xl ">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
