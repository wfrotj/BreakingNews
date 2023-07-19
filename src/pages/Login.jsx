import React, { useEffect, useState } from "react";
import loginService from "../services/loginService";
import userService from "../services/userService";
function Login({ username, setUsername, password, setPassword, setUser }) {
  const handleLogin = (e) => {
    e.preventDefault();

    loginService
      .login({ username, password })
      .then((res) => {
        window.localStorage.setItem("loggedUser", JSON.stringify(res));
        userService.setToken(res.token);
        console.log(res);
        setUser(res);
        setUsername("");
        setPassword("");
      })
      .catch((err) => console.log(err));
  };
  {
    return (
      <div className="bg-slate-500 gap-4 p-4 flex justify-center">
        <form onSubmit={handleLogin}>
          <div className="flex gap-1 justify-between mb-1">
            <label>USERNAME</label>{" "}
            <input
              className="border-black"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-1 justify-between">
            <label>PASSWORD</label>
            <input
              className="border-black"
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-end mt-1 ">
            {" "}
            <button className="bg-blue-500 p-2 rounded-sm" type="submit">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
