import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaWindowClose } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

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
        <FaUserCircle
          className="mobile:hidden cursor-pointer active:bg-black active:text-white "
          onClick={clicked}
        />
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
        <FaUserCircle
          className="cursor-pointer active:bg-black active:text-white  text-2xl"
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
            className="absolute top-0 right-0 cursor-pointer truncate text-3xl"
            onClick={closeLogIn}
          />
        </form>
      </div>
    </header>
  );
}

export default Navbar;
