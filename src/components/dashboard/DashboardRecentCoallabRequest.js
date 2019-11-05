import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import YellowAlert from "../../widgets/YellowAlert";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  alert: {
    marginTop: "6em"
  }
});

const DashboardRecentCollabRequest = props => {
  const classes = useStyles();


  return (
    <React.Fragment>
      <Typography color="textSecondary" component="h3" variant="h6">
        Recent Pending Sent Invites
      </Typography>
      {props.invites.length === 0 ? (
        <div className={classes.alert}>
          <YellowAlert message="You currently have no recent pending sent invites." />
        </div>
      ) : (
        <List>
          {props.invites.map(invite => (
            <ListItem key={invite.id} divider>
              <ListItemAvatar>
                <Avatar src={invite.collaborator.profile_image} />
              </ListItemAvatar>
              <ListItemText>
                {invite.collaborator.user.username}
                {" for "}
                <strong>{invite.project.title}</strong>
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
      )}
    </React.Fragment>
  );
};

export default DashboardRecentCollabRequest;
