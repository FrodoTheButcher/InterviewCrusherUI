import React, { useEffect, useState } from 'react'
import { Button, Container, Row ,Col} from 'react-bootstrap'
import {ReactComponent as Restart} from '../../../svg/Restart.svg'
import { ReactComponent as Save } from '../../../svg/Save.svg'
import { ReactComponent as Expand } from '../../../svg/Expand.svg'
import './AlgoritmComp.css'
import Interpreter from '../../Interpreter/Interpreter'
import Languages from './Languages'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
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
