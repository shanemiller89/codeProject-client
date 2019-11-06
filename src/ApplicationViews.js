import React from "react";
import { Route, withRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";
import ProjectList from "./components/project/ProjectList";
import Project from "./components/project/Project";

import ProjectForm from "./components/project/ProjectForm";
import CollaborationInvites from "./components/invites/CollaborationInvites";
import ProjectPDFOverview from "./components/project/PDF/ProjectPDFOverview";

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
        path="/collab_invites"
        render={props => {
          return <CollaborationInvites {...props} />;
        }}
      />

      <Route
        exact
        path="/projects"
        render={props => {
          return <ProjectList {...props} />;
        }}
      />
      <Route
        exact
        path="/project/:projectId(\d+)"
        render={props => {
          return <Project {...props} />;
        }}
      />
      <Route
        exact
        path="/projectPDF/:projectId(\d+)"
        render={props => {
          return <ProjectPDFOverview {...props} />;
        }}
      />
      <Route
        exact
        path="/project"
        render={props => {
          return <Project {...props} />;
        }}
      />
      <Route
        exact
        path="/projects/new-form"
        render={props => {
          return <ProjectForm {...props} />;
        }}
      />
    </>
  );
};

export default withRouter(ApplicationViews);
