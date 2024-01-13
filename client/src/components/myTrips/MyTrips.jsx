
// import React from 'react';
// import TripLine from '../tripLine/TripLine';
// import { useTripContext } from '../../context/tripsContext';

// const MyTrips = ({ trips }) => {

//   // const { trip, updateTrip } = useTripContext();

//   return (
//     <div>
//       <h2>My Trips</h2>
//       <ul>
//         {trips?.map((trip, index) => (
//           <TripLine key={index} currTrip={trip}></TripLine>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyTrips;



// import React from 'react';
// import TripLine from '../tripLine/TripLine';

// const MyTrips = ({ trips }) => {

//   return (
//     <div>
//       <h2>My Trips</h2>
//       <ul>
//         {trips?.map((trip, index) => (
//           <TripLine key={index} trip={trip}></TripLine>
//         ))}
//       </ul>
//       {/* <button onClick={() => console.log("לשים כאן פונקציה")}>צור טיול חדש</button> */}
//     </div>
//   );
// };

// export default MyTrips;



import React from 'react';
import TripLine from '../tripLine/TripLine';
import { Row, Col } from 'react-bootstrap';
import { useTripContext } from '../../context/tripsContext';

const MyTrips = ({ trips }) => {
  return (
    <div>
      <h2>My Trips</h2>
      <Row xs={1} md={3} className="g-4">
        {trips?.map((trip, index) => (
          <Col key={index}>
            <TripLine currTrip={trip}></TripLine>
          </Col>
        ))}
      </Row>
      {/* <button onClick={() => console.log("לשים כאן פונקציה")}>צור טיול חדש</button> */}
    </div>
  );
};

export default MyTrips;
