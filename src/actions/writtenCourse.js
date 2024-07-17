import axios from "axios"
import { GET_USER_WRITTEN_COURSE, GET_WRITTEN_COURSE, GET_WRITTEN_COURSE_BY_ID, RUN_WRITTEN_COURSE_CODE, UPDATE_AND_RETRIEVE_USER_WRITTEN_COURSE, UPDATE_USER_WRITTEN_COURSE_BACKUP } from "../Constants/writtenCourse"
import { DecodeError } from "./errorHandling"
import {AccessConfig} from "./AccessConfig"


export const getWrittenCoursesAction = (roadmap) => async (dispatch) => {
    try {
        dispatch({ type: GET_WRITTEN_COURSE.REQUEST })
        const { data } = await axios.get(`/api/summary/summary/${roadmap}/`,AccessConfig())
        dispatch({ type: GET_WRITTEN_COURSE.SUCCESS, payload: data.data })
    } catch (error) {
        dispatch({ type: GET_WRITTEN_COURSE.FAIL, payload:DecodeError(error) })
    }
}

export const getWrittenCourseById = (pk) => async (dispatch) => {
    try{
        dispatch({type:GET_WRITTEN_COURSE_BY_ID.REQUEST})
        const {data} = await axios.get(`/api/summary/summary/pk/${pk}/`,AccessConfig())
        dispatch({type:GET_WRITTEN_COURSE_BY_ID.SUCCESS,payload:data.data})
    }
    catch(error){
        dispatch({type:GET_WRITTEN_COURSE_BY_ID.FAIL,payload:DecodeError(error)})
    }
}

export const getUserWrittenCourse = (roadmapId) => async(dispatch) => {
    try{
     
     dispatch({type:GET_USER_WRITTEN_COURSE.REQUEST})
     const {data} = await axios.get(`/api/userWrittenCourse/userWrittenCourse/${roadmapId}/`,AccessConfig())
     dispatch({type:GET_USER_WRITTEN_COURSE.SUCCESS,payload:data.data})
    }
    catch(error)
    {
        dispatch({type:GET_USER_WRITTEN_COURSE.FAIL,payload:DecodeError(error)})
    }
}

export const updateAndRetreiveUserWrittenCourse = (roadmapId) => async (dispatch) => {
    try{
        dispatch({type:UPDATE_AND_RETRIEVE_USER_WRITTEN_COURSE.REQUEST})
        const {data} = await axios.put(`/api/summary/summary/${roadmapId}/`,null,AccessConfig())
        dispatch({type:UPDATE_AND_RETRIEVE_USER_WRITTEN_COURSE.SUCCESS , payload:data.data})
    }
    catch(error)
    {
        dispatch({type:UPDATE_AND_RETRIEVE_USER_WRITTEN_COURSE.FAIL,payload:DecodeError(error)})
    }
}

export const updateUserCourseBackupAction = (roadmapId,page,contentId) => async (dispatch) => {
    try{
        const payload = {
            "summaryPage":page,
            "summaryCourse":contentId
        }
        dispatch({type:UPDATE_USER_WRITTEN_COURSE_BACKUP.REQUEST})
        const {data} = await axios.put(`/api/userWrittenCourse/userWrittenCourse/${roadmapId}/`,payload,AccessConfig())
        dispatch({type:UPDATE_USER_WRITTEN_COURSE_BACKUP.FAIL,payload:data.data})
    }
    catch(error)
    {
        dispatch({type:UPDATE_USER_WRITTEN_COURSE_BACKUP.FAIL,payload:DecodeError(error)})
    }
}

export const runWrittenCourseCode = (summary_id,summary_code_id,code=null) => async (dispatch) => {
    try{
       
        dispatch({type:RUN_WRITTEN_COURSE_CODE.REQUEST})

        const {data} = await axios.post(`/api/userWrittenCourse/runCode/${summary_id}/${summary_code_id}/`,{"code":code},AccessConfig())
        dispatch({type:RUN_WRITTEN_COURSE_CODE.SUCCESS,payload:data.data})
    }
    catch(error)
    {
        dispatch({type:RUN_WRITTEN_COURSE_CODE.FAIL,payload:DecodeError(error)})
    }
}