import './App.css'
import FormPage from './pages/Form'
import HomePage from './pages/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from './pages/Error';
import { useSelector } from 'react-redux';
import Report from './components/Report';


function App() {
  const isUserAuthenticated = useSelector((state) => {return state.user.user});
  const isEndQuiz = useSelector((state) => state.report.endQuiz);
  
  return (
    <>
      <Routes>
        <Route path="/" element={isUserAuthenticated && !isEndQuiz ? <Navigate replace to='/quiz'/> : <FormPage/>} errorElement={<ErrorPage/>}/>
        <Route path="quiz" element={isUserAuthenticated && !isEndQuiz ? <HomePage/> : <Navigate replace to='/'/>}/>
        <Route path='/report' element={isEndQuiz ? <Report/> : <Navigate replace to='/'/>}/>
      </Routes>
    </>
  )
}

export default App
