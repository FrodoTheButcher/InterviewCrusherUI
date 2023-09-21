import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Placeholder from '../../../images/placeholder.png'
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ReactComponent as Cancelled } from '../../../svg/Cancel.svg'
import './Submission.css'
import FormGroup from 'react-bootstrap';
const Submissions = () => {
    const [submissions, setSubmissions] = useState([1, 2, 3, 4, 5, 6, 7])
    return (
        <Container style={{ width: '100%', height: '100vh' }}>
            <ListGroup>
                {submissions.map(e =>
                    <Link  style={{textDecoration: 'none' }}>
                        <ListGroup.Item variant={e?.success ? 'primary' : 'secondary'} className='SubmissionHover'>
                            <Row className='p-1 mt-2'>
                                <Col md={2}>
                                    <h7>#1432</h7>
                                </Col>
                                <Col md={1}>
                                    <img style={{ width: '4rem' }} src={`${Placeholder}`} />
                                </Col>
                                <Col md={2}>
                                    <h5>UserName</h5>
                                </Col>
                                <Col md={2}>
                                    <h7>Exercise Title</h7>
                                </Col>
                                <Col md={2}>
                                    <h7>Answers 80/100</h7>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col sm={8}>
                                            <h7>Sucess Rate</h7>
                                        </Col>
                                        <Col sm={2}>
                                            <div className='icon-approve-cancel'>
                                                <Cancelled />
                                            </div>
                                        </Col>
                                    </Row>
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