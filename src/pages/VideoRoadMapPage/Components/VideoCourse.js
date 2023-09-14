import React, { useState } from 'react'
import { Col, Container, FormControl, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import WhiteButton from '../../../components/WhiteButton'
import { secondaryGray } from '../../../Static/Colors'

const VideoCourse = ({video}) => {
    const [dummy, setDummy] = useState([1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10])

  return (
      <Col style={{ background: `${secondaryGray}`, height: '', width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

          <Container style={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} fluid>
              <Row md={12} style={{ width: '100%' }}>
                  <video controls width="100%">
                      <source src={video?.url} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </Row>

              <Row md={2} style={{ width: '100%' }}>
                  <ListGroup style={{ width: '100%', overflowY: 'scroll', height: '' }}>
                      {video?.comments?.map(comment =>
                          <ListGroupItem>
                              <Row>
                                  <strong>{comment?.userName}</strong>
                              </Row>
                              <Row>
                                <p style={{margin:'0'}}>{comment.name}</p>
                                  <p>{comment.description}</p>
                                  <small>25m ago</small>
                              </Row>
                          </ListGroupItem>
                      )}
                  </ListGroup>
              </Row>
              <ListGroup style={{ width: '100%' }}>
                  <ListGroupItem>

                      <FormControl placeholder='Leave a comment' style={{ width: '90%', height: '90%' }} />
                      <WhiteButton small={true} heightlen={"2rem"} widthlen={'10rem'} text={"submit"} />
                  </ListGroupItem>
              </ListGroup>
          </Container>
      </Col>
  )
}

export default VideoCourse
