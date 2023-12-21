import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
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
import RatingMUI from './Rating';
import { primaryBlue, secondaryGray } from '../Static/Colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog({onClose, open , onClick, setOpen}) {

  return (
    <Dialog style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'10rem'}} onClose={()=>setOpen(false)}  open={open}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px',flexDirection:'column' }}>
        <strong style={{ color: secondaryGray }}>Leave our <strong style={{ color: primaryBlue }}>application</strong> a review</strong>
        <RatingMUI editable={true} onClick={onClick} value={3} />
        </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function PopupReview({isOpen=false,onClick}) {
  const [open, setOpen] = React.useState(isOpen);

  const handleClose = (value) => {
    setOpen(false);
  };

  React.useEffect(()=>{
    setOpen(isOpen)
  },[isOpen])

  return (
    <div>
      <SimpleDialog
       
        open={open}
        onClose={handleClose}
        onClick={(e)=>onClick(e)}
        setOpen={setOpen}
        >
      </SimpleDialog>
    </div>
  );
}