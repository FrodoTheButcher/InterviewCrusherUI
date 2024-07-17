import axios from "axios"
import { ADD_POINTS_FAIL, ADD_POINTS_REQUEST, ADD_POINTS_SUCCESS, GET_USER_CURRENT_QUIZ_BAD_ANSWERS, REDIRECT_REQUIRED, REDIRECT_REQUIRED_QUIZ, REMOVE_POINTS_FAIL, REMOVE_POINTS_REQUEST, REMOVE_POINTS_SUCCESS } from "../Constants/quizConstants"
import { DecodeError } from "./errorHandling"

export const removePointsAction = (data) => async (dispatch) => {
    try{
        const token = localStorage.getItem("access")
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({
            type:REMOVE_POINTS_REQUEST
        })
        const response = await axios.put("/api/submission/quiz/removePoints/",data,config)

        dispatch({
            type:REMOVE_POINTS_SUCCESS,
            payload:response.data.data
        })
    }
    catch(e)
    {
        dispatch({
            type:REMOVE_POINTS_FAIL,
            payload: DecodeError(e)
        })
    }
}

export const checkQuizAction = (data) => async (dispatch) => {
    try {
        const token = localStorage.getItem("access")
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
    
        dispatch({
            type: ADD_POINTS_REQUEST
        })
        const response = await axios.put("/api/submission/quiz/checkPoints/", data,config)

        dispatch({
            type: ADD_POINTS_SUCCESS,
            payload: response.data.data
        })
    }
    catch (e) {
        if(e.response.status === 307)
        {
            dispatch({
                type: REDIRECT_REQUIRED,
                payload: DecodeError(e)
            })
        }
        else
        dispatch({
            type: ADD_POINTS_FAIL,
            payload: DecodeError(e)
        })
    }
}

export const getCurrentQuizBadAnswers = (chapterId,templateId) => async (dispatch) => {
    try {
        const token = localStorage.getItem("access")
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
    
        dispatch({
            type: GET_USER_CURRENT_QUIZ_BAD_ANSWERS.REQUEST
        })
        const response = await axios.get(`/api/submission/quiz/get_current_bad_answers/${chapterId}/${templateId}/`,config)

        dispatch({
            type: GET_USER_CURRENT_QUIZ_BAD_ANSWERS.SUCCESS,
            payload: response.data.data
        })
    }
    catch (e) {

            dispatch({
                type: GET_USER_CURRENT_QUIZ_BAD_ANSWERS.FAIL,
                payload: DecodeError(e)
            })
    }
}