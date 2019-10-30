import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

const ProjectTasksTypeForm = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Task Status</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value={1} control={<Radio />} label="Incoming" />
          <FormControlLabel value={2} control={<Radio />} label="In Progress" />
          <FormControlLabel value={3} control={<Radio />} label="In Review" />
          <FormControlLabel value={4} control={<Radio />} label="Completed" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default ProjectTasksTypeForm