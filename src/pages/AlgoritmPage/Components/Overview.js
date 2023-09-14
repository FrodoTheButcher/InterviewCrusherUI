import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';
import Tips from './Tips';
import './Submission.css'

const Overview = () => {
    const [tips, setTips] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <Container style={{ borderLeft: '1rem solid rgb(240, 240, 240)', height: '100vh', background: 'white' }}>
            {tips.map(e =>
                <Accordion className='SubmissionHover'  style={{ border: '0.2rem solid rgb(240, 240, 240)'}} defaultActiveKey={e.toString()} key={e.toString()}>
                    <Tips  tipNumber={e} />
                </Accordion>
            )}
        </Container>
    );
}

export default Overview;
