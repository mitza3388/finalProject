import React from 'react';
import TravelerChips from '../travelerChips/TravelerChips';
import LandmarkTimeline from '../landmarkTimeline/LandmarkTimeline';
import { useTripContext } from '../../context/tripsContext';

const ViewTrip = () => {
  const { trip } = useTripContext();
  console.log("trip in view trip is",trip);

  if (!trip) {
    return <div>No trip data available</div>;
  }

const landmarks = trip.route;
console.log(trip.route);

  return (
     <div>
      <LandmarkTimeline landmarks={landmarks}></LandmarkTimeline>
      {/* <WaypointsAccordion></WaypointsAccordion>*/} 
        <TravelerChips></TravelerChips> 
    </div>
  );
}

export default ViewTrip;
