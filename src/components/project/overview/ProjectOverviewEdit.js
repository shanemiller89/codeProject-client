import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Edit from "@material-ui/icons/Edit";


const ProjectOverviewEdit = props => {
  const [open, setOpen] = useState(false);
  const [overview, setOverview] = useState("");

  const submit = e => {
    e.preventDefault();
    const editedOverview = {
      overview: overview,
      id: props.project.id
    };
    props.editProjectOverview(editedOverview);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
    setOverview(props.project.overview);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        startIcon={<Edit />}
        style={{ color: "white", background: "#414141", marginLeft: "58em" }}
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Edit Overview</DialogTitle>
        <form onSubmit={submit}>
          <DialogContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              helperText="Markdown is supported for the Project Overview Description. Otherwise, only spacing and line breaks will be rendered."
              rows="30"
              style={{ width: "50em" }}
              id="overview"
              label="Project Overview Description"
              name="overview"
              value={overview}
              onChange={e => setOverview(e.target.value)}
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

export default ProjectOverviewEdit;
