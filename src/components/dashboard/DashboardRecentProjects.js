import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });


const DashboardRecentProjects = (props) => {
    const classes = useStyles();


  return (
    <React.Fragment>
      <Typography color="textSecondary" component="h1" variant="h4">
        Recent Projects
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Primary Language</TableCell>
            <TableCell align="right"># Collaborators</TableCell>
            <TableCell align="right"># In Progress Tasks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.projects.map(project => (
            <TableRow key={project.id}>
              <TableCell component="th" scope="row">
                {project.title}
              </TableCell>
              <TableCell align="right">{project.technologies[0].technology}</TableCell>
              <TableCell align="right">{project.collaborators.length}</TableCell>
              <TableCell align="right">{project.tasks.filter(task => task.task_type_id === 2).length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
};

export default DashboardRecentProjects;
