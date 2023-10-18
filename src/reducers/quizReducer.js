import { ADD_POINTS_FAIL, ADD_POINTS_REQUEST, ADD_POINTS_SUCCESS, REMOVE_POINTS_FAIL, REMOVE_POINTS_REQUEST, REMOVE_POINTS_SUCCESS } from "../Constants/quizConstants";

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

export const addPointsReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_POINTS_REQUEST:
            return { loading: true, error: false }
        case ADD_POINTS_FAIL:
            return { loading: false, error: action.payload }
        case ADD_POINTS_SUCCESS:
            return { loading: false, error: false, data: action.payload }
        default:
            return state
    }
}