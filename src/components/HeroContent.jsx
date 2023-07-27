import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GiExitDoor } from "react-icons/gi";
import { useEffect } from "react";

function HeroContent({ user, setUser }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    setUser(null);
  };

  return (
    <div className="mobile:relative tablet:flex laptop:flex laptop:text-2xl latop:font-bold bg-black ">
      <span className="tablet:hidden laptop:hidden text-white">
        Get your latest news here!{" "}
      </span>
      <div className="mobile:flex tablet:ml-6 laptop:justify-center mobile:text-yellow-500 mobile:items-center tablet:bg-black ">
        Categories
        <BiChevronDown
          onClick={toggleMenu}
          className="tablet:hidden laptop:hidden"
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 py-2 w-full bg-black tablet:hidden laptop:hidden">
          <Link
            to="/business"
            className="block px-4 py-2 text-white hover:bg-gray-900 active:bg-white active:text-black"
          >
            Business
          </Link>
          <Link
            to="/entertainment"
            className="block px-4 py-2 text-white hover:bg-gray-900 active:bg-white active:text-black"
          >
            Entertainment
          </Link>
          <Link
            to="/health"
            className="block px-4 py-2 text-white hover:bg-gray-900 active:bg-white active:text-black"
          >
            Health
          </Link>
          <Link
            to="/sports"
            className="block px-4 py-2 text-white hover:bg-gray-900 active:bg-white active:text-black"
          >
            Sports
          </Link>
          <Link
            to="/science"
            className="block px-4 py-2 text-white hover:bg-gray-900 active:bg-white active:text-black"
          >
            Science
          </Link>
          <Link
            to="/technology"
            className="block px-4 py-2 text-white hover:bg-gray-900 active:bg-white active:text-black"
          >
            Technology
          </Link>
          <Link
            to="/technology"
            className="block px-4 py-2 text-white hover:bg-gray-900 active:bg-white active:text-black"
          >
            Technology
          </Link>
        </div>
      )}
      {/* laptop */}

      <div className="laptop:flex tablet:flex tablet:bg-black tablet:items-center tablet:font-semibold laptop:justify-between mobile:hidden ">
        <Link
          to="/business"
          className={` block px-2 py-2  hover:bg-gray-900 active:bg-white active:text-black ${
            location.pathname === "/business"
              ? "text-black font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Business
        </Link>
        <Link
          to="/entertainment"
          className={` block px-2 py-2  hover:bg-gray-900 hover:text-white active:bg-white active:text-black ${
            location.pathname === "/entertainment"
              ? "text-slate-900 font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Entertainment
        </Link>
        <Link
          to="/health"
          className={` block px-2 py-2  hover:bg-gray-900 hover:text-white active:bg-white active:text-black ${
            location.pathname === "/health"
              ? "text-slate-900 font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Health
        </Link>
        <Link
          to="/sports"
          className={` block px-2 py-2  hover:bg-gray-900 hover:text-white active:bg-white active:text-black ${
            location.pathname === "/sports"
              ? "text-slate-900 font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Sports
        </Link>
        <Link
          to="/science"
          className={` block px-2 py-2  hover:bg-gray-900 hover:text-white active:bg-white active:text-black ${
            location.pathname === "/science"
              ? "text-slate-900 font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Science
        </Link>
        <Link
          to="/technology"
          className={` block px-2 py-2  hover:bg-gray-900 hover:text-white active:bg-white active:text-black ${
            location.pathname === "/technology"
              ? "text-slate-900 font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Technology
        </Link>
      </div>
      <div className="laptop:flex tablet:flex tablet:bg-black tablet:items-center tablet:font-semibold laptop:justify-between mobile:hidden">
        <GiExitDoor
          onClick={handleLogout}
          className="text-white font-bold text-2xl ml-6"
        />
      </div>
    </div>
  );
}

export default HeroContent;
