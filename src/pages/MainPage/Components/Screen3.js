import React, { useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../IntroductionPage.css'
import { useRef } from 'react'
import {ReactComponent as Video} from '../../../images/video.svg'
import { ReactComponent as Video2 } from '../../../images/video2.svg'
import {ReactComponent as Sigile1} from '../../../svg/Component 49v2.svg'
import { ReactComponent as Sigile2 } from '../../../svg/Component 50.svg'
import { ReactComponent as Sigile3 } from '../../../svg/Component 53v2.svg'
import { ReactComponent as Sigile4 } from '../../../svg/Component 58.svg'
import { ReactComponent as Sigile5 } from '../../../svg/intrebare2.svg'
import { ReactComponent as Sigile6 } from '../../../svg/user.svg'

import { useState } from 'react'
const Screen3 = ({ isIntersecting }) => {


    const targetRefs = useRef([]);
    const [textReveal, settextReveal] = useState(false);

    useEffect(() => {
        console.log(textReveal)
    }, [textReveal])

    const handleIntersection = (index, isIntersecting) => {

        settextReveal(isIntersecting);

    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const { target, isIntersecting } = entry;
                    const index = targetRefs.current.indexOf(target);
                    handleIntersection(index, isIntersecting);
                });
            },
            { threshold: 0.5 } // Adjust threshold as per your needs
        );

        targetRefs.current.forEach((target) => {
            if (target) {
                observer.observe(target);
            }
        });

        return () => {
            targetRefs.current.forEach((target) => {
                if (target) {
                    observer.unobserve(target);
                }
            });
        };
    }, []);
  return (
      <Container fluid className='Page3 d-flex align-items-center justify-content-center' style={{ zIndex: '5', position: 'relative' }}>
          <Row  >

              <Row className='display3Row'>
                  <Col  className='d-flex align-items-center Sigiles' style={{ flexDirection: 'column',textAlign: 'left',borderRight:'2px solid white' }}>
                        <Row >
                          <Col className={`Sigile ${textReveal ? "SigileRotate" : ""} `}>
                              <Sigile5 />
                            </Col>
                          <Col className={`Sigile ${textReveal ? "SigileRotate" : ""} `}>
                              <Sigile1 />
                          </Col>
                          <Col className={`Sigile ${textReveal ? "SigileRotate" : ""} `}>
                              <Sigile2 />
                          </Col>
                        </Row>
                        <Row className='SigilesText'>
                          <h2 style={{ color: 'rgb(34, 137, 196)', fontWeight: 'bolder' }}>Questions, Community & Contests</h2>
                        </Row>
                        <Row>
                          <p className='Display3Text' style={{ fontWeight: 'bolder', opacity: '0.8' }}>
                              Over 2900 questions for you to practice. Come and join one of the largest <br />
                              tech communities with hundreds of <br />
                              thousands of active users and participate in our contests to challenge <br />
                              yourself and earn rewards
                          </p>
                        </Row>
                        <Row>
                          <a href='#' style={{ color: 'rgb(34, 137, 196)', fontWeight: 'bolder' }}>
                              View questions &gt;
                          </a>
                        </Row> 
                  </Col>
                  <Col ref={(element) => (targetRefs.current[0] = element)} className='d-flex align-items-center' style={{flexDirection:'column',textAlign:'left'}}>
                      <Row>
                          <Col className={`Sigile ${textReveal ? "SigileRotate" : ""} `}>
                              <Sigile4 />
                          </Col>
                          <Col className={`Sigile ${textReveal ? "SigileRotate" : ""} `}>
                              <Sigile6 />
                          </Col>
                      </Row>
                     
                      <Row >
                          <h2 style={{ color: 'rgb(34, 137, 196)', fontWeight: 'bolder' }}>Companies & Candidates</h2>
                      </Row>
                      <Row className='Display3Text'>
                          <p style={{ fontWeight: 'bolder', opacity: '0.8' }}>
                              Not only does LeetCode prepare candidates for technical interviews, <br />
                              we also help companies identify top technical talent. <br />
                              From sponsoring contests to providing online assessments and training,  <br />
                              we offer numerous services to businesses.
                          </p>
                      </Row>
                      <Row>
                          <a href='#' style={{ color: 'rgb(34, 137, 196)', fontWeight: 'bolder' }}>
                              Business opportunities &gt;
                          </a>
                      </Row>                     
                  </Col>
              </Row>
              <Row className='Display3' style={{marginTop:'5rem'}} >
                  <Col style={{textAlign:'center'}}>
                      <h1>Why to use our <span style={{ color: "#2289C4" }}>platform</span></h1>
                      <h3>Empower Your Programming <span style={{ color: "#2289C4" }}>Journey</span></h3>
                      <h5 style={{ fontWeight: 'bold', color: "#56636F" }}>Supercharge your programming journey with our skill-building platform</h5>
                      <h5 style={{ fontWeight: 'bold', color: "#56636F" }}>Access a wide range of resources and hands-on exercises for all levels</h5>
                      <h5 style={{ fontWeight: 'bold', color: "#56636F" }}>Personalized learning paths, expert support , and gamified</h5>
                      <h5 style={{ fontWeight: 'bold', color: "#56636F" }}>Stay up-to-date with the latest trends and gain career-ready skills</h5>
                  </Col>
                  <Col className='Display3'>
                      <div   className={`ShadowCard ${textReveal ? "ShadowCardReveal" : ""} `} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                          <Container  className='d-flex align-items-center justify-content-center' style={{ flexDirection: 'column' }}>
                              <h1 style={{ marginBottom: '2rem' }}>Welcome to Our <span style={{ color: "#2289C4" }}>Website</span></h1>
                              <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                  <h4>Discover Amazing  <span style={{ color: "#2289C4" }}>Products</span></h4>
                                  <h4>Get <span style={{ color: "#2289C4" }}>Exclusive</span> Deals</h4>
                                  <h4>Shop Now and <span style={{ color: "#2289C4" }}>Save</span>!</h4>
                              </Row>
                          </Container>

                      </div>
                  </Col>
              </Row>
          </Row>
          </Container>
           
  )
}

export default Screen3
