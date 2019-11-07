import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ProjectSupplementalNotes from "./ProjectSupplementalNotes";
import AddSupplementalMenu from "./AddSupplementalMenu";
import ProjectSupplementalCodes from "./ProjectSupplementalCodes";
import ProjectSupplementalImages from "./ProjectSupplementalImages";
import SupplementalFilter from "./SupplementalFilter";

import Note from "@material-ui/icons/Note";
import Code from "@material-ui/icons/Code";
import Image from "@material-ui/icons/Image";



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ProjectSupplementals = props => {
  const [noteView, setNoteView] = useState(false)
  const [codeView, setCodeView] = useState(false)
  const [imageView, setImageView] = useState(false)



  const classes = useStyles();

  return (
    <>
    <div style={{display: "flex"}}>
      <AddSupplementalMenu
        project={props.project}
        addSupplemental={props.addSupplemental}
      />
      <SupplementalFilter 
      setNoteView={setNoteView}
      setCodeView={setCodeView}
      setImageView={setImageView}
      />
      </div>
      <div className={classes.root} hidden={noteView}>
        <Paper elevation={3} className={classes.root}>
          <Typography variant="h4" component="h3">
            <Note style={{color: "#ca3e47"}}/>Notes
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
      <div className={classes.root} hidden={codeView}>
        <Paper elevation={3} className={classes.root}>
          <Typography variant="h4" component="h3">
          <Code style={{color: "#ca3e47"}}/>Code Snippets
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
      <div className={classes.root} hidden={imageView}>
        <Paper elevation={3} className={classes.root}>
          <Typography variant="h4" component="h3">
          <Image style={{color: "#ca3e47"}}/>Images
          </Typography>
          <ProjectSupplementalImages
            project={props.project}
            deleteSupplemental={props.deleteSupplemental}
            editSupplemental={props.editSupplemental}
            images={props.supplementals.filter(
              image => image.supplemental_type_id === 3
            )}
          />
        </Paper>
      </div>
    </>
  );
};

export default ProjectSupplementals;
