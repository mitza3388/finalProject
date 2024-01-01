import './App.css'
import MyTrips from './components/myTrips/MyTrips';
import TravelerChips from './components/travelerChips/TravelerChips';
import TravelersSelectList from './components/travelersSelectList/TravelersSelectList';
import WaypointsAccordion from './components/waypointsAccordion/WaypointsAccordion';
import Navbar from './components/navbar'
import AppRoutes from './components/navbar/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider, TripProvider } from './context/authContext'

function App() {

  return (
    <>
      <AuthProvider>
        <TripProvider>
          <BrowserRouter>
            {/* <Navbar /> */}
            <AppRoutes />
          </BrowserRouter>
        </TripProvider>
      </AuthProvider>
    </>
  );
}
export default App
