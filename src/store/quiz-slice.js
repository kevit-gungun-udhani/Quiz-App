import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    answers: {}
  },
  reducers: {
    setAnswer(state, action) {
      state.answers[action.payload.questionId] = action.payload.answer;
    }
  }
})

export default quizSlice.reducer;
export const {setAnswer} = quizSlice.actions;