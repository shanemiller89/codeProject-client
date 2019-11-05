import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import APIManager from "../../util/APIManager";
import ProjectCard from "./ProjectCard";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ProjectForm from "./ProjectForm";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  alert: {
    marginTop: "8em"
  },
  header: {
    display: "flex"
  }
});

const ProjectList = () => {
  const classes = useStyles();
  const [myProjects, setMyProjects] = useState([]);
  const [collaboratorProjects, setCollaboratorProjects] = useState([]);
  const [value, setValue] = useState("all");
  const [personalView, setPersonalView] = useState(false);
  const [collaboratorView, setCollaboratorView] = useState(false);

  const changeView = () => {
    if (value === "all") {
      setPersonalView(false);
      setCollaboratorView(false)
    }
    if (value === "personal") {
      setPersonalView(false);
      setCollaboratorView(true)
    }
    if (value === "collaborator") {
      setPersonalView(true);
      setCollaboratorView(false)
    }
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

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
    changeView();
  }, [value]);

  useEffect(() => {
    getMyProjects();
    getCollaboratorProjects();
  }, []);

  return (
    <>
      <div className={classes.header}>
        <Typography color="textSecondary" component="h1" variant="h4">
          Projects
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="position"
            name="position"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="all"
              control={<Radio color="primary" />}
              label="All"
              labelPlacement="start"
            />
            <FormControlLabel
              value="personal"
              control={<Radio color="primary" />}
              label="Personal"
              labelPlacement="start"
            />
            <FormControlLabel
              value="collaborator"
              control={<Radio color="primary" />}
              label="Collaborator"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <ProjectForm getMyProjects={getMyProjects} />
      <div hidden={personalView}>
        <h3>My Projects</h3>
        <Grid container spacing={5} style={{ marginLeft: "3em" }}>
          {myProjects.map(project => (
            <Grid key={project.id} item xs={4} spacing={5}>
              <ProjectCard key={project.id} project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div hidden={collaboratorView}>
        <h3>CollaboratorProjects</h3>
        <Grid container spacing={5} style={{ marginLeft: "3em" }}>
          {collaboratorProjects.map(project => (
            <Grid key={project.id} item xs={4} spacing={5}>
              <ProjectCard key={project.id} project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default ProjectList;
