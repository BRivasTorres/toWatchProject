import { configureStore, combineReducers } from "@reduxjs/toolkit";
import inputReducer from "./input/inputReducer";
import formReducer from "./form/formReducer";
import fetchDataReducer from "./fetchData/fetchDataReducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    input : inputReducer,  
    form : formReducer,
    fetchData: fetchDataReducer
}) 

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});



export default store;
