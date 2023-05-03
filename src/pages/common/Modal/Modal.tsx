import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import React from 'react'

interface IModal {
  open: any
  handleClose: any
  handleAction: any
  dialogTitle: string
  dialogContentText: string
}

export default function Modal(props: IModal) {
  return (
    <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.dialogContentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleAction} variant="text" color="anger">Agree</Button>
          <Button onClick={props.handleClose} variant="contained" color="anger">
            Discard
          </Button>
        </DialogActions>
      </Dialog>
  )
}
