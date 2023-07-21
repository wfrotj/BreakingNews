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
    }
  }, []);

  return (
    <div>
      <Navbar />
      {user === null ? (
        <Login
          setPassword={setPassword}
          password={password}
          username={username}
          setUsername={setUsername}
          setUser={setUser}
          user={user}
        />
      ) : (
        <>{<HeroContent setUser={setUser} user={user} />}</>
      )}
    </div>
  );
}

export default App;
