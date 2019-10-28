import React, {useState, useEffect} from "react";
import APIManager from "../../util/APIManager";
import ProjectDetailNav from "./ProjectDetailNav";

const Project = (props) => {
    const [project, setProject] = useState({});


    const getProject = () => {
        APIManager.get("projects", `${props.match.params.projectId}`).then(project => {
            setProject(project)
        })
    }

    useEffect(() => {
        getProject();
      }, []);

  return (
    <>
    <h1>{project.title}</h1>
    {project.private === true ? <h2>Private</h2> : <h2>Public</h2>}
    <h2>Repo: <a href={project.repo}>{project.repo}</a></h2>
    <div style={{marginLeft: "6em"}}>
    <ProjectDetailNav project={project}/>
    </div>
    </>
  );
};

export default Project;