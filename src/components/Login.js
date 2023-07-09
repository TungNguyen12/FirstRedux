import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(
                        login({
                            name: "Pete Nguyen",
                            age: 30,
                            email: "finland@gmail.com",
                        })
                    );
                }}
            >
                Login
            </button>

            <button
                onClick={() => {
                    dispatch(logout()); // our LOgout does not take any payload => no need to pass anything inside
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Login;
