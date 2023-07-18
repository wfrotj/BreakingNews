import HeroContent from "./components/HeroContent";
import Navbar from "./Navbar/Navbar";
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
import loginService from "./services/loginService";
import userService from "./services/userService";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// import Navbar from "./Navbar/Navbar";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    loginService.login({ username, password }).then((res) => {
      window.localStorage.setItem("loggedUser", JSON.stringify(res));
      userService.setToken(res.token);
      setUser(res);
      setUsername("");
      setPassword("");
    });
  };
  return (
    <div>
      <Navbar />
      <HeroContent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={
            <Login
              handleLogin={handleLogin}
              user={user}
              setUsername={setUsername}
              setPassword={setPassword}
              username={username}
              password={password}
            />
          }
        />

        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/science" element={<Science />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
