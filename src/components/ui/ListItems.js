import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";

import DeveloperBoard from "@material-ui/icons/DeveloperBoard";
import { Badge } from "@material-ui/core";

const ListItems = (props) => (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <ViewQuilt style={{color: "white"}} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/projects">
      <ListItem button>
        <ListItemIcon>
          <DeveloperBoard style={{color: "white"}} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </Link>
    <Link to="/collab_invites">
      <ListItem button>
          <ListItemIcon>
        <Badge badgeContent={props.invites} color="secondary">
            <MailIcon style={{color: "white"}} fontSize="large" />
        </Badge>
          </ListItemIcon>
        <ListItemText primary="Invites" />
      </ListItem>
    </Link>
    <Link to="/profile">
      <ListItem button>
        <ListItemIcon>
        <AccountCircleIcon style={{color: "white"}} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
  </div>
);
export default ListItems
