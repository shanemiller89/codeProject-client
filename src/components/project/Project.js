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
  const [supplementals, setSupplementals] = useState([]);




  const getProject = () => {
    APIManager.get("projects", `${props.match.params.projectId}`).then(
      project => {
        setProject(project);
        setTechnologies(project.technologies);
        setWireframes(project.wireframes)
        setTasks(project.tasks)
        setSupplementals(project.supplementals)


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

  const editSupplemental= (editedItem, editAction) => {
    APIManager.put(`supplementals/${editAction}`, editedItem).then(() => {
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
  const addSupplemental= item => {
    APIManager.post("supplementals", item).then(() => {
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

  const deleteSupplemental = id => {
    APIManager.delete("supplementals", id).then(() => {
      getProject();
    });
  };


  useEffect(() => {
    getProject();
  }, []);

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
          supplementals={supplementals}
          editProjectOverview={editProjectOverview}
          editWireframeImage={editWireframeImage}
          editTask={editTask}
          editTaskStatus={editTaskStatus}
          editSupplemental={editSupplemental}
          addERD={addERD}
          addWireframe={addWireframe}
          addWireframeTitle={addWireframeTitle}
          addTasks={addTasks}
          addSupplemental={addSupplemental}
          deleteWireframe={deleteWireframe}
          deleteTask={deleteTask}
          deleteSupplemental={deleteSupplemental}
        />
      </div>
    </>
  );
};

export default Project;
