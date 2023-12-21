import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { primaryBlue, secondaryGray } from '../../../Static/Colors';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProposeAlgorithmDialog({isOpen=false,setIsOpen,setAlgorithmInput,onSubmit}) {
   
    const handleClose = () => {
        setIsOpen(false)
    };

    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <strong style={{ color: secondaryGray }}>Here you can propose an algorithm with <strong style={{ color: primaryBlue }}>name</strong> and <strong style={{ color: primaryBlue }}>description</strong></strong>
                <DialogTitle>
                    <TextField onChange={(e)=>setAlgorithmInput(e=>({...e,"name":e.target.value}))} placeholder='Algorithm Name'/>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <TextField onChange={(e) => setAlgorithmInput(e => ({ ...e, "description": e.target.value }))} placeholder='Algorithm Description'/>                            
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={()=>{
                        onSubmit()
                        handleClose()
                    }}>Agree</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}