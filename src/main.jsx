import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import FormPage from './pages/Form.jsx'
import HomePage from './pages/Home.jsx'
import ErrorPage from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    index: true,
    element: <FormPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: 'quiz',
    element: <HomePage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
