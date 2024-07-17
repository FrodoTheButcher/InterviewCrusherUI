import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Submission.css'
import { getSubmissionsAction } from '../../../actions/algorithmAction';
import { useDispatch, useSelector } from 'react-redux';
import BoltIcon from '@mui/icons-material/Bolt';
import { ErrorPrinter } from '../../../actions/errorPrinter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { getUserAlgorithmSubmissionResultByIdAction } from '../../../actions/userAction';
const Submissions = ({setSubmissionResultRequested}) => {


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
    function formatDate(inputString) {
        const dateObject = new Date(inputString);
        
        // Array of month names abbreviated to three letters
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
        // Extract month, day, and year
        const month = monthNames[dateObject.getMonth()];
        const day = dateObject.getDate();
        const year = dateObject.getFullYear();
    
        // Format the result string
        const formattedDate = `${month} ${day}, ${year}`;
    
        return formattedDate;
    }
    return (
        <Container style={{ width: '100%', height: '100%' }}>
        <ListGroup>
            {submissions.map((e, index) => 
                <Link onClick={() => {setSubmissionResultRequested(e.id);dispatch(getUserAlgorithmSubmissionResultByIdAction(e.id))}} key={e.id} style={{ textDecoration: 'none' }}>
                    <ListGroup.Item
                        style={{
                            background:
                                index % 2 === 0 ? '#F7F7F7' : 'white', // Apply light gray every 2nd element
                        }}
                        className='SubmissionHover'
                    >
                        <Row className='p-1 mt-2'>
                                <Col md={2}>       
                                    <Row style={{textAlign:'left'}}>
                                    < p style={{color:e?.submissionResult?.success ? "green" : "red",fontWeight:'bolder'}} >{e?.submissionResult?.success ? "ACCEPTED" : "REJECTED"} </p>     
                                    </Row> 
                                    <Row ><p>{formatDate(e.createAt)}</p></Row>
                                </Col>
                                <Col className='d-flex align-items-center justify-content-center' md={2}>
                                        <p style={{background:'lightgray',padding:'0.3em',borderRadius:'17px'}}>C++</p>
                                </Col>
                                <Col className='d-flex align-items-center justify-content-center'>
                                <p>
                                    <AccessTimeIcon sx={{marginRight:'0.1em'}}/>
                                    <h7>{e?.avarageTime?.toString().slice(0,3)} s</h7>
                                </p>
                                </Col>
                                <Col className='d-flex align-items-center justify-content-center'>
                                <p> 
                                    <BoltIcon sx={{marginRight:'0.1em'}}/>
                                    <h7>{e?.submissionResult?.performance.toString().slice(3)[0]} mb</h7>
                                </p>     
                                </Col>
                                <Col md={2} className='d-flex align-items-center justify-content-center'>
                                        <p>
                                        <PersonOffIcon sx={{marginRight:'0.1em'}} />
                                        <p>Beats {Math.round(e?.submissionResult?.performance / 1000)} users</p>
                                        </p>
                                </Col>
                                <Col>
                                
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