import React from 'react';
import TravelerChips from '../travelerChips/TravelerChips';
import WaypointsAccordion from '../waypointsAccordion/WaypointsAccordion';
// import { useTrip } from '../../context/tripsContext';

const ViewTrip = () => {
  // const { trip } = useTrip();

  // if (!trip) {
  //   return <div>No trip data available</div>;
  // }

  return (
    <div>
      View Trip
      {/* <WaypointsAccordion waypoints={trip.waypoints} />
      <TravelerChips travelers={trip.travelers} /> */}
    </div>
  );
}

export default ViewTrip;
