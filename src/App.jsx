import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from './pages/Error';
import { useSelector } from 'react-redux';
import Report from './components/Report';
import Home from './pages/HomePage';
import Quiz from './pages/Quiz';
import data from "./data";

function App() {
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);
  const { language } = useSelector(({ user }) => user.userInfo ?? {});
  const totalQuestions = data[language]?.length ?? 0;
  const {answers} = useSelector(({quiz}) => quiz);
  const endQuiz = Object.keys(answers).length === totalQuestions;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path="quiz/:id"
          element={isLoggedIn ? <Quiz/> : <Navigate replace to="/" />}
        />
        <Route
          path="/report"
          element={endQuiz && isLoggedIn ? <Report /> :  <Navigate replace to="/" />}
        />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  );
}

export default App
