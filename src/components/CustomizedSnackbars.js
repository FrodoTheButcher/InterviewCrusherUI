import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import React from 'react';
import { ErrorPrinter } from '../actions/errorPrinter';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({isOpen=false, message, severity}) {
    const [open,setOpen]=useState(isOpen)
    const handleClose = (event, reason) => {
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {ErrorPrinter( message )}
            </Alert>
        </Snackbar>
    );
}