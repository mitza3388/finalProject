import React from 'react'
import {Route, Routes } from 'react-router-dom'
// import NoPage from '../../pages/NoPage'
import Home from '../../pages/Index'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import EntryAs from '../entryAs/EntryAs'
import GuideEntryPage from '../guideEntryPage/GuideEntryPage'
import Traveler from '../Traveler/Traveler'
import CreateNewTrip from '../../pages/createNewTrip/CreateNewTrip'

import CreateLandmark from '../createLandmark/CreateLandmark'
import LocationSelector from '../locationSelector/LocationSelector'

import MyTrips from '../myTrips/MyTrips'
import EquipmentList from '../EquipmentList/EquipmentList'
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
      <Route path='/traveler' element={<Traveler/>}/>
      <Route path='/createNewTrip' element={<CreateNewTrip/>}/>
      <Route path='/viewTrip' element={<ViewTrip/>}/>

      <Route path='/createLandmark' element={<CreateLandmark/>}/>
      <Route path='/locationSelector' element={<LocationSelector/>}/>
      

      <Route path='/createEquipmentList' element={<EquipmentList/>}/>
      <Route path='/MyTrips' element={<MyTrips/>}/>

//       <Route path='/traveler' element={<TravelerTrips/>}/>
      <Route path='/view-trip/:tripId' element={<ViewTrip />} />
      <Route path='/email' element={<EmailComponent />} />

      {/* <Route path='/form' element={<Form/>}/>
      <Route path='/display' element={<Resume />}/>
      <Route path='/ResumesList' element={<ResumesList />}/> */}
      {/* <Route path='*' element={<NoPage />}/> */}
    </Routes>
  )
}
