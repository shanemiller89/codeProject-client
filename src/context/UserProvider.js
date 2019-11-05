import React, { useState, useEffect } from "react";
import APIManager from "../util/APIManager";
import UserContext from "./UserContext";

const UserProvider = props => {
  const [user, setUser] = useState({ user: {} });
  const [invites, setInvites] = useState([]);
  const [inviteLength, setInviteLength] = useState(0);


  const getUserInfo = () => {
    APIManager.getAll("coders/profile").then(user => {
      setUser(user);
    });
  };

  const getInvites = () => {
    APIManager.getAll("collaboratorinvites/myinvites").then(invites => {
      setInvites(invites);
      setInviteLength(invites.length);

    });
  };

  const updateInvite = (editedItem, id) => {
    APIManager.put(`collaboratorinvites/${id}`, editedItem).then(() => {
      getInvites();
    });
  };
  useEffect(() => {
    getUserInfo();
    getInvites();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: user,
        invites: invites,
        inviteLength: inviteLength,
        getInvites: getInvites,
        updateInvite: updateInvite
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
