import './App.css'
import MyTrips from './components/myTrips/MyTrips';
// import { Provider } from './context/resumeContext'
// import Navbar from './components/navbar'
// import AppRoutes from './components/navbar/AppRoutes'
// import { BrowserRouter } from 'react-router-dom'

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
  


  const trips = [
    { tripId: 1, tripName: 'Trip 1', tripDate: '2023-01-01' },
    { tripId: 2, tripName: 'Trip 2', tripDate: '2023-02-01' },
    // Add more trips as needed
  ];

  return (
    <div>
      {/* Other components or content */}
      <MyTrips trips={trips} />
    </div>
  );
}

export default App
