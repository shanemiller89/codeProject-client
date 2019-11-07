import React, { useState } from "react";
import APIManager from "../../util/APIManager";

import * as firebase from "firebase/app";
import "firebase/storage";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Edit from "@material-ui/icons/Edit";
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

const ProjectEditForm = props => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [repo, setRepo] = useState("");
  const [value, setValue] = useState("");
  const [project_image, setProjectImage] = useState("");

  const [checked, setIsChecked] = useState(false);
  const [disabled, setIsDisabled] = useState(true);

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
        const editProject = {
          title: title,
          repo: repo,
          private: JSON.parse(value),
          project_image: imageUrl
        };
        props.editProject(editProject, props.project.id);
        handleClose();
      });
  };

  const submit = event => {
    event.preventDefault();
    const editProject = {
      title: title,
      repo: repo,
      private: JSON.parse(value),
      project_image: project_image
    };
    props.editProject(editProject, props.project.id);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
    setTitle(props.project.title);
    setRepo(props.project.repo);
    setValue(props.project.private);
    setProjectImage(props.project.project_image);
    console.log("Boolean", props.project.private);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{ background: "#414141", color: "white" }}
        variant="contained"
        color="primary"
        startIcon={<Edit />}

        onClick={handleClickOpen}
      >
        Edit Project
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Edit Project</DialogTitle>
        <form onSubmit={disabled ? submit : submitWithImage}>
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
              value={title}
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
              value={repo}
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Project Status</FormLabel>
              <RadioGroup
                aria-label="position"
                name="position"
                value={String(value)}
                onChange={e => setValue(e.target.value)}
                row
              >
                <FormControlLabel
                  value="false"
                  control={<Radio color="secondary" />}
                  label="Public"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio color="secondary" />}
                  label="Private"
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
                  color="secondary"
                />
              }
              label="Change logo or associated Image for this project?"
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
            <Button onClick={handleClose} style={{color: "#414141"}}>
              Cancel
            </Button>
            <Button type="submit" style={{color: "#414141"}}>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default ProjectEditForm;
