import React, { useContext, useEffect } from 'react'
import {Col,Row} from 'react-bootstrap'
import Description from './Components/Description'
import Compiler from './Components/Compiler'
import { useNavbar } from '../../Context/ContextProvider'
import { DESCRIPTION, OVERVIEW, QUESTIONS, SOLUTIONS, SUBMISSIONS } from '../../Constants/AlgoritmPage'
import { useState } from 'react'
import NavbarAlgoPage from './Components/NavbarAlgoPage'
import Overview from './Components/Overview'
import Solutions from './Components/Solutions'
import Question from './Components/Question'
import Submissions from './Components/Submissions'
import { HARD } from '../../Constants/DifficultyConstants'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AlgoritmPage = () => {
  const [projectViewScreen,setProjectViewScreen]=useState(DESCRIPTION)
  const [submissions,setSubmissions] = useState([])

  const roadMapItem = useSelector(state=>state.roadmapItem)
  const { roadmap } = roadMapItem
  const getCurrentAlgo = ()=>{
      const currentAlgo = roadmap?.algoArrayData.find(e=>e.id===parseInt(contentId));
      setCurrentAlgo(currentAlgo);
  }
  const [currentAlgo,setCurrentAlgo] = useState(null)
  const { contentId } = useParams();

  const getSubmissions = async ()=>{
    try{

      const access = localStorage.getItem('access')
      const config = {
          headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${access}`
          }
      }
      const response = await axios.get(`http://127.0.0.1:8000/api/submission/${contentId}/`,config)
      setSubmissions(response.data.data)
    }
    catch(e)
    {
      console.error(e)
    }
  }
 
  useEffect(()=>{
      if(contentId)
      {
          getCurrentAlgo();
          getSubmissions()
      }
  }, [contentId])


  return (
      <div style={{position: 'relative', top: '5rem', width: '100vw', height: '100vh', background: 'rgb(240 240 240)'}} >
        <Row>
          <Col style={{borderLeft:'2rem white',overflowY:'scroll',height:'100vh'}}>
          <NavbarAlgoPage setProjectViewScreen={setProjectViewScreen}/>
          {projectViewScreen === DESCRIPTION  ? <Description currentAlgo={currentAlgo} difficulty={HARD} /> : "" }
          {projectViewScreen === OVERVIEW ? <Overview tips={currentAlgo?.tips} /> : ""}
          {projectViewScreen === SOLUTIONS ? <Solutions /> : ""}
          {projectViewScreen === QUESTIONS ? <Question  questions={currentAlgo?.questions}  /> : ""}
          {projectViewScreen === SUBMISSIONS ? <Submissions submissions={submissions} /> : ""}
          </Col>
            <Col>
                  <Compiler />
            </Col>
        </Row>
    </div>
  )
}

export default AlgoritmPage
