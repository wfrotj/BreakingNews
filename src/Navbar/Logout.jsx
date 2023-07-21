import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/login", { replace: true });
    console.log("You have been logged out");
  };

  return <span onClick={handleLogout} style={{ cursor: "pointer" }}></span>;
}

export default Logout;
