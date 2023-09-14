import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Placeholder from '../../../images/placeholder.png'
import { Col, Container, ListGroup ,ListGroupItem,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ReactComponent as FullStar} from '../../../svg/fullStar.svg'
import { primaryBlue } from '../../../Static/Colors';
import './Question.css'
const   Question = () => {
   const [question,setQuestions]=useState([1,2,3,4,5,6,7])
    return (
        <Container style={{width:'100%',height:'100vh'}}>
            <ListGroup className=''>
                {question.map(e => 
                <div >
                        <ListGroup.Item style={{textAlign:'center'}}>
                            <Row className='p-1 mt-2'>
                                
                                <Col className='d-flex align-items-center justify-content-center' md={2}>
                                    <img style={{ width: '4rem' }} src={`${Placeholder}`} />
                                </Col>
                                <Col className='d-flex align-items-center justify-content-center' md={2}>
                                    <h5>UserName</h5>
                                </Col>
                                <Col className='d-flex align-items-center justify-content-center' md={4}>
                                    <Link style={{ textDecoration: 'none', fontWeight: '700', color: primaryBlue }} >Question Title</Link>
                                </Col>
                                <Col md={4}>
                                    <Link style={{textDecoration:'none'}}>
                                        <ListGroupItem style={{ flexDirection: 'column' }} className='d-flex align-items-center justify-content-center'>
                                            <Col className='d-flex align-items-center justify-content-center' md={8}>
                                                <h7>Rate this question</h7>
                                            </Col>
                                            <Col>
                                                <Row >
                                                    <Col md={1} className='Star'>
                                                        <FullStar />
                                                    </Col >
                                                    <Col md={1} className='Star'>
                                                        <FullStar />
                                                    </Col >
                                                    <Col md={1} className='Star'>
                                                        <FullStar />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </ListGroupItem>
                                    </Link>
                                </Col>
                            </Row>
                            
                        </ListGroup.Item>
                </div>
                   )}
            </ListGroup>
           
        </Container>
    );
}
export default Question