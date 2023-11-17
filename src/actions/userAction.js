import { USER_REGISTER_FAIL, USER_REGISTER_NEWS_LETTER_FAIL, USER_REGISTER_NEWS_LETTER_REQUEST, USER_REGISTER_NEWS_LETTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SEND_EMAIL_FAIL, USER_SEND_EMAIL_REQUEST, USER_SEND_EMAIL_SUCCESS } from "../Constants/userConstants"
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