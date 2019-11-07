import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import useSimpleAuth from "../../hooks/useSimpleAuth";
import * as firebase from "firebase/app";
import "firebase/storage";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Registration = props => {
  const [open, setOpen] = useState(false);
  const [checked, setIsChecked] = useState(false);
  const [disabled, setIsDisabled] = useState(true);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify_password, setVerifyPassword] = useState("");

  const [primary_language, setPrimaryLanguage] = useState("");
  const [github, setGithub] = useState("");
  const [profile_image, setProfileImage] = useState("");

  const { register } = useSimpleAuth();

  const checkedToggle = () => {
    setIsChecked(!checked);
    setIsDisabled(!disabled);
  };

  const storageRef = firebase.storage().ref("profile_images");

  const submitWithImage = () => {
    const ref = storageRef.child(username);

    return ref
      .put(profile_image)
      .then(data => data.ref.getDownloadURL())
      .then(imageUrl => {
        if (password !== verify_password) {
          alert("Your passwords do not match. Please check your passwords.");
        } else {
          const user = {
            username: username,
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            primary_language: primary_language,
            github: github,
            profile_image: imageUrl
          };
          register(user, props.setIsLoggedIn).catch(error => {
            alert("Username or email already in use!");
          });
        }
      });
  };

  const submit = () => {
    if (password !== verify_password) {
      alert("Your passwords do not match. Please check your passwords.");
    } else {
      const user = {
        username: username,
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        primary_language: primary_language,
        github: github,
        profile_image: profile_image
      };
      register(user, props.setIsLoggedIn).catch(error => {
        alert("Username or Email is already in use!");
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        Register New Account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <div style={{height: 75, margin: "0 0 0 3em"}}>
          <img alt="reg header" src="https://firebasestorage.googleapis.com/v0/b/codeproject-client.appspot.com/o/app_resources%2Fcodeproject_inverted.png?alt=media&token=1d3aa07c-af4b-4b34-8000-c8068797da5d"/>
          </div>
          </DialogTitle>
          <form onSubmit={disabled ? submit : submitWithImage}>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoFocus
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            onChange={e => setLastName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="email"
            type="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="password"
            type="password"
            label="Password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="verifyPassword"
            type="password"
            label="Verify Password"
            name="verifyPassword"
            onChange={e => setVerifyPassword(e.target.value)}
          />
          <br />
          <br />
          <DialogContentText>Optional:</DialogContentText>
          <TextField
            variant="outlined"
            margin="dense"
            fullWidth
            id="primaryLanguage"
            label="Primary Language"
            name="primaryLanguage"
            onChange={e => setPrimaryLanguage(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            fullWidth
            id="githubAccount"
            label="Github Account"
            name="githubAccount"
            onChange={e => setGithub(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkedToggle}
                value="checked"
                color="primary"
              />
            }
            label="Upload Profile Image?"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="profileImage"
            type="file"
            disabled={disabled}
            onChange={e => setProfileImage(e.target.files[0])}
            name="profileImage"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color: "#414141"}}>
            Cancel
          </Button>
          <Button type="submit" style={{color: "#414141"}}>
            Register
          </Button>
        </DialogActions>
          </form>
      </Dialog>
    </div>
  );
};

export default withRouter(Registration);
