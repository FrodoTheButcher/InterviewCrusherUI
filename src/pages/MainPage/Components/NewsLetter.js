import React from 'react'
import { Container, Row, Col, Button,Form } from 'react-bootstrap'
import { ReactComponent as BlackRow } from '../../svg/blackRow.svg';
import FormGroup from 'react-bootstrap';
import { WorkToOurCompany, WebDevelopment, MachineLearning, ArtificialIntelligence, DevOps, DataStructure, Interviews, GetHiredNow, WorkWithUs, handleFocus } from '../../Constants/MiniNavbarConstants'
import { useEffect,useState } from 'react';
import { useRef } from 'react';
const NewsLetter = () => {
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
    <Row ref={(element) => (targetRefs.current[0] = element)} fluid className='NewsLetter d-flex align-items-center justify-content-center'>
        <Row className='BlackRow' style={{zIndex:'10'}}>
              <Container className='BlackRow'>
                <div style={{position:'absolute',width:'100%',height:'100%',display:'flex',justifyContent:'space-around'}}>
                      <div className='BlackRectangle' />
                      <div className='BlackRectangle' />
                      <div className='BlackRectangle' />
                </div>
               
                
                      <h1 style={{ fontSize: '4rem',zIndex:'1' }}>What's new?</h1>
                        <br/>
                      <h5>Be always at the latest updates...</h5>
               
              </Container>
        </Row>
        
        <Col style={{width:'30rem',height:'30rem'}}>
              <Container className='DjangoTemplate' style={{ width:'100%',height:"100%" }}>
              </Container>
        </Col>
          <Col style={{ width: '30rem', height: '30rem' }}>
              <Container>
                  <Row>
                      <h1>CookBook using <span style={{ color: "rgb(28, 171, 252)" }}> <a href='#'>Django</a></span></h1>
                  </Row>
                  <Row>
                      <Row>
                          <Container  >
                              <h4 style={{ fontWeight: '550', fontFamily:'sans-serif',color:'rgb(86, 99, 111)'}}>It is a long established fact that a reader<br />
                                  will be distracted <br />
                                  by the readable content of a page <br />
                                  when looking at its layout<br />
                              </h4>
                          </Container>
                      </Row>
                      <Row>
                          <Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="name@example.com" />
                          </Form.Group>
                          </Row>
                          <Container style={{marginTop:'2rem'}}>
                              <Row> <Button className='btnSubscribe' style={{margin:'0', width: '12rem', height:'3rem',fontSize:'1.6rem',color: "white", background:'rgb(28, 29, 31)' , border:'none'}}>Subscribe</Button></Row>
                              <Row style={{fontWeight:'bolder',marginTop:'1rem'}} >To be updated to out latest news</Row>
                          </Container>
                      </Row>
                  </Row>
              </Container>
       </Col>
         
    </Row>
  )
}

export default NewsLetter
