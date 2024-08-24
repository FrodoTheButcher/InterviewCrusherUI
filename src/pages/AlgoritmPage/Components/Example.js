import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Example = ({example,index}) => {
    function convertLiteralNewlines(text) {
        return text?.replace(/\\n/g, '\n');
      }
  return (
          <Container >
              <h3 style={{fontWeight:'bolder'}} >Example {index}:</h3>
          <Container  style={{ borderRadius: '10px', padding:'2rem',boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', background: '#000a2008', margin: '0.2rem' }}>
                  
                  <Row>
                      <Col md={4}>
                      <h5 style={{ fontWeight: '550', opacity:'0.8',color:'black'}}>Input:</h5>
                      </Col>
                      <Col style={{display:'flex',justifyContent:'',alignItems:'center'}} >
                      <h6 style={{ fontWeight: '550', opacity: '0.8', color: 'black' }}>{example.input_data}</h6>
                      </Col>
                  </Row>
                  <Row>
                      <Col md={4}>
                      <h5 style={{ fontWeight: '550', opacity: '0.8', color: 'black' }}>Output:</h5>
                      </Col>
                  <Col style={{ display: 'flex', justifyContent: '', alignItems: 'center' }}>
                      <textarea readOnly style={{ fontWeight: '550', opacity: '0.8', color: 'black' }}>{convertLiteralNewlines(example.expected_output)}</textarea>
                      </Col>
                  </Row>
              <Row style={{ marginTop: '1rem', color: '#262626bf', fontSize: '1.2rem'}}>
                  <h5 style={{ fontWeight: '550', opacity: '0.8', color: 'black' } }>
                       Explanation:
                  </h5>
                  <p>
                     {example.explanation}
                  </p>
                        
              </Row>
              </Container>
          </Container>  
  )
}

export default Example
