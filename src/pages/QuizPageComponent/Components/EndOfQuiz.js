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
import { addPointsAction, removePointsAction } from '../../../actions/quizActions';
import { useState } from 'react';
import { useEffect } from 'react';
import CustomizedSnackbars from '../../../components/CustomizedSnackbars';
import SuccessScale from '../../../components/SuccessScale';
import RatingMUI from '../../../components/Rating';

function EndOfQuiz({ setStep, quiz, answerChoosed: answerChoose }) {


    const { roadmapName,roadmapId, chapterId, contentId } = useParams();
    const [failed,setFailed]=useState(false)
    const [open,setOpen] = useState(false)
    const [comments,setComments]=useState([])
    const navigate = useNavigate()
    const [liked,setLiked] = useState(undefined)
    const [content, setContent] = useState("");
    const dispatch = useDispatch()
    

    const pointsAdded = useSelector(select => select.addPointsReducer)
    const {loading:loadingAddPoints,error:errorAddPoints,data:messageAddPoints}= pointsAdded

    const pointsRemoved = useSelector(select => select.removePointsReducer)
    const { loading: loadingRemovePoints, error: errorRemovePoints, data: messageRemovePoints } = pointsRemoved

    const addPoints = async () => {
        const data = {
            "points": quiz?.pointsEarned,
            "quizId": contentId,

        }
        dispatch(addPointsAction(data))
    };
    const removePoints = async () => {
        const data = {
            "points": quiz?.pointsEarned/2,
            "quizId":contentId,
        }
        dispatch(removePointsAction(data))
    };


  useEffect(()=>{

    if(loadingAddPoints === undefined && loadingRemovePoints === undefined && errorAddPoints === undefined && errorRemovePoints === undefined && messageAddPoints === undefined && messageRemovePoints === undefined)
      {if (!answerChoose?.isCorrect) {
         setFailed(false)
          removePoints()
      }
      else
      {
          setFailed(true)
          addPoints()
      }
      setComments(quiz?.quizComments)
      setOpen(true)
    }
  }, [loadingAddPoints, loadingRemovePoints, errorAddPoints, errorRemovePoints, messageAddPoints, messageRemovePoints, dispatch, answerChoose?.isCorrect, quiz?.quizComments, removePoints, addPoints])


    return (
        <Card style={{ background: 'white', width: '30%', height: '80%', borderRadius: '10px' }} className='d-flex align-items-center justify-content-center'>
            {loadingAddPoints || loadingRemovePoints ? <Spinner/>
            :
                errorAddPoints || errorRemovePoints 
                ?
                    <CustomizedSnackbars severity={"error"} message={errorRemovePoints ? errorRemovePoints : errorAddPoints} open={open} setOpen={setOpen} />
            :
                    messageAddPoints || messageRemovePoints ?
                        <CustomizedSnackbars severity={messageAddPoints ? "success" : "warning"} message={messageAddPoints ? "You are correct, Congrats! " : "You have failed..."} open={open} setOpen={setOpen} />
            :
            <CustomizedSnackbars severity={"error"} message={"unknown error occured"} open={open} setOpen={setOpen} />
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
                    comments?.length === 0 ? <Spinner/> : 
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