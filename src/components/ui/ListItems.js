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

export const ListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <ViewQuilt fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/projects">
      <ListItem button>
        <ListItemIcon>
          <DeveloperBoard fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </Link>
    <Link to="/collab_invites">
      <ListItem button>
          <ListItemIcon>
        <Badge badgeContent={4} color="secondary">
            <MailIcon fontSize="large" />
        </Badge>
          </ListItemIcon>
        <ListItemText primary="Invites" />
      </ListItem>
    </Link>
    <Link to="/profile">
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
  </div>
);
