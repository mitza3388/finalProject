import React, { createContext, useState, useContext } from 'react';

const LandmarksContext = createContext();

const LandmarksProvider = ({ children }) => {
  const [landmarks, setLandmarks] = useState([]);

  // const updateLandmarks = (newLandmarks) => {
  //   setLandmarks(newLandmarks);
  // };

  return (
    <LandmarksContext.Provider value={{ landmarks, setLandmarks }}>
      {children}
    </LandmarksContext.Provider>
  );
};

const useLandmarksContext = () => {
  const context = useContext(LandmarksContext);
  if (!context) {
    throw new Error('useLandmarksContext must be used within a LandmarksProvider');
  }
  return context;
};

export { LandmarksProvider, useLandmarksContext };
