import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ViewHeadline from "@material-ui/icons/ViewHeadline";
import AccountTree from "@material-ui/icons/AccountTree";
import Web from "@material-ui/icons/Web";
import ListAlt from "@material-ui/icons/ListAlt";
import AddBox from "@material-ui/icons/AddBox";
import ProjectOverview from "./overview/ProjectOverview";
import Tasks from "./tasks/Tasks";
import ProjectERD from "./erd/ProjectERD";
import ProjectWireframes from "./wireframes/ProjectWireframes";
import ProjectSupplementals from "./supplemental/ProjectSupplementals";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    backgroundColor: theme.palette.background.paper
  }
}));

const ProjectDetailNav = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="Project Details"
          centered
        >
          <Tab icon={<ViewHeadline />} label="Overview" {...a11yProps(0)} />
          <Tab icon={<AccountTree />} label="E.R.D." {...a11yProps(1)} />
          <Tab icon={<Web />} label="Wireframe" {...a11yProps(2)} />
          <Tab icon={<ListAlt />} label="Tasks" {...a11yProps(3)} />
          <Tab icon={<AddBox />} label="Supplemental" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProjectOverview
          key={props.project.id}
          project={props.project}
          technologies={props.technologies}
          collaborators={props.collaborators}
          editProjectOverview={props.editProjectOverview}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectERD project={props.project} addERD={props.addERD} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProjectWireframes
          project={props.project}
          wireframes={props.wireframes}
          addWireframe={props.addWireframe}
          addWireframeTitle={props.addWireframeTitle}
          deleteWireframe={props.deleteWireframe}
          editWireframeImage={props.editWireframeImage}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Tasks
          project={props.project}
          tasks={props.tasks}
          addTasks={props.addTasks}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
          editTaskStatus={props.editTaskStatus}
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ProjectSupplementals
          project={props.project}
          supplementals={props.supplementals}
          addSupplemental={props.addSupplemental}
          deleteSupplemental={props.deleteSupplemental}
          editSupplemental={props.editSupplemental}
        />
      </TabPanel>
    </div>
  );
};

export default ProjectDetailNav;
