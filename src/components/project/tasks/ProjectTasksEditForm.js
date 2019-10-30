import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MenuItem, ListItemIcon } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";



const ProjectTasksEditForm = (props) => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");


  const submit = (e) => {
      e.preventDefault()
      const projectTask = {
        task: task,
    };
      props.editTask(projectTask, props.task.id);
      handleClose()
      props.handleCloseMenu()
    }

  const handleClickOpen = () => {
    setOpen(true);
    setTask(props.task)

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
        Change Task Status
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
        <form onSubmit={submit}>
          <DialogContent>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              helperText="Markdown is supported for Tasks. Otherwise, only spacing and line breaks will be rendered."
              rows="10"
              style={{width: "50em"}}
              id="task"
              label="Task"
              name="task"
              onChange={e => setTask(e.target.value)}
              value={task.task}
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

export default ProjectTasksEditForm
