import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: undefined
    },
    reducers: {
        formSubmit(state, action){
            state.user = action.payload;
        }
    }
})

export default userSlice.reducer;
export const userAction = userSlice.actions;