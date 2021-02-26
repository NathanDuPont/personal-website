import { combineReducers } from "redux";
import { appReducer } from "./app/reducers/appReducers";
import { windowReducer } from "./window/reducers/windowReducers";

export const rootReducer = combineReducers({ 
    app: appReducer, 
    window: windowReducer 
});

export type RootState = ReturnType<typeof rootReducer>;