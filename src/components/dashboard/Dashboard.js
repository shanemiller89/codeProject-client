import React, {useState, useEffect} from 'react';

import APIManager from "../../util/APIManager";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import DashboardRecentProjects from './DashboardRecentProjects';
import DashboardRecentCollabRequest from './DashboardRecentCoallabRequest';
import DashboardRecentTasks from './DashboardRecentTasks';

// const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  container: {
    width: '90%',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 340,
  },
}));

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState({tasks:[]})


  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  const getProjects = () => {
    APIManager.getAll("projects/owner").then(projects => {
      setProjects(projects);
      setTasks(projects)
    });
  };

  useEffect(() => {
    getProjects();
  }, []);


  return (
    <>
    <main className={classes.content}>
      {/* {projects.map(project => (
        project.tasks.filter(task => task.task_type_id === 2).map(task => (
          task.task
        ))
      ))} */}
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <DashboardRecentProjects projects={projects}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <DashboardRecentCollabRequest />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} style={{height: 340}}>
                <DashboardRecentTasks />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Dashboard;