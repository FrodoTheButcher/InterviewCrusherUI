import React from 'react'
import { Container, Row, Col, Button, ListGroupItem } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
const ReusableVideoComp = () => {
    return (
        <Row style={{width:'100%',height:'100%',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', background: 'rgba(255, 255, 255, 0.12)', borderRadius: '20px', border: '1px solid #B2C0CF', padding: '1rem', position: 'relative', left: '' }} className='d-flex align-items-center justify-content-center'>
            <Col style={{ position: 'relative' }}>
            <img src={require("../images/DummyCode.png")}  style={{width:'100%',height:'100%',cursor:'pointer'}} />
           </Col>
            <Col>
            <ListGroup.Item style={{color:'white'}}>
                        <Row><h1 style={{ fontWeight: 'bold' }}>Django with react</h1></Row>
                        <Row>
                            <Col md={1}>
                                <h1>34.</h1>
                            </Col>
                            <Col md={6}>
                                <h1 style={{ fontWeight: '', lineHeight: '' }}> User serializer</h1>
                            </Col>
                        </Row>
            </ListGroup.Item>
            </Col>
        </Row>
    )
}

export default ReusableVideoComp
