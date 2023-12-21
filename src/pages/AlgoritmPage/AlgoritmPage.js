import React, {  useEffect } from 'react'
import {Col,Row, Spinner} from 'react-bootstrap'

import { useState } from 'react'

import { useParams } from 'react-router-dom'
import FloatingActionButtonZoom from './Components/TableContent'
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
    <Row style={{ position: 'relative', width: '100vw', height: 'calc(100vh - 10rem)', background: 'rgb(240 240 240)' }}>
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
