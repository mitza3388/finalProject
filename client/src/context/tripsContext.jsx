import { createContext, useContext, useState } from 'react';

const TripContext = createContext();

const TripProvider = ({ children }) => {
  const [trip, setTrip] = useState();

  const updateTrip = (newTrip) => {
    setTrip(newTrip);
  };

  return (
    <TripContext.Provider value={{ trip, updateTrip }}>
      {children}
    </TripContext.Provider>
  );
};

const useTrip = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTrip must be used within a TripProvider');
  }
  return context;
};

export { TripProvider, useTrip };