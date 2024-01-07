import React from 'react';
import TravelerChips from '../travelerChips/TravelerChips';
import LandmarkTimeline from '../landmarkTimeline/LandmarkTimeline';
import { useTripContext } from '../../context/tripsContext';

const ViewTrip = () => {
  const { trip } = useTripContext();

  if (!trip) {
    return <div>No trip data available</div>;
  }

  const sampleLandmarks = [
    {
      location: 'Point A',
      landmarkName: 'Landmark 1',
      description: 'Description for Landmark 1',
      startTime: '9:00 am',
      length: '1 hour',
      nextLandmarkId: 2,
    },
    {
      location: 'Point B',
      landmarkName: 'Landmark 2',
      description: 'Description for Landmark 2',
      startTime: '10:30 am',
      length: '45 minutes',
      nextLandmarkId: 3,
    },
    {
      location: 'Point C',
      landmarkName: 'Landmark 3',
      description: 'Description for Landmark 3',
      startTime: '12:00 pm',
      length: '2 hours',
      nextLandmarkId: 4,
    },
    {
      location: 'Point D',
      landmarkName: 'Landmark 4',
      description: 'Description for Landmark 4',
      startTime: '2:30 pm',
      length: '1.5 hours',
      nextLandmarkId: 0, // Loop back to the first landmark
    },
  ];

  const landmarks = trip.route;
console.log(trip.route);

  return (
     <div>
  {/* <LandmarkTimeline landmarks={sampleLandmarks}></LandmarkTimeline> */}
      <LandmarkTimeline landmarks={landmarks}></LandmarkTimeline>
      {/* <WaypointsAccordion></WaypointsAccordion>*/} 
        <TravelerChips></TravelerChips> 
    </div>
  );
}

export default ViewTrip;
