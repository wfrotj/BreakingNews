import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import HeroContent from "./components/HeroContent";
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";
import Login from "./pages/Login";
import Business from "./components/Business";
import Entertainment from "./components/Entertainment";
import Health from "./components/Health";
import Sports from "./components/Sports";
import Science from "./components/Science";
import Technology from "./components/Technology";
import userService from "./services/userService";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      userService.setToken(user.token);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogin = () => {
    // Implement your login logic here
  };

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <div>
      <Navbar user={user} handleLogout={handleLogout} />
      {user && <HeroContent />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={
            <Login
              handleLogin={handleLogin}
              setUsername={setUsername}
              setPassword={setPassword}
              username={username}
              password={password}
              setUser={setUser}
            />
          }
        />
        {user ? (
          <>
            <Route path="/business" element={<Business />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/health" element={<Health />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/science" element={<Science />} />
            <Route path="/technology" element={<Technology />} />
          </>
        ) : (
          <Route path="/" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
