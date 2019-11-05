import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Description from "@material-ui/icons/Description";
import Computer from "@material-ui/icons/Computer";

import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import ProjectOverviewEdit from "./ProjectOverviewEdit";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  ListItemSecondaryAction
} from "@material-ui/core";
import YellowAlert from "../../../widgets/YellowAlert";
import UserContext from "../../../context/UserContext";

// const ReactDOM = require("react-dom");
const ReactMarkdown = require("react-markdown");
const htmlParser = require("react-markdown/plugins/html-parser");

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  overview: {
    width: "64em",
    marginRight: "2em",
    padding: theme.spacing(3, 2)
  },
  technologies: {
    width: "30em",
    padding: theme.spacing(3, 2)
  },
  collaborators: {
    width: "30em",
    padding: theme.spacing(3, 2)
  },
  chips: {
    margin: ".25em"
  }
}));

const ProjectOverview = props => {
  const classes = useStyles();

  const parseHtml = htmlParser({
    isValidNode: node => node.type !== "script",
    processingInstructions: [
      /* ... */
    ]
  });

  const removeCollaborator = (project, collab) => {
    const data = {
      project_id: project,
      collaborator_id: collab
    };
    props.deleteCollaborator(data);
  };

  console.log("Collabs", props.collaborators);

  return (
    <UserContext>
      {context => (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <h1>
            <Description />
            Overview
          </h1>
          <Paper elevation={3} className={classes.overview}>
            {/* <Typography component="p">
          {props.project.overview}
        </Typography> */}
            <ProjectOverviewEdit
              project={props.project}
              editProjectOverview={props.editProjectOverview}
            />
            <div>
              <ReactMarkdown
                source={props.project.overview}
                escapeHtml={false}
                astPlugins={[parseHtml]}
              />
            </div>
          </Paper>
        </div>
        <div>
          <div>
            <h1>
              <Computer />
              Technologies
            </h1>
            <Paper elevation={3} className={classes.technologies}>
              <Typography variant="h6" component="h5">
                Primary Technology:
                {props.technologies
                  .filter(technology => technology.technology_type_id === 1)
                  .map(primary => (
                    <Chip
                      key={primary.id}
                      className={classes.chips}
                      color="primary"
                      size="medium"
                      label={primary.technology}
                      icon={<Code />}
                    />
                  ))}
              </Typography>
              <br />
              <Typography variant="h6" component="h5">
                Supplemental Technologies:
                {props.technologies
                  .filter(technology => technology.technology_type_id === 2)
                  .map(primary => (
                    <Chip
                      key={primary.id}
                      className={classes.chips}
                      color="secondary"
                      size="medium"
                      label={primary.technology}
                      icon={<Code />}
                    />
                  ))}
              </Typography>
            </Paper>
          </div>
          <div>
            <h1>
              <Group />
              Collaborators
            </h1>
            <Paper elevation={3} className={classes.collaborators}>
              <List>
                {props.project.private === true ?
                <YellowAlert message="Only Public projects may have collaborators." />
                :
                  props.collaborators.length === 0 ? (
                  <YellowAlert message="You currently have no collaborators for this project." />
                ) : (
                  props.collaborators.map(collaborator => (
                    <ListItem key={collaborator.id} divider>
                      <ListItemAvatar>
                        <Avatar
                          src={collaborator.profile_image}
                          alt={collaborator.user.username}
                          style={{
                            margin: 10,
                            width: 45,
                            height: 45
                          }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={<strong>{collaborator.user.username}</strong>}
                        secondary={`Primary Language: ${collaborator.primary_language}`}
                      />
                      <ListItemSecondaryAction>
                        {context.user.id === props.project.owner_id || context.user.id === collaborator.id ?
                        <Button
                          size="small"
                          onClick={() =>
                            removeCollaborator(
                              props.project.id,
                              collaborator.id
                            )
                          }
                        >
                          Remove
                        </Button>
                        : null
                        }
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))
                )}
              </List>
            </Paper>
          </div>
        </div>
      </div>
    </>
    )}
    </UserContext>
  );
};

export default ProjectOverview;
