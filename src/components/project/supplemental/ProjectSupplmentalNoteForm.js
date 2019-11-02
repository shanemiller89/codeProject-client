import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MenuItem, ListItemIcon } from "@material-ui/core";
import Note from "@material-ui/icons/Note";



const ProjectSupplementalNoteForm = (props) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");


  const submit = (e) => {
      e.preventDefault()
      const projectNote = {
        title: title,
        text: text,
        supplemental_type_id: 1,
        project_id: props.project.id
    };
      props.addNote(projectNote);
      handleClose()
    }

  const handleClickOpen = () => {
    setOpen(true);
    props.handleCloseMenu()

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>        
        <MenuItem onClick={handleClickOpen}>
          <ListItemIcon>
            <Note fontSize="small" />
          </ListItemIcon>
          Add Note
        </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Create Note</DialogTitle>
        <form onSubmit={submit}>
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
              multiline
              helperText="Markdown is supported for Supplemental Notes. Otherwise, only spacing and line breaks will be rendered."
              rows="10"
              id="text"
              label="Note"
              name="text"
              onChange={e => setText(e.target.value)}
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

export default ProjectSupplementalNoteForm
