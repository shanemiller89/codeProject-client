import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Add from "@material-ui/icons/Add";
import Edit from "@material-ui/icons/Edit";

const ProjectWireframeTitleForm = props => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const submit = e => {
    e.preventDefault();
    const wireframeTitle = {
      wireframe_title: title
    };
    props.addWireframeTitle(wireframeTitle, props.wireframe.id);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
    props.handleCloseMenu()
    setTitle(props.wireframe.wireframe_title);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.wireframe.wireframe_title === "" ? (
        <MenuItem onClick={handleClickOpen}>
          <ListItemIcon>
            <Add fontSize="small" />
          </ListItemIcon>
          Add Title
        </MenuItem>
      ) : (
        <MenuItem onClick={handleClickOpen}>
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          Edit Title
        </MenuItem>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Add Title</DialogTitle>
        <form onSubmit={submit}>
          <DialogContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              helperText="(i.e. 'HomePage', 'ProductPage', etc)"
              //   style={{width: "50em"}}
              id="title"
              label="Wireframe Title"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
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

export default ProjectWireframeTitleForm;
