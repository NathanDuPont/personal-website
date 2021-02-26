import { CHANGE_APP, APP_TYPE, AppState, ChangeDisplayActionTypes } from "../../actionTypes";

const initialState: AppState = {
    app: APP_TYPE.HOME
};

export function appReducer(state=initialState, action: ChangeDisplayActionTypes): AppState {
    switch (action.type) {
        case CHANGE_APP:
            return {
                app: action.payload
            };
        default:
            return state;
    }
}