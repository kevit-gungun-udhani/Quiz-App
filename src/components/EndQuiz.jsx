import { reportAction } from "../store/report-slice";
import { useDispatch, useSelector } from "react-redux"
import Report from "./Report";
import { Link, Navigate } from "react-router-dom";

export default function EndQuiz({handleEndQuiz}){
    const dispatch = useDispatch();
    function handleEndQuiz(){
        dispatch(reportAction.EndQuiz());
    }
    const isEndQuiz = useSelector((state) => state.report.endQuiz);
    return(
        <>
            <Link to='/report'><button onClick={handleEndQuiz}>End Quiz</button></Link>
        </>
    )
}