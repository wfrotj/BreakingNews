import React, { useEffect, useState } from "react";
import loginService from "../services/loginService";
import userService from "../services/userService";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    loginService
      .login({ username, password })
      .then((res) => {
        window.localStorage.setItem("loggedUser", JSON.stringify(res));
        userService.setToken(res.token);
        setUser(res);
        setUsername("");
        setPassword("");
      })
      .catch((error) => alert(error.response.data.error));
  };
  {
    return (
      <div className="bg-gradient-to-t from-yellow-700 via-white-500 to-black-500 flex items-center justify-center h-screen  ">
        <div className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-center">
          <form onSubmit={handleLogin}>
            <div className="flex gap-1 justify-between mb-1 mobile:flex-col">
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
            <div className="flex gap-1 justify-between mobile:flex-col">
              <label>PASSWORD</label>
              <input
                className="border-black"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center mt-4 ">
              {" "}
              <button
                className="bg-slate-300 p-2 font-semibold rounded-sm"
                type="submit"
              >
                LOGIN
              </button>
            </div>
          </form>
          <div className="text-black text-sm mt-2 flex text-center">
            NOTE: To use the app please use these credentials: <br></br>
            username: wilbert <br></br>password: 1234
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
