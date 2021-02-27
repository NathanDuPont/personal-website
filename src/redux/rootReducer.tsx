import { combineReducers } from "redux";
import { IAppState, IWindowState } from "./actionTypes";
import { appReducer } from "./app/reducers/appReducers";
import { windowReducer } from "./window/reducers/windowReducers";

export type IState = {
    app: IAppState,
    window: IWindowState
};

export const rootReducer = combineReducers({ 
    app: appReducer, 
    window: windowReducer 
});