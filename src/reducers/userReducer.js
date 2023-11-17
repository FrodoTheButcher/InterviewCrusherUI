import { USER_REGISTER_FAIL, USER_REGISTER_NEWS_LETTER_FAIL, USER_REGISTER_NEWS_LETTER_REQUEST, USER_REGISTER_NEWS_LETTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SEND_EMAIL_FAIL, USER_SEND_EMAIL_REQUEST, USER_SEND_EMAIL_SUCCESS } from "../Constants/userConstants";


export const userReducer = (state={},action) =>{

    switch(action.type)
    {
        case USER_REGISTER_REQUEST:
            return {loading:true,error:false}
        case USER_REGISTER_SUCCESS:
            return {loading:false,error:false,user:action.payload}
        case USER_REGISTER_FAIL:
            return {loading:false,error:action.payload}
        default:
            return {}
    }

}

export const userSubscribeToNewsLetterReducer = (state={},action) =>{   
    switch(action.type)
    {
        case USER_REGISTER_NEWS_LETTER_REQUEST:
            return {loading:true,error:false}
        case USER_REGISTER_NEWS_LETTER_SUCCESS:
            return {loading:false,error:false,message:action.payload}
        case USER_REGISTER_NEWS_LETTER_FAIL:
            return {loading:false,error:action.payload}
        default:
            return {}
    }

}

export const sendEmailReducer = (state={},action) =>{
    switch(action.type)
    {
        case USER_SEND_EMAIL_REQUEST:
            return {loading:true,error:false}
        case USER_SEND_EMAIL_SUCCESS:
            return {loading:false,error:false,message:action.payload}
        case USER_SEND_EMAIL_FAIL:
            return {loading:false,error:action.payload}
        default:
            return {}
    }
}
