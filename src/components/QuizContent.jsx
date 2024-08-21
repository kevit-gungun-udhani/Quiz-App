import { useDispatch, useSelector } from "react-redux";
import data from "../data";
import { useParams } from "react-router-dom";
import { setAnswer } from "../store/quiz-slice";
import { motion } from "framer-motion";

export default function QuizContent() {
  const dispatch = useDispatch();
  const { language } = useSelector(({ user }) => user.userInfo ?? {});
  const answers = useSelector(({ quiz }) => quiz.answers ?? {});
  const { id } = useParams();
  const currentQuestion = +id;
  const question = data[language].find((ele) => ele.id === currentQuestion);
  const answer = answers[question?.id];
  
  return (
    <div className=" flex justify-between font-">
      <div className="self-center p-2 text-lg">{question?.text}</div>
      <div className=" flex flex-col gap-6 absolute right-8 top-28">
        {question?.answers.map((ele) => (
          <motion.div key={ele.id} className="flex gap-4 p-4 border-2 border-red-400 rounded-md">
            <motion.input
              whileHover={{scale: 1.5}}
              whileTap={{scale: 0.9}}
              className="accent-red-500"
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}