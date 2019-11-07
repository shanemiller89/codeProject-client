import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ProjectSupplementalImageListItem = props => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" style={{background: "#414141", color: "white"}} onClick={handleClickOpen}>
        <img
          alt="placeholder"
          src={props.image.supplemental_image}
          style={{ width: 250, height: 250, }}
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
          <Button onClick={handleClose} style={{color: "#414141"}}>
            Cancel
          </Button>
        </DialogActions>
        <DialogContent>
          <img alt="placeholder" src={props.image.supplemental_image} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectSupplementalImageListItem;
