import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
import SwapCalls from "@material-ui/icons/SwapCalls";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }
}));

const ProjectTasksTypeForm = (props) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const submit = (e) => {
    e.preventDefault()
    const editedStatus = {
      task_type_id: parseInt(value),
      id: props.task.id
    };
    props.editTaskStatus(editedStatus);
    handleClose()
    props.handleCloseMenu()
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>
        <ListItemIcon>
          <SwapCalls fontSize="small" />
        </ListItemIcon>
        Change Task Status
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
      >
        <DialogTitle id="form-dialog-title">Task Status</DialogTitle>
        
        <form onSubmit={submit}>
          <DialogContent>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Incoming"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="In Progress"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="In Review"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="Completed"
                />
              </RadioGroup>
            </FormControl>
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

export default ProjectTasksTypeForm;
