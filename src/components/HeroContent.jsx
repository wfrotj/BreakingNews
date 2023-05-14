import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import GetWeatherData from "./Weather/GetWeatherData";

function HeroContent() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mobile:relative tablet:flex laptop:flex laptop:text-3xl latop:font-bold laptop:justify-between bg-black ">
      <span className="tablet:hidden laptop:hidden text-white">
        Get your latest news here!{" "}
      </span>
      <p className="mobile:flex mobile:text-yellow-500 mobile:items-center tablet:bg-black ml-1">
        Categories
        <div className=" text-yellow-500 font-bold py-2 px-4 rounded items-center justify-center flex tablet:hidden laptop:hidden ">
          <BiChevronDown onClick={toggleMenu} />
        </div>
      </p>
      {isOpen && (
        <div className="absolute z-10  py-2 w-full bg-black tablet:hidden">
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
        </div>
      )}
      {/* laptop */}
      <div className="laptop:flex tablet:flex tablet:bg-black tablet:items-center tablet:font-semibold laptop:justify-between mobile:hidden ">
        <Link
          to="/business"
          className={` block px-4 py-2 text-white hover:bg-gray-900 hover:text-white active:bg-white active:text-black ${
            location.pathname === "/business"
              ? "text-slate-900 font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Business
        </Link>
        <Link
          to="/entertainment"
          className={` block px-4 py-2 text-white hover:bg-gray-900 hover:text-white active:bg-white active:text-black ${
            location.pathname === "/entertainment"
              ? "text-slate-900 font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Entertainment
        </Link>
        <Link
          to="/health"
          className={` block px-4 py-2 text-white hover:bg-gray-900 hover:text-white active:bg-white active:text-black ${
            location.pathname === "/health"
              ? "text-slate-900 font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Health
        </Link>
        <Link
          to="/sports"
          className={` block px-4 py-2 text-white hover:bg-gray-900 hover:text-white active:bg-white active:text-black ${
            location.pathname === "/sports"
              ? "text-slate-900 font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Sports
        </Link>
        <Link
          to="/science"
          className={` block px-4 py-2 text-white hover:bg-gray-900 hover:text-white active:bg-white active:text-black ${
            location.pathname === "/science"
              ? "text-slate-900 font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Science
        </Link>
        <Link
          to="/technology"
          className={` block px-4 py-2 text-white hover:bg-gray-900 hover:text-white active:bg-white active:text-black ${
            location.pathname === "/technology"
              ? "text-slate-900 font-semibold bg-white"
              : "text-white"
          } transition ease-in-out delay-10`}
        >
          Technology
        </Link>
      </div>{" "}
      <div className="mobile:hidden tablet:flex tablet:font-semibold laptop:flex ">
        <GetWeatherData />
      </div>
    </div>
  );
}

export default HeroContent;
