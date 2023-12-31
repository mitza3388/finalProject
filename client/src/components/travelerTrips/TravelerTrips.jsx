import React from 'react'
import MyTrips from '../myTrips/MyTrips';
import fetchData from '../../utils/fetchData';
import { useState,useEffect } from 'react';

const TravelerTrips=() =>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchDataAsync = async () => {
        try {
          const response = await fetchData('user/getMyTrips');
          console.log(response);
          setData(response);
        } catch (error) {
          console.error('Error:', error.message);
          setError(error);
        }
      };
  
      fetchDataAsync();
    }, []); // Empty dependency array to run the effect only once
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    return <div><MyTrips trips={data}></MyTrips></div>;
  };
  export default TravelerTrips;

