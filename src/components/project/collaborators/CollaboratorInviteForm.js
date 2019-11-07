import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SearchRounded from "@material-ui/icons/SearchRounded";
import Add from "@material-ui/icons/Add";
import Group from "@material-ui/icons/Group";


import APIManager from "../../../util/APIManager";
import {
  Container,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  List,
  Radio,
  Paper,
  InputAdornment,
  Typography
} from "@material-ui/core";

const CollaboratorInviteForm = props => {
  const [open, setOpen] = useState(false);
  const [coders, setCoders] = useState([]);
  const [search, setSearch] = useState("");
  const [collaborator, setCollaborator] = useState("");
  const [message, setMessage] = useState("");

  const submit = e => {
    e.preventDefault();
    const newCollaborator = {
      collaborator_id: collaborator,
      message: message,
      project_id: props.project.id
    };
    props.createInvite(newCollaborator);
    handleClose();
  };

  const searchCoders = search => {
    APIManager.getAll(`coders?users=${search}`).then(coders => {
      setCoders(coders);
    });
  };

  const handleSearch = e => {
    setSearch(e.target.value);
    searchCoders(search);
  };

  const handleClear = e => {
    setCollaborator("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("Coders", coders);
  console.log("Collaborator", collaborator);

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<Add />}
        style={{ background: "#414141", color: "white" }}
        onClick={handleClickOpen}
      >
        Add Collaborator
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Invite Collaborator</DialogTitle>
        <form onSubmit={submit}>
          <DialogContent>
            <div style={{ display: "flex" }}>
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="search"
                  id="title"
                  label="User Search"
                  name="title"
                  autoFocus
                  onChange={handleSearch}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchRounded />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  multiline
                  helperText="Send a message with your collaboration invitation"
                  rows="10"
                  id="message"
                  label="Message"
                  name="message"
                  onChange={e => setMessage(e.target.value)}
                />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", marginLeft: "2em" }}>
                  <Group style={{ color: "#ca3e47", fontSize: "2em" }} />
                  <Typography gutterBottom variant="h6">
                    User Search Results
                  </Typography>
                </div>
                <Paper
                  elevation={3}
                  style={{
                    height: 325,
                    width: 700,
                    marginLeft: "1.5em",
                    overflow: "auto"
                  }}
                >
                  <List>
                    {coders.map(coder => (
                      <ListItem key={coder.id} divider>
                        <ListItemAvatar>
                          <Avatar
                            src={coder.profile_image}
                            alt={coder.user.username}
                            style={{
                              margin: 10,
                              width: 60,
                              height: 60
                            }}
                          />
                        </ListItemAvatar>
                        <div>
                          <ListItemText
                            primary={<strong>{coder.user.username}</strong>}
                            secondary={`Primary Language: ${coder.primary_language}`}
                          />
                          <ListItemText
                            secondary={
                              <a
                                href={coder.github}
                                rel="noopener noreferrer"
                                style={{ color: "#ca3e47" }}
                              >
                                Github
                              </a>
                            }
                          />
                        </div>
                        <ListItemSecondaryAction>
                          <Button
                            onClick={e => setCollaborator(coder.id)}
                            disabled={collaborator.length !== 0 ? true : false}
                          >
                            Select
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClear} style={{ color: "#414141" }}>
              Clear Selected Collaborator
            </Button>
            <Button onClick={handleClose} style={{ color: "#414141" }}>
              Cancel
            </Button>
            <Button type="submit" style={{ color: "#414141" }}>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default CollaboratorInviteForm;
