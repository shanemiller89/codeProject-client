import React, { useState } from "react";

import * as firebase from "firebase/app";
import "firebase/storage";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SwapHoriz from "@material-ui/icons/SwapHoriz";

const ProjectWireframeEditForm = props => {
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
          id: props.wireframe.id
        };
        props.editWireframeImage(wireframe);
        handleClose();
        props.handleClose()
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
        <MenuItem onClick={handleClickOpen}>
        <ListItemIcon>
            <SwapHoriz fontSize="small" />
          </ListItemIcon>
          Change Wireframe Image
        </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Change Wireframe</DialogTitle>
        <form onSubmit={submitMultiple}>
          <DialogContent>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              helperText="Only Image Files (.PNG, .JPG, etc.) are supported"
              id="wireframe"
              type="file"
              onChange={e => setWireframes(e.target.files)}
              name="wireframe"
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

export default ProjectWireframeEditForm;
