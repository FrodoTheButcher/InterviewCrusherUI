import { GET_COINS_YOU_MISS_TO_SKIP, HANDLE_DELETING_COINS_YOU_MISS_TO_SKIP } from "../Constants/roadmap";
import { GET_USER_SUBMISSION_RESULT_BY_ID, USER_CREATES_ALGO_QUESTION, USER_CREATE_ALGO_QUESTION_COMMENT, USER_DIFFICULTY, USER_DISLIKE, USER_ENTITIE_DISLIKE, USER_ENTITIE_UNDO_DISLIKE, USER_ENTITIE_UNDO_LIKE, USER_GET_PROFILE_DATA, USER_LIKE, USER_PROFILE_INFO, USER_PROFILE_ROADMAP_CHAPTER_DATA, USER_PROPOSE_ALGORITHM, USER_PROPOSE_ALGO_SOLUTION, USER_REGISTER_FAIL, USER_REGISTER_NEWS_LETTER_FAIL, USER_REGISTER_NEWS_LETTER_REQUEST, USER_REGISTER_NEWS_LETTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REVIEW, USER_SEND_EMAIL_FAIL, USER_SEND_EMAIL_REQUEST, USER_SEND_EMAIL_SUCCESS } from "../Constants/userConstants";


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

export const getUserAlgorithmSubmissionResultById = (state={},action) =>{   
    switch(action.type)
    {
        case GET_USER_SUBMISSION_RESULT_BY_ID.REQUEST:
            return {loading:true,error:false}
        case GET_USER_SUBMISSION_RESULT_BY_ID.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case GET_USER_SUBMISSION_RESULT_BY_ID.FAIL:
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

export const handleUserRegisterAlgorithmQuestionReducer = (state={},action) => {
    switch(action.type)
    {
        case USER_CREATES_ALGO_QUESTION.REQUEST:
            return {loading:true,error:false}
        case USER_CREATES_ALGO_QUESTION.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_CREATES_ALGO_QUESTION.FAIL:
            return {loading:false,error:false}
        default:
            return {}
    }
}

export const handleUserEntitieDislikeReducer = (state={},action) => {
    switch(action.type)
    {
        case USER_ENTITIE_DISLIKE.REQUEST:
            return {loading:true,error:false}
        case USER_ENTITIE_DISLIKE.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_ENTITIE_DISLIKE.FAIL:
            return {loading:false,error:false}
        default:
            return {}
    }
}

export const handleEntitieUndoLike = (state={},action) => {
    switch(action.payload)
    {
        case USER_ENTITIE_UNDO_LIKE.REQUEST:
            return {loading:true,error:false}
        case USER_ENTITIE_UNDO_LIKE.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_ENTITIE_UNDO_LIKE.FAIL:
                return {loading:false,error:false}
        default:
                return {}
    }
}

export const handleEntitieUndoDisLike = (state={},action) => {
    switch(action.payload)
    {
        case USER_ENTITIE_UNDO_DISLIKE.REQUEST:
            return {loading:true,error:false}
        case USER_ENTITIE_UNDO_DISLIKE.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_ENTITIE_UNDO_DISLIKE.FAIL:
                return {loading:false,error:false}
        default:
                return {}
    }
}

export const handleUserCommentsToAlgoQuestion = (state={},action) => {
    switch(action.type)
    {
        case USER_CREATE_ALGO_QUESTION_COMMENT.REQUEST:
            return {loading:true,error:false}
        case USER_ENTITIE_UNDO_DISLIKE.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_ENTITIE_UNDO_DISLIKE.FAIL:
                return {loading:false,error:false}
        default:
                return {}
    }
}

export const handleUserProposeSolutionToAlgoReducer = (state={},action) => {
    switch(action.type)
    {
        case USER_PROPOSE_ALGO_SOLUTION.REQUEST:
            return {loading:true,error:false}
        case USER_PROPOSE_ALGO_SOLUTION.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_PROPOSE_ALGO_SOLUTION.FAIL:
                return {loading:false,error:false}
        default:
                return {}
    }
}

export const getUserProfileReducer = (state={},action) => {
    switch(action.type)
    {
        case USER_GET_PROFILE_DATA.REQUEST:
            return {loading:true,error:false}
        case USER_GET_PROFILE_DATA.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_GET_PROFILE_DATA.FAIL:
            return {loading:false,error:false}
        default:
            return {}
    }
}

export const getUserProfileRoadmapChaptersDataReducer = (state={},action) => {
    switch(action.type)
    {
        case USER_PROFILE_ROADMAP_CHAPTER_DATA.REQUEST:
            return {loading:true,error:false}
        case USER_PROFILE_ROADMAP_CHAPTER_DATA.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_PROFILE_ROADMAP_CHAPTER_DATA.FAIL:
            return {loading:false,error:false}
        default:
            return {}
    }
}

export const getUserProfileDataReducer = (state={},action) => {
    switch(action.type)
    {
        case USER_PROFILE_INFO.REQUEST:
            return {loading:true,error:false}
        case USER_PROFILE_INFO.SUCCESS:
            return {loading:false,error:false,data:action.payload}
        case USER_PROFILE_INFO.FAIL:
            return {loading:false,error:false}
        default:
            return {}
    }
}