import React, { createContext, useState, useContext } from 'react';

const TripContext = createContext();

const TripProvider = ({ children }) => {
  const [trip, setTrip] = useState({ tripName: '', route: [] });

  // const updateTrip = (fieldName, value) => {
  //   setTrip((prevTrip) => ({
  //     ...prevTrip,
  //     [fieldName]: value,
  //   }));
  // };

  // const updateTrip = (fieldName, value) => {
  //   setTrip((prevTrip) => {
  //     // Clone the previous trip
  //     const newTrip = { ...prevTrip };

  //     // If the field is 'route' and the value is an object
  //     if (fieldName === 'route' && typeof value === 'object') {
  //       // Clone the current route array
  //       const newRoute = [...newTrip.route];

  //       // Add the new value to the route array
  //       newRoute.push(value);

  //       // Update the new trip with the modified route array
  //       return {
  //         ...newTrip,
  //         [fieldName]: newRoute,
  //       };
  //     }

  //     // For other fields, update as usual
  //     return {
  //       ...newTrip,
  //       [fieldName]: value,
  //     };
  //   });
  // };

  ///שינוי יעל סטאר 15/01
  // const updateTrip = (fieldNameOrTrip, value) => {
  //   if(typeof fieldNameOrTrip === "object" ) {
  //     setTrip({...fieldNameOrTrip})
  //     return
  //   }


  const updateTrip = (fieldNameOrTrip, value) => {
    if (typeof fieldNameOrTrip === "object") {
      setTrip({ ...fieldNameOrTrip, route: fieldNameOrTrip.route || [] });
      return;
    }

    //סוף שינוי יעל סטאר
    
    setTrip((prevTrip) => {
      // Clone the previous trip
      const newTrip = { ...prevTrip };
  
      // If the first argument is a string, treat it as a field name
      if (typeof fieldNameOrTrip === 'string') {

        if (fieldNameOrTrip === 'equipmentList' && Array.isArray(value)) {
          return {
            ...newTrip,
            [fieldNameOrTrip]: [...value],
          };
        }
  
        // If the field is 'route' and the value is an object
        if (fieldNameOrTrip === 'route' && typeof value === 'object') {
          // Clone the current route array
          const newRoute = [...newTrip.route];
  
          // Add the new value to the route array
          newRoute.push(value);
  
          // Update the new trip with the modified route array
          return {
            ...newTrip,
            [fieldNameOrTrip]: newRoute,
          };
        }
  
        // For other fields, update as usual
        return {
          ...newTrip,
          [fieldNameOrTrip]: value,
        };
      }
  
      // If the first argument is an object, replace the entire trip
      return fieldNameOrTrip;
    });
  };
  


  return (
    <TripContext.Provider value={{ trip, updateTrip,setTrip }}>
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
