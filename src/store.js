import { combineReducers,applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "@reduxjs/toolkit";
import { roadmapGetAllAction, scheduleTimeToLearn } from "./actions/roadmapGetAllAction";
import { ScheduleTimeToLearnReducer, getAvaialableRoadmapsReducer, getPointsYouLoseSkippingContentReducer, handleDeletingCoinsYouMissToSkipReducer, roadmapGetAllReducer, roadmapGetChapterReducer } from "./reducers/roadmap";
import { createNewSubmissionReducer, getAlgoQuestionCommentsReducer, getAlgoQuestionsReducer, getAlgoSolutionsReducer, getBasicTestCasesReducer, getLanguagesReducer, getSubmissionsReducer, getTestCasesReducer, getTipsReducer, updateAlgoQuestion, updateAlgoQuestionComment } from "./reducers/algorithm";
import {  getUserAlgorithmSubmissionResultById, getUserProfileDataReducer, getUserProfileReducer, getUserProfileRoadmapChaptersDataReducer, handleUserCommentsToAlgoQuestion, handleUserEntitieDislikeReducer, handleUserProposeSolutionToAlgoReducer, handleUserRegisterAlgorithmQuestionReducer, sendEmailReducer, userDifficultyReducer, userDislikeReducer, userLikeReducer, userProposeAlgorithmReducer, userReducer, userReviewReducer, userSubscribeToNewsLetterReducer } from "./reducers/userReducer";
import { courseVideoCommentsReducer, createCourseVideoCommentsReducer } from "./reducers/courseVideoReducer";
import { checkQuizReducer, getUserCurrentQuizBadAnswersReducer, removePointsReducer } from "./reducers/quizReducer";
import { registerVideoSubmissionReducer } from "./reducers/videoReducer";
import { getUserWrittenCourseReducerById, getWrittenCoursesReducer, getWrittenCoursesReducerById, runWrittenCourseReducer, updateUserCourseBackupReducer, updateUserWrittenCourseReducer } from "./reducers/writtenCourseReducer";
import { getChattingQuestionAnswerReducer, getChattingQuestionsReducer, getDocumentationByIdReducer } from "./reducers/documentation";
import { handleEntitieUndoDisLike, handleEntitieUndoLike } from "./actions/userAction";
import { getAlgoSolutions } from "./actions/algorithmAction";
const reducer = combineReducers({
    roadmapList:roadmapGetAllReducer,
    roadmapItem: roadmapGetChapterReducer,
    getLanguages : getLanguagesReducer,
    userReducer : userReducer,
    courseVideoCommentsReducer: courseVideoCommentsReducer,
    createCourseVideoCommentsReducer: createCourseVideoCommentsReducer,
    removePointsReducer:removePointsReducer,
    checkQuizReducer:checkQuizReducer,
    getSubmissionsReducer: getSubmissionsReducer,
    getTestCasesReducer: getTestCasesReducer,
    createNewSubmissionReducer: createNewSubmissionReducer,
    scheduleTimeToLearnReducer : ScheduleTimeToLearnReducer,
    getAvaialableRoadmapsReducer:getAvaialableRoadmapsReducer,
    userSubscribeToNewsLetterReducer:userSubscribeToNewsLetterReducer,
    sendEmailReducer:sendEmailReducer,
    registerVideoSubmissionReducer: registerVideoSubmissionReducer,
    getBasicTestCasesReducer: getBasicTestCasesReducer,
    getAlgoQuestionsReducer : getAlgoQuestionsReducer,
    getTipsReducer: getTipsReducer,
    userLikeReducer : userLikeReducer,
    userDislikeReducer : userDislikeReducer,
    userDifficultyReducer : userDifficultyReducer,
    getPointsYouLoseSkippingContentReducer:getPointsYouLoseSkippingContentReducer,
    handleDeletingCoinsYouMissToSkipReducer:handleDeletingCoinsYouMissToSkipReducer,
    userReviewReducer: userReviewReducer,
    userProposeAlgorithmReducer: userProposeAlgorithmReducer,
    getWrittenCoursesReducer : getWrittenCoursesReducer,
    getWrittenCourseReducerById:getWrittenCoursesReducerById,
    getUserWrittenCourseReducerById:getUserWrittenCourseReducerById,
    updateUserWrittenCourseReducer:updateUserWrittenCourseReducer,
    updateUserCourseBackupReducer:updateUserCourseBackupReducer,
    runWrittenCourseReducer:runWrittenCourseReducer,
    getDocumentationByIdReducer:getDocumentationByIdReducer,
    getChattingQuestionsReducer:getChattingQuestionsReducer,
    getChattingQuestionAnswerReducer:getChattingQuestionAnswerReducer,
    getUserAlgorithmSubmissionResultById:getUserAlgorithmSubmissionResultById,
    handleUserRegisterAlgorithmQuestionReducer:handleUserRegisterAlgorithmQuestionReducer,
    handleUserEntitieDislikeReducer:handleUserEntitieDislikeReducer,
    handleEntitieUndoLike:handleEntitieUndoLike,
    handleEntitieUndoDisLike:handleEntitieUndoDisLike,
    handleUserCommentsToAlgoQuestion:handleUserCommentsToAlgoQuestion,
    getAlgoQuestionCommentsReducer:getAlgoQuestionCommentsReducer,
    updateAlgoQuestionComment:updateAlgoQuestionComment,
    updateAlgoQuestion:updateAlgoQuestion,
    getUserCurrentQuizBadAnswersReducer:getUserCurrentQuizBadAnswersReducer,
    getAlgoSolutionsReducer:getAlgoSolutionsReducer,
    handleUserProposeSolutionToAlgoReducer:handleUserProposeSolutionToAlgoReducer,
    getUserProfileReducer:getUserProfileReducer,
    getUserProfileRoadmapChaptersDataReducer:getUserProfileRoadmapChaptersDataReducer,
    getUserProfileDataReducer:getUserProfileDataReducer
})

const userQuizFromStorage = localStorage.getItem("quiz") ? JSON.parse(localStorage.getItem('quiz')) : []

const initialState = {
    exercise: { quiz: userQuizFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;