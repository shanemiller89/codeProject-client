import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import Code from "@material-ui/icons/Code";
import Delete from "@material-ui/icons/Delete";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import { Chip } from "@material-ui/core";
import TechnologyEditForm from "./TechnologyEditForm";

const TechnologyChip = props => {
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
        key={props.technology.id}
        className={props.classes_chips}
        color={
          props.technology.technology_type_id === 1 ? "primary" : "secondary"
        }
        size="medium"
        label={props.technology.technology}
        icon={<Code />}
        onDelete={handleClick}
        deleteIcon={<MoreHoriz />}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <TechnologyEditForm
          technology={props.technology}
          editTechnology={props.editTechnology}
          handleCloseMenu={handleClose}
        />
        {props.technology.technology_type_id === 2 ? (
          <MenuItem onClick={() => props.deleteTechnology(props.technology.id)}>
            <ListItemIcon>
              <Delete fontSize="small" />
            </ListItemIcon>
            Delete
          </MenuItem>
        ) : null}
      </Menu>
    </div>
  );
};

export default TechnologyChip;
