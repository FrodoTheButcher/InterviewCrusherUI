import { Button, CardGroup, Col, Container, ListGroupItem, Row, Spinner } from 'react-bootstrap';
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
import { useEffect, useState } from 'react';
import RedCircularProgressBar from '../../../components/RedCircularProgressBar';
import Comment from './Comment'
import Loader from '../../../components/Spinner'
import Answer from './Answer';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function AnswersQuiz({ setStep, setFailed,failed }) {
    const percentage = 66;
    const quiz = JSON.parse(localStorage.getItem('quiz'));

    const [comments, setComments] = useState(quiz?.quizAnswers)

    const [answer, setAnswer] = useState(1);

    const [liked, setLiked] = useState(undefined)

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setFailed(true)
            setStep(prev=>prev+1)
        },quiz?.time * 1000)
        return () => clearTimeout(timeout);

    },[])

    return (

        <Card style={{ background: 'white', width: '30%', height: '80%', borderRadius: '10px' }} className='d-flex align-items-center justify-content-center'>
            <Container style={{ width: '100%', height: '10%' }} className='d-flex flex-column align-items-center justify-content-center'>
                <Card.Title style={{ padding: '1em', fontSize: '1em', fontWeight: 'bolder', display: 'flex', flexDirection: '', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ position: 'absolute', left: '3rem', margin: '0' }} className='backsvg'>
                        <Back />
                    </div>
                    <p style={{ color: secondaryGray, margin: '0' }}>{quiz?.name} <small style={{ color: primaryBlue }}>Quiz</small></p>
                </Card.Title>
            </Container>
                <CountdownCircleTimer
                    isPlaying
                    duration={quiz?.time}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                    size={150}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
          
            <Container style={{ width: '90%' }} className='d-flex flex-column align-items-center justify-content-center'>
                <ListGroup style={{ padding: '1.5em' }}>
                    <strong>{quiz?.description}</strong>
                </ListGroup>
                <div fluid className='d-flex align-items-center' style={{ flexDirection: 'column', overflowY: 'scroll', justifyContent: 'space-between', height: '20em',width:'100%' }}>
                    {
                    comments?.length == 0 ? <Spinner/>
                        :
                    comments?.map(answer =>
                       <Answer answer={answer} />
                    )}
                </div>
            </Container>
            <Card.Body className='d-flex align-items-center justify-content-center'>
                <Button onClick={() => setStep(prev => prev - 1)} className='PreviousBtn'>Previous</Button>
                <Button onClick={() => { setFailed(true) ;setStep(prev => prev + 1)  }} className='NextBtn' >Next</Button>
            </Card.Body>
        </Card>
    );
}

export default AnswersQuiz;