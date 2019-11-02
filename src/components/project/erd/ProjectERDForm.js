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

const ProjectERDForm = props => {
  const [open, setOpen] = useState(false);
  const [erd, setERD] = useState("");

  const storageRef = firebase.storage().ref("project_ERDs");

  const submit = e => {
    e.preventDefault();

    const ref = storageRef.child(`${props.project.title}-ERD`);

    return ref
      .put(erd)
      .then(data => data.ref.getDownloadURL())
      .then(imageUrl => {
        const ERD = {
          erd_image: imageUrl,
          id: props.project.id
        };
        props.addERD(ERD);
        handleClose();
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
        {props.project.erd_image === "" ? "Add ERD" : "Change ERD"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Project ERD</DialogTitle>
        <form onSubmit={submit}>
          <DialogContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              helperText="Only Image Files (.PNG, .JPG, etc.) are supported"
              id="profileImage"
              type="file"
              onChange={e => setERD(e.target.files[0])}
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

export default ProjectERDForm;
