import { CREATE_NEW_SUBMISSION_FAIL, CREATE_NEW_SUBMISSION_REQUEST, CREATE_NEW_SUBMISSION_SUCCESS, GET_ALGO_QUESTIONS, GET_BASIC_TESTCASE_FAIL, GET_BASIC_TESTCASE_REQUEST, GET_BASIC_TESTCASE_SUCCESS, GET_LANGUAGES_FAIL, GET_LANGUAGES_REQUEST, GET_LANGUAGES_SUCCESS, GET_SUBMISSIONS_FAIL, GET_SUBMISSIONS_REQUEST, GET_SUBMISSIONS_SUCCESS, GET_TESTCASES_FAIL, GET_TESTCASES_REQUEST, GET_TESTCASES_SUCCESS, GET_TIPS } from "../Constants/algoConstants";


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
        default:
            return state;
    }
}