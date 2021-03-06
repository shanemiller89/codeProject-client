import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import useSimpleAuth from "../../hooks/useSimpleAuth";
import ListItems from "./ListItems";
import Dashboard from "../dashboard/Dashboard";
import EmojiObjectsOutlined from "@material-ui/icons/EmojiObjectsOutlined";
import UserContext from "../../context/UserContext";
import ApplicationViews from "../../ApplicationViews";
import { Avatar } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    background: "#313131"
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    marginLeft: ".5em",
    flexGrow: 1
  },
  drawerPaper: {
    background: "#414141",

    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    background: "#414141",

    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
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
    width: 50,
    height: 50
  },
  logout: {
    display: "flex",
    flexDirection: "column"
  },
  logoutButton: {
    color: "#ca3e47"
  }
}));

const NavBar = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { logout } = useSimpleAuth();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  //Neccesary for if a User refreshes the page
  props.setIsLoggedIn(true);

  return (
    <UserContext.Consumer>
      {context => (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="absolute"
            className={clsx(classes.appBar, open && classes.appBarShift)}
          >
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(
                  classes.menuButton,
                  open && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>
              <div style={{ display: "flex" }}>
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/codeproject-client.appspot.com/o/app_resources%2Fcode.Project%20(4).png?alt=media&token=9c8d24b1-0a3a-4221-a53b-6a0197ab74f3"
                    alt="logo"
                    style={{
                      height: 50,
                      marginRight: "85em",
                      marginTop: ".5em"
                    }}
                  />
                </div>
                <Avatar
                  src={context.user.profile_image}
                  alt={context.user.user.username}
                  className={classes.avatar}
                />
                <div style={{margin: "1em 3em -1em 0em", fontSize: "1.5em"}}>
                  {context.user.user.username}
                </div>
                <Button
                  size="large"
                  style={{color: "#ca3e47"}}
                  className={classes.logoutButton}
                  onClick={() => logout(props.setIsLoggedIn)}
                >
                  Logout
                </Button>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(
                classes.drawerPaper,
                !open && classes.drawerPaperClose
              )
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItems invites={context.inviteLength} />
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <ApplicationViews />
          </main>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default NavBar;
