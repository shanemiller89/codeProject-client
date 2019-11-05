import React,{useState} from "react";

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
import FormLabel from "@material-ui/core/FormLabel";

import YellowAlert from "../../widgets/YellowAlert";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  alert: {
    marginTop: "6em"
  },
  header: {
    display: "flex",

  }
});

const DashboardRecentProjects = props => {
  const classes = useStyles();
  const [value, setValue] = useState("personal");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <div className={classes.header}>
      <Typography color="textSecondary" component="h1" variant="h4">
        Recent Projects
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
      {props.projects.length === 0 ? (
        <div className={classes.alert}>
          <YellowAlert
            className={classes.alert}
            message="You currently have no recent Projects"
          />
        </div>
      ) : (
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
                <TableCell align="right">
                  {project.technologies[0].technology}
                </TableCell>
                <TableCell align="right">
                  {project.collaborators.length}
                </TableCell>
                <TableCell align="right">
                  {project.tasks.filter(task => task.task_type_id === 2).length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </React.Fragment>
  );
};

export default DashboardRecentProjects;
