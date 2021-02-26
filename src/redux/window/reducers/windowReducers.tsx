import { CHANGE_WINDOW, WINDOW_TYPE, WindowState, ChangeDisplayActionTypes } from "../../actionTypes";

const initialState: WindowState = {
    window: WINDOW_TYPE.GALLERY
};

export function windowReducer(state=initialState, action: ChangeDisplayActionTypes): WindowState {
    switch (action.type) {
        case CHANGE_WINDOW:
            return {
                window: action.payload
            };
        default:
            return state;
    }
}