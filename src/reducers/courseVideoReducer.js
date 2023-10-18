import { CREATE_COURSE_VIDEO_COMMENTS_FAIL, CREATE_COURSE_VIDEO_COMMENTS_REQUEST, CREATE_COURSE_VIDEO_COMMENTS_SUCCESS, GET_COURSE_VIDEO_COMMENTS_FAIL, GET_COURSE_VIDEO_COMMENTS_REQUEST, GET_COURSE_VIDEO_COMMENTS_SUCCESS } from "../Constants/courseVideoConstants";

export const courseVideoCommentsReducer = (state={},action) =>{
    switch(action.payload){
        case GET_COURSE_VIDEO_COMMENTS_REQUEST:
            return {loading:true,error:false}
        case GET_COURSE_VIDEO_COMMENTS_SUCCESS:
            return {loading:false,error:false,comments:action.payload}
        case GET_COURSE_VIDEO_COMMENTS_FAIL:
            return {loading:false,error:action.payload}        
        default:
            return {...state};
    }


}

export const createCourseVideoCommentsReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_COURSE_VIDEO_COMMENTS_REQUEST:
            return { loading: true, error: false }
        case CREATE_COURSE_VIDEO_COMMENTS_SUCCESS:
            return { loading: false, error: false, commentId: action.payload }
        case CREATE_COURSE_VIDEO_COMMENTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return { ...state };
    }


}