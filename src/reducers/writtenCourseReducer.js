import { GET_USER_WRITTEN_COURSE, GET_WRITTEN_COURSE, GET_WRITTEN_COURSE_BY_ID, RUN_WRITTEN_COURSE_CODE, UPDATE_AND_RETRIEVE_USER_WRITTEN_COURSE, UPDATE_USER_WRITTEN_COURSE_BACKUP } from "../Constants/writtenCourse"


export const getWrittenCoursesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_WRITTEN_COURSE.REQUEST:
            return { loading: true}
        case GET_WRITTEN_COURSE.SUCCESS:
            return { loading: false, writtenCourses: action.payload }
        case GET_WRITTEN_COURSE.FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getWrittenCoursesReducerById = (state = {}, action) => {
    switch(action.type) {
        case GET_WRITTEN_COURSE_BY_ID.REQUEST:
            return { loading:true}
        case GET_WRITTEN_COURSE_BY_ID.SUCCESS:
            return { loading:false, writtenCourse : action.payload}
        case GET_WRITTEN_COURSE_BY_ID.FAIL:
            return { loading:false, error:action.payload}
        default:
            return state
    }
}

export const getUserWrittenCourseReducerById = ( state ={},action) => {
    switch(action.type) {
        case GET_USER_WRITTEN_COURSE.REQUEST:
            return { loading:true}
        case GET_USER_WRITTEN_COURSE.SUCCESS:
            return {loading:false, writtenCourse:action.payload}
        case GET_USER_WRITTEN_COURSE.FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const updateUserWrittenCourseReducer = ( state ={},action) => {
    switch(action.type) {
        case UPDATE_AND_RETRIEVE_USER_WRITTEN_COURSE.REQUEST:
            return { loading:true}
        case UPDATE_AND_RETRIEVE_USER_WRITTEN_COURSE.SUCCESS:
            return {loading:false , writtenCourse : action.payload}
        case UPDATE_AND_RETRIEVE_USER_WRITTEN_COURSE.FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const updateUserCourseBackupReducer = ( state ={},action) => {
    switch(action.type) {
        case UPDATE_USER_WRITTEN_COURSE_BACKUP.REQUEST:
            return { loading : true}
        case UPDATE_USER_WRITTEN_COURSE_BACKUP.SUCCESS:
            return { loading:false,data:action.payload}
        case UPDATE_USER_WRITTEN_COURSE_BACKUP.FAIL:
            return { loading:false, error : action.payload}
        default:
            return state
    }
}

export const runWrittenCourseReducer = (state ={},action) => {
    switch(action.type) {
        case RUN_WRITTEN_COURSE_CODE.REQUEST:
            return { loading:true}
        case RUN_WRITTEN_COURSE_CODE.SUCCESS:
            return { loading:false,data:action.payload}
        case RUN_WRITTEN_COURSE_CODE.FAIL:
            return { loading:false, error : action.payload}
        default:
            return state
    }
}