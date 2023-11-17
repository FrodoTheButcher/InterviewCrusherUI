import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Placeholder from '../../../images/placeholder.png'
import { Col, Container, ListGroup ,ListGroupItem,Row, Spinner} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import {ReactComponent as FullStar} from '../../../svg/fullStar.svg'
import { primaryBlue } from '../../../Static/Colors';
import './Question.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlgoQuestionAction } from '../../../actions/algorithmAction';
import ErrorPrinter from '../../../actions/errorPrinter';
const   Question = () => {

    const {contentId} = useParams()
    const dispatch = useDispatch()
    const algoQuestions = useSelector(state => state.getAlgoQuestionsReducer)
    const {loading,data:questions,error} = algoQuestions
    useEffect(() => {   
        dispatch(getAlgoQuestionAction(contentId))  
    }, [])

    console.log("question",questions)
    if(questions === undefined || loading)
    {
        return (
            <Spinner/>
        )
    }
    if(error)
    {
        return (
            <div>{ErrorPrinter(error)}</div>
        )
    }
    return (
        <Container style={{width:'100%',height:'100vh'}}>
            <ListGroup className=''>
                {questions?.map(e => 
                <div >
                        <ListGroup.Item style={{textAlign:'center'}}>
                            <Row className=' mt-2'>
                                
                                <Col className='d-flex align-items-center justify-content-center' md={2}>
                                    <img style={{ width: '4rem',borderRadius:'3px' }} src={e?.userProfile?.image} />
                                </Col>
                                <Col className='d-flex align-items-center justify-content-center' md={2}>
                                    <small>{e?.userProfile?.email}</small>
                                </Col>
                                <Col className='d-flex align-items-center justify-content-center' md={4}>
                                    <Link style={{ textDecoration: 'none', fontWeight: '700', color: primaryBlue }} >{e?.name}</Link>
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