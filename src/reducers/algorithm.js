import { CREATE_NEW_SUBMISSION_FAIL, CREATE_NEW_SUBMISSION_REDIRECT_REQUIRED, CREATE_NEW_SUBMISSION_REQUEST, CREATE_NEW_SUBMISSION_RESET, CREATE_NEW_SUBMISSION_SUCCESS, GET_ALGO_QUESTIONS, GET_ALGO_SOLUTIONS, GET_BASIC_TESTCASE_FAIL, GET_BASIC_TESTCASE_REQUEST, GET_BASIC_TESTCASE_SUCCESS, GET_LANGUAGES_FAIL, GET_LANGUAGES_REQUEST, GET_LANGUAGES_SUCCESS, GET_SUBMISSIONS_FAIL, GET_SUBMISSIONS_REQUEST, GET_SUBMISSIONS_SUCCESS, GET_TESTCASES_FAIL, GET_TESTCASES_REQUEST, GET_TESTCASES_SUCCESS, GET_TIPS, UPDATE_ALGO_QUESTION, UPDATE_ALGO_QUESTION_COMMENT } from "../Constants/algoConstants";
import { GET_ALGO_QUESTION_COMMENTS } from "../Constants/userConstants";


export const getLanguagesReducer = (state = {},action) =>{
    switch(action.type)
    {
        case GET_LANGUAGES_REQUEST:
            return { languages:[],loading:true,error:false}
        case GET_LANGUAGES_SUCCESS:
            return {
                ...state,
                languages: action.payload, 
                loading: false,
                error: false,
            };

        case GET_LANGUAGES_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}


export const getSubmissionsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SUBMISSIONS_REQUEST:
            return { submissions: null , loading: true, error: false }
        case GET_SUBMISSIONS_SUCCESS:
            return {
                ...state,
                submissions: action.payload,
                loading: false,
                error: false,
            };

        case GET_SUBMISSIONS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}



export const getTestCasesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TESTCASES_REQUEST:
            return { testcases: null, loading: true, error: false }
        case GET_TESTCASES_SUCCESS:
            return {
                ...state,
                testcases: action.payload,
                loading: false,
                error: false,
            };

        case GET_TESTCASES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const getBasicTestCasesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_BASIC_TESTCASE_REQUEST:
            return { testcases: null, loading: true, error: false }
        case GET_BASIC_TESTCASE_SUCCESS:
            return {
                ...state,
                testcases: action.payload,
                loading: false,
                error: false,
            };

        case GET_BASIC_TESTCASE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const getAlgoQuestionsReducer = (state = {error:false,loading:false}, action) => {
    switch (action.type) {
        case GET_ALGO_QUESTIONS.REQUEST:
            return {loading: true, error: false }
        case GET_ALGO_QUESTIONS.SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false,
            };

        case GET_ALGO_QUESTIONS.FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const getTipsReducer = (state = {error:false,loading:false}, action) => {
    switch (action.type) {
        case GET_TIPS.REQUEST:
            return {loading: true, error: false }
        case GET_TIPS.SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false,
            };

        case GET_TIPS.FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const createNewSubmissionReducer = (state = {error:false,loading:false}, action) => {
    switch (action.type) {
        case CREATE_NEW_SUBMISSION_REQUEST:
            return {loading: true, error: false }
        case CREATE_NEW_SUBMISSION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false,
            };

        case CREATE_NEW_SUBMISSION_FAIL:
            return { loading: false, error: action.payload }
        case CREATE_NEW_SUBMISSION_RESET:
            return {}
        case CREATE_NEW_SUBMISSION_REDIRECT_REQUIRED:
            return {loading:false,error:false,redirect:true}
        default:
            return state;
    }
}

export const getAlgoQuestionCommentsReducer = (state= {},action) =>{
    switch(action.type)
    {
            case GET_ALGO_QUESTION_COMMENTS.REQUEST:
                return {loading: true, error: false }
            case GET_ALGO_QUESTION_COMMENTS.SUCCESS:
                return {
                    ...state,
                    data: action.payload,
                    loading: false,
                    error: false,
                };
    
            case GET_ALGO_QUESTION_COMMENTS.FAIL:
                return { loading: false, error: action.payload }
            default:
                return state;
    }
}

export const updateAlgoQuestionComment = (state= {},action) =>{
    switch(action.type)
    {
            case UPDATE_ALGO_QUESTION_COMMENT.REQUEST:
                return {loading: true, error: false }
            case UPDATE_ALGO_QUESTION_COMMENT.SUCCESS:
                return {
                    ...state,
                    data: action.payload,
                    loading: false,
                    error: false,
                };
    
            case UPDATE_ALGO_QUESTION_COMMENT.FAIL:
                return { loading: false, error: action.payload }
            default:
                return state;
    }
}
export const updateAlgoQuestion = (state= {},action) =>{
    switch(action.type)
    {
            case UPDATE_ALGO_QUESTION.REQUEST:
                return {loading: true, error: false }
            case UPDATE_ALGO_QUESTION.SUCCESS:
                return {
                    ...state,
                    data: action.payload,
                    loading: false,
                    error: false,
                };
    
            case UPDATE_ALGO_QUESTION.FAIL:
                return { loading: false, error: action.payload }
            default:
                return state;
    }
}

export const getAlgoSolutionsReducer = (state= {},action) =>{
    switch(action.type)
    {
            case GET_ALGO_SOLUTIONS.REQUEST:
                return {loading: true, error: false }
            case GET_ALGO_SOLUTIONS.SUCCESS:
                return {
                    ...state,
                    data: action.payload,
                    loading: false,
                    error: false,
                };
    
            case GET_ALGO_SOLUTIONS.FAIL:
                return { loading: false, error: action.payload }
            default:
                return state;
    }
}