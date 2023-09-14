import React from 'react'
import { Container ,Button,Row,Col} from 'react-bootstrap'
import '../IntroductionPage.css'
import {ReactComponent as Biff} from '../../../svg/biff.svg'
import { Link } from 'react-router-dom'
import ButtonTs from '../Components/ButtonTs'
const TextIntroduction = () => {
  return (
    <Container>
      <Container style={{marginBottom:'2rem'}}>
                    <Row>
                          <h1 className='TextIntroduction' style={{ color: 'white', fontSize: '5rem' }} >Reach To Your <span style={{ color: "#1CABFC" }}>Goals</span></h1>
                    </Row>
                    <Row>
                          <p className='text-introduction' style={{ color: 'white', fontWeight: '500' }}>Your Gateway to Proficient Programming Practice and Learning</p>

                    </Row>

                    <Row>
                          <Button className='StartBtn' style={{ width: '13rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem', backgroundColor: "#1CABFC", borderRadius: "120px" }}><Link style={{textDecoration:'none',color:'white',fontWeight:'bolder',fontSize:'1.5em'}}to={'/RoadMapPage'} >Get Started</Link ></Button>

                    </Row>
                    <Row>
                          <ButtonTs text={'test'} onClick={()=>console.log('fodorica')} className='StartBtn' style={{ width: '13rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem', backgroundColor: "#1CABFC", borderRadius: "120px" }}><Link style={{textDecoration:'none',color:'white',fontWeight:'bolder',fontSize:'1.5em'}}to={'/RoadMapPage'} >Get Started</Link ></ButtonTs>

                    </Row>
      </Container>
       <Container style={{marginBottom:'5rem'}}>

                    <Row>
                          <Container style={{ color: 'white' }}>
                             
                                <Row><p className='TextIntroductionDescription'>
                                      Are you passionate about coding and technology? Embark on your journey to<br />
                                      become a real programmer and unlock exciting career opportunities.

                                </p>
                                </Row>
                                <Container>
                                      <Row>
                                            <Col className='Bif' md={1}>
                                                  <Biff />
                                            </Col>
                                            <Col> <h5 className='PointOfView' style={{ opacity: '0.8' }}>Includes free content and free courses just for you</h5></Col>
                                      </Row>
                                      <Row>
                                            <Col className='Bif' md={1}>
                                                  <Biff />
                                            </Col>
                                            <Col >
                                                  <h5 className='PointOfView' style={{ opacity: '0.8' }}>
                                                        Ready to take your programming skills to the next level?
                                                  </h5>
                                            </Col>

                                      </Row>
                                      <Row>
                                            <Col className='Bif' md={1}>
                                                  <Biff />
                                            </Col>
                                            <Col>
                                                  <h5 className='PointOfView' style={{ opacity: '0.8' }}>
                                                        Interested in diving into the world of algorithms and data structures?
                                                  </h5>
                                            </Col>
                                      </Row>
                                      <Row><h3 className='FinalView' style={{ opacity: '0.8' }}> Our courses offer in-depth knowledge and practical implementation.</h3></Row>

                                </Container>

                          </Container>
                    </Row>
       </Container>

    </Container>
  )
}

export default TextIntroduction
