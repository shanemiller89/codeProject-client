import React, { useState } from "react";
import APIManager from "../../util/APIManager";

import * as firebase from "firebase/app";
import "firebase/storage";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const ProjectForm = props => {
  const [title, setTitle] = useState("");
  const [repo, setRepo] = useState("");
  const [overview, setOverview] = useState("");
  const [primary_technology, setPrimaryTech] = useState("");
  const [supplemental_technologies, setSupplementalTech] = useState([]);

  const [project_image, setProjectImage] = useState("");
  const [checked, setIsChecked] = useState(false);
  const [disabled, setIsDisabled] = useState(true);

  const [privateChecked, setPrivateIsChecked] = useState(false);

  const privateCheckedToggle = () => {
    setPrivateIsChecked(!privateChecked);
  };

  const checkedToggle = () => {
    setIsChecked(!checked);
    setIsDisabled(!disabled);
  };

  const storageRef = firebase.storage().ref("project_logos");

  const createProjectWithImage = event => {
    event.preventDefault();

    const ref = storageRef.child(
      `${title}-${localStorage.getItem("codeproject_token")}`
    );

    return ref
      .put(project_image)
      .then(data => data.ref.getDownloadURL())
      .then(imageUrl => {
        const supplementalTechArray = supplemental_technologies.split(",");
        const newProject = {
          title: title,
          repo: repo,
          overview: overview,
          private: privateChecked,
          project_image: imageUrl,
          primary_technology: primary_technology,
          supplemental_technologies: supplementalTechArray
        };
        APIManager.post("projects", newProject);
        props.history.push({
          pathname: "/projects"
        });
      });
  };

  const createProject = event => {
    event.preventDefault();
    const supplementalTechArray = supplemental_technologies.split(",");
    const newProject = {
      title: title,
      repo: repo,
      overview: overview,
      private: privateChecked,
      project_image: project_image,
      primary_technology: primary_technology,
      supplemental_technologies: supplementalTechArray
    };
    APIManager.post("projects", newProject);
    props.history.push({
      pathname: "/projects"
    });
  };

  return (
    <Grid style={{ margin: "4em 0em 4em 12em" }} container component="main">
      <Grid
        item
        xs={4}
        sm={8}
        md={10}
        style={{ padding: "2em" }}
        component={Paper}
        elevation={6}
        square
      >
        <div>
          <Typography component="h1" variant="h5">
            New Project
          </Typography>
          <form onSubmit={disabled ? createProject : createProjectWithImage}>
            <div style={{display: "flex"}}>
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Project Name"
                  name="title"
                  autoFocus
                  onChange={e => setTitle(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  helperText="Link to where the project repository is located."
                  id="repo"
                  label="Repository Link"
                  name="repo"
                  onChange={e => setRepo(e.target.value)}
                />
                {/* <Container fullWidth style={{background: "#d4edda", borderRadius: ".25em", padding: "1em", color: "#155724", textAlign: "center"}}>
              Markdown is supported for the Project Overview Description. Otherwise, only spacing and line breaks will be rendered.
            </Container> */}
                {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              helperText="Markdown is supported for the Project Overview Description. Otherwise, only spacing and line breaks will be rendered."
              rows="16"
              id="overview"
              label="Project Overview Description"
              name="overview"
              onChange={e => setOverview(e.target.value)}
            /> */}
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  helperText="Primary Technology (i.e. language, frameworks, etc.) being used."
                  id="primary"
                  label="Primary Technology"
                  name="primary"
                  onChange={e => setPrimaryTech(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  helperText="Separate with comma (i.e 'Semantic-UI, Firebase, Django')"
                  id="secondary"
                  label="Supplemental Technologies"
                  name="secondary"
                  onChange={e => setSupplementalTech(e.target.value)}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={privateChecked}
                      onChange={privateCheckedToggle}
                      value="checked"
                      color="primary"
                    />
                  }
                  label="Is this a Private Project?"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={checkedToggle}
                      value="checked"
                      color="primary"
                    />
                  }
                  label="Upload logo or associated Image for this project?"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="profileImage"
                  type="file"
                  disabled={disabled}
                  onChange={e => setProjectImage(e.target.files[0])}
                  name="profileImage"
                />
              </div>
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  multiline
                  helperText="Markdown is supported for the Project Overview Description. Otherwise, only spacing and line breaks will be rendered."
                  rows="24"
                  style={{marginLeft: "2em", width: "50em"}}
                  id="overview"
                  label="Project Overview Description"
                  name="overview"
                  onChange={e => setOverview(e.target.value)}
                />
              </div>
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{marginTop: "1em"}}
            >
              Create New Project
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProjectForm;
