import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import APIManager from "../../util/APIManager";
import ProjectCard from "./ProjectCard";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const ProjectList = () => {
  const [myProjects, setMyProjects] = useState([]);

  const getMyProjects = () => {
    APIManager.getAll("projects/owner").then(projects => {
      setMyProjects(projects);
    });
  };

  useEffect(() => {
    getMyProjects();
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <Link to="projects/new-form">
        <Button variant="contained" color="primary">
          Create New Project
        </Button>
      </Link>
      <h3>My Projects</h3>
      <Grid container spacing={5} style={{marginLeft: "3em"}}>
        {myProjects.map(project => (
          <Grid key={project.id} item xs={4} spacing={5}>
            <ProjectCard key={project.id} project={project}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectList;
