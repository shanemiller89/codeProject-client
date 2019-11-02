import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Delete from "@material-ui/icons/Delete";
import ProjectTasksTypeForm from "./ProjectTasksTypeForm";
import ProjectTasksEditForm from "./ProjectTasksEditForm";

const ProjectTasksFormatMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHoriz />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <ProjectTasksEditForm
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
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProjectTasksFormatMenu;
