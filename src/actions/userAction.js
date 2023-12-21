import { USER_DIFFICULTY, USER_DISLIKE, USER_LIKE, USER_PROPOSE_ALGORITHM, USER_REGISTER_FAIL, USER_REGISTER_NEWS_LETTER_FAIL, USER_REGISTER_NEWS_LETTER_REQUEST, USER_REGISTER_NEWS_LETTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REVIEW, USER_SEND_EMAIL_FAIL, USER_SEND_EMAIL_REQUEST, USER_SEND_EMAIL_SUCCESS } from "../Constants/userConstants"
import axios from "axios"
import { DecodeError } from "./errorHandling"
import { AccessConfig } from "./AccessConfig"


export const userRegisterAction =  (userData)=> async (dispatch) =>{
    try{
        const config = AccessConfig()
        dispatch({type:USER_REGISTER_REQUEST})
        
        const {data} = await axios.post("/api/users/",userData,config)
        dispatch({type:USER_REGISTER_SUCCESS,payload:userData})
    }
    catch(e)
    {
        dispatch({type:USER_REGISTER_FAIL,payload:DecodeError(e)})
    }
}
  

export const userLikeAction = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_LIKE.REQUEST})
        const response = await axios.put("/api/userInteraction/handleLike/",data,config);
        dispatch({type:USER_LIKE.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:USER_LIKE.FAIL,payload:DecodeError(e)})
    }
}
export const userDislikeAction = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_DISLIKE.REQUEST})
        const response =await axios.put("/api/userInteraction/handleDislike/",data,config);
        dispatch({type:USER_DISLIKE.SUCCESS,payload:response})
    }
    catch(e)
    {
        dispatch({type:USER_DISLIKE.FAIL,payload:DecodeError(e)})
    }
}

export const registerToNewsLetter = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_REGISTER_NEWS_LETTER_REQUEST})
        const response = axios.post("/api/users/newsLetter/",data,config);
        dispatch({type:USER_REGISTER_NEWS_LETTER_SUCCESS,payload:response})
    }
    catch(e)
    {
        dispatch({type:USER_REGISTER_NEWS_LETTER_FAIL,payload:DecodeError(e)})
    }

}

export const sendEmail = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_SEND_EMAIL_REQUEST})
        const response = axios.post("/api/users/sendEmail/",data,config);
        dispatch({type:USER_SEND_EMAIL_SUCCESS,payload:response})
    }
    catch(e)
    {
        dispatch({type:USER_SEND_EMAIL_FAIL,payload:DecodeError(e)})
    }

}
  
export const userDifficultyAction = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_DIFFICULTY.REQUEST})
        const response = await axios.put("/api/userInteraction/handleDifficulty/",data,config);
        dispatch({type:USER_DIFFICULTY.SUCCESS,payload:response})
    }
    catch(e)
    {
        dispatch({type:USER_DIFFICULTY.FAIL,payload:DecodeError(e)})
    }
}

export const userReviewAction = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_REVIEW.REQUEST})
        const response = await axios.post("/api/users/review/",data,config);
        dispatch({type:USER_REVIEW.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:USER_REVIEW.FAIL,payload:DecodeError(e)})
    }
}

export const userProposeAlgorithmAction = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_PROPOSE_ALGORITHM.REQUEST})
        const response = await axios.post("/api/users/proposeAlgorithm/",data,config);
        dispatch({type:USER_PROPOSE_ALGORITHM.SUCCESS,payload:response})
    }
    catch(e)
    {
        dispatch({type:USER_PROPOSE_ALGORITHM.FAIL,payload:DecodeError(e)})
    }
}