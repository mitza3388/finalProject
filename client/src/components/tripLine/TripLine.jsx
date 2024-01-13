



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const TripLine = ({ trip }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div
//       key={trip.tripId}
//       onClick={() => navigate("/viewTrip")}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         margin: '20px',
//         minHeight: '30px',
//         cursor: 'pointer', // Change cursor on hover
//         color: isHovered ? '#e0e0e0' : 'transparent', // Change background color on hover
//         transition: 'color 0.3s', // Add smooth transition
//         fontSize: '30px'
//       }}
//     >
//       <img
//         src="https://cdn-icons-png.flaticon.com/128/703/703320.png?ga=GA1.1.707984635.1704275258&semt=ais"
//         alt="Add icon"
//         style={{ marginRight: '5px', width: '40px', height: '40px', fontSize: '20' }}
//       />
//       <span style={{ color: isHovered ? '#184655' : 'black' }}>{trip.tripName} </span>
//       <span>{trip.tripDate} </span>
//     </div>
//   );
// };

// export default TripLine;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const TripLine = ({ trip }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div
//       key={trip.tripId}
//       onClick={() => navigate("/viewTrip")}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         margin: '20px',
//         cursor: 'pointer',
//         transition: 'color 0.3s',
//         fontSize: '30px',
//       }}
//     >
//       <div
//         style={{
//           padding: '20px',
//           borderRadius: '10px',
//           boxShadow: isHovered ? '0 10px 15px black' : '0 0 5px rgba(0, 0, 0, 0.1)',
//           background: isHovered ? '#e0e0e0' : 'transparent',
//           transition: 'background 0.3s, box-shadow 0.3s',

//         }}
//       >
//         <img
//           src="https://cdn-icons-png.flaticon.com/128/703/703320.png?ga=GA1.1.707984635.1704275258&semt=ais"
//           alt="Add icon"
//           style={{ marginRight: '5px', width: '40px', height: '40px', fontSize: '20' }}
//         />
//         <span style={{ color: isHovered ? '#184655' : 'black' }}>{trip.tripName} </span>
//         <span>{trip.tripDate} </span>
//       </div>
//     </div>
//   );
// };

// export default TripLine;



import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useTripContext } from '../../context/tripsContext';
import LandmarkTimeline from '../landmarkTimeline/LandmarkTimeline';
import TravelerChips from '../travelerChips/TravelerChips';

const TripLine = ({ currTrip }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { trip, updateTrip } = useTripContext();


  useEffect(() => {
    updateTrip(currTrip);
  }, [])

  const handleClick = () => {
    console.log("trip will go to view trip", trip);
    navigate('/viewTrip');
  };


  return (
    <div
      key={currTrip.tripId}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        margin: '20px',
        cursor: 'pointer',
        transition: 'color 0.3s',
        fontSize: '30px',
      }}
    >

      <div
        style={{
          padding: '20px',
          borderRadius: '10px',
          boxShadow: isHovered ? '0 10px 15px black' : '0 0 5px rgba(0, 0, 0, 0.1)',
          background: isHovered ? 'rgba(245, 245, 220, 0.51)' : 'transparent',
          transition: 'background 0.3s, box-shadow 0.3s',
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/703/703320.png?ga=GA1.1.707984635.1704275258&semt=ais"
          alt="Add icon"
          style={{ marginRight: '5px', width: '40px', height: '40px', fontSize: '20' }}
        />
        {/*<span style={{ color: isHovered ? '#184655' : 'black' }}>{trip.tripName} </span>
        <span>{trip.tripDate} </span>
      </div> */}
        <span style={{ color: isHovered ? '#184655' : 'black' }}>{currTrip.tripName} </span>
        <span>{currTrip.tripDate} </span>

      </div>
    </div>
  );
};

export default TripLine;


