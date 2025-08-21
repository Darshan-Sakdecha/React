import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true,
                state.userData = action.payload.userData
        },
        logout: (state) => {
            state.status = false,
                state.userData = null
        }
    }
})

//here actions means login & logout 
//reducers key are known as actions
export const { login, logout } = authSlice.actions;

export default authSlice.reducer