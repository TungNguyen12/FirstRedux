import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
// configureStore allow you create store easily
import { Provider } from "react-redux";
// Provider determine which components should have access to the store
import userReducer from "./features/user";
import themeReducer from './features/theme'


const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    }, //reducer is a pure function which take an ACTION and the previous state of the application and returns the new state
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* Everything inside the Provider component have the access to the store */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
