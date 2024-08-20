import { useDispatch, useSelector } from "react-redux";
import data from "../data";
import { useParams } from "react-router-dom";
import { setAnswer } from "../store/quiz-slice";

export default function QuizContent() {
  const dispatch = useDispatch();
  const { language } = useSelector(({ user }) => user.userInfo ?? {});
  const answers = useSelector(({ quiz }) => quiz.answers ?? {});
  const { id } = useParams();
  const currentQuestion = +id;
  const question = data[language].find((ele) => ele.id === currentQuestion);
  const answer = answers[question?.id];
  return (
    <div>
      <h3>{question?.text}</h3>
      <div>
        {question?.answers.map((ele) => (
          <div key={ele.id}>
            <input
              type="radio"
              name="option"
              checked={answer === ele.ans}
              onChange={() => {
                dispatch(
                  setAnswer({
                    questionId: question.id,
                    answer: ele.ans,
                  })
                );
              }}
            />
            <label>{ele.ans}</label>
          </div>
        ))}
      </div>
    </div>
  );
}