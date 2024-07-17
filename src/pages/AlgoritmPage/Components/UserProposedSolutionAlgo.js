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

export default function UserProposedSolutionAlgo({isOpen=false,setIsOpen,setAlgorithmInput,onSubmit}) {
   
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
                <strong style={{ color: secondaryGray ,padding:'1em'}}>Here you can propose an algorithm with <strong style={{ color: primaryBlue }}>name</strong> and <strong style={{ color: primaryBlue }}>description</strong></strong>
                
                <DialogContent>
                    <DialogContentText style={{textAlign:'center'}} id="alert-dialog-slide-description">
                        <TextField multiline rows={5} style={{width:'100%'}} onChange={(e) => setAlgorithmInput(e.target.value)} placeholder='Algorithm Description'/>                            
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={()=>{
                        onSubmit()
                        handleClose()
                    }}>Send</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}