import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import MoreHoriz from "@material-ui/icons/MoreHoriz";

import MoreVert from "@material-ui/icons/MoreVert";
import Delete from "@material-ui/icons/Delete";
import ProjectSupplementalNoteEditForm from "./ProjectSupplementalNoteEditForm";
import ProjectSupplementalCodeEditForm from "./ProjectSupplementalCodeEditForm";
import ProjectSupplementalImageTitleForm from "./ProjectSupplementalImageTitleForm";
import ProjectSupplementalImageEditForm from "./ProjectSupplementalImageEditForm";

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
        {props.supplemental.supplemental_type_id === 3 ? (
          <MoreHoriz />
        ) : (
          <MoreVert />
        )}
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.supplemental.supplemental_type_id === 1 ? (
          <ProjectSupplementalNoteEditForm
            note={props.supplemental}
            editSupplemental={props.editSupplemental}
            handleCloseMenu={handleClose}
          />
        ) : props.supplemental.supplemental_type_id === 2 ? (
          <ProjectSupplementalCodeEditForm
            editSupplemental={props.editSupplemental}
            code={props.supplemental}
            handleCloseMenu={handleClose}
          />
        ) : (
          <div>
            <ProjectSupplementalImageTitleForm
              editSupplemental={props.editSupplemental}
              image={props.supplemental}
              handleCloseMenu={handleClose}
            />
            <ProjectSupplementalImageEditForm
              project={props.project}
              editSupplemental={props.editSupplemental}
              image={props.supplemental}
              handleCloseMenu={handleClose}
            />
          </div>
        )}
        <MenuItem
          onClick={() => props.deleteSupplemental(props.supplemental.id)}
        >
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
