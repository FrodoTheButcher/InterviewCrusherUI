import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import CourseComponentPopup from '../../components/CourseComponentPopup'
import ReusableVideoComp from '../../components/ReusableVideoComponent'
import {ReactComponent as BlackRow} from '../../svg/blackRow.svg';
import { useEffect,useState } from 'react';
import { useHref } from 'react-router-dom';
import { useRef } from 'react';
const Screen4 = () => {
  
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
      <Container >
        
          <Row style={{ position: 'relative' }}><h1 style={{ fontWeight: 'bold' }}>Let's start learning , Fodor</h1></Row>
          <Row style={{ marginTop: '2rem', position: 'relative' }}>
              <Col >
              <CourseComponentPopup/>
              </Col>
              <Col style={{ marginLeft: '1rem' }} xs>
                <ReusableVideoComp/>
              </Col>
          </Row>

          <Row ref={(element) => (targetRefs.current[0] = element)} className='d-flex align-items-center justify-content-center' style={{ marginTop: '2rem', background: '#1c1d1f', height: '8rem' }}>
              <Col xs={6} ><h2 style={{ color: 'white' }}>Want to get your own course added?</h2></Col>
              <Col xs={3}>
                  <Button className='BigBtnDismiss' style={{ background: 'white', color: 'black', fontWeight: 'bolder' }}>Start with us today!</Button>
                  <Button className='SmallBtnDismiss' style={{ background: 'transparent', border: '1px solid white', marginLeft: '2rem' }}>Dismiss</Button>
              </Col>
          </Row>
      </Container>
  )
}

export default Screen4
