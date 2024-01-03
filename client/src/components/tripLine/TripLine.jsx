import React from 'react';
import { Link } from 'react-router-dom';

const TripLine = ({ trip }) => {
    return (
        <div key={trip.tripId}>
            <span>{trip.tripName}</span>
            <span>{trip.tripDate}</span>
            <Link to={`/view-trip/${trip.tripId}`}>
                <button>+</button>
            </Link>
        </div>
    );
};

export default TripLine;
