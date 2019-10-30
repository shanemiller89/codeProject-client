import React, { useState, useEffect } from "react";
import APIManager from "../../util/APIManager";
import ProjectDetailNav from "./ProjectDetailNav";
import { Button } from "@material-ui/core";
import DeleteDialog from "../../widgets/DeleteDialog";

const Project = props => {
  const [project, setProject] = useState({});
  const [technologies, setTechnologies] = useState([]);
  const [wireframes, setWireframes] = useState([]);


  const getProject = () => {
    APIManager.get("projects", `${props.match.params.projectId}`).then(
      project => {
        setProject(project);
        setTechnologies(project.technologies);
        setWireframes(project.wireframes)
      }
    );
  };

  const editProjectOverview = editedItem => {
    APIManager.put("projects/overview", editedItem).then(() => {
      getProject();
    });
  };

  const addERD= editedItem => {
    APIManager.put("projects/erd", editedItem).then(() => {
      getProject();
    });
  };

  const addWireframe= item => {
    APIManager.post("wireframes", item).then(() => {
      getProject();
    });
  };

  const deleteProject = () => {
    APIManager.delete("projects", `${props.match.params.projectId}`).then(
      () => {
        props.history.push({
          pathname: "/projects"
        });
      }
    );
  };

  const deleteWireframe= id => {
    APIManager.delete("wireframes", id).then(() => {
      getProject();
    });
  };

  useEffect(() => {
    getProject();
  }, []);

  console.log("Project Wireframes", wireframes)

  return (
    <>
      <h1>{project.title}</h1>
      {project.private === true ? <h2>Private</h2> : <h2>Public</h2>}
      <h2>
        Repo: <a href={project.repo}>{project.repo}</a>
      </h2>
      <DeleteDialog
        deletedItem="Project"
        deleteFunction={deleteProject}
        id={props.match.params.projectId}
      />
      <div style={{ marginLeft: "6em" }}>
        <ProjectDetailNav
          project={project}
          technologies={technologies}
          wireframes={wireframes}
          editProjectOverview={editProjectOverview}
          addERD={addERD}
          addWireframe={addWireframe}
          deleteWireframe={deleteWireframe}
        />
      </div>
    </>
  );
};

export default Project;
