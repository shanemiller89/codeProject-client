import React, { useState } from "react";
import useSimpleAuth from "./hooks/useSimpleAuth";
import NavBar from "./components/ui/NavBar";
import Login from "./components/auth/Login";
import UserProvider from "./context/UserProvider";

const CodeProject = () => {
  const { isAuthenticated } = useSimpleAuth();
  const [loggedIn, setIsLoggedIn] = useState(false);

  if (isAuthenticated())
    return (
      <UserProvider>
        <>
          <NavBar setIsLoggedIn={setIsLoggedIn} />
        </>
      </UserProvider>
    );
  else
    return (
      <>
        <Login setIsLoggedIn={setIsLoggedIn} />
      </>
    );
};

export default CodeProject;
