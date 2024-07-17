import React, { useEffect, useState } from 'react'
import { EntitiesChoices } from '../../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { handleEntitieUndoDisLike, handleEntitieUndoLike, userDislikeAction, userLikeAction } from '../../../actions/userAction'
import { Avatar, ListItem, ListItemAvatar, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import {CalculateTimeAgo} from "../../../components/CalculateTime"
import { updateAlgoQuestionComment } from '../../../actions/algorithmAction'
import { useParams } from 'react-router-dom'
import CustomizedSnackbars from '../../../components/CustomizedSnackbars'
import Loader from '../../../components/Spinner'
const CommentAnswer = ({e}) => {
    const [data,setData]=useState(e)
    const [userId,setUserId] =React.useState(JSON.parse((localStorage.getItem("user")))['userId'])
    const [initialDescription,setInitialDescription] = useState(e.description)
    const [editable,setEditable]=useState(false)
    const {contentId} = useParams()
    const updateAlgoReducer = useSelector(state=>state.updateAlgoQuestionComment)
    const {loading,error} = updateAlgoReducer
    useEffect(()=>{
      setData(e)
      setInitialDescription(e.description)
    },[e])
    
    const dispatch = useDispatch()
    const handleDislike = ()=>{
        const type = EntitiesChoices.ALGORITHM_QUESTION_ANSWER
        if(data.profile_data.disliked == true)
        {
          let newData = data;
          newData.dislikes-=1
          if(newData.profile_data.disliked)
          {
            newData.profile_data.disliked=false;
          }
          setData(newData)
            dispatch(handleEntitieUndoDisLike(data.id, type))
            return;
        }
        let newData = data;
        if(newData.profile_data.liked)
        {
          newData.likes-=1
          newData.profile_data.liked=false
        }
        newData.dislikes+=1
        newData.profile_data.disliked=true
        setData(newData)
        dispatch(userDislikeAction({id:data.id , type: type}))
    }
    const handleLike = ()=>{
      const type = EntitiesChoices.ALGORITHM_QUESTION_ANSWER
      if(data.profile_data.liked == true)
      {
        let newData = data;
        newData.likes-=1
        if(newData.profile_data.liked)
        {
          newData.profile_data.liked=false;
        }
        setData(newData)
          dispatch(handleEntitieUndoLike(data.id, type))
          return;
      }
      let newData = data;
      newData.likes+=1
      newData.profile_data.liked=true
      if(newData.profile_data.disliked)
      {
        newData.dislikes-=1
        newData.profile_data.disliked = false
      }
      setData(newData)
      dispatch(userLikeAction({ id: data.id, type: type }))
    }
    
  return (
    <ListItem sx={{ borderBottom:'0.1px solid #f5f5f5'}}>
      {error && <CustomizedSnackbars severity={"danger"} >{error}</CustomizedSnackbars>}
    <ListItemAvatar>
      <Avatar>
        {data.profile_data.image}
      </Avatar>
    </ListItemAvatar>
    <ListItemText 
    
    primary={data.profile_data.email.split("@")[0]} 
    secondary={CalculateTimeAgo(data.created !== data.updated ? data.updated : data.created)} 
  >
    {data.updated !== data.created ? <small style={{opacity:'0.7'}}>updated</small> : null}
  </ListItemText>
  {
    editable ? 
    <TextField onChange={(e)=>setData(prev=>({...prev,description:e.target.value}))} placeholder={data.description} />
    :
    loading ? <Loader/> :
    <ListItemText  primary={data.description}  />
  }
    <ListItemIcon>
      {
        data.profile_data?.userId === userId &&
        <>
           {data.description !== initialDescription &&
           <BookmarkAddedIcon style={{cursor:'pointer'}} onClick={()=>{dispatch(updateAlgoQuestionComment(data.description,data.id));setEditable(false)}} />
        }
            <EditIcon  style={{cursor:'pointer'}} onClick={()=>{setEditable(prev=>!prev)}}/>
           <DeleteIcon style={{opacity:'0.8',cursor:'pointer'}}/>
        </>
      }
      <ThumbUpIcon style={{opacity:e.profile_data.liked ? 1 : 0.8,cursor:'pointer'}} onClick={()=>handleLike()}/>
      <p  style={{opacity:data.profile_data.liked ? 1 : 0.8,cursor:'pointer'}}>{data.likes}</p>
      <ThumbDownAltIcon style={{opacity:e.profile_data.liked ? 1 : 0.8,cursor:'pointer'}} onClick={()=>handleDislike()}/>
      <p  style={{opacity:data.profile_data.disliked ? 1 : 0.8,cursor:'pointer'}}>{data.dislikes}</p> 
     </ListItemIcon>
  </ListItem>
  )
}

export default CommentAnswer
