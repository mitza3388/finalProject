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
import MyTrips from '../myTrips/MyTrips'
import EquipmentList from '../EquipmentList/EquipmentList'


export default function AppRoutes() {
    
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<EntryAs/>}/>
      <Route path='/login' element={<EntryAs/>}/>
      <Route path='/guide' element={<GuideEntryPage/>}/>
      <Route path='/traveler' element={<Traveler/>}/>
      <Route path='/createNewTrip' element={<CreateNewTrip/>}/>
      <Route path='/createEquipmentList' element={<EquipmentList/>}/>
      <Route path='/MyTrips' element={<MyTrips/>}/>

      {/* <Route path='*' element={<NoPage />}/> */}
    </Routes>
  )
}
