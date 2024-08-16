import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    currentQuestion: {
      id: '',
      que: '',
      ans: []
    },
  },
  reducers: {
    setCurrentQuestion(state, action) {
      state.currentQuestion.id = action.payload.id;
      state.currentQuestion.que = action.payload.que;
      state.currentQuestion.ans = action.payload.ans;
    }
  }
})

export default quizSlice.reducer;
export const quizAction = quizSlice.actions;