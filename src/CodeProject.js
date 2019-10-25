import React, { useState } from "react";
import useSimpleAuth from "./hooks/useSimpleAuth";
import NavBar from "./components/ui/NavBar";
import Login from "./components/auth/Login";

const CodeProject = () => {
  const { isAuthenticated } = useSimpleAuth();
  const [loggedIn, setIsLoggedIn] = useState(false);

  if (isAuthenticated())
    return (
      <>
        <NavBar setIsLoggedIn={setIsLoggedIn} />
      </>
    );
  else
    return (
      <>
        <Login setIsLoggedIn={setIsLoggedIn} />
      </>
    );
};

export default CodeProject;
