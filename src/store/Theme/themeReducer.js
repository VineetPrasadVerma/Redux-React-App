import * as types from "./themeTypes";


const initialState = ""

export const themeReducer = (state = initialState, action) => {
    console.log('TR', state, action)
    switch (action.type) {
        case types.CHANGE_COLOR:
            return action.payload
        default:
            return state;
    }
}
