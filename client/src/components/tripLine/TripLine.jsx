import React from 'react'


const TripLine = ({ trip }) => {

    return (
        <div key={trip.tripId}>
            <span>{trip.tripName} </span>
            <span>{trip.tripDate} </span>
            <button onClick={() => console.log(`Add button clicked for ${trip.tripName}`)}>+</button>
        </div>
    )
}


export default TripLine;