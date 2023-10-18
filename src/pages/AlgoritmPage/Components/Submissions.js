import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Placeholder from '../../../images/placeholder.png'
import { Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import {ReactComponent as Cancelled } from '../../../svg/Cancel.svg'
import './Submission.css'
import FormGroup from 'react-bootstrap';
import { getSubmissionsAction } from '../../../actions/algorithmAction';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from '@mui/icons-material';
import { ErrorPrinter } from '../../../actions/errorPrinter';
import { primaryBlue, secondaryGray } from '../../../Static/Colors';
const Submissions = () => {


    const {contentId} = useParams()
    const dispatch = useDispatch()

    const submissionReducer = useSelector(state => state.getSubmissionsReducer)
    const { loading, error, submissions } = submissionReducer


    useEffect(()=>{
        dispatch(getSubmissionsAction(contentId))
    }, [contentId])
    if (loading || submissions === undefined || submissions === null) {
        return (
            <Spinner />
        )
    }
    if(error)
    {
        return (
            <ErrorPrinter error={error} />
        )
    }
    return (
        <Container style={{ width: '100%', height: '100%' }}>
            <ListGroup>
                {submissions.map(e =>
                    <Link  style={{textDecoration: 'none' }}>

                        <ListGroup.Item
                            style={{
                                background: e.submissionResult?.percentage < 30 ? "#FF6B6B" :  
                             e.submissionResult?.percentage < 50 ? "#FF69B4"
                                 : e.submissionResult?.percentage < 90 ?  "#90EE90"
                                     : e.submissionResult?.percentage < 99 ? "#008080"
                                         : "#00FF00"
                         
                         }} className='SubmissionHover'>
                            <Row className='p-1 mt-2'>
                                <Col md={2}>
                                    <h7>{e?.id}#</h7>
                                </Col>
                                <Col md={2}>
                                    <h7>{e.submissionResult?.percentage}%</h7>
                                </Col>
                                <Col>
                                        {e.submissionResult?.percentage === 100 ?
                                         <div style={{color:'red'}}>
                                         x
                                      </div>
                                      :
                                      <div style={{color:'green'}}>
                                        bif
                                      </div>
                                    }                  
                                </Col>
                                <Col>
                                  {e?.submissionResult?.percentage === 100 ? 
                                        <p>Beats {Math.round(e?.submissionResult?.performance / 1000)} users</p>
                                        :  
                                        < p >{e?.submissionResult?.approved / e?.submissionResult?.total} approved</p>     
                                     }
                                </Col>
                              
                           </Row>

                        </ListGroup.Item>
                    </Link>
                )}
            </ListGroup>

        </Container>
    );
}
export default Submissions