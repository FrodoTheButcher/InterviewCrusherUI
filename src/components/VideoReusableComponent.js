import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'

const VideoReusableComponent = () => {
  return (
      <Row style={{ border:'2px solid #EDF1F6',background:'white'}}>
          <Col xs={6}><img style={{ width: '70%', height: '100%' }} src={require('../images/DummyCode.png')} />
              </Col>
              <Col>
                <Row>
                    <h2>Python Django - Complete Course</h2>
                    <h4>Learn to build awesome websites with Python & Django!</h4>
                    <p>By Fodor Robert</p>
                    <small>Updates <span style={{ color: 'blue' }}>September 2021</span> 18.5 total hours <span style={{ opacity: '0.8' }}> 14 lectures </span> <span style={{ opacity: '0.8' }}>All Levels</span>  </small>
                    <small>4.6 (2.316)</small>
                </Row>
              <Row xs={1}>
                    <h1>55.5 $  -<span style={{opacity:'0.3'}}>153 $</span></h1>
                </Row>
              </Col>
        </Row>
  )
}

export default VideoReusableComponent
