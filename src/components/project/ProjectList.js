import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import APIManager from "../../util/APIManager";
import ProjectCard from "./ProjectCard";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ProjectForm from "./ProjectForm";

const ProjectList = () => {
  const [myProjects, setMyProjects] = useState([]);
  const [collaboratorProjects, setCollaboratorProjects] = useState([]);


  const getMyProjects = () => {
    APIManager.getAll("projects/owner").then(projects => {
      setMyProjects(projects);
    });
  };

  const getCollaboratorProjects = () => {
    APIManager.getAll("projects/collaborator").then(projects => {
      setCollaboratorProjects(projects);
    });
  };

  useEffect(() => {
    getMyProjects();
    getCollaboratorProjects();
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <ProjectForm getMyProjects={getMyProjects} />
      <div>
        <h3>My Projects</h3>
        <Grid container spacing={5} style={{ marginLeft: "3em" }}>
          {myProjects.map(project => (
            <Grid key={project.id} item xs={4} spacing={5}>
              <ProjectCard key={project.id} project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
      <h3>Collaboration Projects</h3>
      <Grid container spacing={5} style={{marginLeft: "3em"}}>
        {collaboratorProjects.map(project => (
          <Grid key={project.id} item xs={4} spacing={5}>
            <ProjectCard key={project.id} project={project}/>
          </Grid>
        ))}
      </Grid>
      </div>
    </>
  );
};

export default ProjectList;
