import { IState } from "./rootReducer";

export const getCurrentWindow = (state: IState) => state.window;

export const getCurrentApp = (state: IState) => state.app;