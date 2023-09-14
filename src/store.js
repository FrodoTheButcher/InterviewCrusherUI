import { combineReducers,applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "@reduxjs/toolkit";
import { roadmapGetAllAction } from "./actions/roadmapGetAllAction";
import { roadmapGetAllReducer, roadmapGetByIdReducer } from "./reducers/roadmap";

const reducer = combineReducers({
    roadmapList:roadmapGetAllReducer,
    roadmapItem: roadmapGetByIdReducer,
})

const userQuizFromStorage = localStorage.getItem("quiz") ? JSON.parse(localStorage.getItem('quiz')) : []

const initialState = {
    exercise: { quiz: userQuizFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;