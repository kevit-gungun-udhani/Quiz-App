import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      fullName: "",
      gender: "",
      phoneNo: "",
      email: "",
      language: "",
      },
    isLoggedIn: false,
  },
  reducers: {
    setUserData(state, action) {
      state.userInfo[action.payload.name] = action.payload.value;
    },
    isLoggedIn(state) {
      console.log(current(state.userInfo))
        for (const [key, value] of Object.entries(state.userInfo)) {
            if (!value) {
              state.isLoggedIn = false;
              return;
            }
        }
        state.isLoggedIn = true;
    },
    resetUserData(state) {
      state.userInfo.fullName = "",
      state.userInfo.email = "",
      state.userInfo.gender = "",
      state.userInfo.language = "",
      state.userInfo.phoneNo = ""
    }
  },
});

export default userSlice.reducer;
export const {setUserData, isLoggedIn, resetUserData} = userSlice.actions;