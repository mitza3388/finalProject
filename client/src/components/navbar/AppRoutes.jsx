import React from 'react'
import {Route, Routes } from 'react-router-dom'
// import NoPage from '../../pages/NoPage'
import Home from '../../pages/Index'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Form from '../form/Form'
// import ResumesList from '../../pages/resumeList/ResumesList'

// export default function AppRoutes() {
    
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Form/>}/>
      <Route path='/login' element={<Form/>}/>
      {/* <Route path='/form' element={<Form/>}/>
      <Route path='/display' element={<Resume />}/>
      <Route path='/ResumesList' element={<ResumesList />}/> */}
      {/* <Route path='*' element={<NoPage />}/> */}
    </Routes>
  )
}
