import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";

import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

export const ListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Link to="/">
          <DashboardIcon fontSize="large" />
        </Link>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Link to="/projects">
          <EmojiObjectsIcon fontSize="large" />
        </Link>
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MailIcon fontSize="large" />
      </ListItemIcon>
      <ListItemText primary="Invites" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Link to="/profile">
          <AccountCircleIcon fontSize="large" />
        </Link>
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
  </div>
);
