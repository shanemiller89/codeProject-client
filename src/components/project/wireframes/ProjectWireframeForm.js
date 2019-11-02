import React, { useState } from "react";

import * as firebase from "firebase/app";
import "firebase/storage";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ProjectWireframeForm = props => {
  const [open, setOpen] = useState(false);
  const [wireframes, setWireframes] = useState([]);

  const storageRef = firebase.storage().ref("project_wireframes");

  const submit = (e,wireframe) => {
    e.preventDefault();

    const ref = storageRef.child(`${props.project.title}-wireframe-${wireframe.name}`);

    return ref
      .put(wireframe)
      .then(data => data.ref.getDownloadURL())
      .then(imageUrl => {
        const wireframe = {
          wireframe_image: imageUrl,
          project_id: props.project.id
        };
        props.addWireframe(wireframe);
        handleClose();
      });
  };

  const submitMultiple = e => {
    e.preventDefault();

    Array.from(wireframes).forEach(wireframe => (
      submit(e, wireframe)
    ))
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Wireframe
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Project Wireframes</DialogTitle>
        <form onSubmit={submitMultiple}>
          <DialogContent>
            
            <input type="file" multiple onChange={e => setWireframes(e.target.files)} />

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

export default ProjectWireframeForm;
