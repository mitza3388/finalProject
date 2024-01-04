import React, { createContext, useState, useContext } from 'react';

const TripContext = createContext();

const TripProvider = ({ children }) => {
  const [trip, setTrip] = useState({ tripName: '', route: [] });

  const updateTrip = (newTrip) => {
    setTrip(newTrip);
  };

  return (
    <TripContext.Provider value={{ trip, updateTrip }}>
      {children}
    </TripContext.Provider>
  );
};

const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTripContext must be used within a TripProvider');
  }
  return context;
};

export { TripProvider, useTripContext };
