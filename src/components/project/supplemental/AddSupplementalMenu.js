import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";

import { Button } from "@material-ui/core";
import ProjectSupplementalNoteForm from "./ProjectSupplmentalNoteForm";
import ProjectSupplementalCodeForm from "./ProjectSupplementalCodeForm";
import ProjectSupplementalImageForm from "./ProjectSupplementalImageForm";

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
        style={{background: "#ca3e47", color: "white", margin: "0 1em 1em 0"}}
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
          addSupplemental={props.addSupplemental}
          handleCloseMenu={handleClose}
        />
        <ProjectSupplementalCodeForm
          project={props.project}
          addSupplemental={props.addSupplemental}
          handleCloseMenu={handleClose}
        />
        <ProjectSupplementalImageForm
          project={props.project}
          addSupplemental={props.addSupplemental}
          handleCloseMenu={handleClose}
        />
      </Menu>
    </div>
  );
};

export default AddSupplementalMenu;
