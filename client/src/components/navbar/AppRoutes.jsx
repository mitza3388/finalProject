import React from 'react'
import {Route, Routes } from 'react-router-dom'
// import NoPage from '../../pages/NoPage'
import Home from '../../pages/Index'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Form from '../form/Form'
import EntryAs from '../entryAs/EntryAs'
import GuideEntryPage from '../guideEntryPage/GuideEntryPage'
import TravelerTrips from '../Traveler/Traveler'
import ViewTrip from '../viewTrip/ViewTrip'
import EmailComponent from '../emailComponent/EmailComponent'
// import ResumesList from '../../pages/resumeList/ResumesList'


export default function AppRoutes() {
    
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<EntryAs/>}/>
      <Route path='/login' element={<EntryAs/>}/>
      <Route path='/guide' element={<GuideEntryPage/>}/>
      <Route path='/traveler' element={<TravelerTrips/>}/>
      <Route path='/view-trip/:tripId' element={<ViewTrip />} />
      <Route path='/email' element={<EmailComponent />} />
      {/* <Route path='/form' element={<Form/>}/>
      <Route path='/display' element={<Resume />}/>
      <Route path='/ResumesList' element={<ResumesList />}/> */}
      {/* <Route path='*' element={<NoPage />}/> */}
    </Routes>
  )
}
