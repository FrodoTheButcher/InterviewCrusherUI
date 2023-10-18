import axios from "axios"
import { ADD_POINTS_FAIL, ADD_POINTS_REQUEST, ADD_POINTS_SUCCESS, REMOVE_POINTS_FAIL, REMOVE_POINTS_REQUEST, REMOVE_POINTS_SUCCESS } from "../Constants/quizConstants"
import { ErrorPrinter } from "./errorPrinter"

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
            payload: ErrorPrinter(e)
        })
    }
}

export const addPointsAction = (data) => async (dispatch) => {
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
        const response = await axios.put("/api/submission/quiz/addPoints/", data,config)

        dispatch({
            type: ADD_POINTS_SUCCESS,
            payload: response.data.data
        })
    }
    catch (e) {
        dispatch({
            type: ADD_POINTS_FAIL,
            payload: ErrorPrinter(e)
        })
    }
}