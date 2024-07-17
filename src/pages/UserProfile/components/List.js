import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Row } from 'react-bootstrap';
import { primaryBlue, secondaryGray } from '../../../Static/Colors';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="Chapters"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         
        </ListSubheader>
        
      }
      className={classes.root}
    >
       <Row >
        <Typography sx={{color:secondaryGray}}> You are the number <strong style={{color:primaryBlue}}>{props.data.user_rank.user_place}</strong> out of <strong style={{color:primaryBlue}}>{props.data.user_rank.out_of}</strong> users at <strong style={{color:primaryBlue,textDecoration:'underline',cursor:'pointer'}}> {props.data.chapter}</strong></Typography>
      </Row>
      <br/>
      <ListItem  button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={props.data.chapter} secondary={props?.progress +"% finished"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem style={{display:'flex' ,flexDirection:'column' ,alignItems:'baseline'}} button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={`${props.data.algo_finished}/${props.data.total_algo} algo finished`} />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={`${props.data.quiz_finished}/${props.data.total_quizez} quizez finished`} />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={`${props.data.videos_watched}/${props.data.videos_watched} videos finished`} />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
