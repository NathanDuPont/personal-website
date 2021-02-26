export const CHANGE_WINDOW = "CHANGE_WINDOW";
export const CHANGE_APP = "CHANGE_APP";

export enum WINDOW_TYPE {
    GALLERY = 0,
    RESUME = 1,
    PROJECTS = 2,
    SPOTLIGHT_VEXU = 3
}

export enum APP_TYPE {
    HOME = 0,
    DASHBOARD = 1
}

export interface WindowState {
    window: WINDOW_TYPE
}

export interface AppState {
    app: APP_TYPE
}

interface ChangeWindowAction {
    type: typeof CHANGE_WINDOW
    payload: WINDOW_TYPE
}

interface ChangeAppAction {
    type: typeof CHANGE_APP
    payload: APP_TYPE
}

export type ChangeDisplayActionTypes = ChangeWindowAction | ChangeAppAction;