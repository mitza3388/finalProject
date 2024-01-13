import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import fetchData from '../../utils/fetchData';

const JoinTripConfirmation = () => {
  const navigate = useNavigate();
  const { tripId } = useParams();
  const [error, setError] = useState("");

  const handleConfirmation = async () => {
    try {
      const response = await fetchData(`/addNewLandmark/${id}`, 'PUT', formData);
      console.log(response);
      setData(response);
    } catch (error) {
      console.error('Error:', error.message);
      setError(error);
    }


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
