import { useState } from 'react'
import './App.css'
import RegistrationPage from './pages/Registeration_page'
import { createBrowserRouter } from 'react-router-dom'
import Login_page from './pages/Login_page'
import { Routes, Route } from 'react-router-dom'
import Home_page from './pages/Home_page'
import { Doctor_registration_page } from './pages/Doctor_registration_page'
import { AI_bot } from './pages/AI_bot'
import { Doctors_Dashboard_page } from './pages/Doctors_Dashboard_page'
import { Patient_dashboard_page } from './pages/Patient_dashboard_page'
import { AI_feedback_page } from './pages/AI_feedback_page'
import { AI_bot_feedback_form_page } from './pages/AI_bot_feedback_form_page'
import { Patient_History_form } from './pages/Patient_History_form'
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login_page/>
    }
  ])

return (
     <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/login" element={<Login_page />} />
      <Route path="home" element={<Home_page/>} />
      <Route path="/doctor_registration" element={<Doctor_registration_page/>}/>
      <Route path='/ai_bot' element={<AI_bot/>}/>
      <Route path='/doctor_dashboard' element={<Doctors_Dashboard_page/>}/>
      <Route path='/patient_dashboard' element = {<Patient_dashboard_page/>}/>
      <Route path='/ai-feedback' element={ <AI_feedback_page/> }/>
      <Route path='/ai_feedback_form' element={ <AI_bot_feedback_form_page/> }/>
      <Route path='patient_history_form' element={ <Patient_History_form/>}/>
    </Routes>
  )
}

export default App
