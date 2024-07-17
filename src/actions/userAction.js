import { GET_ALGO_QUESTION_COMMENTS, GET_USER_SUBMISSION_RESULT_BY_ID, USER_CREATES_ALGO_QUESTION, USER_CREATE_ALGO_QUESTION_COMMENT, USER_DIFFICULTY, USER_DISLIKE, USER_ENTITIE_DISLIKE, USER_ENTITIE_UNDO_DISLIKE, USER_ENTITIE_UNDO_LIKE, USER_GET_PROFILE_DATA, USER_LIKE, USER_PROFILE_INFO, USER_PROFILE_ROADMAP_CHAPTER_DATA, USER_PROPOSE_ALGORITHM, USER_PROPOSE_ALGO_SOLUTION, USER_REGISTER_FAIL, USER_REGISTER_NEWS_LETTER_FAIL, USER_REGISTER_NEWS_LETTER_REQUEST, USER_REGISTER_NEWS_LETTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REVIEW, USER_SEND_EMAIL_FAIL, USER_SEND_EMAIL_REQUEST, USER_SEND_EMAIL_SUCCESS } from "../Constants/userConstants"
import axios from "axios"
import { DecodeError } from "./errorHandling"
import { AccessConfig } from "./AccessConfig"


export const userRegisterAction =  (userData)=> async (dispatch) =>{
    try{
        const config = AccessConfig()
        dispatch({type:USER_REGISTER_REQUEST})
        
        const {data} = await axios.post("/api/users/",userData,config)
        dispatch({type:USER_REGISTER_SUCCESS,payload:userData})
    }
    catch(e)
    {
        dispatch({type:USER_REGISTER_FAIL,payload:DecodeError(e)})
    }
}
  

export const userLikeAction = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_LIKE.REQUEST})
        const response = await axios.put("/api/userInteraction/handleLike/",data,config);
        dispatch({type:USER_LIKE.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:USER_LIKE.FAIL,payload:DecodeError(e)})
    }
}

export const userDislikeAction = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_DISLIKE.REQUEST})
        const response =await axios.put("/api/userInteraction/handleEntitieDislike/",data,config);
        dispatch({type:USER_DISLIKE.SUCCESS,payload:response})
    }
    catch(e)
    {
        dispatch({type:USER_DISLIKE.FAIL,payload:DecodeError(e)})
    }
}

export const userEntitieDislikeAction = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_ENTITIE_DISLIKE.REQUEST})
        const response =await axios.put("/api/userInteraction/handleEntitieDislike/",data,config);
        dispatch({type:USER_ENTITIE_DISLIKE.SUCCESS,payload:response})
    }
    catch(e)
    {
        dispatch({type:USER_ENTITIE_DISLIKE.FAIL,payload:DecodeError(e)})
    }
}


export const registerToNewsLetter = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_REGISTER_NEWS_LETTER_REQUEST})
        const response = axios.post("/api/users/newsLetter/",data,config);
        dispatch({type:USER_REGISTER_NEWS_LETTER_SUCCESS,payload:(await response).data.data})
    }
    catch(e)
    {
        dispatch({type:USER_REGISTER_NEWS_LETTER_FAIL,payload:DecodeError(e)})
    }

}

export const sendEmail = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_SEND_EMAIL_REQUEST})
        const response =await axios.post("/api/users/sendEmail/",data,config);
        dispatch({type:USER_SEND_EMAIL_SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:USER_SEND_EMAIL_FAIL,payload:DecodeError(e)})
    }

}
  
export const userDifficultyAction = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_DIFFICULTY.REQUEST})
        const response = await axios.put("/api/userInteraction/handleDifficulty/",data,config);
        dispatch({type:USER_DIFFICULTY.SUCCESS,payload:response})
    }
    catch(e)
    {
        dispatch({type:USER_DIFFICULTY.FAIL,payload:DecodeError(e)})
    }
}

export const userReviewAction = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_REVIEW.REQUEST})
        const response = await axios.post("/api/users/review/",data,config);
        dispatch({type:USER_REVIEW.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:USER_REVIEW.FAIL,payload:DecodeError(e)})
    }
}

export const userProposeAlgorithmAction = (data) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_PROPOSE_ALGORITHM.REQUEST})
        const response = await axios.post("/api/users/proposeAlgorithm/",data,config);
        dispatch({type:USER_PROPOSE_ALGORITHM.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:USER_PROPOSE_ALGORITHM.FAIL,payload:DecodeError(e)})
    }
}

export const getUserAlgorithmSubmissionResultByIdAction = (id) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:GET_USER_SUBMISSION_RESULT_BY_ID.REQUEST})
        const response = await axios.get(`/api/submission/algo/get_result/${id}/`,config);
        dispatch({type:GET_USER_SUBMISSION_RESULT_BY_ID.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:GET_USER_SUBMISSION_RESULT_BY_ID.FAIL,payload:DecodeError(e)})
    }
}

export const handleUserCreatesAlgorithmQuestion = (algorithm_id,name,description) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_CREATES_ALGO_QUESTION.REQUEST})
        const response = await axios.post(`/api/algorithm/algo/question/`,{"algorithm":algorithm_id,"name":name,"description":description},config)
        dispatch({type:USER_CREATES_ALGO_QUESTION.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:USER_CREATES_ALGO_QUESTION.FAIL,payload:DecodeError(e)})
    }
}

export const handleEntitieUndoLike = (id,type) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_ENTITIE_UNDO_LIKE.REQUEST})
        const response = await axios.put("/api/userInteraction/handleUserUndoLike/",{"id":id,"type":type},config)
        dispatch({type:USER_ENTITIE_UNDO_LIKE.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:USER_ENTITIE_UNDO_LIKE.FAIL,payload:DecodeError(e)})
    }
}

export const handleEntitieUndoDisLike = (id,type) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_ENTITIE_UNDO_DISLIKE.REQUEST})
        const response = await axios.put("/api/userInteraction/handleUserUndoDisLike/",{"id":id,"type":type},config)
        dispatch({type:USER_ENTITIE_UNDO_DISLIKE.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:USER_ENTITIE_UNDO_DISLIKE.FAIL,payload:DecodeError(e)})
    }
}

export const handleUserCreatesAlgoQuestionComment = (algoQuestion,description) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_CREATE_ALGO_QUESTION_COMMENT.REQUEST})
        const response = await axios.post("/api/algorithm/algo/question/answer/",{"algoQuestion":algoQuestion,"description":description},config)
        dispatch({type:USER_CREATES_ALGO_QUESTION.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:USER_CREATES_ALGO_QUESTION.FAIL,payload:DecodeError(e)})
    }
}

export const getAlgoQuestionComments = (id) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:GET_ALGO_QUESTION_COMMENTS.REQUEST})
        const response = await axios.get(`/api/algorithm/algo/algo_question/get_comments/${id}/`,config)
        dispatch({type:GET_ALGO_QUESTION_COMMENTS.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:GET_ALGO_QUESTION_COMMENTS.FAIL,payload:DecodeError(e)})
    }
}

export const userProposeAlgoSolution = (solutionB64,template)  => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_PROPOSE_ALGO_SOLUTION.REQUEST})
        const data = {
            "solutionB64":solutionB64,
            "template":template
        }
        const response = await axios.post(`/api/userInteraction/insert_algo_solution_proposed/`,data,config)
        dispatch({type:USER_PROPOSE_ALGO_SOLUTION.SUCCESS,payload:response.data.data})
    }
    catch(e)
    {
        dispatch({type:USER_PROPOSE_ALGO_SOLUTION.FAIL,payload:DecodeError(e)})
    }
}

export const userGetProfileData = () => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_GET_PROFILE_DATA.REQUEST})
        const response = await axios.get("/api/users/profile_data/",config)
        dispatch({type:USER_GET_PROFILE_DATA.SUCCESS,payload:response.data})
    }
    catch(e)
    {
        dispatch({type:USER_GET_PROFILE_DATA.FAIL,payload:DecodeError(e)})
    }
}

export const getUserProfileRoadmapChaptersDataAction = (templateid) => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_PROFILE_ROADMAP_CHAPTER_DATA.REQUEST})
        const response = await axios.get(`/api/users/get_chapters_data/${templateid}/`,config)
        dispatch({type:USER_PROFILE_ROADMAP_CHAPTER_DATA.SUCCESS,payload:response.data})
    }
    catch(e)
    {
        dispatch({type:USER_PROFILE_ROADMAP_CHAPTER_DATA.FAIL,payload:DecodeError(e)})
    }
}

export const getUserProfileDataAction = () => async (dispatch) => {
    try{
        const config = AccessConfig()
        dispatch({type:USER_PROFILE_INFO.REQUEST})
        const response = await axios.get(`/api/users/get_profile_data/`,config)
        dispatch({type:USER_PROFILE_INFO.SUCCESS,payload:response.data})
    }
    catch(e)
    {
        dispatch({type:USER_PROFILE_INFO.FAIL,payload:DecodeError(e)})
    }
}