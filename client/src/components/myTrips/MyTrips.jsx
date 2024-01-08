import React from 'react';
import TripLine from '../tripLine/TripLine';
import { useTripContext } from '../../context/tripsContext';

const MyTrips = ({ trips }) => {

  // const { trip, updateTrip } = useTripContext();

  return (
    <div>
      <h2>My Trips</h2>
      <ul>
        {trips?.map((trip, index) => (
          <TripLine key={index} currTrip={trip}></TripLine>
        ))}
      </ul>
    </div>
  );
};

export default MyTrips;



// import React from 'react';
// import TripLine from '../tripLine/TripLine';
// import './myTrips.css'; // Import the CSS file for styling
// import SideNavbar from '../sideNavbar/SideNavbar';

// const MyTrips = ({ trips }) => {
//   return (
//     <>
//     <SideNavbar/>
//     <div className="my-trips-container">
//       <h2 className="my-trips-title">My Trips</h2>
//       <ul className="my-trips-list">
//         {trips?.map((trip, index) => (
//           <TripLine key={index} trip={trip}></TripLine>
//         ))}
//       </ul>
//       {/* <button onClick={() => console.log("לשים כאן פונקציה")}>צור טיול חדש</button> */}
//     </div>
//     </>
//   );
// };

// export default MyTrips;
