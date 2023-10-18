import React, { useState } from 'react'
import { Button, Col, Container, FormControl, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import WhiteButton from '../../../components/WhiteButton'
import { primaryGray, secondaryGray } from '../../../Static/Colors'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../../components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { createVideoCommentsAction } from '../../../actions/courseVideoAction'
import Message from '../../../components/Message'
import { ErrorPrinter } from '../../../actions/errorPrinter'
import { Avatar } from '@mui/material'
import Comments from '../../../components/Comments'
import { CalculateTimeAgo } from '../../../components/CalculateTime'

const VideoCourse = ({videos}) => {
    const [video,setVideo] = useState(null)
    const [comments,setComments] = useState([])

    const { contentId } = useParams()
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
            const videoData = videos.find(video => video.id.toString() === contentId)
            setComments(videoData?.comments)
            setVideo(videoData)
        }
    },[videos,contentId])

    useEffect(()=>{
        if (newCommentId && !loadingCommentCreate && !errorCommentCreate)
        {
            const user = JSON.parse(localStorage.getItem("user"));
            const newComments = [...comments,{
                "id":newCommentId,
                "description":commentData,
                "userImage": user.image,
                "userName":user.name.length === 0 ? user.email : user.image,
                "userId":user.userId,
                "videoId":contentId
            }]
            setComments(newComments)
        }
    }, [newCommentId,dispatch,loadingCommentCreate,errorCommentCreate])
    if(video === null)
    {
        return (
            <Loader/>
        )
    }
    
  return (
      <Col style={{ background: `${secondaryGray}`, height: '', width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Container style={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} fluid>
              <Row md={12} style={{ width: '100%' }}>
                  <video controls width="100%">
                      <source src={video?.url} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </Row>

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
                      <ErrorPrinter error={errorCommentCreate} />
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
