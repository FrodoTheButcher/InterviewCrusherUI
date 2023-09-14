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

function Info({setStep }) {
    const { roadmapId,roadmap, chapterId, contentId } = useParams();
    const quiz = JSON.parse(localStorage.getItem('quiz'));

    console.log("q",quiz)
    return (
            <Card style={{ background: 'white', width: '30%', height: '80%', borderRadius: '10px' }} className='d-flex align-items-center justify-content-center'>
                <Container style={{width:'100%',height:'10%'}} className='d-flex flex-column align-items-center justify-content-center'>
                    <Card.Title style={{padding:'1em',fontSize:'1em',fontWeight:'bolder',display:'flex',flexDirection:'',justifyContent:'center',alignItems:'center'}}>
                            <div style={{position:'absolute',left:'3rem',margin:'0'}} className='backsvg'>
                                 <Back/>
                            </div>
                        <p style={{ color: secondaryGray ,margin:'0'}}> {quiz?.name}<small style={{ color: primaryBlue }}>  Quiz</small></p>
                    </Card.Title>
                </Container>
                    <Container style={{width:'90%'}} className='d-flex flex-column align-items-center justify-content-center'>
                <Image style={{ width: '100%', height: '', borderRadius: '15px' }} src={require('../images/mistery.jpg')} />
                    <ListGroup >
                        <Row>
                        <h3 style={{ color: primaryGray, position: 'relative', fontWeight: 'bolder', marginTop: '1rem', marginBottom: '2rem' }}>Chapter <span style={{color:primaryBlue}}> {roadmap}</span></h3>
                            <Col>
                                <ListGroupItem className='d-flex align-items-center justify-content-center flex-column' style={{ width: '5rem', height: '5rem', textAlign: 'center' }}>
                                <p className='DifficultyIcon' style={{ color: primaryBlue, fontWeight: 'bolder', fontSize: '' }}><Coin /></p>
                                    <p style={{ color: secondaryGray, fontWeight: 'bolder', fontSize: '' }}>5/10</p>
                                </ListGroupItem>
                            </Col>
                        <Col>
                            <ListGroupItem className='d-flex align-items-center justify-content-center flex-column' style={{ width: '5rem', height: '5rem', textAlign: 'center' }}>
                                <p className='DifficultyIcon' style={{ color: primaryBlue, fontWeight: 'bolder', fontSize: '' }}><DifficultyIcon /></p>
                                <Difficulty Fontsize={'1em'} Difficulty={HARD} />
                            </ListGroupItem>
                        </Col>
                            <Col>
                                <ListGroupItem className='d-flex align-items-center justify-content-center flex-column' style={{ width: '5rem', height: '5rem', textAlign: 'center' }}>
                                <p className='DifficultyIcon' style={{ color: primaryBlue, fontWeight: 'bolder', fontSize: '' }}><Success /></p>
                                    <p style={{ color: secondaryGray, fontWeight: 'bolder', fontSize: '' }}>45%</p>
                                </ListGroupItem>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <small>All you gotta do is start the quiz and do your best </small><br/>
                            <small>Hope you got your water and food in for a better concentration!</small>
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