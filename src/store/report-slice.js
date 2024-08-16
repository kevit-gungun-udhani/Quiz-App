import { createSlice, current } from "@reduxjs/toolkit";

const reportSlice = createSlice({
    name: 'report',
    initialState: {
        endQuiz: false,
        score: 0,
        summary: []
    },
    reducers: {
        EndQuiz(state){
            state.endQuiz = true;
        },
        addSelectedAns(state, action){
            state.summary.push(action.payload);
            console.log(current(state.summary))
        }
    }
})

export default reportSlice.reducer;
export const reportAction = reportSlice.actions;