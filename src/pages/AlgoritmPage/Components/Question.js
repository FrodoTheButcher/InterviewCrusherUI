import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, ListGroup } from 'react-bootstrap';
import {  useParams } from 'react-router-dom';
import './Question.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlgoQuestionAction } from '../../../actions/algorithmAction';
import ErrorPrinter from '../../../actions/errorPrinter';
import { handleEntitieUndoDisLike, handleEntitieUndoLike, userEntitieDislikeAction, userLikeAction } from '../../../actions/userAction';
import { EntitiesChoices } from '../../../constants';
import Loader from '../../../components/Spinner';
import CustomizedSnackbars from '../../../components/CustomizedSnackbars';
import AlgoQuestion from './AlgoQuestion';
const   Question = ({setCommentSection}) => {

    const [questionsData,setQuestionsData]=useState([])
    const {contentId} = useParams()
    const [alreadyLiked,setAlreadyLiked] = useState(false)
    const [alreadyDisliked,setAlreadyDisliked] = useState(null)
    const dispatch = useDispatch()
    const algoQuestions = useSelector(state => state.getAlgoQuestionsReducer)
    const {loading,data:questions,error} = algoQuestions

    const dislikeObj = useSelector(state => state.handleUserEntitieDislikeReducer)
    const {loading:loadingDislike,data:dataDislike,error:errorDislike}=dislikeObj

    const likeObj = useSelector(state => state.userDislikeReducer)
    const {loading:loadingLike,data:dataLike,error:errorLike} = likeObj 

    const undoLikeObj = useSelector(state => state.handleEntitieUndoLike)
    const {loading:loadingUndoLike,data:dataUndoLike,error:errorUndoLike} = undoLikeObj

    const undoDislikeObj = useSelector(state => state.handleEntitieUndoDisLike)
    const {loading:loadingUndoDisLike,data:dataUndoDisLike,error:errorUndoDisLike} = undoLikeObj
    
    useEffect(() => {   
        if(questions === null || questions === undefined)
        dispatch(getAlgoQuestionAction(contentId))  
    }, [])

    const handleLike = (element)=>{
        const id = element.id 
        console.log(element)
        if(element.userProfile.liked)
        {
            const newQuestionsWithLikeAdded = questionsData.filter(e=>{
                if(e.id == id)
                {
                    e.likes-=1
                    e.userProfile.liked=false
                }
                return e
            })
            setQuestionsData(newQuestionsWithLikeAdded)
            dispatch(handleEntitieUndoLike(id,EntitiesChoices.ALGORITHM_QUESTION))
        }
        else
        {
            dispatch(userLikeAction({"id":id,"type":EntitiesChoices.ALGORITHM_QUESTION}))
            const newQuestionsWithLikeAdded = questionsData.filter(e=>{
                if(e.id == id)
                {
                    if(e.userProfile.disliked)
                    {
                        e.dislikes-=1
                    }
                    e.likes+=1
                    e.userProfile.liked=true
                    e.userProfile.disliked=false
                }
                return e
            })
            setQuestionsData(newQuestionsWithLikeAdded)
        }
    }
    const handleDisLike = (element)=>{
        const id = element.id
        if(element.userProfile.disliked)
        {
            const newQuestionsWithDisLikeRemoved = questionsData.filter(e=>{
                if(e.id == id)
                {
                    e.dislikes-=1
                    e.userProfile.disliked=false
                }
                return e
            })
            setQuestionsData(newQuestionsWithDisLikeRemoved)
            dispatch(handleEntitieUndoDisLike(id,EntitiesChoices.ALGORITHM_QUESTION))
        }
        else
        {
            dispatch(userEntitieDislikeAction({"id":id,"type":EntitiesChoices.ALGORITHM_QUESTION}))
            const newQuestionsWithDisLikeAdded = questionsData.filter(e=>{
                if(e.id == id)
                {
                    if(e.userProfile.liked)
                    {
                        e.likes-=1
                    }
                    e.dislikes+=1
                    e.userProfile.liked=false
                    e.userProfile.disliked=true
                }
                return e
            })
            setQuestionsData(newQuestionsWithDisLikeAdded)
        }
    }

    useEffect(()=>{
        setQuestionsData(questions)
    },[questions])

    if(questions === undefined || loading)
    {
        return (
            <Loader/>
        )
    }
    if(error)
    {
        return (
            <div>{ErrorPrinter(error)}</div>
        )
    }
    return (
        <Container style={{width:'100%',height:'100vh'}}>
            {
                loadingUndoDisLike || loadingDislike || loadingUndoLike || loadingLike ? <Loader/>
              :
              errorDislike ? <CustomizedSnackbars message={errorDislike}  variant = {"danger"}/>:
              dataDislike ? <CustomizedSnackbars message={dataDislike}  variant = {"success"}/> :
              errorUndoLike ? <CustomizedSnackbars message={errorUndoLike}  variant = {"danger"}/> 
                :
            errorUndoDisLike ?  <CustomizedSnackbars message={errorUndoDisLike}  variant = {"danger"}/> 
            :
              errorLike ? <CustomizedSnackbars message={errorLike}  variant = {"danger"}/>:
              dataLike ? <CustomizedSnackbars message={dataLike}  variant = {"success"}/> :
              dataUndoDisLike ?   <CustomizedSnackbars message={dataUndoDisLike}  variant = {"success"}/> :
              dataUndoLike &&   <CustomizedSnackbars message={dataUndoLike}  variant = {"success"}/> 
            }
            <ListGroup >
                { questionsData && questionsData?.length > 0 && questionsData?.map(e => 
                <div >
                       <AlgoQuestion setCommentSection={setCommentSection} handleDisLike={handleDisLike} handleLike={handleLike} e={e} />
                </div>
                   )}
            </ListGroup>
           
        </Container>
    );
}
export default Question