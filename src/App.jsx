import { Outlet } from 'react-router-dom'
import './App.css'
import FormPage from './pages/Form'
function App() {

  return (
    <>
      <Outlet/>
      <FormPage/>
    </>
  )
}

export default App
