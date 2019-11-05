import React from "react";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const DashboardRecentCollabRequest = (props) => {
  return (
    <React.Fragment>
      <Typography color="textSecondary" component="h3" variant="h6">
        Recent Pending Sent Invites
      </Typography>
      <List>
        {props.invites.map(invite => (
          <ListItem key={invite.id} divider>
            <ListItemAvatar>
              <Avatar src={invite.collaborator.profile_image}/>
            </ListItemAvatar>
            <ListItemText>
              {invite.collaborator.user.username}{" for "}<strong>{invite.project.title}</strong>
            </ListItemText>
            {/* <ListItemSecondaryAction>
              <ProjectTasksFormatMenu
                task={task}
                deleteTask={props.deleteTask}
                editTask={props.editTask}
                editTaskStatus={props.editTaskStatus}
              />
            </ListItemSecondaryAction> */}
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default DashboardRecentCollabRequest;
