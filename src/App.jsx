import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from './pages/Error';
import { useSelector } from 'react-redux';
import Report from './components/Report';
import Home from './pages/HomePage';
import QuizContent from './components/QuizContent';


function App() {
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);
  const isEndQuiz = useSelector((state) => state.report.endQuiz);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path="quiz/:id"
          element={isLoggedIn ? <QuizContent/> : <Navigate replace to="/" />}
        />
        <Route
          path="/report"
          element={isEndQuiz ? <Report /> : <Navigate replace to="/" />}
        />
      </Routes>
    </>
  );
}

export default App
