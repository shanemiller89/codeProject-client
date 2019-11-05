import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const DashboardRecentTasks = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography color="textSecondary" component="h1" variant="h4">
        Recent Incoming Tasks
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Tasks</TableCell>
            <TableCell align="right">Project Name</TableCell>
            {/* <TableCell align="right">Task Type</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.recentTasks.map(recentTask => (
            <TableRow key={recentTask.id}>
              <TableCell component="th" scope="row">
                {recentTask.task.task}
              </TableCell>
              {/* <TableCell align="right"></TableCell> */}
              <TableCell align="right">{recentTask.project.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default DashboardRecentTasks;
