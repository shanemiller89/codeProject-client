import React, { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Assignment from "@material-ui/icons/Assignment";

import TasksForm from "./TasksForm";
import YellowAlert from "../../../widgets/YellowAlert";
import ProjectTasksFormatMenu from "./ProjectTasksFormatMenu";
import TasksFilter from "./TasksFilter";
import { Paper } from "@material-ui/core";

const ReactMarkdown = require("react-markdown");

const Tasks = props => {
  const [incomingView, setIncomingView] = useState(false);
  const [inProgessView, setInProgressView] = useState(false);
  const [inReviewView, setInReviewView] = useState(false);
  const [completedView, setCompletedView] = useState(false);

  return (
    <>
      <div style={{ display: "flex" }}>
        <TasksForm project={props.project} addTasks={props.addTasks} />
        <TasksFilter
          setIncomingView={setIncomingView}
          setInProgressView={setInProgressView}
          setInReviewView={setInReviewView}
          setCompletedView={setCompletedView}
        />
      </div>
      <div hidden={incomingView}>
        <div>
          <Paper elevation={3} style={{ padding: "1em", margin: "1em" }}>
        <Typography variant="h2" component="h3">
          Incoming
        </Typography>
            <List>
              {props.tasks.filter(tasks => tasks.task_type_id === 1).length ===
              0 ? (
                <YellowAlert message="You currently have no Incoming Tasks associated with this Project." />
              ) : (
                props.tasks
                  .filter(tasks => tasks.task_type_id === 1)
                  .map(task => (
                    <ListItem key={task.id} divider>
                      <ListItemAvatar>
                        <Avatar>
                          <Assignment />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <ReactMarkdown
                            source={task.task}
                            escapeHtml={false}
                          />
                        }
                      />
                      <ListItemSecondaryAction>
                        <ProjectTasksFormatMenu
                          task={task}
                          deleteTask={props.deleteTask}
                          editTask={props.editTask}
                          editTaskStatus={props.editTaskStatus}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))
              )}
            </List>
          </Paper>
        </div>
      </div>
      <div hidden={inProgessView}>
        <Paper elevation={3} style={{ padding: "1em", margin: "1em" }}>
          <Typography variant="h2" component="h3">
            In Progress
          </Typography>
          <div>
            <List>
              {props.tasks.filter(tasks => tasks.task_type_id === 2).length ===
              0 ? (
                <YellowAlert message="You currently have no In Progress Tasks associated with this Project." />
              ) : (
                props.tasks
                  .filter(tasks => tasks.task_type_id === 2)
                  .map(task => (
                    <ListItem key={task.id} divider>
                      <ListItemAvatar>
                        <Avatar>
                          <Assignment />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <ReactMarkdown
                            source={task.task}
                            escapeHtml={false}
                          />
                        }
                      />
                      <ListItemSecondaryAction>
                        <ProjectTasksFormatMenu
                          task={task}
                          deleteTask={props.deleteTask}
                          editTask={props.editTask}
                          editTaskStatus={props.editTaskStatus}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))
              )}
            </List>
          </div>
        </Paper>
      </div>
      <div hidden={inReviewView}>
        <Paper elevation={3} style={{ padding: "1em", margin: "1em" }}>
          <Typography variant="h2" component="h3">
            In Review
          </Typography>
          <div>
            <List>
              {props.tasks.filter(tasks => tasks.task_type_id === 3).length ===
              0 ? (
                <YellowAlert message="You currently have no In Review Tasks associated with this Project." />
              ) : (
                props.tasks
                  .filter(tasks => tasks.task_type_id === 3)
                  .map(task => (
                    <ListItem key={task.id} divider>
                      <ListItemAvatar>
                        <Avatar>
                          <Assignment />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <ReactMarkdown
                            source={task.task}
                            escapeHtml={false}
                          />
                        }
                      />
                      <ListItemSecondaryAction>
                        <ProjectTasksFormatMenu
                          task={task}
                          deleteTask={props.deleteTask}
                          editTask={props.editTask}
                          editTaskStatus={props.editTaskStatus}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))
              )}
            </List>
          </div>
        </Paper>
      </div>
      <div hidden={completedView}>
        <Paper elevation={3} style={{ padding: "1em", margin: "1em" }}>
          <Typography variant="h2" component="h3">
            Completed
          </Typography>
          <div>
            <List>
              {props.tasks.filter(tasks => tasks.task_type_id === 4).length ===
              0 ? (
                <YellowAlert message="You currently have no Completed Tasks associated with this Project." />
              ) : (
                props.tasks
                  .filter(tasks => tasks.task_type_id === 4)
                  .map(task => (
                    <ListItem key={task.id} divider>
                      <ListItemAvatar>
                        <Avatar>
                          <Assignment />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <ReactMarkdown
                            source={task.task}
                            escapeHtml={false}
                          />
                        }
                      />
                      <ListItemSecondaryAction>
                        <ProjectTasksFormatMenu
                          task={task}
                          deleteTask={props.deleteTask}
                          editTask={props.editTask}
                          editTaskStatus={props.editTaskStatus}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))
              )}
            </List>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Tasks;
