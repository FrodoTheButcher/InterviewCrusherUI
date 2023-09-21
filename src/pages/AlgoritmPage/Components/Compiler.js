import React from 'react'
import { Button, Container, Row ,Col} from 'react-bootstrap'
import {ReactComponent as Restart} from '../../../svg/Restart.svg'
import { ReactComponent as Save } from '../../../svg/Save.svg'
import { ReactComponent as Expand } from '../../../svg/Expand.svg'
import './AlgoritmComp.css'
import Interpreter from '../../Interpreter/Interpreter'

const Compiler = () => {
  return (
    <Container fluid style={{background:'white',width:'100%',height:'100%'}}>
     <Container  >
        <Row style={{ height: '', width: '100%' }}>
          <Col  style={{paddingTop:'0.5em'}} md={4}>
            <h4 style={{ color: 'rgb(28, 171, 252)' }}>C++</h4>
            <small>Paste your code</small>
          </Col>
          <Col style={{ marginLeft: 'auto',paddingTop:'0.5em' }} className='CompilerSvgs' md={4}>
            <Restart />
            <Save />
            <Expand />
          </Col>
        </Row>   
     </Container>
        <Interpreter />
    </Container>
  )
}

export default Compiler
