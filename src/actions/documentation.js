import { GET_CHATTING_QUESTIONS, GET_CHATTING_QUESTION_ANSWER, GET_DOCUMENTATION_BY_ID } from "../Constants/Documentation"
import axios from "axios"
import {DecodeError} from "./errorHandling"
export const getDocumentationByIdAction = (id) =>(dispatch)=>{
    dispatch({
        type: GET_DOCUMENTATION_BY_ID.REQUEST
    })
    axios.get(`/api/documentation/${id}/`)
    .then((response)=>{
        dispatch({
            type: GET_DOCUMENTATION_BY_ID.SUCCESS,
            payload: response.data.data
        })
    })
    .catch((error)=>{
        dispatch({
            type: GET_DOCUMENTATION_BY_ID.FAIL,
            payload: DecodeError(error)
        })
    })
}

export const getChattingQuestionsAction = () =>(dispatch)=>{
    dispatch({
        type: GET_CHATTING_QUESTIONS.REQUEST
    })
    axios.get(`/api/chatting/`)
    .then((response)=>{
        dispatch({
            type: GET_CHATTING_QUESTIONS.SUCCESS,
            payload: response.data.data
        })
    })
    .catch((error)=>{
        dispatch({
            type: GET_CHATTING_QUESTIONS.FAIL,
            payload: DecodeError(error)
        })
    })
}

export const getChattingQuestionAnswerAction = (id) =>(dispatch)=>{
    dispatch({
        type: GET_CHATTING_QUESTION_ANSWER.REQUEST
    })
    axios.get(`/api/chatting/${id}/`)
    .then((response)=>{
        dispatch({
            type: GET_CHATTING_QUESTION_ANSWER.SUCCESS,
            payload: response.data.data
        })
    })
    .catch((error)=>{
        dispatch({
            type: GET_CHATTING_QUESTION_ANSWER.FAIL,
            payload: DecodeError(error)
        })
    })
}