import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Person from "@material-ui/icons/Person";
import Equalizer from "@material-ui/icons/Equalizer";


import { Avatar } from "@material-ui/core";
import UserContext from "../../context/UserContext";
import APIManager from "../../util/APIManager";

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
    height: 240
  },
  avatar: {
    margin: 10,
    width: 275,
    height: 275
  }
}));

const Profile = () => {
  const [myProjects, setMyProjects] = useState([]);
  const [collaboratorProjects, setCollaboratorProjects] = useState([]);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const getMyProjects = () => {
    APIManager.getAll("projects/owner").then(projects => {
      setMyProjects(projects.length);
    });
  };

  const getCollaboratorProjects = () => {
    APIManager.getAll("projects/collaborator").then(projects => {
      setCollaboratorProjects(projects.length);
    });
  };

  useEffect(() => {
    getMyProjects();
    getCollaboratorProjects();
  }, []);

  return (
    <UserContext>
      {context => (
        <>
          <main className={classes.content}>
            <div
              style={{ display: "flex", alignItems: "center", padding: "2em" }}
            >
              <AccountCircleIcon
                style={{ color: "#ca3e47", fontSize: "9em" }}
                fontSize="large"
              />
              <Typography component="h1" variant="h1">
                User Profile
              </Typography>
            </div>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="xl" className={classes.container}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={4} lg={3}>
                  <Avatar
                    src={context.user.profile_image}
                    className={classes.avatar}
                  />
                  {/* <Paper className={fixedHeightPaper}></Paper> */}
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                  <Paper elevation={3} className={fixedHeightPaper}>
                    <div style={{display: "flex", alignItems: "center"}}>
                    <Person style={{ color: "#ca3e47", fontSize: "4em" }} />
                    <Typography gutterBottom variant="h3">
                      {context.user.user.username}
                    </Typography>
                    </div>
                    <Typography gutterBottom variant="body1">
                      <strong>{"Full Name: "}</strong>
                      {context.user.user.first_name}{" "}
                      {context.user.user.last_name}
                    </Typography>
                    <br/>
                    <Typography gutterBottom variant="body1">
                      <strong>{"Primary Language: "}</strong>
                      {context.user.primary_language}
                    </Typography>
                    <br/>
                    <Typography gutterBottom variant="body1">
                      <strong>{"Github: "}</strong>
                      <a href={context.user.github} style={{color: "#ca3e47"}}>{context.user.github}</a>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={3} className={classes.paper} style={{ height: 240 }}>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <Equalizer style={{ color: "#ca3e47", fontSize: "4em" }} />
                    <Typography gutterBottom variant="h3">
                      Stats
                    </Typography>
                    </div>
                    <Typography gutterBottom variant="h4">
                      {"Total Personal Projects: "}
                      {myProjects}
                    </Typography>
                    <br/>
                    <Typography gutterBottom variant="h4">
                      {"Total Collaborator Projects: "}
                      {collaboratorProjects}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </main>
        </>
      )}
    </UserContext>
  );
};

export default Profile;
