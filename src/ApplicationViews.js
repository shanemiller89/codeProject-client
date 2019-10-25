import React from "react";
import { Route, withRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";
import ProjectList from "./components/project/ProjectList";

const ApplicationViews = () => {
  return (
    <>
      <Route
        exact
        path="/"
        render={props => {
          return <Dashboard {...props} />;
        }}
      />
      <Route
        exact
        path="/profile"
        render={props => {
          return <Profile {...props} />;
        }}
      />
      <Route
        exact
        path="/projects"
        render={props => {
          return <ProjectList {...props} />;
        }}
      />
    </>
  );
};

export default withRouter(ApplicationViews);
