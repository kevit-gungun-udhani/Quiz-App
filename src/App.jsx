import './App.css'
import FormPage from './pages/Form'
import HomePage from './pages/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from './pages/Error';
import { useSelector } from 'react-redux';

function App() {
  const isUserAuthenticated = useSelector((state) => {return state.user.user});
  
  return (
    <>
      <Routes>
        <Route path="/" element={<FormPage/>} errorElement={<ErrorPage/>}/>
        <Route path="quiz" element={isUserAuthenticated ? <HomePage/> : <Navigate replace to='/'/>}/>
      </Routes>
    </>
  )
}

export default App
