import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import {DialogProps} from "../types/interfaces"


export default function AlertDialog({ open, setDialog }: DialogProps) {
  const handleClose = () => {
    setDialog(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogActions>
        <IconButton onClick={handleClose} autoFocus aria-label="close">
          <CancelIcon color="warning" />
        </IconButton>
      </DialogActions>
      <DialogTitle id="alert-dialog-title">
        {"Elección creada con éxito!"}
      </DialogTitle>
    </Dialog>
  );
}
