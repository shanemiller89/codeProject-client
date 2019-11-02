import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import MoreVert from "@material-ui/icons/MoreVert";
import Delete from "@material-ui/icons/Delete";
import ProjectSupplementalNoteEditForm from "./ProjectSupplementalNoteEditForm";
import ProjectSupplementalCodeEditForm from "./ProjectSupplementalCodeEditForm";

const ProjectSupplementalFormatMenu = props => {
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
        <MoreVert />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      {props.supplemental.supplemental_type_id === 1 ?
        <ProjectSupplementalNoteEditForm
          note={props.supplemental}
          editSupplemental={props.editSupplemental}
          handleCloseMenu={handleClose}
        />
        :
        <ProjectSupplementalCodeEditForm
        editSupplemental={props.editSupplemental}
        code={props.supplemental}
        handleCloseMenu={handleClose}
        />}
        <MenuItem onClick={() => props.deleteSupplemental(props.supplemental.id)}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProjectSupplementalFormatMenu;
