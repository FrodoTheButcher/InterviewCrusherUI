import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Example = () => {
  return (
          <Container >
              <h3 style={{fontWeight:'bolder'}} >Example 1:</h3>
          <Container  style={{ borderRadius: '10px', padding:'2rem',boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', background: '#000a2008', margin: '0.2rem' }}>
                  
                  <Row>
                      <Col md={4}>
                      <h5 style={{ fontWeight: '550', opacity:'0.8',color:'black'}}>Input:</h5>
                      </Col>
                      <Col style={{display:'flex',justifyContent:'',alignItems:'center'}} >
                      <h6 style={{ fontWeight: '550', opacity: '0.8', color: 'black' }}>nums =[1,2,3,1]</h6>
                      </Col>
                  </Row>
                  <Row>
                      <Col md={4}>
                      <h5 style={{ fontWeight: '550', opacity: '0.8', color: 'black' }}>Output:</h5>
                      </Col>
                  <Col style={{ display: 'flex', justifyContent: '', alignItems: 'center' }}>
                      <h6 style={{ fontWeight: '550', opacity: '0.8', color: 'black' }}>True</h6>
                      </Col>
                  </Row>
              <Row style={{ marginTop: '1rem', color: '#262626bf', fontSize: '1.2rem'}}>
                  <h5 style={{ fontWeight: '550', opacity: '0.8', color: 'black' } }>
                       Explanation:
                  </h5>
                  <p>
                      The merged string will be merged as so:
                      word1:  a   b   c
                      word2:    p   q   r
                      merged: a p b q c r
                  </p>
                        
              </Row>
              </Container>
          </Container>  
  )
}

export default Example
