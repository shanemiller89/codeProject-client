import React, {useState, useEffect} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const SupplementalFilter = (props) => {
  const [value, setValue] = useState('all');

  const handleChange = event => {
    setValue(event.target.value)
  };

  useEffect(() => {
    changeView();
  }, [value]);

  const changeView = () => {
    if (value === "all") {
        props.setNoteView(false)
        props.setCodeView(false)
        props.setImageView(false)
    } if (value === "notes") {
        props.setNoteView(false)
        props.setCodeView(true)
        props.setImageView(true)
    } if (value === "codes") {
        props.setNoteView(true)
        props.setCodeView(false)
        props.setImageView(true)
    }
    if (value === "images") {
        props.setNoteView(true)
        props.setCodeView(true)
        props.setImageView(false)
    }
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Supplemental Filter</FormLabel>
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="all"
          control={<Radio color="primary" />}
          label="All"
          labelPlacement="start"
        />
        <FormControlLabel
          value="notes"
          control={<Radio color="primary" />}
          label="Notes"
          labelPlacement="start"
        />
        <FormControlLabel
          value="codes"
          control={<Radio color="primary" />}
          label="Code Snippets"
          labelPlacement="start"
        />
        <FormControlLabel
          value="images"
          control={<Radio color="primary" />}
          label="Images"
          labelPlacement="start"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default SupplementalFilter