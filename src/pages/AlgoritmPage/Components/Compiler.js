import React, {  useState } from 'react'
import {  Container, Row } from 'react-bootstrap'

import './AlgoritmComp.css'
import Interpreter from '../../Interpreter/Interpreter'

const Compiler = () => {

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
    <Container fluid style={expand ? Expanded : nonExpanded}> 
        <Row style={{height:'100%'}}>
        <Interpreter setExpand={setExpand}  />
        </Row>
    </Container>
  )
}

export default Compiler
