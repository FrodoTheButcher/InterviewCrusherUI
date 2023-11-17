import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Alert, Container, FormGroup, ListGroupItem } from 'react-bootstrap';
import Tips from './Tips';
import './Submission.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTipsAction } from '../../../actions/algorithmAction';
import Loader from '../../../components/Spinner';
import ErrorPrinter from '../../../actions/errorPrinter';

const Overview = () => {

    const {contentId} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{

        dispatch(getTipsAction(contentId))

    },[])
    const tipsreducer = useSelector(state => state.getTipsReducer)
    const {loading,data:tips,error} = tipsreducer
    if(loading)
    {
        return (
            <Loader/>
        )
    }
    if(error)
    {
        return (
            <Alert variant='danger'>{ErrorPrinter(error)}</Alert>
        )
    }
    return (
        <Container style={{ borderLeft: '1rem solid rgb(240, 240, 240)', height: '100vh', background: 'white' }}>
            {tips?.map((e,index) =>
                <Accordion className='SubmissionHover' style={{ border: '0.2rem solid rgb(240, 240, 240)' }} defaultActiveKey={index} key={index}>
                        <Tips name={e.tip} index={index}/>
                    </Accordion>                
            )}
        </Container>
    );
}

export default Overview;
