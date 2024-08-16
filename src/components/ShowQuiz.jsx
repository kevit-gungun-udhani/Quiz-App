import { useDispatch, useSelector } from "react-redux";
import { reportAction } from "../store/report-slice";
import GoBack from "./GoBack";
import GoNext from "./GoNext";
import EndQuiz from "./EndQuiz";
import data from "../data";

export default function ShowQuiz({totalQuestion, userSelectedLang}) {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz.currentQuestion);
  const quizdata = data[userSelectedLang];

  function handleSubmit(formData) {
    const ans = formData.get("option");
    const correctAnswer = quizdata.map((element) => {
      if(element.id === quiz.id){
        return element.correctAnswer;
      }
    })

    let flag;
    if(ans === correctAnswer[0]){
      flag = true;
    }else{
      flag = false;
    }

    dispatch(reportAction.addSelectedAns({
      queId: quiz.id,
      flag,
      ans,
      ...(!flag) && {
        correctAnswer: correctAnswer[0]
      }
    }))
  }

  const isBackInRange = quiz.id > 1;
  const isNextInRange = quiz.id < totalQuestion;

 
  return (
    <div>
      <h2>{quiz.id}</h2>
      <h3>{quiz.que}</h3>

      <form action={handleSubmit} key={quiz.id}>
        {quiz.ans.map((ans) => (
          <div key={ans.id}>
            <input type="radio" name="option" value={ans.ans}/>
            <label>{ans.ans}</label>
          </div>
        ))}
        <button type="submit">submit</button>
      </form>
      
      {isBackInRange && <GoBack previousQueId={quiz.id - 1}/>}
      {isNextInRange && <GoNext nextQueId={quiz.id + 1}/>}
      {!isNextInRange && <EndQuiz/>}
    </div>
  );
}