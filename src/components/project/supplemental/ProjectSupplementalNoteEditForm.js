import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MenuItem, ListItemIcon } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";



const ProjectSupplementalNoteEditForm = (props) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");


  const submit = (e) => {
      e.preventDefault()
      const projectNote = {
        title: title,
        text: text,
        supplemental_id: props.note.id
    };
      props.editSupplemental(projectNote,"updatenote");
      handleClose()
    }

  const handleClickOpen = () => {
    setOpen(true);
    props.handleCloseMenu()
    setTitle(props.note.title)
    setText(props.note.text)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>        
        <MenuItem onClick={handleClickOpen}>
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          Edit Note
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
              value={title}
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
              value={text}
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

export default ProjectSupplementalNoteEditForm
