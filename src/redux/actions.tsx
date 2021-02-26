import { 
    CHANGE_WINDOW, 
    WINDOW_TYPE, 
    CHANGE_APP, 
    APP_TYPE, 
    ChangeDisplayActionTypes 
} from "./actionTypes";

export function changeWindow(newWindow: WINDOW_TYPE): ChangeDisplayActionTypes {
    return  {
        type: CHANGE_WINDOW,
        payload: newWindow
    }
};

export function changeApp(newApp: APP_TYPE): ChangeDisplayActionTypes {
    return {
        type: CHANGE_APP,
        payload: newApp
    }
};