import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, FormControl, FormGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Content from './Components/Content'
import { useDispatch } from 'react-redux'
import { secondaryGray } from '../../Static/Colors'
import WhiteButton from '../../components/WhiteButton'
import { useParams } from 'react-router-dom'
import { roadmapGetByIdAction } from '../../actions/roadmapGetAllAction'
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

  const navigate = useNavigate()
  const { roadmapId, chapterId, contentId, type, roadmapName }  = useParams();
  const dispatch = useDispatch();
  const roadmapItemData = useSelector(state => state.roadmapItem)

  const { loading, error, roadmap } = roadmapItemData;
 

  const [content, setContent] = useState(
    localStorage.getItem('content') || 'course'
  );
  useEffect(() => {
    
    if (contentId === "undefinedContentId" || contentId === "undefined")
    {
      //pe viitor redirectionezi unde a ramas

      const contentId = roadmap?.videoArrayData[0].id;

      navigate(`/${roadmapName}/${roadmapId}/${chapterId}/${type}/${contentId}`)
    }
   
    dispatch(roadmapGetByIdAction(roadmapId, chapterId));
  }, [dispatch, roadmapId,chapterId, contentId, type,contentId]);
 
  return (
    <section style={{width:'100vw',display:'flex'}}>
      {loading ? <Loader/> : error? <Message variant={'danger'}>{error}</Message> :
      roadmap && 
      <>
          {type === "course" ? 
            <VideoCourse videos = {roadmap.videoArrayData}/>
            :
             type ==="quiz"?
              <QuizPage quizes = {roadmap.quizArrayData} />
            :
              <AlgoritmPage />
          }
            <RightPopUp type={type} roadmap={roadmap}/>
      </>
      }
    
    </section>
  )
}

export default Course
