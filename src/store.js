import { combineReducers,applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "@reduxjs/toolkit";
import { roadmapGetAllAction, scheduleTimeToLearn } from "./actions/roadmapGetAllAction";
import { ScheduleTimeToLearnReducer, getAvaialableRoadmapsReducer, roadmapGetAllReducer, roadmapGetChapterReducer } from "./reducers/roadmap";
import { createNewSubmissionReducer, getAlgoQuestionsReducer, getBasicTestCasesReducer, getLanguagesReducer, getSubmissionsReducer, getTestCasesReducer, getTipsReducer } from "./reducers/algorithm";
import { sendEmailReducer, userReducer, userSubscribeToNewsLetterReducer } from "./reducers/userReducer";
import { courseVideoCommentsReducer, createCourseVideoCommentsReducer } from "./reducers/courseVideoReducer";
import { addPointsReducer as checkQuizReducer, removePointsReducer } from "./reducers/quizReducer";
import { registerVideoSubmissionReducer } from "./reducers/videoReducer";
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
})

const userQuizFromStorage = localStorage.getItem("quiz") ? JSON.parse(localStorage.getItem('quiz')) : []

const initialState = {
    exercise: { quiz: userQuizFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;