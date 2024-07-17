import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Avatar, TextField, TextareaAutosize, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmail } from '../actions/userAction';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { At } from 'react-bootstrap-icons';
import { primaryBlue, primaryGray } from '../Static/Colors';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SendEmailPopup({message,title}) {
  const [open, setOpen] = React.useState(false);


  const user = JSON.parse(localStorage.getItem("user"))
  const [email,setEmail] = React.useState(user ? user.email : "email...")
  const [body,setBody]=React.useState("")
  const [titleOfMessage,setTitleOfMessage]=React.useState("")
  const dispatch = useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    const data ={
      "email":email,
      "body":body,
      "title":title
    }
    dispatch(sendEmail(data))
  }
  const emailSend = useSelector(state => state.sendEmailReducer)
  const {loading,error,message : response} = emailSend

  return (
    <div>
             <Button onClick={handleClickOpen} className='footerbtn' style={{background:'none',border:'1px solid white',color:'white',fontWeight:'bold',marginRight:'0.5em'}}>Teach along with us</Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{color:primaryGray}}>{title}</DialogTitle>
       <Row>
        <Col>
        <DialogContent>
          <DialogContentText sx={{color:primaryGray}} id="alert-dialog-slide-description">
          {message}
          </DialogContentText>
          <Typography sx={{fontWeight:'bolder',color:primaryGray}}  >
            Email
           </Typography>
           <TextField  onChange={(e)=>setEmail(e.target.value)} value={email} />
           <Typography sx={{fontWeight:'bolder',color:primaryGray}}  >
            Why are you contacting?
           </Typography>
           <TextField  sx={{color:primaryGray}} onChange={(e)=>setTitleOfMessage(e.target.value)} value={titleOfMessage} />
           <Typography sx={{fontWeight:'bolder',color:primaryGray}}  >
            Message
           </Typography>
           <TextareaAutosize style={{ color:primaryGray}} onChange={(e)=>setBody(e.target.value)} value={body} />
        </DialogContent>
        </Col>
        <Col className='d-flex align-items-center justify-content-center'>
          <ListGroup>
            
            {
              user && user.email &&
              <Avatar sx={{position:'absolute',top:'1em',right:'1em',background:primaryGray}}>
              {user.email[0].toUpperCase()}
            </Avatar>
            }
    
        <AttachEmailIcon style={{fontSize:'10em',color:primaryGray}}/>
          </ListGroup>
        </Col>
      
       </Row>
        <DialogActions>
          <Button sx={{color:primaryBlue}} onClick={handleClose}>close</Button>
          <Button  sx={{color:primaryBlue}} onClick={handleSend}>send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
