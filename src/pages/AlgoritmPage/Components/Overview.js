import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container, FormGroup, ListGroupItem } from 'react-bootstrap';
import Tips from './Tips';
import './Submission.css'

const Overview = ({tips}) => {

    return (
        <Container style={{ borderLeft: '1rem solid rgb(240, 240, 240)', height: '100vh', background: 'white' }}>
            {tips.map((e,index) =>
                    <Accordion className='SubmissionHover' style={{ border: '0.2rem solid rgb(240, 240, 240)' }} defaultActiveKey={e.toString()} key={e.toString()}>
                        <Tips description={e?.description}  name={e?.name} tipNumber={index} />
                    </Accordion>                
            )}
        </Container>
    );
}

export default Overview;
