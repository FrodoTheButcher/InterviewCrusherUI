import { REGISTER_VIDEO_SUBMISSION_FAIL, REGISTER_VIDEO_SUBMISSION_REQUEST, REGISTER_VIDEO_SUBMISSION_SUCCESS } from "../Constants/videoConstants"


export const registerVideoSubmissionReducer = (state = {}, action) => {
    switch(action.type)
    {
        case REGISTER_VIDEO_SUBMISSION_REQUEST:
            return {loading:true}
        case REGISTER_VIDEO_SUBMISSION_SUCCESS:
            return {loading:false,success:true,data:action.payload}
        case REGISTER_VIDEO_SUBMISSION_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}