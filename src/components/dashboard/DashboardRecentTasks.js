import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import YellowAlert from "../../widgets/YellowAlert";
// import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  alert: {
    marginTop: "8em"
  },
  header: {
    display: "flex"
  }
});

const DashboardRecentTasks = props => {
  const classes = useStyles();
  const [value, setValue] = useState("personal");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <div className={classes.header}>
      <Typography color="textSecondary" component="h1" variant="h4">
        Recent Incoming Tasks
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="position"
          name="position"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            value="personal"
            control={<Radio color="primary" />}
            label="Personal"
            labelPlacement="start"
          />
          <FormControlLabel
            value="collaborator"
            control={<Radio color="primary" />}
            label="Collaborator"
            labelPlacement="start"
          />
        </RadioGroup>
      </FormControl>
      </div>
      {props.recentTasks.length === 0 ? (
        <div className={classes.alert}>
          <YellowAlert message="You currently have no recent incoming tasks." />
        </div>
      ) : (
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
      )}
    </React.Fragment>
  );
};

export default DashboardRecentTasks;
