import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      fullName: '',
      gender: '',
      phoneNo: '',
      email: '',
      language: '',
      },
    isLoggedIn: false,
  },
  reducers: {
    setUserData(state, action) {
      state.userInfo[action.payload.name] = action.payload.value;
    },
    isLoggedIn(state) {
        for (const entry in state.userInfo) {
            if (!entry) {
            break;
            }
        }
        state.isLoggedIn = true;
    },
  },
});

export default userSlice.reducer;
export const {setUserData, isLoggedIn} = userSlice.actions;