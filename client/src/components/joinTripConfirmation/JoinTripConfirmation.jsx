import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const JoinTripConfirmation = () => {
  const navigate = useNavigate();
  const {tripId}=useParams();
  const handleConfirmation = () => {
    // You can perform any necessary actions before navigating, if needed
    // For now, simply navigate to the "MyTrips" component
    navigate('/MyTrips');
  };

  return (
    <div>
      <h2>Do you want to join the trip?</h2>
      <p>Click the button below to confirm your participation.</p>
      <button onClick={handleConfirmation}>Confirm</button>
    </div>
  );
};

export default JoinTripConfirmation;
