import React from 'react';
import WayPoint from '../Waypoint/Waypoint';



const TripRoute = ({ route }) => {
  return (
    <div>
      <h3>Trip Route</h3>
      {route.map((waypoint) => (
        <WayPoint
          key={waypoint.location}
          location={waypoint.location}
          landmarkName={waypoint.landmarkName}
          onAddButtonClick={(location) => console.log(`Add button clicked for ${location}`)} // Replace with your logic
        />
      ))}
    </div>
  );
};

export default TripRoute;
