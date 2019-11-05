import React, { useState, useEffect } from "react";

import APIManager from "../../util/APIManager";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import DashboardRecentProjects from "./DashboardRecentProjects";
import DashboardRecentCollabRequest from "./DashboardRecentCoallabRequest";
import DashboardRecentTasks from "./DashboardRecentTasks";
import YellowAlert from "../../widgets/YellowAlert";

// const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1
  },
  container: {
    width: "90%",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 400
  }
}));

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [collabProjects, setCollabProjects] = useState([]);

  const [invites, setInvites] = useState([]);
  const [recentTasks, setTasks] = useState([]);
  const [recentCollabTasks, setCollabTasks] = useState([]);


  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const getRecentProjects = () => {
    APIManager.getAll("projects/recentpersonal").then(projects => {
      setProjects(projects);
    });
  };

  const getRecentCollabProjects = () => {
    APIManager.getAll("projects/recentcollaborator").then(projects => {
      setCollabProjects(projects);
    });
  };

  const getPendingInvites = () => {
    APIManager.getAll("collaboratorinvites/pendinginvites").then(invites => {
      setInvites(invites);
    });
  };

  const getRecentTasks = () => {
    APIManager.getAll("projecttasks").then(tasks => {
      setTasks(tasks);
    });
  };
  
  const getRecentCollabTasks = () => {
    APIManager.getAll("projecttasks/recentcollabtasks").then(tasks => {
      setCollabTasks(tasks);
    });
  };

  useEffect(() => {
    getRecentProjects();
    getRecentCollabProjects();
    getPendingInvites();
    getRecentTasks();
    getRecentCollabTasks();
  }, []);

  console.log("Tasks", recentTasks);

  return (
    <>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7} lg={8}>
              <Paper className={fixedHeightPaper}>
                <DashboardRecentProjects projects={projects} collabProjects={collabProjects} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <Paper className={fixedHeightPaper}>
                <DashboardRecentCollabRequest invites={invites} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} style={{ height: 400 }}>
                <DashboardRecentTasks recentTasks={recentTasks} recentCollabTasks={recentCollabTasks} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Dashboard;
