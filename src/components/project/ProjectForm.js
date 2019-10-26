import React, { useState } from "react";
import APIManager from "../../util/APIManager";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Container } from "@material-ui/core";

const ProjectForm = props => {
  const [title, setTitle] = useState("");
  const [repo, setRepo] = useState("");
  const [overview, setOverview] = useState("");
  const [project_image, setProjectImage] = useState("");

  const [privateChecked, setPrivateIsChecked] = useState(false);

  console.log(privateChecked);

  const privateCheckedToggle = () => {
    setPrivateIsChecked(!privateChecked);
  };

  const createProject = event => {
    event.preventDefault();
    const newProject = {
      title: title,
      repo: repo,
      overview: overview,
      private: privateChecked,
      project_image: project_image,
      primary_technology: "ReactJS"
    };
    APIManager.post("projects", newProject);
  };

  return (
    <Grid style={{ margin: "4em 0em 4em 24em" }} container component="main">
      <Grid
        item
        xs={12}
        sm={8}
        md={40}
        style={{ padding: "2em" }}
        component={Paper}
        elevation={6}
        square
      >
        <div>
          <Typography component="h1" variant="h5">
            New Project
          </Typography>
          <form onSubmit={createProject}>
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              helperText="Markdown is supported for the Project Overview Description. Otherwise, only spacing and line breaks will be rendered."
              rows="8"
              id="overview"
              label="Project Overview Description"
              name="overview"
              onChange={e => setOverview(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              helperText="Primary Technology (i.e. language, frameworks, etc.) being used."
              id="primary"
              label="Primary Technology"
              name="primary"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              helperText="Supplemental Technologies (i.e. language, frameworks, etc.) being used. Seperate by COMMA"
              id="secondary"
              label="Secondary"
              name="secondary"
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
                  //   checked={checked}
                  //   onChange={checkedToggle}
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
              //   disabled={disabled}
              //   onChange={e => setProfileImage(e.target.files[0])}
              name="profileImage"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // onClick={submit}
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
