import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    answers: {}
  },
  reducers: {
    setAnswer(state, action) {
      state.answers[action.payload.questionId] = action.payload.answer;
    },
    resetAnswer(state){
      state.answers = {};
    }
  }
})

export default quizSlice.reducer;
export const {setAnswer, resetAnswer} = quizSlice.actions;