import { createSlice } from "@reduxjs/toolkit";
// createSlice is a function that accepts an initial state, an object of reducer functions and a 'slice name' => automatically generates action creators and action types that CORRESPOND to the reducers and state

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            //the logout function will clear out the object to its original state
            state.value = initialStateValue;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
