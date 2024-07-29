import * as React from 'react';
import PropTypes from 'prop-types';
import {Button, Spinner} from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { registerToNewsLetter } from '../actions/userAction';
import CustomizedSnackbars from './CustomizedSnackbars';
import WhiteButton from './WhiteButton';



function SimpleDialog(props) {
    const [emails, setEmail] = React.useState();
        React.useEffect(()=>{
            if(!localStorage.getItem("emails"))
            {
                localStorage.setItem("emails",JSON.stringify([JSON.parse(localStorage.getItem("user"))?.email]))
            }
            setEmail([
                ...JSON.parse(localStorage.getItem("emails") || "[]"),
              ])
        },[])  

          const { onClose, selectedValue, open } = props;
    const dispatch  = useDispatch()

    const handleClose = () => {
        onClose(selectedValue);
    };


    const [newEmail,setNewEmail]=React.useState("")
    const handleRegisterToNewsLetter = () => {
        const data ={
            "email":newEmail
        }
        dispatch(registerToNewsLetter(data))
        handleClose()
    }
   

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Add an email for the subscription</DialogTitle>
            <List sx={{ pt: 0 }}>
                { emails && emails?.map((email) => (
                    <ListItem  disableGutters key={email}>
                        <ListItemButton onClick={() => setNewEmail(email)}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={email} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disableGutters>
                    <ListItemButton
                        autoFocus
                    >
                        <ListItemAvatar >
                            <Avatar >
                            <Button onClick={() => {
                            setEmail(prev => ([...prev, newEmail]));
                            localStorage.setItem("emails", JSON.stringify([
                                ...JSON.parse(localStorage.getItem("emails") || "[]"),
                                newEmail
                            ]));
                            }}>
                                <AddIcon />
                                </Button>
                            </Avatar>
                        </ListItemAvatar>
                        <TextField value={newEmail} onChange={(e)=>setNewEmail(e.target.value)} placeholder={newEmail ? newEmail : "Add account"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <WhiteButton small={true} text={'subscribe'} onClick={handleRegisterToNewsLetter} />
            </div>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function EmailPopup() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <div>
            <Button 
                className='footerbtn' style={{ background: 'none', border: '1px solid white', color: 'white', fontWeight: 'bold', marginRight: '0.5em' }}
            onClick={handleClickOpen}>
                Subcribe to news...
            </Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}