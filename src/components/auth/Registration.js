import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import useSimpleAuth from "../../hooks/useSimpleAuth";
// import * as firebase from "firebase/app";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Registration = () => {
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

  // const checkedToggle = () => {
  //   setIsChecked(!checked);
  //   setIsDisabled(!disabled);
  // };

  // const storageRef = firebase.storage().ref("profile_picture");

  // const submitWithImage = () => {
  //   const ref = storageRef.child(detail.username);

  //   return ref
  //     .put(profile_image)
  //     .then(data => data.ref.getDownloadURL())
  //     .then(imageUrl => {
  //       if (detail.password !== detail.verifyPassword) {
  //         alert("Your passwords do not match. Please check your passwords.");
  //       } else {
  //         const user = {
  //           username: detail.username,
  //           email: detail.email,
  //           password: detail.password,
  //           first_name: detail.firstName,
  //           last_name: detail.lastName,
  //           profile_image: imageUrl
  //         };
  //         register(user)
  //           .catch(error => {
  //             alert("Username or email already in use!");
  //           })
  //           .then(() => {
  //             props.history.push({
  //               pathname: "/home"
  //             })
  //             window.location.reload(true);
  //           });
  //       }
  //     });
  // };

  const submit = props => {
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
      console.log(user);
      register(user).catch(error => {
        alert("Username or Email is already in use!");
      });
      // .then(() => {
      //   props.history.push({
      //     pathname: "/home"
      //   })
      //   window.location.reload(true);
      // });
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Register New Account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
          <DialogContentText>Register a New Account</DialogContentText>
          <TextField
            variant="outlined"
            margin="normal"
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
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            onChange={e => setLastName(e.target.value)}

          />
          <TextField
            variant="outlined"
            margin="normal"
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
            margin="normal"
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
            margin="normal"
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
            margin="normal"
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
            margin="normal"
            fullWidth
            id="primaryLanguage"
            label="Primary Language"
            name="primaryLanguage"
            onChange={e => setPrimaryLanguage(e.target.value)}

          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="githubAccount"
            label="Github Account"
            name="githubAccount"
            onChange={e => setGithub(e.target.value)}

          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange("checkedB")}
                value="checkedB"
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
            // label="Verify Password"
            name="profileImage"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submit} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withRouter(Registration);
