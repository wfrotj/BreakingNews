import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";
import userService from "./services/userService";
import HeroContent from "./components/HeroContent";
import Login from "./pages/Login";
import Business from "./components/Business";
import Entertainment from "./components/Entertainment";
import Health from "./components/Health";
import Sports from "./components/Sports";
import Science from "./components/Science";
import Technology from "./components/Technology";
import RegisterForm from "./pages/RegisterForm";
function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      userService.setToken(user.token);
    }
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     navigate("/home");
  //   }
  // }, [user, navigate]);

  return (
    <div>
      <Navbar setUser={setUser} />
      <HeroContent setUser={setUser} user={user} />

      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
