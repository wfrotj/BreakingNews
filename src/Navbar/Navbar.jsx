import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle, FaWindowClose } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const handlePasswordChange = () => {
    event.target.value;
  };
  const handleUserNameChange = () => {
    event.target.value;
  };
  function clicked() {
    setVisible(!visible);
  }
  const closeLogIn = () => {
    setVisible(!visible);
  };
  return (
    <header className="bg-gray-300 flex justify-between p-4 text-lg font-semibold">
      <div className="main-menu flex gap-4 ">
        <h2>Time Display</h2>
        <h1>LOGO</h1>
      </div>

      <div className="menu flex gap-4 items-center ">
        <div className="laptop:hidden text-2xl">
          <button className="laptop:hidden text-2xl" onClick={toggleMenu}>
            <FiMenu />
          </button>
        </div>
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } laptop:flex flex-col laptop:flex-row gap-4 align-middle mobile:flex-col`}
          style={{
            position: "absolute",
            top: "5rem",
            right: "5rem",
            backgroundColor: "white",
            padding: "1rem",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
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

        <FaUserCircle
          className="cursor-pointer active:bg-black active:text-white mobile:hidden"
          onClick={clicked}
        />
      </div>
      <div className={`justify-center bg-red-800  ${visible ? "" : "hidden"}`}>
        <form
          className="bg-[black] w-[85vw] h-[100vh] text-white justify-center items-center text-[20px] left-20 truncate absolute z-20 flex content-center flex-col rounded-lg"
          id="logIn"
        >
          <label className="justify-items-start">Username</label>
          <input
            type="text"
            className="text-black"
            onChange={handleUserNameChange}
          />
          <label>Password</label>
          <input
            type="password"
            className="text-black"
            onChange={handlePasswordChange}
          />
          <div className=" flex flex-row gap-4 mt-4">
            <div className="ml-4">
              <button className="bg-yellow-400 rounded mt-2 text-black font-semibold ">
                Login
              </button>
              <p>
                Not registered yet?{" "}
                <a href="#" className="underline">
                  Click here
                </a>
              </p>
            </div>
          </div>
          <FaWindowClose
            className="absolute top-0 right-0 cursor-pointer truncate"
            onClick={closeLogIn}
          />
        </form>
      </div>
    </header>
  );
}

export default Navbar;
