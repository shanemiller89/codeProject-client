import React, { useState } from "react";

import * as firebase from "firebase/app";
import "firebase/storage";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Image from "@material-ui/icons/Image";
import { MenuItem, ListItemIcon } from "@material-ui/core";

const ProjectSupplementalImageForm = props => {
  const [open, setOpen] = useState(false);
  const [supplementalImages, setImage] = useState("");
  const [title, setTitle] = useState("");

  const storageRef = firebase.storage().ref("project_supplemental_images");

  const submit = (e, supplementalImage) => {
    e.preventDefault();

    const ref = storageRef.child(
      `${props.project.title}-supplemental-${supplementalImage.name}`
    );

    return ref
      .put(supplementalImage)
      .then(data => data.ref.getDownloadURL())
      .then(imageUrl => {
        const newImage = {
          title: title,
          supplemental_image: imageUrl,
          supplemental_type_id: 3,
          project_id: props.project.id
        };
        props.addSupplemental(newImage);
        handleClose();
      });
  };

  const submitMultiple = e => {
    e.preventDefault();

    Array.from(supplementalImages).forEach(supplementalImage => (
      submit(e, supplementalImage)
    ))
  }

  const handleClickOpen = () => {
    setOpen(true);
    props.handleCloseMenu();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>
        <ListItemIcon>
          <Image fontSize="small" />
        </ListItemIcon>
        Add Image
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Supplemental Image</DialogTitle>
        <form onSubmit={submitMultiple}>
          <DialogContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              helperText="Reference Title"
              id="title"
              label="Title"
              name="title"
              onChange={e => setTitle(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              helperText="Only Image Files (.PNG, .JPG, etc.) are supported"
              id="supplementalImage"
              type="file"
              onChange={e => setImage(e.target.files)}
              name="supplementalImage"
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

export default ProjectSupplementalImageForm;
