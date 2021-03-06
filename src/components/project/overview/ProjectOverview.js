import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
import TechnologyChip from "./TechnologyChip";
import TechnologyAddForm from "./TechnologyAddForm";

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
              <div style={{ display: "flex", alignItems: "center" }}>
                <Description style={{ color: "#ca3e47", fontSize: "3em" }} />
                <Typography gutterBottom variant="h4">
                  Overview
                </Typography>
                <ProjectOverviewEdit
                  project={props.project}
                  editProjectOverview={props.editProjectOverview}
                />
              </div>
              <Paper elevation={3} className={classes.overview}>
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
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Computer style={{ color: "#ca3e47", fontSize: "3em" }} />
                  <Typography gutterBottom variant="h4">
                    Technologies
                  </Typography>
                </div>
                <Paper elevation={3} className={classes.technologies}>
                  <Typography variant="h6" component="h5">
                    Primary Technology
                    {props.technologies
                      .filter(technology => technology.technology_type_id === 1)
                      .map(technology => (
                        <TechnologyChip
                          technology={technology}
                          editTechnology={props.editTechnology}
                          classes_chips={classes.chips}
                        />
                      ))}
                  </Typography>
                  <br />
                  <div style={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h6" component="h5">
                      Supplemental Technologies
                    </Typography>
                    <TechnologyAddForm
                      project={props.project}
                      addTechnology={props.addTechnology}
                    />
                  </div>
                  {props.technologies
                    .filter(technology => technology.technology_type_id === 2)
                    .map(technology => (
                      <TechnologyChip
                        technology={technology}
                        editTechnology={props.editTechnology}
                        classes_chips={classes.chips}
                        deleteTechnology={props.deleteTechnology}
                      />
                    ))}
                </Paper>
              </div>
              <br />
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Group style={{ color: "#ca3e47", fontSize: "3em" }} />
                  <Typography gutterBottom variant="h4">
                    Collaborators
                  </Typography>
                </div>
                <Paper elevation={3} className={classes.collaborators}>
                  <List>
                    {props.project.private === true ? (
                      <YellowAlert message="Only Public projects may have collaborators." />
                    ) : props.collaborators.length === 0 ? (
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
                            primary={
                              <strong>{collaborator.user.username}</strong>
                            }
                            secondary={`Primary Language: ${collaborator.primary_language}`}
                          />
                          <ListItemSecondaryAction>
                            {context.user.id === props.project.owner_id ||
                            context.user.id === collaborator.id ? (
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
                            ) : null}
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
