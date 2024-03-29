import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "users",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        registerStart: (state) => {
            state.isFetching = true
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = false;
        },
    }
});

export const { registerStart, registerSuccess, registerFailure } = userSlice.actions;
export default userSlice.reducer;