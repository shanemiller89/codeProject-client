import React from "react";
import ProjectWireframeForm from "./ProjectWireframeForm";
import ProjectWireframeListItem from "./ProjectWireframeListItem";
import WireframeFormatMenu from "./WireframeFormatMenu";
import { Grid } from "@material-ui/core";
import YellowAlert from "../../../widgets/YellowAlert";

const ProjectWireframes = props => {
  return (
    <>
      <ProjectWireframeForm
        project={props.project}
        addWireframe={props.addWireframe}
      />
      {props.wireframes.length === 0 ? (
          <YellowAlert message="You currently have no Wireframes associated with this Project."/>
      ) : (
        <Grid container spacing={2}>
          {props.wireframes.map(wireframe => (
            <Grid container item xs={3}>
              <ProjectWireframeListItem wireframe={wireframe} />
              <h4>{wireframe.wireframe_title}</h4>
              <WireframeFormatMenu
                project={props.project}
                wireframe={wireframe}
                deleteWireframe={props.deleteWireframe}
                addWireframeTitle={props.addWireframeTitle}
                editWireframeImage={props.editWireframeImage}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ProjectWireframes;
