import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setUser }) {
  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    setUser(null);
  };

  return <span onClick={handleLogout} style={{ cursor: "pointer" }}></span>;
}

export default Logout;
