import React from "react";
import { Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Logout from "./Logout";

function Navbar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="bg-gray-300 mobile:flex justify-between p-4 text-lg font-semibold">
      <div className="flex gap-4 laptop: text-2xl ">
        <h2 className="mobile:hidden laptop:flex tablet:flex">Time Display</h2>
        <h1>LOGO</h1>
      </div>
      {/* Mobile */}
      <div>
        <div className="mobile:text-2xl mobile:mr-0 mobile:flex justify-end tablet:text-2xl laptop:hidden">
          <button onClick={toggleMenu} className="laptop:hidden">
            <FiMenu />
          </button>
        </div>

        <div className="laptop:flex mobile:relative mobile:right-40 tablet:right-80 tablet:text-xl">
          <ul
            className={`mr-16 py-2 ${
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
            <li className="hover:text-white hover:underline">
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
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
          {user ? (
            <li className="hover:text-white hover:underline">
              <Logout isLoggedIn={user} />
            </li>
          ) : (
            <li className="hover:text-white hover:underline">
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
