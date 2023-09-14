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
import { useContext, useEffect, useState } from 'react';
import RedCircularProgressBar from '../../../components/RedCircularProgressBar';
import Comment from './Comment'
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as Like } from '../../../svg/Like.svg'
import { ReactComponent as Dislike } from '../../../svg/Dislike.svg'

import CustomContext from '../../../Context/ContextProvider';
import Message from '../../../components/Message';
import axios from 'axios';

function EndOfQuiz({setStep ,failed}) {
console.log('end of quiz')
    const quiz = JSON.parse(localStorage.getItem('quiz'));


    const { roadmap,roadmapId, chapterId, contentId } = useParams();

    const percentage = 66;
    const [comments,setComments]=useState([])

    const navigate = useNavigate()

    const [liked,setLiked] = useState(undefined)

    const {  setContent } = useContext(CustomContext)

    const addPoints = async () => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("access")
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
        const data = {
            "points": quiz?.pointsEarned
        }

        console.log(localStorage.getItem("access"));
        try {
            const response = await axios.put("/api/users/addPoints/", data, config,user);
            console.log("response", response);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
    const removePoints = async () => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("access")
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
        const data = {
            "points": quiz?.pointsEarned/2
        }

        console.log(localStorage.getItem("access"));
        try {
            const response = await axios.put("http://127.0.0.1:8000/api/users/addPoints/", data, config, user);
            console.log("response", response);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };


  useEffect(()=>{
      if (!failed) {
          addPoints()
      }
      else
      {
          removePoints()
      }
      setComments(quiz?.quizComments)
  },[])

    return (
      
        <Card style={{ background: 'white', width: '30%', height: '80%', borderRadius: '10px' }} className='d-flex align-items-center justify-content-center'>
            {failed === false ? <Message variant={'danger'}>Fail</Message> : <Message variant={'success'}>Success</Message> }
            <Container style={{ width: '100%', height: '10%' }} className='d-flex flex-column align-items-center justify-content-center'>
                <Card.Title style={{ padding: '1em', fontSize: '1em', fontWeight: 'bolder', display: 'flex', flexDirection: '', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ position: 'absolute', left: '3rem', margin: '0' }} className='backsvg'>
                        <Back />
                    </div>
                    <p style={{ color: secondaryGray, margin: '0' }}>Frontend React <small style={{ color: primaryBlue }}>Quiz</small></p>
                </Card.Title>
            </Container>
            <Container style={{ width: '90%' }} className='d-flex flex-column align-items-center justify-content-center'>
                <Row style={{ color: primaryGray }}><strong>Rate the quiz</strong></Row>
               <Row>
                    <Col style={{ opacity: `${liked == true ? '1' : '0.4'}`, cursor: 'pointer' }} onClick={() => setLiked(true)}>
                        <Like /> 
                    </Col>
                    <Col style={{ opacity: `${liked == false ? '1' : '0.4'}`, cursor: 'pointer' }} onClick={() => setLiked(false)}>
                        <Dislike />
                    </Col>
               </Row>
                <ListGroup style={{ padding: '1.5em' }}>
                    <ListGroupItem>
                        <textarea style={{ width: '100%', height: '100%', padding: '1em', outline: 'none', border: 'none' }} placeholder='Add a comment' />
                    </ListGroupItem>
                </ListGroup>
                <div fluid className='d-flex align-items-center' style={{ flexDirection: 'column', overflowY: 'scroll', justifyContent: 'space-between', height: '15em' }}>
                    {
                    comments?.length===0 ? <Spinner/> : 
                    comments?.map(comment =>
                        <Comment comment={comment} />
                    )}
                </div>
            </Container>
            <Card.Body className='d-flex align-items-center justify-content-center'>
                {!failed ? <Button onClick={() => setStep(prev => prev - 1)} className='PreviousBtn'>Try again</Button>
                    :
                    <Button onClick={() => { setContent("course"); navigate(`/${roadmap}/${roadmapId}/${chapterId}/`) }} className='NextBtn' >Submit</Button>
                }
            </Card.Body>
        </Card>
    );
}

export default EndOfQuiz;