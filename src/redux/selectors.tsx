import { RootState } from "./rootReducer";

export const getCurrentWindow = (state: RootState) => state.window;

export const getCurrentApp = (state: RootState) => state.app;