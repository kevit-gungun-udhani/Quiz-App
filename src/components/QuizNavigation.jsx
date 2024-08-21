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
    <div className="grow flex justify-between p-10 m-10">
        <button disabled={currentQuestion <= 1}
        onClick={() => {
            handleNavigation(true)
        }} className=" self-end">back</button>
        <br/>
        <button onClick={() => {
            isLastQuestion ? handleSubmit() : handleNavigation();
        }} className=" self-end">{isLastQuestion ? 'Submit' : 'next'}</button>
    </div>
  )
}

export default QuizNavigation