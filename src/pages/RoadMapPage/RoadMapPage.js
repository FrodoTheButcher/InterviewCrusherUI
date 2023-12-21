import React, { useState } from 'react'
import ReusableRecommendedChapter from '../../components/ReusableRecommendedChapter'
import { Container,Row,Col } from 'react-bootstrap'
import Footer from '../../components/Footer'
import MiniNavbar from '../../components/miniNavbar'
import RoadMapComponent from './Components/RoadMapComponent'
import CourseComponentPopup from './Components/CourseComponentPopup'
import { CS, DJANGO, MACHINELEARNING, REACT, REACTCS, REACTDJANGO, UNFOCUSED } from './constants'
import './RoadMapChaptersPage.css'
import { useEffect } from 'react'
import { useRef } from 'react'

import { useNavbar } from '../../Context/ContextProvider'
import { useDispatch } from 'react-redux'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { roadmapGetAllAction, roadmapGetCurrentChapter } from '../../actions/roadmapGetAllAction'
import Loader from '../../components/Spinner'
import Message from '../../components/Message'
import ScheduleTimeToLearnCalendar from './Components/ScheduleTime'
import ErrorPrinter from '../../actions/errorPrinter'
import CustomizedSnackbars from '../../components/CustomizedSnackbars'
const RoadMapPage = () => {

  const [openSchedule,setOpenSchedule] = useState(false)
  const [schedule,setSchedule] = useState(null)

  const dispatch = useDispatch()
  const roadmap = useSelector(state=>state.roadmapItem)
  const {loading:loadingRoadmap,error:errorRoadmap} = roadmap
 
  useEffect(()=>{
    dispatch(roadmapGetAllAction())
  },[dispatch])

  const targetRefs = useRef([]);
  const [textReveal, settextReveal] = useState(true);
  const [isFocused,setIsFocused] = useState(UNFOCUSED);

  
  const roadmapList = useSelector(state => state.roadmapList)
  const { loading, error, roadmaps } = roadmapList;

  useEffect(()=>{
    const lastRoadmapSeen = localStorage.getItem('roadmapId')
    if(lastRoadmapSeen)
    dispatch(roadmapGetCurrentChapter(lastRoadmapSeen))
   },[])


  const unseen = {
    transform:'translateY(10em)',
    opacity:'0',
    filter:'blur(30px)',
    transition:'all 0.3s ease-in-out',
  }
  const seenPair1 = {
    transform: 'translateY(0em)',
    opacity: '1',
    filter: 'blur(0px)',
    transition: 'all 0.3s ease-in-out',
  }
  
  const { mainPageContainerProvenience, setMainPageContainerProvenience } = useNavbar();

 

  return (
    <div  style={{ position: 'relative', top: '7rem', width: '100vw' }}>
      {loading  || loadingRoadmap? <Loader/> : error || errorRoadmap? <CustomizedSnackbars isOpen={true} message={error ? error :errorRoadmap} severity={"danger"}/>  :<>
        <div   className='Publicity'>
          <h1 style={{ fontSize: '5em' }}>Learning Online</h1>
          <h2>Experience your own way of learning</h2>
        </div>
        <Container style={isFocused != UNFOCUSED ? { width: '100vw', margin: '0' } : { width: '100vw' }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {openSchedule && <ScheduleTimeToLearnCalendar setSchedule={setSchedule} />}
            <CourseComponentPopup  schedule={schedule} openSchedule={openSchedule} setOpenSchedule={setOpenSchedule} />
          </div>
          <Container  fluid>
            {roadmaps && roadmaps.map((roadmap, index) => (
              <Row key={roadmap[0].id} >
                <Col style={isFocused !== UNFOCUSED ? seenPair1 : textReveal ? seenPair1 : unseen}>
                  <div className={isFocused === (roadmap[0]?.id) ? "ComponentIsFocused" : isFocused !== UNFOCUSED ? "ComponentUnfocused" : ""} style={{ height: '15em', width: '35em' }}>
                    <RoadMapComponent
                      roadmap={roadmap[0]}
                      mainPageContainerProvenience={mainPageContainerProvenience}
                      setMainPageContainerProvenience={setMainPageContainerProvenience}
                      setIsFocused={setIsFocused}
                      MainParagraph={"Interview's Crusher RoadMap"}
                      SecondParagraph={roadmap[0].description}
                      span={" with " + roadmap[0].title}
                      ButtonText={"Start Learning"}
                      SmallText={`Become a programmer in ${roadmap[0].avarageTimeToFinish}`}
                    />
                  </div>
                </Col>
                {roadmap.length >= 1 && (
                  <Col key={roadmap[1]?.id} style={isFocused !== UNFOCUSED ? seenPair1 : textReveal ? seenPair1 : unseen}>
                    <div className={isFocused === roadmap[1].id ? "ComponentIsFocused" : isFocused !== UNFOCUSED ? "ComponentUnfocused" : ""} style={{ height: '15em', width: '35em' }}>
                      <RoadMapComponent
                        roadmap={roadmap[1]}
                        mainPageContainerProvenience={mainPageContainerProvenience}
                        setMainPageContainerProvenience={setMainPageContainerProvenience}
                        setIsFocused={setIsFocused}
                        MainParagraph={"Interview's Crusher RoadMap"}
                        SecondParagraph={roadmap[1].description}
                        span={" with " + roadmap[1].title}
                        ButtonText={"Start Learning"}
                        SmallText={`Become a programmer in ${roadmap[1].avarageTimeToFinish}`}
                      />
                    </div>
                  </Col>
                )}
              </Row>
            ))}
          </Container>

        </Container >
        <div fluid style={{ width: '100vw', marginTop: '5em' }}>
          <Footer />
        </div>

      </>}
  
     
    </div>
  )
}

export default RoadMapPage
