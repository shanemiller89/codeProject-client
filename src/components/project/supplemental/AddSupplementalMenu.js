import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";

import { Button } from "@material-ui/core";
import ProjectSupplementalNoteForm from "./ProjectSupplmentalNoteForm";

const AddSupplementalMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Add Supplemental
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <ProjectSupplementalNoteForm
          project={props.project}
          addNote={props.addNote}
          handleCloseMenu={handleClose}
        />
        {/* <ProjectTasksEditForm
          task={props.task}
          editTask={props.editTask}
          handleCloseMenu={handleClose}
        />
        <ProjectTasksTypeForm
          task={props.task}
          editTaskStatus={props.editTaskStatus}
          handleCloseMenu={handleClose}
        />
        <MenuItem onClick={() => props.deleteTask(props.task.id)}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem> */}
      </Menu>
    </div>
  );
};

export default AddSupplementalMenu;
