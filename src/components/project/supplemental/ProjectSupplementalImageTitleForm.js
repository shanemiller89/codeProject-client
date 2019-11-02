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

const ProjectSupplementalImageTitleForm = props => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const submit = e => {
    e.preventDefault();
    const supplementalImageTitle = {
      title: title,
      supplemental_id: props.image.id
    };
    props.editSupplemental(supplementalImageTitle, "updateimagetitle");
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
    props.handleCloseMenu()
    setTitle(props.image.title);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.image.title === "" ? (
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
        <DialogTitle id="form-dialog-title">Add Supplemental Image Title</DialogTitle>
        <form onSubmit={submit}>
          <DialogContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              helperText="(i.e. 'Logo', 'Folder Icon', etc.)"
              id="title"
              label="Supplemental Image Title"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
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

export default ProjectSupplementalImageTitleForm;
