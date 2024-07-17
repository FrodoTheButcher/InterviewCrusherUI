import { CREATE_NEW_SUBMISSION_FAIL, CREATE_NEW_SUBMISSION_REDIRECT_REQUIRED, CREATE_NEW_SUBMISSION_REQUEST, CREATE_NEW_SUBMISSION_SUCCESS, GET_ALGO_QUESTIONS, GET_ALGO_SOLUTIONS, GET_BASIC_TESTCASE_FAIL, GET_BASIC_TESTCASE_REQUEST, GET_BASIC_TESTCASE_SUCCESS, GET_LANGUAGES_FAIL, GET_LANGUAGES_REQUEST, GET_LANGUAGES_SUCCESS, GET_SUBMISSIONS_FAIL, GET_SUBMISSIONS_REQUEST, GET_SUBMISSIONS_SUCCESS, GET_TESTCASES_FAIL, GET_TESTCASES_REQUEST, GET_TESTCASES_SUCCESS, GET_TIPS, UPDATE_ALGO_QUESTION, UPDATE_ALGO_QUESTION_COMMENT } from "../Constants/algoConstants"
import axios from "axios"
import { AccessConfig } from "./AccessConfig"
import { DecodeError } from "./errorHandling"
import { CREATE_COURSE_VIDEO_COMMENTS_FAIL } from "../Constants/courseVideoConstants"
export const getLanguagesAction = () => async (dispatch)=>{
    try{

        const access = localStorage.getItem('access')
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${access}`
            }
        }
        dispatch({type:GET_LANGUAGES_REQUEST})

        const { data } = await axios.get(`/api/submission/algo/language/`,config)
        dispatch({
            type:GET_LANGUAGES_SUCCESS,
            payload:data.data
        })
    }
    catch(error)
    {
        dispatch({
            type: GET_LANGUAGES_FAIL,
            payload: error.response.data.data
        })
    }
}

export const getAlgoQuestionAction = (contentId) => async (dispatch) => {
    try {   
        const config = AccessConfig()
        dispatch({ type: GET_ALGO_QUESTIONS.REQUEST })

        const response = await axios.get(`/api/algorithm/algo/get_all_questions/${contentId}/`,config);
        dispatch({
            type: GET_ALGO_QUESTIONS.SUCCESS,
            payload: response.data.data
        })
    }
    catch (error) {
        dispatch({
            type: GET_ALGO_QUESTIONS.FAIL,
            payload: DecodeError(error)
        })
    }
}

export const getTipsAction = (contentId) => async (dispatch) => {
    try {
        const config = AccessConfig()
        dispatch({ type: GET_TIPS.REQUEST })

        const response = await axios.get(`/api/algorithm/algo/tips/${contentId}/`,config);
        dispatch({
            
            type: GET_TIPS.SUCCESS,
            payload: response.data.data
        })
    }
    catch (error) {
        dispatch({
            type: GET_TIPS.FAIL,
            payload: DecodeError(error)
        })
    }
}

export const getSubmissionsAction = (contentId) => async (dispatch) => {
    try {
        const config = AccessConfig()
        dispatch({ type: GET_SUBMISSIONS_REQUEST })

        const response = await axios.get(`http://127.0.0.1:8000/api/submission/algo/${contentId}/`, config)
        dispatch({
            type: GET_SUBMISSIONS_SUCCESS,
            payload: response.data.data
        })
    }
    catch (error) {
        dispatch({
            type: GET_SUBMISSIONS_FAIL,
            payload: DecodeError(error)
        })
    }
}

export const getTestCaseAction = (contentId) => async (dispatch) => {
    try {
        const config = AccessConfig()
        dispatch({ type: GET_TESTCASES_REQUEST })

        const response = await axios.get(`http://127.0.0.1:8000/api/algorithm/algo/testcases/${contentId}/`, config)
        dispatch({
            type: GET_TESTCASES_SUCCESS,
            payload: response.data.data
        })
    }
    catch (error) {
        dispatch({
            type: GET_TESTCASES_FAIL,
            payload: DecodeError(error)
        })
    }
}

export const getBasicTestCaseAction = (contentId) => async (dispatch) => {
    try {
        const config = AccessConfig()
        dispatch({ type: GET_BASIC_TESTCASE_REQUEST })

        const response = await axios.get(`http://127.0.0.1:8000/api/algorithm/algo/sample/${contentId}/`, config)
        dispatch({
            type: GET_BASIC_TESTCASE_SUCCESS,
            payload: response.data.data
        })
    }
    catch (error) {
        dispatch({
            type: GET_BASIC_TESTCASE_FAIL,
            payload: DecodeError(error)
        })
    }
}
       

export const createNewSubmissionAction = (data) => async (dispatch) => {
    try {
        const config = AccessConfig()
        dispatch({ type: CREATE_NEW_SUBMISSION_REQUEST })

        const response = await axios.post(`/api/submission/algo/solve`,data, config)
        dispatch({
            type: CREATE_NEW_SUBMISSION_SUCCESS,
            payload: response.data.data
        })
    }
    catch (error) {
        if(error.response.status === 307)
        {        
            dispatch({
                type: CREATE_NEW_SUBMISSION_REDIRECT_REQUIRED,
                payload: DecodeError(error)
            })
            return;
        }
        dispatch({
            type: CREATE_NEW_SUBMISSION_FAIL,
            payload: DecodeError(error)
        })
    }
}

export const updateAlgoQuestionComment = (description,id) => async (dispatch) => {
    try {
        const date = {
            "description":description,
        }
        const config = AccessConfig()
        dispatch({ type: UPDATE_ALGO_QUESTION_COMMENT.REQUEST })
        const response = await axios.put(`/api/algorithm/algo/question/answer/${id}/`,date, config)
        dispatch({
            type: UPDATE_ALGO_QUESTION_COMMENT.SUCCESS,
            payload: response.data.data
        })
    }
    catch (error) {
        dispatch({
            type: UPDATE_ALGO_QUESTION_COMMENT.FAIL,
            payload: DecodeError(error)
        })
    }
}

export const updateAlgoQuestion = (name,id) => async (dispatch) => {
    try {
        const date = {
            "name":name,
        }
        const config = AccessConfig()
        dispatch({ type: UPDATE_ALGO_QUESTION.REQUEST })
        const response = await axios.put(`/api/algorithm/algo/question/${id}/`,date, config)
        dispatch({
            type: UPDATE_ALGO_QUESTION.SUCCESS,
            payload: response.data.data
        })
    }
    catch (error) {
        dispatch({
            type: UPDATE_ALGO_QUESTION.FAIL,
            payload: DecodeError(error)
        })
    }
}

export const getAlgoSolutions = (template_id) => async (dispatch) => {
    try{
      
            const config = AccessConfig()
            dispatch({ type: GET_ALGO_SOLUTIONS.REQUEST })
            const response = await axios.get(`api/submission/algo/getSolution/${template_id}/`, config)
            dispatch({
                type: GET_ALGO_SOLUTIONS.SUCCESS,
                payload: response.data.data
            })
    }
    catch(error)
    {
        dispatch({
            type: GET_ALGO_SOLUTIONS.FAIL,
            payload: DecodeError(error)
        })
    }
}