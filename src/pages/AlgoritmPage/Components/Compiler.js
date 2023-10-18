import React, { useEffect, useState } from 'react'
import { Button, Container, Row ,Col} from 'react-bootstrap'
import {ReactComponent as Restart} from '../../../svg/Restart.svg'
import { ReactComponent as Save } from '../../../svg/Save.svg'
import { ReactComponent as Expand } from '../../../svg/Expand.svg'
import './AlgoritmComp.css'
import Interpreter from '../../Interpreter/Interpreter'
import Languages from './Languages'

const Compiler = () => {
  const [selectedLang,setSelectedLang] = useState(null)
  useEffect(()=>{
    console.log(selectedLang)
  },[selectedLang ])

  return (
    <Container fluid style={{width:'100%',height:'100%'}}>
        <Row style={{ width: '100%',height:'10%' }}>
          <Col  style={{paddingTop:'0.5em'}} md={4}>
            <Languages selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
            <small>Paste your code</small>
          </Col>
          <Col style={{ marginLeft: 'auto',paddingTop:'0.5em' }} className='CompilerSvgs' md={4}>
            <Restart />
            <Save />
            <Expand />
          </Col>
        </Row>   
        <Row style={{height:'90%'}}>
        <Interpreter selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
        </Row>
    </Container>
  )
}

export default Compiler
