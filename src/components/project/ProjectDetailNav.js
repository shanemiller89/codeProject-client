import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import ViewHeadline from "@material-ui/icons/ViewHeadline";
import AccountTree from "@material-ui/icons/AccountTree";
import Web from "@material-ui/icons/Web";
import ListAlt from "@material-ui/icons/ListAlt";
import AddBox from "@material-ui/icons/AddBox";
import ProjectOverview from "./ProjectOverview";
import ProjectERD from "./ProjectERD";
import ProjectWireframeForm from "./ProjectWireframeForm";
import ProjectWireframeListItem from "./ProjectWireframeListItem";
import { Grid, Button } from "@material-ui/core";
import WireframeFormatMenu from "./WireframeFormatMenu";

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
          //   aria-label="scrollable auto tabs example"
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
          editProjectOverview={props.editProjectOverview}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectERD project={props.project} addERD={props.addERD} />
        {props.project.erd_image === "" ? (
          <Container
            style={{
              background: "#fff3cd",
              borderRadius: ".25em",
              padding: "1em",
              color: "#856404",
              textAlign: "center"
            }}
          >
            You currently have no ERD associated with this Project.
          </Container>
        ) : (
          <img
            alt={`${props.project.title}-ERD`}
            src={props.project.erd_image}
          />
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProjectWireframeForm
          project={props.project}
          addWireframe={props.addWireframe}
        />
        {/* <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}> */}
        <Grid container spacing={2}>
          {props.wireframes.map(wireframe => (
            <Grid container item xs={3} >
              <ProjectWireframeListItem wireframe={wireframe} />
              <WireframeFormatMenu wireframe={wireframe} deleteWireframe={props.deleteWireframe}/>
            </Grid>
          ))}
        </Grid>
        {/* </div> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
};

export default ProjectDetailNav;
