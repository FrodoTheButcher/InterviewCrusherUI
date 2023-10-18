import axios from "axios"
import { CREATE_COURSE_VIDEO_COMMENTS_FAIL, CREATE_COURSE_VIDEO_COMMENTS_REQUEST, CREATE_COURSE_VIDEO_COMMENTS_SUCCESS, GET_COURSE_VIDEO_COMMENTS_FAIL, GET_COURSE_VIDEO_COMMENTS_REQUEST, GET_COURSE_VIDEO_COMMENTS_SUCCESS } from "../Constants/courseVideoConstants"
import { DecodeError } from "./errorHandling"



export const getVideoCommentsAction = () => async (dispatch) => {

    try{
        dispatch({ type: GET_COURSE_VIDEO_COMMENTS_REQUEST })

        const { data } = await axios.get("/api/video/comment")

        dispatch({type:GET_COURSE_VIDEO_COMMENTS_SUCCESS,payload:data.data})
    }
    catch(e)
    {
        dispatch({type: GET_COURSE_VIDEO_COMMENTS_FAIL, payload: DecodeError(e)})
    }  
}


export const createVideoCommentsAction = (commentData) => async (dispatch) => {

    try {
        dispatch({ type: CREATE_COURSE_VIDEO_COMMENTS_REQUEST })

        const { data } = await axios.post("/api/video/comment", commentData)
        
        dispatch({ type: CREATE_COURSE_VIDEO_COMMENTS_SUCCESS, payload: data.data })
    }
    catch (e) {
        console.log("er",e)
        dispatch({ type: CREATE_COURSE_VIDEO_COMMENTS_FAIL, payload: DecodeError(e) })
    }
}