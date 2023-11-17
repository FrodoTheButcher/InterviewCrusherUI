import { Button, CardGroup, Col, Container, ListGroupItem, Row, Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { primaryBlue, primaryGray, secondaryGray } from '../../../Static/Colors';
import { ReactComponent as Back } from '../../../svg/back.svg'
import Comment from './Comment'
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as Like } from '../../../svg/Like.svg'
import { ReactComponent as Dislike } from '../../../svg/Dislike.svg'
import Message from '../../../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { addPointsAction, checkQuizAction, removePointsAction } from '../../../actions/quizActions';
import { useState } from 'react';
import { useEffect } from 'react';
import CustomizedSnackbars from '../../../components/CustomizedSnackbars';
import SuccessScale from '../../../components/SuccessScale';
import RatingMUI from '../../../components/Rating';

function EndOfQuiz({ setStep, quiz, answerChoosed: answerChoose, userAnswers }) {


    const { roadmapName,roadmapId, chapterId, contentId } = useParams();
    const [open,setOpen] = useState(false)
    const [comments,setComments]=useState([])
    const navigate = useNavigate()
    const [content, setContent] = useState("");
    const dispatch = useDispatch()
    

    const checkQuizAnswer = useSelector(select => select.checkQuizReducer)
    const { loading, error, data } = checkQuizAnswer

  

    useEffect(() => {
        const data = {
            "quizId": contentId,
            "answerIds": userAnswers,
            "templateId":roadmapId
        }
        dispatch(checkQuizAction(data))
    }, [])

    return (
        <Card style={{ background: 'white', width: '30%', height: '80%', borderRadius: '10px' }} className='d-flex align-items-center justify-content-center'>
            {loading  ? <p>mata</p>
            :
                error  
                ?
                    <CustomizedSnackbars severity={"error"} message={error} isOpen={true} />
            :
            data ? 
            <CustomizedSnackbars severity={"info"} message={"success"} isOpen={true}  />
            :
            !data ? 
                            <CustomizedSnackbars severity={"error"} message={"false"} isOpen={true} />
                :
                            <CustomizedSnackbars severity={"error"} message={"unknown error occured"} isOpen={true} />

            }
            <Container style={{ width: '100%', height: '10%' }} className='d-flex flex-column align-items-center justify-content-center'>
                <Card.Title style={{ padding: '1em', fontSize: '1em', fontWeight: 'bolder', display: 'flex', flexDirection: '', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ position: 'absolute', left: '3rem', margin: '0' }} className='backsvg'>
                        <Back />
                    </div>
                    <p style={{ color: secondaryGray, margin: '0' }}>Frontend React <small style={{ color: primaryBlue }}>Quiz</small></p>
                </Card.Title>
            </Container>
            <Container style={{ width: '90%' }} className='d-flex flex-column align-items-center justify-content-center'>
                <Row style={{ color: primaryGray }}><strong>Give us a feedback</strong></Row>
                <RatingMUI editable={true} />
                <br/>
                <Row style={{ color: primaryGray }}><strong>Rate the dificulty</strong></Row>
                <SuccessScale />
                <ListGroup style={{ padding: '1.5em' }}>
                    <ListGroupItem>
                        <textarea style={{ width: '100%', height: '100%', padding: '1em', outline: 'none', border: 'none' }} placeholder='Add a comment' />
                    </ListGroupItem>
                </ListGroup>
                <div fluid className='d-flex align-items-center' style={{ flexDirection: 'column', overflowY: 'scroll', justifyContent: 'space-between', height: '15em' }}>
                    {
                    comments?.map(comment =>
                        <Comment comment={comment} />
                    )}
                </div>
            </Container>
            <Card.Body className='d-flex align-items-center justify-content-center'>
                {open ? <Button onClick={() => setStep(prev => prev - 1)} className='PreviousBtn'>Try again</Button>
                    :
                    <Button onClick={() => {setContent("course"); navigate(`/${roadmapName}/${roadmapId}/${chapterId}/course/1`) }} className='NextBtn' >Submit</Button>
                }
            </Card.Body>
        </Card>
        
    );
}

export default EndOfQuiz;