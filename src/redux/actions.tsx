import { 
    CHANGE_WINDOW, 
    WINDOW_TYPE, 
    CHANGE_APP, 
    APP_TYPE, 
    IChangeDisplayActionTypes 
} from "./actionTypes";

export function changeWindow(newWindow: WINDOW_TYPE): IChangeDisplayActionTypes {
    return  {
        type: CHANGE_WINDOW,
        payload: newWindow
    }
};

export function changeApp(newApp: APP_TYPE): IChangeDisplayActionTypes {
    return {
        type: CHANGE_APP,
        payload: newApp
    }
};