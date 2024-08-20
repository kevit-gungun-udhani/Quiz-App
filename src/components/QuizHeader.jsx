import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import data from "../data"

const QuizHeader = () => {
  const { fullName, language } = useSelector(({ user }) => user.userInfo ?? {})
  const totalQuestions = data[language]?.length ?? 0;
  const {id: currentQuestion} = useParams();
  
  return (
    <div>
      <div>{fullName}</div>
      <div>{`${currentQuestion}/${totalQuestions}`}</div>
      <div>{language}</div>
    </div>
  );
}

export default QuizHeader