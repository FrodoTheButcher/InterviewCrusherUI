import axios from "axios"
import { GET_AVAILABLE_ROADMAPS_FAIL, GET_AVAILABLE_ROADMAPS_REQUEST, GET_AVAILABLE_ROADMAPS_SUCCESS, GET_COINS_YOU_MISS_TO_SKIP, HANDLE_DELETING_COINS_YOU_MISS_TO_SKIP, ROADMAP_FAIL, ROADMAP_GETALL_FAIL, ROADMAP_GETALL_REQUEST, ROADMAP_GETALL_RESET, ROADMAP_GETALL_SUCCESS, ROADMAP_REQUEST, ROADMAP_SUCCESS, SCHEDULE_TIME_FAIL, SCHEDULE_TIME_REQUEST, SCHEDULE_TIME_SUCCESS } from "../Constants/roadmap"
import { AccessConfig } from "./AccessConfig";
import {DecodeError} from "./errorHandling";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
            payload: DecodeError(error)
        })
    }
}

export const scheduleTimeToLearn = (schedule) => async (dispatch) =>{

    try{
        dispatch({type:SCHEDULE_TIME_REQUEST})
        const config = AccessConfig()
        const { data } = await axios.post('/api/roadmap/scheduleTimeToLearn/',schedule,config)
        dispatch({
            type:SCHEDULE_TIME_SUCCESS,
            payload:data.data
        })

    }
    catch(error)
    {
        dispatch({
            type:SCHEDULE_TIME_FAIL,
            payload: DecodeError(error)
        })
    }


}

export const roadmapGetCurrentChapter = (roadmapId) => async (dispatch)=>{
    try{
        dispatch({type:ROADMAP_REQUEST})
        const config = AccessConfig()

        const { data } = await axios.get(`/api/roadmap/getChapter/${roadmapId}`,config)

        dispatch({
            type:ROADMAP_SUCCESS,
            payload:data.data
        })
    }
    catch(error)
    {
        dispatch({
            type: ROADMAP_FAIL,
            payload: DecodeError(error)
        })
    }
}


export const getAvaialableRoadmaps = () => async (dispatch)=>{
    try{
        dispatch({type:GET_AVAILABLE_ROADMAPS_REQUEST})
        const config = AccessConfig()

        const { data } = await axios.get(`/api/roadmap/roadmapsAvailable/`,config)

        dispatch({
            type:GET_AVAILABLE_ROADMAPS_SUCCESS,
            payload:data.data
        })
    }
    catch(error)
    {
        dispatch({
            type: GET_AVAILABLE_ROADMAPS_FAIL,
            payload: DecodeError(error)
        })
    }
}


export const getPointsYouLoseSkippingContent = (roadmapId,contentType,exerciseToSkipId) => async (dispatch) => {
    try{
        dispatch({type:GET_COINS_YOU_MISS_TO_SKIP.REQUEST})
        const config = AccessConfig()
        const response =await axios.get(`/api/roadmap/skipContentRequest/${roadmapId}/${contentType}/${exerciseToSkipId}/`)
        dispatch({
            type:GET_COINS_YOU_MISS_TO_SKIP.SUCCESS,
            payload:response.data.data
        })
    }
    catch(error)
    {
        dispatch({
            type:GET_COINS_YOU_MISS_TO_SKIP.FAIL,
            payload:DecodeError(error)
        })
    }
}

export const handleDeletePointsForSkippingContent = (roadmapId,contentType,exerciseToSkipId) => async (dispatch) => {
    try{
        dispatch({type:HANDLE_DELETING_COINS_YOU_MISS_TO_SKIP.REQUEST})
        const config = AccessConfig()
        const response =await axios.put(`/api/roadmap/skipContentRequest/${roadmapId}/${contentType}/${exerciseToSkipId}/`)
        dispatch({
            type:HANDLE_DELETING_COINS_YOU_MISS_TO_SKIP.SUCCESS,
            payload:response.data.data
        })
    }
    catch(error)
    {
        dispatch({
            type:HANDLE_DELETING_COINS_YOU_MISS_TO_SKIP.FAIL,
            payload:DecodeError(error)
        })
    }
}