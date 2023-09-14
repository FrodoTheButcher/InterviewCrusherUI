import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect,useState } from 'react';
import { useRef } from 'react';
import { ReactComponent as Video } from '../../../images/video.svg'
import { ReactComponent as Video2 } from '../../../images/video2.svg'
import { ReactComponent as Video3 } from '../../../images/video3.svg'


const Screen2 = () => {
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
        <Container 
            style={{
                zIndex: '10',
                height: 'fit-content',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#EDF1F6',
                height:'100vh'
            }}
            fluid
        >
            <Container ref={(element) => (targetRefs.current[0] = element)} style={{ position: 'relative' }}>
                <Row>
                    <Col>
                        <div className={`Cart ${textReveal? "CartUp" : ""}`}>
                            <Container>
                                <h3>Buy Premium</h3>
                                <h4>Start right now with a premium account!</h4>
                            </Container>
                        </div>
                        <div className={`Cart2 ${textReveal ? "CartUp" : ""}`}>
                            <Container>
                                <h3>Stick with regular account</h3>
                                <h4>Start right now with a free, but still amazing plan!</h4>
                            </Container>
                        </div>
                    </Col>
                    <Col style={{ position: 'relative', top: '3rem' }}>
                        <Container className='Screen2Title' style={{ transition: 'all 0.5s ease', transform: `translateX(${textReveal ? "0px" : "50px"})` }}>
                            <h1 style={{ fontSize: '2.8rem' }}>
                                <span style={{ color: '#2289C4' }}>Explore</span> The Chapters
                            </h1>
                            <p style={{ fontWeight: 'bold', color: '#56636F' }}>
                                It is established the fact that the reader would be more focused on the readable
                                content than on the design on this page. It is also known that is should be catchy in
                                order to be likable.
                            </p>
                        </Container>
                       
                        <Container className='Screen2Title' style={{ textAlign: 'right' ,transition: 'all 0.5s ease',marginTop:'5rem', transform: `translateX(${textReveal ? "0px" : "-50px"})` }}>
                           <Row >
                                <Col className='VideoContainer'>
                                <div className='Video1'>
                                        <Video />
                                </div>
                                    <div className='Video2'>
                                        <Video2 />
                                    </div>        
                                    <div className='Video3'>
                                        <Video3 />
                                    </div>                             
                               </Col>
                                <Col >
                                    <h2 style={{ color: 'rgb(34, 137, 196)' }}>
                                        Start Exploring{' '}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path
                                                fill="none"
                                                stroke="#2289c4"
                                                d="m12.165 7.835l1.3-1.3a3.536 3.536 0 0 0-5-5l-1.3 1.3c-.437.437-.97.767-1.558.963L3.5 4.5v.25l6.75 6.75h.25l.703-2.107c.195-.587.525-1.12.962-1.558Zm0 0L12.27 8a9.724 9.724 0 0 0 5.365 4.38M6.5 10.5a1.414 1.414 0 1 1-2-2m8.964-6.964L14.6.4M12 20.5c0-.66.113-1.322.415-1.91a10.533 10.533 0 0 1 5.264-4.88M12 20.5c5.5 0 8.5 2 8.5 2v1h-17v-1s3-2 8.5-2Zm5.678-6.79a1.5 1.5 0 1 0-.044-1.33m.044 1.33a1.493 1.493 0 0 1-.044-1.33"
                                            />
                                        </svg>
                                    </h2>
                                    <p>
                                        Start Exploring
                                        Explore is a well-organized tool that helps you get the most out of <br />
                                        InterviewCrusher by providing structure to guide your progress towards the next{' '}
                                        <br />
                                        step in your programming career.
                                    </p>
                                    <a href='#' style={{ color: 'rgb(34, 137, 196)', fontWeight: 'bolder' }}>
                                        Get Started &gt;
                                    </a>
                                </Col>
                           </Row>
                       
                          
                        </Container>
                    </Col>
                </Row>

             
            </Container>
        </Container>
    );
}

export default Screen2;
