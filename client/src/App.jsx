import './App.css'
import MyTrips from './components/myTrips/MyTrips';
import TravelerChips from './components/travelerChips/TravelerChips';
import TravelersSelectList from './components/travelersSelectList/TravelersSelectList';
import WaypointsAccordion from './components/waypointsAccordion/WaypointsAccordion';
// // import Navbar from './components/navbar'
// import AppRoutes from './components/navbar/AppRoutes'
// import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authContext'

function App() {

  // return (
  //   <>
  //     <Provider>
  //       <BrowserRouter>
  //         {/* <Navbar /> */}
  //         <AppRoutes />
  //       </BrowserRouter>
  //     </Provider>
  //   </>

  // )
  


  return (
    <>
      <Provider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </>

  )
}

export default App
