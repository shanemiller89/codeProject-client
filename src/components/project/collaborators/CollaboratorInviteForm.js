import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import APIManager from "../../../util/APIManager"

const CollaboratorInviteForm = props => {
  const [open, setOpen] = useState(false);
  const [coders, setCoders] =useState([])
  const [collaborator, setCollaborator] = useState("")
  const [message, setMessage] = useState("");

//   const submit = e => {
//     e.preventDefault();
//     const projectTask = {
//       task: task,
//       project_id: props.project.id
//     };
//     props.addTasks(projectTask);
//     handleClose();
//   };

const searchCoders = () => {
    APIManager.getAll("coders?users=krys").then(coders => {
        setCoders(coders)
    })
}

useEffect(() => {
    searchCoders();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("Coders", coders)

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Collaborator
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Invite Collaborator</DialogTitle>
        <form>
          <DialogContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="search"
              id="title"
              label="Project Name"
              name="title"
              autoFocus
              onChange={e => setCollaborator(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              helperText="Send a message with your collaboration invitation"
              rows="10"
              style={{ width: "50em" }}
              id="message"
              label="Message"
              name="message"
              onChange={e => setMessage(e.target.value)}
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

export default CollaboratorInviteForm
