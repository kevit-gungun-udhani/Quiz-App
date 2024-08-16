import { useDispatch, useSelector } from "react-redux"
import data from '../data'
import { quizAction } from "../store/quiz-slice";
import ShowQuiz from "../components/ShowQuiz";

export default function HomePage() {
    const dispatch = useDispatch();

    const userSelectedLang = useSelector((state) => state.user.user.language);
    const userName = useSelector((state) => state.user.user.fullName);
    const totalQuestion = data[userSelectedLang].length;
    const { id, text, answers } = data[userSelectedLang][0];

    dispatch(quizAction.setCurrentQuestion({
        id,
        que: text,
        ans: answers
    }))
    
    return (
      <>
        <h1>Welcome {userName}!</h1>
        <ShowQuiz totalQuestion={totalQuestion} userSelectedLang={userSelectedLang}/>
      </>
    );
}

