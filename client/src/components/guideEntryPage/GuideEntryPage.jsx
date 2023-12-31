// import React from 'react'
// import fetchData from '../../utils/fetchData'

// const GuideEntryPage = async () => {

//     let response = [];
//     try{
//         response = await fetchData("trips/getTripsByGuideId");
//         console.log(response);
//     }
//     catch (error){
//         console.error('Error:', error.message);
//     }



//   return (
//     <div>GuideEntryPage</div>
//   )
// }

// export default GuideEntryPage

import React, { useEffect, useState } from 'react';
import fetchData from '../../utils/fetchData';

const GuideEntryPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData('trips/getTripsByGuideId');
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

  return <div>GuideEntryPage</div>;
};

export default GuideEntryPage;
