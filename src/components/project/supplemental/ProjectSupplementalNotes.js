import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, FormControlLabel } from "@material-ui/core";
import ProjectSupplementalFormatMenu from "./ProjectSupplementalFormatMenu";

const ReactMarkdown = require("react-markdown");

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold
  }
}));

const ProjectSupplementalNotes = props => {
  const classes = useStyles();

  return (
    <>
      {props.notes.map(note => (
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}
                label={
                  <Typography className={classes.heading}>
                    {note.title}
                  </Typography>
                }
                control={
                  <ProjectSupplementalFormatMenu
                    deleteSupplemental={props.deleteSupplemental}
                    editSupplemental={props.editSupplemental}
                    supplemental={note}
                  />
                }
              />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div style={{width: "100%"}}>
              <ReactMarkdown source={note.text} escapeHtml={true} />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      ))}
    </>
  );
};

export default ProjectSupplementalNotes;
