import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import data from "../data";

const QuizNavigation = () => {
  const navigate = useNavigate();
  const { language } = useSelector(({ user }) => user.userInfo ?? {});
  const {id}  = useParams();
  const currentQuestion = +id;
  const totalQuestions = data[language]?.length ?? 0;
  const isLastQuestion = currentQuestion === totalQuestions;

  function handleNavigation(isPrev = false){
    if(isPrev){
        navigate(`/quiz/${currentQuestion - 1}`)
    }else{
        navigate(`/quiz/${currentQuestion + 1}`)
    }
  }

  function handleSubmit(){
    navigate('/report')
  }
  return (
    <div>
        <button disabled={currentQuestion <= 1}
        onClick={() => {
            handleNavigation(true)
        }}>&lt;</button>
        <button onClick={() => {
            isLastQuestion ? handleSubmit() : handleNavigation();
        }}>{isLastQuestion ? 'Submit' : '>'}</button>
    </div>
  )
}

export default QuizNavigation