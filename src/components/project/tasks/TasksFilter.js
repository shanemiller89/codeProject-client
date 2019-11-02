import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const TasksFilter = props => {
  const [value, setValue] = useState("all");

  const handleChange = event => {
    setValue(event.target.value);
  };

  useEffect(() => {
    changeView();
  }, [value]);

  const changeView = () => {
    if (value === "all") {
      props.setIncomingView(false);
      props.setInProgressView(false);
      props.setInReviewView(false);
      props.setCompletedView(false);
    }
    if (value === "incoming") {
        props.setIncomingView(false);
        props.setInProgressView(true);
        props.setInReviewView(true);
        props.setCompletedView(true);
    }
    if (value === "inprogress") {
        props.setIncomingView(true);
        props.setInProgressView(false);
        props.setInReviewView(true);
        props.setCompletedView(true);
    }
    if (value === "inreview") {
        props.setIncomingView(true);
        props.setInProgressView(true);
        props.setInReviewView(false);
        props.setCompletedView(true);
    }
    if (value === "completed") {
        props.setIncomingView(true);
        props.setInProgressView(true);
        props.setInReviewView(true);
        props.setCompletedView(false);
      }
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Tasks Filter</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="all"
          control={<Radio color="primary" />}
          label="All"
          labelPlacement="start"
        />
        <FormControlLabel
          value="incoming"
          control={<Radio color="primary" />}
          label="Incoming"
          labelPlacement="start"
        />
        <FormControlLabel
          value="inprogress"
          control={<Radio color="primary" />}
          label="In Progress"
          labelPlacement="start"
        />
        <FormControlLabel
          value="inreview"
          control={<Radio color="primary" />}
          label="In Review"
          labelPlacement="start"
        />
        <FormControlLabel
          value="completed"
          control={<Radio color="primary" />}
          label="Completed"
          labelPlacement="start"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default TasksFilter;
