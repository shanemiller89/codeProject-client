import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import Code from "@material-ui/icons/Code";
import Delete from "@material-ui/icons/Delete";
import ProjectTasksTypeForm from "./ProjectTasksTypeForm";
import ProjectTasksEditForm from "./ProjectTasksEditForm";
import { Chip } from "@material-ui/core";

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
      <Chip
        key={props.primary.id}
        className={props.classes.chips}
        color="secondary"
        size="medium"
        label={props.primary.technology}
        icon={<Code />}
        onClick={handleClick}
      />
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
