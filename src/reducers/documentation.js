import { GET_DOCUMENTATION_BY_ID } from "../Constants/Documentation"
import { GET_CHATTING_QUESTIONS } from "../Constants/Documentation"
import { GET_CHATTING_QUESTION_ANSWER } from "../Constants/Documentation"
export const getDocumentationByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_DOCUMENTATION_BY_ID.REQUEST:
            return {
                loading: true
            }
        case GET_DOCUMENTATION_BY_ID.SUCCESS:
            return {
                loading: false,
                data: action.payload
            }
        case GET_DOCUMENTATION_BY_ID.FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const getChattingQuestionsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CHATTING_QUESTIONS.REQUEST:
            return {
                loading: true
            }
        case GET_CHATTING_QUESTIONS.SUCCESS:
            return {
                loading: false,
                data: action.payload
            }
        case GET_CHATTING_QUESTIONS.FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const getChattingQuestionAnswerReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CHATTING_QUESTION_ANSWER.REQUEST:
            return {
                loading: true
            }
        case GET_CHATTING_QUESTION_ANSWER.SUCCESS:
            return {
                loading: false,
                data: action.payload
            }
        case GET_CHATTING_QUESTION_ANSWER.FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

