import { configureStore, combineReducers } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import precentReducer from "./precentSlice";
import usersReducer from "./usersSlice";

const reducer = combineReducers({
    countReducer,
    precentReducer,
    usersReducer,
})

export const store = configureStore({
    reducer
})