import * as types from "./userTypes";

const initialState = { name: "", age: 0, email: "" }

export const userReducer = (state = initialState, action) => {
    console.log('UR', state, action)
    switch (action.type) {
        case types.LOGIN_USER:
            return action.payload
        case types.LOGOUT_USER:
            return initialState
        default:
            return state;
    }
}
