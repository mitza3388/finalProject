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

