import { useDispatch, useSelector } from "react-redux"
import data from "../data";
import { quizAction } from "../store/quiz-slice";

export default function GoBack({previousQueId}){
    const dispatch = useDispatch();
    const selectedLang = useSelector((state) => state.user.user.language);
    const previousQue = data[selectedLang].filter((que) => que.id === previousQueId);
    const {id, text, answers} = previousQue[0];
    
   
    function handleBack(){
        dispatch(quizAction.setCurrentQuestion({
            id,
            que: text,
            ans: answers
        }))
    }
    return (
        <button onClick={handleBack}>&lt;</button>
    )
}