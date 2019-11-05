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
    height: 340
  }
}));

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [invites, setInvites] = useState([]);
  const [recentTasks, setTasks] = useState([]);

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const getRecentProjects = () => {
    APIManager.getAll("projects/recent").then(projects => {
      setProjects(projects);
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

  useEffect(() => {
    getRecentProjects();
    getPendingInvites();
    getRecentTasks();
  }, []);

  console.log("Tasks", recentTasks);

  return (
    <>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={7} lg={8}>
              <Paper className={fixedHeightPaper}>
                {projects.length === 0 ? (
                  <YellowAlert message="You have no recent projects" />
                ) : (
                  <DashboardRecentProjects projects={projects} />
                )}
              </Paper>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <Paper className={fixedHeightPaper}>
                {invites.length === 0 ? (
                  <YellowAlert message="You have no pending sent invites" />
                ) : (
                  <DashboardRecentCollabRequest invites={invites} />
                )}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} style={{ height: 400 }}>
                {recentTasks.length === 0 ? (
                  <YellowAlert message="You have no recent Incoming tasks" />
                ) : (
                  <DashboardRecentTasks recentTasks={recentTasks} />
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Dashboard;
