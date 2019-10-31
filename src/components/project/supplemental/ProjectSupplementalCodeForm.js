import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MenuItem, ListItemIcon, InputLabel, Select } from "@material-ui/core";
import Code from "@material-ui/icons/Code";

const options = [
  { key: "df", text: "No Highlight", value: "text" },
  { key: "bash", text: "Bash", value: "bash" },
  { key: "c#", text: "C#", value: "csharp" },
  { key: "css", text: "CSS", value: "css" },
  { key: "django", text: "Django", value: "django" },
  { key: "html", text: "HTML, XML", value: "xml" },
  { key: "js", text: "JavaScript", value: "javascript" },
  { key: "jsx", text: "JSX", value: "jsx" },
  { key: "json", text: "JSON", value: "json" },
  { key: "md", text: "MarkDown", value: "markdown" },
  { key: "python", text: "Python", value: "python" },
  { key: "sql", text: "SQL", value: "sql" }
];

const ProjectSupplementalCodeForm = props => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("text");

  const submit = e => {
    e.preventDefault();
    const projectNote = {
      title: title,
      text: text,
      supplemental_type_id: 2,
      project_id: props.project.id
    };
    props.addNote(projectNote);
    handleClose();
    props.handleCloseMenu();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>
        <ListItemIcon>
          <Code fontSize="small" />
        </ListItemIcon>
        Add Code Snippet
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Create Note</DialogTitle>
        <form onSubmit={submit}>
          <DialogContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              helperText="Reference Title"
              id="title"
              label="Title"
              name="title"
              onChange={e => setTitle(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              helperText="Markdown is supported for Supplemental Notes. Otherwise, only spacing and line breaks will be rendered."
              rows="10"
              id="text"
              label="Note"
              name="text"
              onChange={e => setText(e.target.value)}
            />
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="outlined"
              fullWidth
              helperText="Choose which language to highlight in."
              value={language}
              onChange={e => setLanguage(e.target.value)}
            >

              {options.map(option => (
                <MenuItem value={option.value}>{option.text}</MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default ProjectSupplementalCodeForm;
