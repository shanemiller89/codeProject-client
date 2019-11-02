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
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  DialogActions
} from "@material-ui/core";

const ProjectForm = props => {
  const [title, setTitle] = useState("");
  const [repo, setRepo] = useState("");
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

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

  const submitWithImage = event => {
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

  const submit = event => {
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Project
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Create Task</DialogTitle>
        <form onSubmit={submit}>
          <DialogContent>
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
            <FormControl component="fieldset">
              <FormLabel component="legend">Project Status</FormLabel>
              <RadioGroup
                aria-label="position"
                name="position"
                value={value}
                onChange={e => setValue(e.target.value)}
                row
              >
                <FormControlLabel
                  value="false"
                  control={<Radio color="primary" />}
                  label="Public"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio color="primary" />}
                  label="Private"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Tasks Filter</FormLabel>
              <RadioGroup
                aria-label="position"
                name="position"
                value={value}
                onChange={e => setValue(e.target.value)}
                row
              >
                <FormControlLabel
                  value="all"
                  control={<Radio color="primary" />}
                  label="All"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="incoming"
                  control={<Radio color="primary" />}
                  label="Incoming"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default ProjectForm;
