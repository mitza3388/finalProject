// import React from 'react';
// import TravelerChips from '../travelerChips/TravelerChips';
// import LandmarkTimeline from '../landmarkTimeline/LandmarkTimeline';
// import { useTripContext } from '../../context/tripsContext';

// const ViewTrip = () => {
//   const { trip } = useTripContext();
//   console.log("trip in view trip is",trip);

//   if (!trip) {
//     return <div>No trip data available</div>;
//   }

// const landmarks = trip.route;
// console.log(trip.route);

//   return (
//      <div>
//       <h1>{`${trip.tripName}`}</h1>
//       <LandmarkTimeline landmarks={landmarks}></LandmarkTimeline>
//       {/* <WaypointsAccordion></WaypointsAccordion>*/} 
//         <TravelerChips></TravelerChips> 
//     </div>
//   );
// }

// export default ViewTrip;

import React from 'react';
import TravelerChips from '../travelerChips/TravelerChips';
import LandmarkTimeline from '../landmarkTimelineForView/LandmarkTimeline';
import { useLocation } from 'react-router-dom';
import MapWithWaypoints from '../route/route';

const ViewTrip = () => {
  const location = useLocation();
  const trip = location.state?.trip;

  console.log("trip in view trip is", trip);

  if (!trip) {
    return <div>No trip data available</div>;
  }

  const landmarks = trip.route;
  console.log(trip.route);
  console.log(landmarks);

  return (
<div className='d-flex p-3' style={{ width: '900px' }}>
      <div className='p-3'>
        <h1>{`${trip.tripName}`}</h1>
        <div className="container mt-4">
          <h5>Equipment List</h5>
          <ul className="list-group">
            {trip.equipmentList?.map((equipment, index) => (
              <li key={index} className="list-group-item">
                {equipment}
              </li>
            ))}
          </ul>
        </div>
        <TravelerChips></TravelerChips>

      </div>
      <div className='p-4'>
        <LandmarkTimeline  ></LandmarkTimeline>
        </div>
        <MapWithWaypoints route={landmarks}></MapWithWaypoints>
    </div>
  );
}

export default ViewTrip;

