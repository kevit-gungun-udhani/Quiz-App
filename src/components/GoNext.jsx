import { useDispatch, useSelector } from "react-redux"
import data from "../data";
import { quizAction } from "../store/quiz-slice";

export default function GoNext({nextQueId}){
    const dispatch = useDispatch();
    const selectedLang = useSelector((state) => state.user.user.language);
    const nextQue = data[selectedLang].filter((que) => que.id === nextQueId);
    const {id, text, answers} = nextQue[0];
    
   
    function handleNext(){
        dispatch(quizAction.setCurrentQuestion({
            id,
            que: text,
            ans: answers
        }))
    }

    return (
        <button onClick={handleNext}>&gt;</button>
    )
}