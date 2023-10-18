import { Button, CardGroup, Col, Container, ListGroupItem, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { primaryBlue, primaryGray, secondaryGray } from '../../../Static/Colors';
import WhiteButton from '../../../components/WhiteButton';
import Difficulty from '../../../components/Difficulty';
import { HARD } from '../../../Constants/DifficultyConstants';
import { Image } from 'react-bootstrap';
import { ReactComponent as Back } from '../../../svg/back.svg'
import { ReactComponent as DifficultyIcon } from '../../../svg/fullStar.svg'
import { ReactComponent as Coin } from '../../../svg/Coin.svg'
import { ReactComponent as Success } from '../../../svg/Success.svg'
import { ReactComponent as Happy } from '../../../svg/Happy.svg'
import { ReactComponent as Sad } from '../../../svg/sad.svg'

import CircularProgressBar from '../../../components/CircularProgressBar';
import { useState } from 'react';
import RedCircularProgressBar from '../../../components/RedCircularProgressBar';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Exercise({ setStep,quiz }) {
  
    //TINE MINTE ! 
    //SUCCES -> CATE AU FOST SUCCESS 
    //FAIL -> CATE AU FOST FAIL , POATE PCII DE 5 ORI UNUL FFS
    return (
        <Card style={{ background: 'white', width: '30%', height: '80%', borderRadius: '10px' }} className='d-flex align-items-center justify-content-center'>
            <Container style={{ width: '100%', height: '10%' }} className='d-flex flex-column align-items-center justify-content-center'>
                <Card.Title style={{ padding: '1em', fontSize: '1em', fontWeight: 'bolder', display: 'flex', flexDirection: '', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ position: 'absolute', left: '3rem', margin: '0' }} className='backsvg'>
                        <Back />
                    </div>
                    <p style={{ color: secondaryGray, margin: '0' }}>{quiz?.name}<small style={{ color: primaryBlue }}>Quiz</small></p>
                </Card.Title>
             
            </Container>
            <Container style={{ width: '90%' }} className='d-flex flex-column align-items-center justify-content-center'>
                <Image style={{ width: '100%', height: '', borderRadius: '15px' }} src={require('../images/mistery.jpg')} />
                <ListGroup >
                    <Row className='d-flex align-items-center justify-content-center'>
                        <h3 style={{ textAlign: 'center', color: primaryGray, position: 'relative', fontWeight: 'bolder', marginTop: '1rem', marginBottom: '2rem' }}> <span style={{color:primaryBlue}}>Succes</span> and <span style={{color:'red'}}>fail</span> rate</h3>
                        <div className='d-flex align-items-center justify-content-center flex-column' style={{ width: '6rem', height: '6rem', textAlign: 'center' }}>
                            <p className='DifficultyIcon' style={{ color: 'red', fontWeight: 'bolder', fontSize: '' }}><Sad /></p>
                            <RedCircularProgressBar colorProp="red" percentage={quiz?.successRate} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center flex-column' style={{ width: '6rem', height: '6rem', textAlign: 'center' }}>
                                <p className='DifficultyIcon' style={{ color: primaryBlue, fontWeight: 'bolder', fontSize: '' }}><Happy /></p>
                            <CircularProgressBar percentage={100-quiz?.successRate} />
                        </div>
                     
                    </Row>
                    <Row className='mt-5'>
                        <small>All you gotta do is start the quiz and do your best </small><br />
                        <small>Hope you got your water and food in for a better concentration!</small>
                    </Row>
                </ListGroup>
            </Container>
            <Card.Body className='d-flex align-items-center justify-content-center'>
                <Button onClick={() => setStep(prev => prev - 1)} className='PreviousBtn'>Previous</Button>
                <Button onClick={() => setStep(prev => prev + 1)} className='NextBtn' >Next</Button>
            </Card.Body>
        </Card>


    );
}

export default Exercise;