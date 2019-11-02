import React from "react";
import { Grid } from "@material-ui/core";
import YellowAlert from "../../../widgets/YellowAlert";
import ProjectSupplementalImageListItem from "./ProjectSupplementalImageListItem";
import ProjectSupplementalFormatMenu from "./ProjectSupplementalFormatMenu";

const ProjectSupplementalImages = props => {
  return (
    <>
      {props.images.length === 0 ? (
        <YellowAlert message="You currently have no Supplemental Images associated with this Project." />
      ) : (
        <Grid container spacing={2}>
          {props.images.map(image => (
            <Grid key={image.id} container item xs={3}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <ProjectSupplementalImageListItem image={image} />
                <div style={{display: "flex"}}>
                  <h4>{image.title}</h4>
                  <ProjectSupplementalFormatMenu
                    project={props.project}
                    supplemental={image}
                    editSupplemental={props.editSupplemental}
                    deleteSupplemental={props.deleteSupplemental}
                  />
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ProjectSupplementalImages;
