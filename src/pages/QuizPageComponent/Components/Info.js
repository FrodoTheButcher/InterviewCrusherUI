import { Button, CardGroup, Col, Container, ListGroupItem, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { primaryBlue, primaryGray, secondaryGray } from '../../../Static/Colors';
import WhiteButton from '../../../components/WhiteButton';
import Difficulty from '../../../components/Difficulty';
import { HARD } from '../../../Constants/DifficultyConstants';
import {Image} from 'react-bootstrap';
import {ReactComponent as Back} from '../../../svg/back.svg'
import { ReactComponent as DifficultyIcon} from '../../../svg/fullStar.svg'
import { ReactComponent as Coin } from '../../../svg/Coin.svg'
import { ReactComponent as Success } from '../../../svg/Success.svg'
import { useParams } from 'react-router-dom';
import { Rating, Tooltip } from '@mui/material';
import RatingMUI from '../../../components/Rating';
import { useState } from 'react';
import SuccessScale from '../../../components/SuccessScale';
import Loader from '../../../components/Spinner';

function Info({setStep , quiz }) {
    const { roadmapId,roadmap, chapterId, contentId } = useParams();
    console.log(quiz)
    if(!quiz)
    {
        return(
            <Loader/>
        )
    }
    return (
            <Card style={{ background: 'white', width: '30%', height: '80%', borderRadius: '10px' }} className='d-flex align-items-center justify-content-center'>
                <Container style={{width:'100%',height:'10%'}} className='d-flex flex-column align-items-center justify-content-center'>
                    <Card.Title style={{padding:'1em',fontSize:'1em',fontWeight:'bolder',display:'flex',flexDirection:'',justifyContent:'center',alignItems:'center'}}>
                            <div style={{position:'absolute',left:'3rem',margin:'0'}} className='backsvg'>
                                 <Back/>
                            </div>
                        <p style={{ color: secondaryGray ,margin:'0'}}> {quiz.name}<small style={{ color: primaryBlue }}>  Quiz</small></p>
                    </Card.Title>
                </Container>
                    <Container style={{width:'90%'}} className='d-flex flex-column align-items-center justify-content-center'>
                <Image style={{ width: '100%', height: '', borderRadius: '15px' }} src={require('../images/mistery.jpg')} />
                    <ListGroup >
                        <br/>
                        <Tooltip arrow title="rate the quiz">
                        <RatingMUI
                            readOnly={true}
                            value={parseInt(quiz.rate)}
                        />
                        </Tooltip>
                        
                    <Tooltip arrow title="difficulty">
                        <SuccessScale readOnly={true} value={parseInt(quiz.difficultyOutOfFive)} />
                    </Tooltip>

                        <Row className='mt-5'>
                            <h5>All you gotta do is start the quiz and do your best </h5><br/>
                            <h5>Hope you got your water and food in for a better concentration!</h5>
                        </Row>
                    </ListGroup>
                    </Container>                     
                <Card.Body className='d-flex align-items-center justify-content-center'>
                    <Button onClick={() => setStep(prev => prev<3 ? prev + 1 : prev)} className='NextBtn' >Next</Button>
                </Card.Body>
            </Card>
       
    );
}

export default Info;