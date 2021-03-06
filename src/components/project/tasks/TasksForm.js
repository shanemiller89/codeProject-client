import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const TasksForm = (props) => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");


  const submit = (e) => {
      e.preventDefault()
      const projectTask = {
        task: task,
        project_id: props.project.id
    };
      props.addTasks(projectTask);
      handleClose()
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" style={{background: "#414141", color: "white", margin: "0 1em 1em 0"}} onClick={handleClickOpen}>
        Create Tasks
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Create Task</DialogTitle>
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

export default TasksForm
