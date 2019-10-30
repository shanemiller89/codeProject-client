import React, { useState, useEffect } from "react";
import APIManager from "../../util/APIManager";
import ProjectDetailNav from "./ProjectDetailNav";
import { Button } from "@material-ui/core";
import DeleteDialog from "../../widgets/DeleteDialog";

const Project = props => {
  const [project, setProject] = useState({});
  const [technologies, setTechnologies] = useState([]);
  const [wireframes, setWireframes] = useState([]);
  const [tasks, setTasks] = useState([]);



  const getProject = () => {
    APIManager.get("projects", `${props.match.params.projectId}`).then(
      project => {
        setProject(project);
        setTechnologies(project.technologies);
        setWireframes(project.wireframes)
        setTasks(project.tasks)

      }
    );
  };
// --EDIT FUNCTIONS -- //

  const editProjectOverview = editedItem => {
    APIManager.put("projects/overview", editedItem).then(() => {
      getProject();
    });
  };

  const editWireframeImage = editedItem => {
    APIManager.put("wireframes/updatewireframe", editedItem).then(() => {
      getProject();
    });
  };

  const editTaskStatus = editedItem => {
    APIManager.put("tasks/tasktype", editedItem).then(() => {
      getProject();
    });
  };

  const editTask= (item, id) => {
    APIManager.put(`tasks/${id}`, item).then(() => {
      getProject();
    });
  };

  // --ADD FUNCTIONS -- //


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

  const addWireframeTitle= (item, id) => {
    APIManager.put(`wireframes/${id}`, item).then(() => {
      getProject();
    });
  };

  const addTasks= item => {
    APIManager.post("tasks", item).then(() => {
      getProject();
    });
  };

  // --DELETE FUNCTIONS -- //


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

  const deleteTask = id => {
    APIManager.delete("tasks", id).then(() => {
      getProject();
    });
  };


  useEffect(() => {
    getProject();
  }, []);

console.log("Wireframes", wireframes)
console.log("Tasks", tasks)
console.log("Technologies", technologies)

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
          tasks={tasks}
          editProjectOverview={editProjectOverview}
          editWireframeImage={editWireframeImage}
          editTask={editTask}
          editTaskStatus={editTaskStatus}
          addERD={addERD}
          addWireframe={addWireframe}
          addWireframeTitle={addWireframeTitle}
          addTasks={addTasks}
          deleteWireframe={deleteWireframe}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
};

export default Project;
