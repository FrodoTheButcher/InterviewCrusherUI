import axios from "axios"
import { ROADMAP_FAIL, ROADMAP_GETALL_FAIL, ROADMAP_GETALL_REQUEST, ROADMAP_GETALL_RESET, ROADMAP_GETALL_SUCCESS, ROADMAP_REQUEST, ROADMAP_SUCCESS } from "../Constants/roadmap"


export const roadmapGetAllAction = () => async (dispatch) =>{
    try{
        dispatch({type:ROADMAP_GETALL_REQUEST})
        const { data } = await axios.get('/api/templates/');

        dispatch({
            type:ROADMAP_GETALL_SUCCESS,
            payload:data.data
        })
    }
    catch(error)
    {
        dispatch({
            type:ROADMAP_GETALL_FAIL,
            payload:error
        })
    }
}

export const roadmapGetByIdAction = (roadmapId, chapterId) => async (dispatch)=>{
    try{
        dispatch({type:ROADMAP_REQUEST})
        const { data } = await axios.get(`/api/templates/${roadmapId}/${chapterId}/`)
        dispatch({
            type:ROADMAP_SUCCESS,
            payload:data.data
        })
    }
    catch(error)
    {
        console.log("error",error)
        dispatch({
            type: ROADMAP_FAIL,
            payload: error.response.data.data
        })
    }
}