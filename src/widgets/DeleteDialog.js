import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Delete from "@material-ui/icons/Delete";


const DeleteDialog = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<Delete />}
        style={{ background: "#414141", color: "white" }}
        onClick={handleClickOpen}
      >
        Delete {props.deletedItem}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Are you sure you want to delete this ${props.deletedItem}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once deleted, you will not be able to retrieve this information.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color: "#414141"}}>
            Cancel
          </Button>
          <Button
            onClick={() => props.deleteFunction(props.id)}
            style={{color: "#414141"}}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
