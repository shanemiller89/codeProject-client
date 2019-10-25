import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

export const ListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon fontSize="large" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmojiObjectsIcon fontSize="large" />
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
        <AccountCircleIcon fontSize="large" />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
  </div>
);
