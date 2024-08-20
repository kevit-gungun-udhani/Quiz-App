import { useDispatch, useSelector } from "react-redux";
import data from "../data";
import { useNavigate } from "react-router-dom";
import { resetAnswer } from "../store/quiz-slice";
import { resetUserData } from "../store/user-slice";
import { isLoggedIn } from "../store/user-slice";

export default function Report(){
    const { answers } = useSelector(({quiz}) => quiz ?? {});
    const { language } = useSelector(({ user }) => user.userInfo ?? {});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const questions = data[language];
    const score = questions.filter((ele) => ele.correctAnswer === answers[ele.id]).length;
    
   
    const totalQuestions = data[language]?.length ?? 0;
    const summary = questions.map((ele) => {
        if(ele.correctAnswer === answers[ele.id]){
            
            return ({
                que: ele.text,
                ans: ele.correctAnswer
            })
        }else{
            return ({
                que: ele.text,
                ans: ele.correctAnswer,
                wans: answers[ele.id]
            }
            )
        }
    })

    function handleClick(){
        dispatch(resetAnswer());
        dispatch(resetUserData());
        dispatch(isLoggedIn())
        navigate('/');
    }
    
    return(
        <>
            <div>{`Your score ${score}/${totalQuestions}`}</div>
            {summary.map((ele, index) => (
                <div key={index}>
                    <p><span>{index + 1} </span>{ele.que}</p>
                    <p>Correct answer:- {ele.ans}</p>
                    {ele.wans && <p>Your ans:-  {ele.wans}</p>}
                </div>
            ))}
            <button onClick={handleClick}>Start Again</button>
        </>
    )
}