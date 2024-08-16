import { useSelector } from "react-redux";
import GoBack from "./GoBack";
import { useState } from "react";
import GoNext from "./GoNext";

export default function ShowQuiz({totalQuestion}) {
  const quiz = useSelector((state) => state.quiz.currentQuestion);
  console.log(quiz)

  function handleSubmit(formData) {
    const ans = formData.getAll("option")
  }

  const isBackInRange = quiz.id > 1;
  const isNextInRange = quiz.id < totalQuestion;

 
  return (
    <div>
      <h2>{quiz.id}</h2>
      <h3>{quiz.que}</h3>

      <form action={handleSubmit}>
        {quiz.ans.map((ans) => (
          <div key={ans.id}>
            <input type="radio" name="option" value={ans.ans} />
            <label>{ans.ans}</label>
          </div>
        ))}
        <button type="submit">submit</button>
      </form>
      
      {isBackInRange && <GoBack previousQueId={quiz.id - 1}/>}
      {isNextInRange && <GoNext nextQueId={quiz.id + 1}/>}
    </div>
  );
}