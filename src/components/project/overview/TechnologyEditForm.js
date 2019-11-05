import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MenuItem, ListItemIcon } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";



const TechnologyEditForm = (props) => {
  const [open, setOpen] = useState(false);
  const [technology, setTechnology] = useState("");


  const submit = (e) => {
      e.preventDefault()
      const projectTech = {
        technology: technology,
    };
      props.editTechnology(projectTech, props.technology.id);
      handleClose()
      props.handleCloseMenu()
    }

  const handleClickOpen = () => {
    setOpen(true);
    setTechnology(props.technology)

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
        Edit Task
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Edit Technology</DialogTitle>
        <form onSubmit={submit}>
          <DialogContent>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              style={{width: "50em"}}
              id="task"
              label="Technology"
              name="task"
              onChange={e => setTechnology(e.target.value)}
              value={technology.technology}
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

export default TechnologyEditForm
