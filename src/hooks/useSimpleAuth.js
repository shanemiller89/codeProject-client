import { useState } from "react";
import { conditionalExpression } from "@babel/types";

const useSimpleAuth = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);

  const isAuthenticated = () =>
    loggedIn || localStorage.getItem("codeproject_token") !== null;

  const register = (userInfo, setIsLoggedIn) => {
    return fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(res => {
        if ("token" in res) {
          localStorage.setItem("codeproject_token", res.token);
        }
      })
      .then(() => {
        setIsLoggedIn(true);
      });
  };

  const login = (credentials, setIsLoggedIn) => {
    return fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(res => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("codeproject_token", res.token);
          setIsLoggedIn(true);
        }
        if (!("valid" in res && res.valid && "token" in res)) {
        //   alert("Wrong username or password!");
        }
      });
  };

  const logout = setIsLoggedIn => {
    setIsLoggedIn(false);
    localStorage.removeItem("codeproject_token");
  };

  return { isAuthenticated, logout, login, register };
};

export default useSimpleAuth;
