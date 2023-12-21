import React, { useRef, useState } from 'react'
import {  Col, Container, FormControl, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import WhiteButton from '../../../components/WhiteButton'
import {  secondaryGray } from '../../../Static/Colors'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../../components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { createVideoCommentsAction } from '../../../actions/courseVideoAction'
import { ErrorPrinter } from '../../../actions/errorPrinter'
import { Avatar } from '@mui/material'
import { CalculateTimeAgo } from '../../../components/CalculateTime'
import { registerVideoSubmissionAction } from '../../../actions/videoAction'
const VideoCourse = ({videos}) => {
    const [finishedVideos,setFinishedVideos] = useState([])
    const [unfinishedVideos, setUnFinishedVideos] = useState([])
    const [video,setVideo]=useState(null)
    const [comments,setComments] = useState([])

    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef(null);

   

    const { contentId, roadmapId } = useParams()
    const dispatch = useDispatch()

    const [commentData,setCommentData] = useState("")
    const videoCommentsCreate = useSelector(state => state.createCourseVideoCommentsReducer)
    const {loading:loadingCommentCreate,error:errorCommentCreate,commentId:newCommentId} = videoCommentsCreate
    const handleCommentCreate = ()=>{
        dispatch(createVideoCommentsAction({ "userId": JSON.parse(localStorage.getItem("user")).userId,"videoId":contentId,"description":commentData}))
    }
   

    useEffect(()=>{
        if(videos)
        {
            console.log(videos)
            let videoData = videos.finished?.find(video => video.id.toString() === contentId)
            if(!videoData)
            videoData = videos.unfinished?.find(video => video.id.toString() === contentId)
            setComments(videoData?.comments)
            setVideo(videoData)
            setFinishedVideos()
            setFinishedVideos(videos.finishedVideos)
            setUnFinishedVideos(videos.unfinishedVideos)

        }       
    },[dispatch,videos,contentId])

    

    if(video === null)
    {
        return (
            <Loader/>
        )

        
    }

    
  return (
      <Col style={{ background: `${secondaryGray}`, height: '100vh', width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Container style={{ width: '100%', height:"100%",position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} fluid>
              <iframe style={{height:'100%', width:'100%'}} src={video.url} 
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen" 
              msallowfullscreen="msallowfullscreen" 
              oallowfullscreen="oallowfullscreen" 
              webkitallowfullscreen="webkitallowfullscreen"
              onEnded={()=>{
                const data ={
                    "videoId":contentId,
                    "templateId": roadmapId
                }
                dispatch(registerVideoSubmissionAction(data))
              }}
              ></iframe>          
              <Row md={2} style={{ width: '100%' }}>
                  <ListGroup style={{ width: '100%', overflowY: 'scroll', height: '' }}>
                      {comments?.map(comment =>
                          <ListGroupItem>
                            <Row >
                                  <Col md={1}>
                                      <Avatar sx={{ background: secondaryGray }} >
                                          {comment?.userName[0] ? comment?.userName[0].toUpperCase() : 'A'}
                                      </Avatar>
                                  </Col>
                                  <Col>
                                      <Row>
                                          <strong>{comment?.userName}</strong>
                                      </Row>
                                      <Row>
                                          <p style={{ margin: '0' }}>{comment.name}</p>
                                          <p>{comment.description}</p>
                                      </Row>
                                  </Col>
                                  <Col>
                                      <small>{CalculateTimeAgo(comment?.updatedAt)}</small>
                                  </Col>

                            </Row>
                           
                          </ListGroupItem>
                      )}
                  </ListGroup>
              </Row>
              <ListGroup style={{ width: '100%' }}>
                  <ListGroupItem>
                    {loadingCommentCreate && <Loader/>}
                      <FormControl 
                      onChange={(e)=>setCommentData(e.target.value)}
                      placeholder='Leave a comment' style={{ width: '90%', height: '90%' }} />
                      <WhiteButton onClick={handleCommentCreate} color={"black"} small={true} heightlen={"2rem"} widthlen={'7rem'} text={"submit"} />
                  </ListGroupItem>
              </ListGroup>
          </Container>
      </Col>
  )
}

export default VideoCourse
