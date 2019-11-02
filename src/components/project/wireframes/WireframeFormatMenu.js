import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Delete from "@material-ui/icons/Delete";
import ProjectWireframeTitleForm from "./ProjectWireframeTitleForm";
import ProjectWireframeEditForm from "./ProjectWireframeEditForm";

const WireframeFormatMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
        <ProjectWireframeTitleForm
          wireframe={props.wireframe}
          addWireframeTitle={props.addWireframeTitle}
          handleCloseMenu={handleClose}
        />
        <ProjectWireframeEditForm
          editWireframeImage={props.editWireframeImage}
          project={props.project}
          wireframe={props.wireframe}
          handleCloseMenu={handleClose}
        />
        <MenuItem onClick={() => props.deleteWireframe(props.wireframe.id)}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default WireframeFormatMenu;
