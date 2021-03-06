import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MenuItem, ListItemIcon, IconButton } from "@material-ui/core";
import Add from "@material-ui/icons/Add";

const TechnologyAddForm = props => {
  const [open, setOpen] = useState(false);
  const [technology, setTechnology] = useState("");

  const submit = e => {
    e.preventDefault();
    const projectTech = {
      technology: technology,
      project_id: props.project.id
    };
    props.addTechnology(projectTech);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClickOpen}
      >
        <Add size="large"/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Add Supplemental Technology</DialogTitle>
        <form onSubmit={submit}>
          <DialogContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              style={{ width: "50em" }}
              id="technology"
              label="Technology"
              name="technology"
              onChange={e => setTechnology(e.target.value)}
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

export default TechnologyAddForm;
