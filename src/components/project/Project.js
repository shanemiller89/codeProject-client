import React, {useState, useEffect} from "react";
import APIManager from "../../util/APIManager";
import ProjectDetailNav from "./ProjectDetailNav";
import { Button } from "@material-ui/core";
import DeleteDialog from "../../widgets/DeleteDialog";

const Project = (props) => {
    const [project, setProject] = useState({});
    const [technologies, setTechnologies] = useState([]);



    const getProject = () => {
        APIManager.get("projects", `${props.match.params.projectId}`).then(project => {
            setProject(project)
            setTechnologies(project.technologies)
        })
    }

    const deleteProject = () => {
        APIManager.delete("projects", `${props.match.params.projectId}`).then(() => {
            props.history.push({
                pathname: "/projects"
              });
        })
    }

    useEffect(() => {
        getProject();
      }, []);

      console.log("Tech", technologies)
  return (
    <>
    <h1>{project.title}</h1>
    {project.private === true ? <h2>Private</h2> : <h2>Public</h2>}
    <h2>Repo: <a href={project.repo}>{project.repo}</a></h2>
    <DeleteDialog deletedItem="Project" deleteFunction={deleteProject} id={props.match.params.projectId}/>
    <div style={{marginLeft: "6em"}}>
    <ProjectDetailNav project={project} technologies={technologies}/>
    </div>
    </>
  );
};

export default Project;