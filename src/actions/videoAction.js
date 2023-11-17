import { REGISTER_VIDEO_SUBMISSION_FAIL, REGISTER_VIDEO_SUBMISSION_REQUEST, REGISTER_VIDEO_SUBMISSION_SUCCESS } from "../Constants/videoConstants"
import axios from "axios"
import { DecodeError } from "./errorHandling"
import { AccessConfig } from "./AccessConfig"

export const registerVideoSubmissionAction = (data) => async (dispatch) => {
    try {

        dispatch({
            type: REGISTER_VIDEO_SUBMISSION_REQUEST
        });

        const response = await axios.put("/api/submission/video/userVideoFinished/", data, AccessConfig());

        dispatch({
            type: REGISTER_VIDEO_SUBMISSION_SUCCESS,
            payload: response.data.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_VIDEO_SUBMISSION_FAIL,
            payload: DecodeError(error)
        });
    }
}
