import React from 'react'
import { Button, Container, Row ,Col} from 'react-bootstrap'
import {ReactComponent as Restart} from '../../../svg/Restart.svg'
import { ReactComponent as Save } from '../../../svg/Save.svg'
import { ReactComponent as Expand } from '../../../svg/Expand.svg'
import './AlgoritmComp.css'

const Compiler = () => {
  return (
    <Container fluid style={{background:'white',width:'100%',height:'100%'}}>
     <Row style={{height:'',width:'100%'}}>
        <Col md={4} style={{display:'flex',alignItems:'center'}}>
                  <h4 style={{ color: 'rgba(38, 38, 38, 0.75)' }}>C++</h4>
        </Col>
        <Col style={{marginLeft:'auto'}} className='CompilerSvgs' md={4}> 
              <Restart />
              <Save />
              <Expand />
        </Col>
       
     </Row>     
    </Container>
  )
}

export default Compiler
