import React, { useState, useEffect } from "react";
import APIManager from "../../util/APIManager";
import { Link } from "react-router-dom";
import ProjectDetailNav from "./ProjectDetailNav";
import { Button, Typography } from "@material-ui/core";
import DeleteDialog from "../../widgets/DeleteDialog";
import ProjectEditForm from "./ProjectEditForm";
import CollaboratorInviteForm from "./collaborators/CollaboratorInviteForm";
import UserContext from "../../context/UserContext";
import GetApp from "@material-ui/icons/GetApp";

const Project = props => {
  const [project, setProject] = useState({});
  const [technologies, setTechnologies] = useState([]);
  const [wireframes, setWireframes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [supplementals, setSupplementals] = useState([]);
  const [collaborators, setCollaborators] = useState([]);

  const getProject = () => {
    APIManager.get("projects", `${props.match.params.projectId}`).then(
      project => {
        setProject(project);
        setTechnologies(project.technologies);
        setWireframes(project.wireframes);
        setTasks(project.tasks);
        setSupplementals(project.supplementals);
        setCollaborators(project.collaborators);
      }
    );
  };
  // --EDIT FUNCTIONS -- //

  const editProject = (item, id) => {
    APIManager.put(`projects/${id}`, item).then(() => {
      getProject();
    });
  };

  const editProjectOverview = editedItem => {
    APIManager.put("projects/overview", editedItem).then(() => {
      getProject();
    });
  };

  const editTechnology = (item, id) => {
    APIManager.put(`technologies/${id}`, item).then(() => {
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

  const editTask = (item, id) => {
    APIManager.put(`tasks/${id}`, item).then(() => {
      getProject();
    });
  };

  const editSupplemental = (editedItem, editAction) => {
    APIManager.put(`supplementals/${editAction}`, editedItem).then(() => {
      getProject();
    });
  };

  // --ADD FUNCTIONS -- //

  const createInvite = item => {
    APIManager.post("collaboratorinvites", item);
  };

  const addTechnology = item => {
    APIManager.post("technologies", item).then(() => {
      getProject();
    });
  };

  const addERD = editedItem => {
    APIManager.put("projects/erd", editedItem).then(() => {
      getProject();
    });
  };

  const addWireframe = item => {
    APIManager.post("wireframes", item).then(() => {
      getProject();
    });
  };

  const addWireframeTitle = (item, id) => {
    APIManager.put(`wireframes/${id}`, item).then(() => {
      getProject();
    });
  };

  const addTasks = item => {
    APIManager.post("tasks", item).then(() => {
      getProject();
    });
  };
  const addSupplemental = item => {
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

  const deleteWireframe = id => {
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

  const deleteCollaborator = data => {
    APIManager.put("projects/collaborator", data).then(() => {
      getProject();
    });
  };

  const deleteTechnology = id => {
    APIManager.delete("technologies", id).then(() => {
      getProject();
    });
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <UserContext.Consumer>
      {context => (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "3em"
            }}
          >
            <div>
              <Typography gutterBottom variant="h1">
                {project.title}
              </Typography>

              {project.private === true ? (
                <div
                  style={{
                    border: "2px solid #ca3e47",
                    borderRadius: 5,
                    color: "#ca3e47",
                    width: 70,
                    fontSize: 18,
                    padding: 5
                  }}
                >
                  Private
                </div>
              ) : (
                <div
                  style={{
                    border: "2px solid #ca3e47",
                    borderRadius: 5,
                    color: "#ca3e47",
                    width: 65,
                    fontSize: 18,
                    padding: 5
                  }}
                >
                  Public
                </div>
              )}
              <h2>
                Repo:{" "}
                <a style={{ color: "#ca3e47" }} href={project.repo}>
                  {project.repo}
                </a>
              </h2>
            </div>
            <div>
              <div style={{ margin: "1em" }}>
                <ProjectEditForm project={project} editProject={editProject} />
              </div>
              <div style={{ margin: "1em" }}>
                {context.user.id === project.owner_id ? (
                  <DeleteDialog
                    deletedItem="Project"
                    deleteFunction={deleteProject}
                    id={props.match.params.projectId}
                  />
                ) : null}
              </div>
              <div style={{ margin: "1em" }}>
                {context.user.id === project.owner_id ? (
                  project.private === true ? null : (
                    <CollaboratorInviteForm
                      project={project}
                      createInvite={createInvite}
                    />
                  )
                ) : null}
              </div>
              <div style={{ margin: "1em" }}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/projectPDF/${project.id}`}
                >
                  <Button
                    variant="contained"
                    startIcon={<GetApp />}
                    style={{
                      background: "#414141",
                      color: "white"
                    }}
                  >
                    Export PDF
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "6em" }}>
            <ProjectDetailNav
              project={project}
              technologies={technologies}
              wireframes={wireframes}
              tasks={tasks}
              supplementals={supplementals}
              collaborators={collaborators}
              editProjectOverview={editProjectOverview}
              editWireframeImage={editWireframeImage}
              editTechnology={editTechnology}
              editTask={editTask}
              editTaskStatus={editTaskStatus}
              editSupplemental={editSupplemental}
              addTechnology={addTechnology}
              addERD={addERD}
              addWireframe={addWireframe}
              addWireframeTitle={addWireframeTitle}
              addTasks={addTasks}
              addSupplemental={addSupplemental}
              deleteWireframe={deleteWireframe}
              deleteTask={deleteTask}
              deleteSupplemental={deleteSupplemental}
              deleteCollaborator={deleteCollaborator}
              deleteTechnology={deleteTechnology}
            />
          </div>
        </>
      )}
    </UserContext.Consumer>
  );
};

export default Project;
