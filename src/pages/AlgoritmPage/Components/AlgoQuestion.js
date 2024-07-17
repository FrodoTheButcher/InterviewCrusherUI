import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import MessageIcon from '@mui/icons-material/Message';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import RegisterQuestionComment from './RegisterQuestionComment';
import { useDispatch, useSelector } from 'react-redux';
import { getAlgoQuestionComments } from '../../../actions/userAction';
import EditIcon from '@mui/icons-material/Edit';
import Edit from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import { Save } from '@mui/icons-material';
import { updateAlgoQuestion } from '../../../actions/algorithmAction';
import Loader from '../../../components/Spinner';
import CustomizedSnackbars from '../../../components/CustomizedSnackbars';
const AlgoQuestion = ({e,handleLike,handleDisLike,setCommentSection}) => {

    const [userId,setUserId]=useState(JSON.parse(localStorage.getItem("user")).userId)
    const [question,setQuestion]=useState(e)
    const [initialName,setInitialName]=useState("")
    const [edit,setEdit]=useState(false)
    useEffect(()=>{
        setQuestion(e)
        setInitialName(e.name)
    },[e])
    const [isOpen,setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const updateAlgo = useSelector(state => state.updateAlgoQuestion)
    const {loading,data,error} = updateAlgo
  return (
    <ListGroup.Item style={{textAlign:'center'}}>
    <Row className=' mt-2'>
        {error && <CustomizedSnackbars severity={"danger"} >{error}</CustomizedSnackbars>}
        <Col className='d-flex align-items-center justify-content-center' md={2}>
            <img style={{ width: '3.2em',height:'3.1em',borderRadius:'100%' }} src={question?.userProfile?.image} />
        </Col>
        <Col style={{textAlign:'left'}} md={4}>
         <Row>
            <h6>{question?.userProfile?.email}</h6> <br/>
            {
                loading ? <Loader/> :
                edit ? 
                <TextField onChange={e=>setQuestion(prev=>({...prev,"name":e.target.value}))} placeholder={question?.name}/>:
                <h5 style={{ textDecoration: 'none', fontWeight: '700'}} >{question?.name}</h5>
            }
         </Row>
            <Row>
                <Col   >
                    <MessageIcon onClick={()=>{setCommentSection(true);dispatch(getAlgoQuestionComments(e.id))}} sx={{cursor:'pointer'}}   />
                <small>{question.comments_count}</small>
                </Col>
                <Col   >
                    <ThumbUpOffAltIcon sx={{cursor:'pointer',opacity:e.userProfile.liked ? 1 : 0.6}} onClick={()=>{handleLike(question);
                 
                    }} />
                <small style={{opacity:question.userProfile.liked ? 1 : 0.6}}>{question.likes}</small>
                </Col>
                <Col >
                <ThumbDownOffAltIcon sx={{cursor:'pointer',opacity:e.userProfile.disliked ? 1 : 0.6}}  onClick={()=>{handleDisLike(question);
              
                }} />
                <small style={{opacity:question.userProfile.disliked ? 1 : 0.6}}>{question.dislikes}</small>
                </Col>
                {
                    question.name !== initialName &&
                <Col >
                <Save sx={{cursor:'pointer'}}  onClick={()=>{dispatch(updateAlgoQuestion(question.name,question.id));
                setEdit(false)
                }} />
                </Col>
                }
             
                {
                    userId == question.userProfile.user_id &&
                    <Col >
                    <Edit sx={{cursor:'pointer'}}  onClick={()=>{setEdit(prev=>!prev);
                    }} />
                    </Col>
                }
             
                <Col>
                {
                    question.userProfile.userId == userId &&
                    <>
                     <EditIcon/>
                <small>edit</small>
                    </>
                   
                }
                
                </Col>
            </Row>
            <RegisterQuestionComment id={question.id} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Col>
   
    </Row>
    
</ListGroup.Item>
  )
}

export default AlgoQuestion
