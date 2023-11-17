import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, FormControl, FormGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Content from './Components/Content'
import { useDispatch } from 'react-redux'
import { secondaryGray } from '../../Static/Colors'
import WhiteButton from '../../components/WhiteButton'
import { useParams } from 'react-router-dom'
import { roadmapGetCurrentChapter } from '../../actions/roadmapGetAllAction'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import Loader from '../../components/Spinner'
import Message from '../../components/Message'
import VideoCourse from './Components/VideoCourse'
import QuizPage from '../QuizPageComponent/QuizPage'
import AlgoritmPage from '../AlgoritmPage/AlgoritmPage'
import { useNavigate } from 'react-router-dom'
import './courseNavBar.css'
import RightPopUp from './Components/RightPopUp'
const Course = () => {

  const roadmapItem = useSelector(state=>state.roadmapItem)
  const {roadmap : currentChapter}=roadmapItem

  const navigate = useNavigate()
  const { roadmapId, chapterId, contentId, type, roadmapName }  = useParams();
  const dispatch = useDispatch();
  const roadmapItemData = useSelector(state => state.roadmapItem)

  const { loading, error, roadmap } = roadmapItemData;
 

  const [content, setContent] = useState(
    localStorage.getItem('content') || 'course'
  );
  useEffect(() => {
    dispatch(roadmapGetCurrentChapter(roadmapId));
  }, [roadmapId,chapterId, contentId, type]);
 
  return (
    <section style={{width:'100vw',display:'flex'}}>
      {loading ? <Loader/> : error? <Message variant={'danger'}>{error}</Message> :
      roadmap && 
      <>
          {type === "Video" ? 
            <VideoCourse videos = {roadmap?.chapter?.videos}/>
            :
             type ==="Quiz"?
              <QuizPage quizes = {roadmap?.chapter?.quizez} />
            :
              <AlgoritmPage algorithms = {roadmap?.chapter?.algorithms} />
          }
            <RightPopUp type={type} roadmap={roadmap}/>
      </>
      }
    
    </section>
  )
}

export default Course
