// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyTrips from './components/myTrips/MyTrips';
import TravelerChips from './components/travelerChips/TravelerChips';
import TravelersSelectList from './components/travelersSelectList/TravelersSelectList';
import WaypointsAccordion from './components/waypointsAccordion/WaypointsAccordion';
import Navbar from './components/navbar'
import AppRoutes from './components/navbar/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import { TripProvider } from './context/tripsContext'
import SideNavbar from './components/sideNavbar/SideNavbar';
import { LandmarksProvider } from './context/landmarksContext';


function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <LandmarksProvider>
            <TripProvider>
              <AppRoutes />
              <SideNavbar />
            </TripProvider>
          </LandmarksProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
export default App
