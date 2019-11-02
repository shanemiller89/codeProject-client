import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FormControlLabel } from "@material-ui/core";
import ProjectSupplementalFormatMenu from "./ProjectSupplementalFormatMenu";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold
  }
}));

const ProjectSupplementalCodes = props => {
  const classes = useStyles();

  return (
    <>
      {props.codes.map(code => (
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
                    {code.title}
                  </Typography>
                }
                control={
                  <ProjectSupplementalFormatMenu
                    deleteSupplemental={props.deleteSupplemental}
                    editSupplemental={props.editSupplemental}
                    supplemental={code}
                  />
                }
              />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div style={{width: "100%"}}>
              <SyntaxHighlighter
                language={code.language}
                style={atomDark}
                showLineNumbers={true}
              >
                {code.text}
              </SyntaxHighlighter>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      ))}
    </>
  );
};

export default ProjectSupplementalCodes;
