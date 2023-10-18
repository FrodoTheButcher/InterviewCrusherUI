import { GET_LANGUAGES_FAIL, GET_LANGUAGES_REQUEST, GET_LANGUAGES_SUCCESS, GET_SUBMISSIONS_FAIL, GET_SUBMISSIONS_REQUEST, GET_SUBMISSIONS_SUCCESS } from "../Constants/algoConstants";


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