import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import React from 'react';
import { ErrorPrinter } from '../actions/errorPrinter';
import { Alert } from 'react-bootstrap';


export default function CustomizedSnackbars({isOpen=false, message, severity,resetData}) {
    
    const [open,setOpen]=useState(isOpen)
    const handleClose = (event, reason) => {
        setOpen(false);
        if(resetData)
        {
            resetData(null)
        }
    };
   useEffect(()=>{
    console.log(message + isOpen)
    setOpen(isOpen)
   },[isOpen])
    return (
        <Snackbar 
        sx={{ position: 'fixed', zIndex: 9999 }}
        open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert  variant={severity}  sx={{ width: '100%' }}>
            {ErrorPrinter( message )}
            </Alert>
        </Snackbar>
    );
}