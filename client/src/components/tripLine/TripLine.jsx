
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

import React from 'react';

const TripLine = ({ trip }) => {
    return (
        <div key={trip.tripId} onClick={() => console.log(`Add button clicked for ${trip.tripName}`)}style={{ margin: '20px', minHeight: '30px' }}>
            <img
                src="https://cdn-icons-png.flaticon.com/128/703/703320.png?ga=GA1.1.707984635.1704275258&semt=ais"
                alt="Add icon"
                style={{ marginRight: '5px', width: '40px', height: '40px', fontSize: '20' }}

            />
            <span>{trip.tripName} </span>
            <span>{trip.tripDate} </span>

        </div>
    );
};

export default TripLine;


