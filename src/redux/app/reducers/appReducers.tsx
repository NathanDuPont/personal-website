import { CHANGE_APP, APP_TYPE, IAppState, IChangeDisplayActionTypes } from "../../actionTypes";

const initialState: IAppState = {
    app: APP_TYPE.HOME
};

export function appReducer(state=initialState, action: IChangeDisplayActionTypes): IAppState {
    switch (action.type) {
        case CHANGE_APP:
            return {
                app: action.payload
            };
        default:
            return state;
    }
}