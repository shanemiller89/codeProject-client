import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ProjectSupplementalNotes from "./ProjectSupplementalNotes";
import AddSupplementalMenu from "./AddSupplementalMenu";
import ProjectSupplementalCodes from "./ProjectSupplementalCodes";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ProjectSupplementals = props => {
  const [notes, setNotes] = useState("");
  const [codes, setCodes] = useState("");
  const [images, setImages] = useState("");

  const classes = useStyles();

  console.log("Notes", notes);

  return (
    <>
      <AddSupplementalMenu
        project={props.project}
        addSupplemental={props.addSupplemental}
      />
      <div className={classes.root}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Notes
          </Typography>
          <ProjectSupplementalNotes
            project={props.project}
            deleteSupplemental={props.deleteSupplemental}
            editSupplemental={props.editSupplemental}
            notes={props.supplementals.filter(
              note => note.supplemental_type_id === 1
            )}
          />
        </Paper>
      </div>
      <div className={classes.root}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Code Snippets
          </Typography>
          <ProjectSupplementalCodes
            project={props.project}
            deleteSupplemental={props.deleteSupplemental}
            editSupplemental={props.editSupplemental}
            codes={props.supplementals.filter(
              code => code.supplemental_type_id === 2
            )}
          />
        </Paper>
      </div>
      <div className={classes.root}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Images
          </Typography>
        </Paper>
      </div>
    </>
  );
};

export default ProjectSupplementals;
