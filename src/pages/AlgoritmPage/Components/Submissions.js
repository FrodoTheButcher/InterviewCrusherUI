import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Placeholder from '../../../images/placeholder.png'
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ReactComponent as Cancelled } from '../../../svg/Cancel.svg'
import './Submission.css'
import FormGroup from 'react-bootstrap';
const Submissions = ({submissions}) => {
    return (
        <Container style={{ width: '100%', height: '100vh' }}>
            <ListGroup>
                {submissions.map(e =>
                    <Link  style={{textDecoration: 'none' }}>
                        <ListGroup.Item variant={e?.success ? 'primary' : 'secondary'} className='SubmissionHover'>
                            <Row className='p-1 mt-2'>
                                <Col md={2}>
                                    <h7>{e?.id}#</h7>
                                </Col>
                                <Col md={2}>
                                    <h7>{e.percentage}%</h7>
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
                                       {e?.submissionResult?.approved} / {e?.submissionResult?.total} approved     
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