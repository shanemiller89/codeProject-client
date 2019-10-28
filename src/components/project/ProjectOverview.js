import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Code from "@material-ui/icons/Code";



const ReactDOM = require("react-dom");
const ReactMarkdown = require("react-markdown");

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

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <h1>Overview</h1>
          <Paper elevation={3} className={classes.overview}>
            {/* <Typography component="p">
          {props.project.overview}
        </Typography> */}
            <ReactMarkdown source={props.project.overview} escapeHtml={false} />
          </Paper>
        </div>
        <div>
          <div>
            <h1>Technologies</h1>
            <Paper elevation={3} className={classes.technologies}>
              <Typography variant="h6" component="h5">
                Primary Technology:
                {props.technologies
                  .filter(
                    technology =>
                      technology.technology_type ===
                      "http://localhost:8000/technologytypes/1"
                  )
                  .map(primary => (
                    <Chip
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
                  .filter(
                    technology =>
                      technology.technology_type ===
                      "http://localhost:8000/technologytypes/2"
                  )
                  .map(primary => (
                    <Chip
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
            <h1>Collaborators</h1>
            <Paper elevation={3} className={classes.collaborators}>
              {/* <Typography component="p">
          {props.project.overview}
        </Typography> */}
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectOverview;
