import { CHANGE_WINDOW, WINDOW_TYPE, IWindowState, IChangeDisplayActionTypes } from "../../actionTypes";

const initialState: IWindowState = {
    window: WINDOW_TYPE.GALLERY
};

export function windowReducer(state=initialState, action: IChangeDisplayActionTypes): IWindowState {
    switch (action.type) {
        case CHANGE_WINDOW:
            return {
                window: action.payload
            };
        default:
            return state;
    }
}