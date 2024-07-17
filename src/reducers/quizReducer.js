import { ADD_POINTS_FAIL, ADD_POINTS_REQUEST, ADD_POINTS_SUCCESS, GET_USER_CURRENT_QUIZ_BAD_ANSWERS, REDIRECT_REQUIRED, REDIRECT_REQUIRED_QUIZ, REMOVE_POINTS_FAIL, REMOVE_POINTS_REQUEST, REMOVE_POINTS_SUCCESS } from "../Constants/quizConstants";

export const removePointsReducer = (state={},action)=>{
    switch(action.type)
    {
        case REMOVE_POINTS_REQUEST:
            return {loading:true,error:false}
        case REMOVE_POINTS_FAIL:
            return {loading:false,error:action.payload}
        case REMOVE_POINTS_SUCCESS:
            return {loading:false,error:false,data:action.payload}
        default:
            return state
    }
}

export const checkQuizReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_POINTS_REQUEST:
            return { loading: true, error: false }
        case ADD_POINTS_FAIL:
            return { loading: false, error: action.payload }
        case ADD_POINTS_SUCCESS:
            return { loading: false, error: false, data: action.payload }
        case REDIRECT_REQUIRED:
            return { redirect:true, data:action.payload }
        default:
            return state
    }
}

export const getUserCurrentQuizBadAnswersReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_CURRENT_QUIZ_BAD_ANSWERS.REQUEST:
            return { loading: true, error: false }
        case GET_USER_CURRENT_QUIZ_BAD_ANSWERS.SUCCESS:
            return { loading: false, data: action.payload }
        case GET_USER_CURRENT_QUIZ_BAD_ANSWERS.FAIL:
            return { loading: false, error: false}
        default:
            return state
    }
}