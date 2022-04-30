import React from "react";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../store/User/userAction"

function Login() {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(loginUser({ name: 'Vineet', email: "vineet@styldod.com", age: 25 }));
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    dispatch(logoutUser())
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Login;
