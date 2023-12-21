import { GET_COINS_YOU_MISS_TO_SKIP, HANDLE_DELETING_COINS_YOU_MISS_TO_SKIP } from "../Constants/roadmap";
import { USER_DIFFICULTY, USER_DISLIKE, USER_LIKE, USER_PROPOSE_ALGORITHM, USER_REGISTER_FAIL, USER_REGISTER_NEWS_LETTER_FAIL, USER_REGISTER_NEWS_LETTER_REQUEST, USER_REGISTER_NEWS_LETTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REVIEW, USER_SEND_EMAIL_FAIL, USER_SEND_EMAIL_REQUEST, USER_SEND_EMAIL_SUCCESS } from "../Constants/userConstants";


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
            return {loading:false,error:false,data:action.payload}
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
            return {loading:false,error:false,data:action.payload}
        case USER_SEND_EMAIL_FAIL:
            return {loading:false,error:action.payload}
        default:
            return {}
    }
}


export const userLikeReducer = (state={},action) =>{
    switch(action.type)
    {
        case USER_LIKE.REQUEST:
            return {loading:true,error:false}
        case USER_LIKE.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_LIKE.FAIL:
            return {loading:false,error:action.payload}
        default:
            return {}
    }
}

export const userDislikeReducer = (state={},action) =>{
    switch(action.type)
    {
        case USER_DISLIKE.REQUEST:
            return {loading:true,error:false}
        case USER_DISLIKE.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_DISLIKE.FAIL:
            return {loading:false,error:action.payload}
        default:
            return {}
    }
}

export const userDifficultyReducer = (state={},action) =>{
    switch(action.type)
    {
        case USER_DIFFICULTY.REQUEST:
            return {loading:true,error:false}
        case USER_DIFFICULTY.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_DIFFICULTY.FAIL:
            return {loading:false,error:action.payload}
        default:
            return {}
    }
}

export const userReviewReducer = (state={},action) =>{
    switch(action.type)
    {
        case USER_REVIEW.REQUEST:
            return {loading:true,error:false}
        case USER_REVIEW.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_REVIEW.FAIL:
            return {loading:false,error:action.payload}
        default:
            return {}
    }
}

export const userProposeAlgorithmReducer = (state={},action) =>{
    switch(action.type)
    {
        case USER_PROPOSE_ALGORITHM.REQUEST:
            return {loading:true,error:false}
        case USER_PROPOSE_ALGORITHM.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_PROPOSE_ALGORITHM.FAIL:
            return {loading:false,error:action.payload}
        default:
            return {}
    }
}