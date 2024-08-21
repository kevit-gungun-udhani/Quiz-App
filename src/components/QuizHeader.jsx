import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {motion} from 'framer-motion'
import data from "../data"


const QuizHeader = () => {
  const { fullName, language } = useSelector(({ user }) => user.userInfo ?? {})
  const totalQuestions = data[language]?.length ?? 0;
  const {id: currentQuestion} = useParams();
  const headerCss = 'border border-white p-2 rounded font-serif'

  return (
    <div className=" flex space justify-between bg-red-500 text-white text-lg p-2 relative">
      <motion.div className={headerCss} 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 0.3}}>Welcome {fullName}!</motion.div>

      <motion.div className={headerCss} initial={{ rotate: 360 }} animate={{ rotate: 0}} key={currentQuestion} >
        {`${currentQuestion}/${totalQuestions}`}
      </motion.div>

      <div className={headerCss}>Language:- {language}</div>
    </div>
  );  
}

export default QuizHeader