import React, { useContext, useEffect } from 'react'
import {Col,Container,Row, Spinner} from 'react-bootstrap'
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
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import FloatingActionButtonZoom from './Components/TableContent'
import { getSubmissionsAction } from '../../actions/algorithmAction'
import Interpreter from '../Interpreter/Interpreter'

const AlgoritmPage = ({ algorithms }) => {
  const getCurrentAlgo = ()=>{
    let currentAlgo = algorithms?.finished.find(e=>e.id===parseInt(contentId));
      if(!currentAlgo)
      {
        currentAlgo = algorithms?.unfinished.find(e => e.id === parseInt(contentId));
      }
      setCurrentAlgo(currentAlgo);
  }
  const [currentAlgo,setCurrentAlgo] = useState(null)
  const { contentId } = useParams();

  useEffect(()=>{
          getCurrentAlgo();
   }, [contentId])

   const [expand,setExpand]=useState(false)
   const nonExpanded ={
     width:"100%",
     height:"100%"
   }
 
   const Expanded = {
     width: "100vw",
     height: "100vh",
     position:"absolute",
     left:"0",
     zIndex:10
   }
  return (
    <Row style={{ position: 'relative', width: '100vw', height: '100vh', background: 'rgb(240 240 240)' }}>
          <Col style={{height:'100%'}}> 
              <FloatingActionButtonZoom  currentAlgo={currentAlgo} />
          </Col>
          <Col style={{ height: '100%' }}>
              <Interpreter setExpand={setExpand}  />
          </Col>
     </Row>
  )
}

export default AlgoritmPage
