import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import NoPage from '../../pages/NoPage'
import Resume from '../../pages/resume/Resume'
import Register from '../../pages/Register'
import Home from '../../pages/Index'
import Login from '../../pages/Login'
import Form from '../form/Form'
import ResumesList from '../../pages/resumeList/ResumesList'

export default function AppRoutes() {
    
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/display' element={<Resume />}/>
      <Route path='/ResumesList' element={<ResumesList />}/>
      {/* <Route path='*' element={<NoPage />}/> */}
    </Routes>
  )
}
