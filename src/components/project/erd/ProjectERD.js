import React from "react";
import ProjectERDForm from "./ProjectERDForm";
import { Container } from "@material-ui/core";
import YellowAlert from "../../../widgets/YellowAlert";


const ProjectERD = (props) => {
  return (
    <>
    <ProjectERDForm project={props.project} addERD={props.addERD} />
        {props.project.erd_image === "" ? (
          <YellowAlert message="You currently have no ERD associated with this Project." />
        ) : (
          <img
            alt={`${props.project.title}-ERD`}
            src={props.project.erd_image}
          />
        )}
    </>
  );
};

export default ProjectERD;