import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Add from "@material-ui/icons/Add";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";




const WireframeFormatMenu = (props) => {
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
      > {props.wireframe.wireframe_title === "" ?
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <Add fontSize="small" />
          </ListItemIcon>
          Add Title
        </MenuItem>
      :
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          Edit Title
        </MenuItem>
      
      }
        <MenuItem onClick={() => props.deleteWireframe(props.wireframe.id)}>
        <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>

      </Menu>
    </div>
  );
}

export default WireframeFormatMenu