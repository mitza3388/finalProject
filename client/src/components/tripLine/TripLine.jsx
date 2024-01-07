
// import React from 'react'


// const TripLine = ({ trip }) => {

//     return (
//         <div key={trip.tripId}>
//             <span>{trip.tripName} </span>
//             <span>{trip.tripDate} </span>
//             <button onClick={() => console.log(`Add button clicked for ${trip.tripName}`)}>+</button>
//         </div>
//     )
// }


// export default TripLine;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TripLine = ({ trip }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      key={trip.tripId}
      onClick={() => navigate("/viewTrip")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        margin: '20px',
        minHeight: '30px',
        cursor: 'pointer', // Change cursor on hover
        color: isHovered ? '#e0e0e0' : 'transparent', // Change background color on hover
        transition: 'color 0.3s', // Add smooth transition
        fontSize: '30px'
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/703/703320.png?ga=GA1.1.707984635.1704275258&semt=ais"
        alt="Add icon"
        style={{ marginRight: '5px', width: '40px', height: '40px', fontSize: '20' }}
      />
      <span style={{ color: isHovered ? '#184655' : 'black' }}>{trip.tripName} </span>
      <span>{trip.tripDate} </span>
    </div>
  );
};

export default TripLine;

