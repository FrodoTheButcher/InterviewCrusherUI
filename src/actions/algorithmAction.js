import { GET_LANGUAGES_FAIL, GET_LANGUAGES_REQUEST, GET_LANGUAGES_SUCCESS, GET_SUBMISSIONS_FAIL, GET_SUBMISSIONS_REQUEST, GET_SUBMISSIONS_SUCCESS } from "../Constants/algoConstants"
import axios from "axios"
import { AccessConfig } from "./AccessConfig"
import { DecodeError } from "./errorHandling"
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
        console.log("error",error)
        dispatch({
            type: GET_LANGUAGES_FAIL,
            payload: error.response.data.data
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