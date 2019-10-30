import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ProjectWireframeListItem = props => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <img
          alt="placeholder"
          src={props.wireframe.wireframe_image}
          style={{ width: 350, height: 350 }}
        />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
        <DialogContent>
          <img alt="placeholder" src={props.wireframe.wireframe_image} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectWireframeListItem;
