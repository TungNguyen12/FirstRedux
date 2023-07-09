import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = ''; // here is the color come from use input, stored here

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
        // We create an action = changeColor
        changeColor: (state, action) => { 
            state.value = action.payload;
        },
    },
});

// Export so we can use this elsewhere 
export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;

// If we want to use this slice => Have to add this reducer to our store = index.js.store
