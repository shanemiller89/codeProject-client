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

const ProjectSupplementalImageEditForm = props => {
    const [open, setOpen] = useState(false);
    const [supplementalImages, setImages] = useState("");
  
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
            supplemental_image: imageUrl,
            supplemental_id: props.image.id
          };
          props.editSupplemental(newImage, "updateimage" );
          handleClose();
        });
    };
  
    const submitMultiple = e => {
      e.preventDefault();
  
      Array.from(supplementalImages).forEach(supplementalImage =>
        submit(e, supplementalImage)
      );
    };
  
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
          <SwapHoriz fontSize="small" />
        </ListItemIcon>
        Change Supplemental Image
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Change Supplemental Image</DialogTitle>
        <form onSubmit={submitMultiple}>
          <DialogContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              helperText="Only Image Files (.PNG, .JPG, etc.) are supported"
              id="supplemental_images"
              type="file"
              onChange={e => setImages(e.target.files)}
              name="supplemental_images"
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

export default ProjectSupplementalImageEditForm;
