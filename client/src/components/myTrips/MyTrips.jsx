import React from 'react';
import TripLine from '../tripLine/TripLine';

const MyTrips = ({ trips }) => {

  return (
    <div>
      <h2>הטיולים שלי</h2>
      <ul>
      {trips.map((trip, index) => (
    <TripLine key={index} trip={trip}></TripLine>
))}
      </ul>
      <button onClick={() => console.log("לשים כאן פונקציה")}>צור טיול חדש</button>
    </div>
  );
};

export default MyTrips;

