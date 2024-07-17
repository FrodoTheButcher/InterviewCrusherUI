import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import ForumIcon from '@mui/icons-material/Forum';
import CustomContext from '../../Context/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getChattingQuestionsAction } from '../../actions/documentation';
export default function FloatingButtons() {

    const {chattingClicked,setChattingClicked} = React.useContext(CustomContext)
    const dispatch = useDispatch()
    const {data} = useSelector(state=>state.getChattingQuestionsReducer)
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } ,position:'fixed',zIndex:'30',bottom:'1em'}}>
      <Fab onClick={()=>{setChattingClicked(prev=>!prev); !data && dispatch(getChattingQuestionsAction())}} color="primary" aria-label="add">
        <ForumIcon />
      </Fab>
    </Box>
  );
}
