import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Registration() {
  const [open, setOpen] = React.useState(false);

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
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
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
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="githubAccount"
            label="Github Account"
            name="githubAccount"
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
          <Button onClick={handleClose} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
