import * as types from "./userTypes";

export const loginUser = (payload) => ({
    type: types.LOGIN_USER,
    payload
});

export const logoutUser = (payload) => ({
    type: types.LOGOUT_USER
});


