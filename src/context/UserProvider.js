import React, { useState, useEffect } from "react";
import APIManager from "../util/APIManager";
import UserContext from "./UserContext";

const UserProvider = (props) => {
  const [user, setUser] = useState({user:{}});

  const getUserInfo = () => {
    APIManager.getAll("coders/profile").then(user => {
      setUser(user);
    });
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  
  return (
    <UserContext.Provider
      value={{
        user: user
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
