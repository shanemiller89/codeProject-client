import React from "react";
// import useSimpleAuth from "./hooks/useSimpleAuth"
import NavBar from "./components/ui/NavBar"
import Login from "./components/auth/Login";

const CodeProject = () => {
//   const { isAuthenticated } = useSimpleAuth();

//   if (isAuthenticated()) 
    return (
      <React.Fragment>
          {/* <NavBar></NavBar> */}
          <Login></Login>

      </React.Fragment>
    );
//    else 
//     return (
//       <React.Fragment>
//         <Authentication/>
//       </React.Fragment>
//     );
  
};

export default CodeProject;