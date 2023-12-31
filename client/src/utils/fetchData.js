// fetchData.js
import { useAuth } from '../context/authContext'; // Adjust the path based on your project structure


const basicURL = 'http://localhost:1200/api/v1/'
// const fetchData = async (url, method = 'GET', body = null, customHeaders = {}) => {
//   console.log(`${basicURL}${url}`);

//   try {
//     const { token } = useAuth();
//     const headers = {
//       'Content-Type': 'application/json',
//       ...customHeaders,
//     };

//     // Check if there's an authentication token and include it in the headers
//     if (token) {
//       headers['Authorization'] = `Bearer ${token}`;
//     }

//     const options = {
//       method,
//       headers,
//       body: body ? JSON.stringify(body) : null,
//     };

//     console.log(`${basicURL}${url}`);
//     const response = await fetch(`${basicURL}${url}`, options);

//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     } else {
//       // Handle error cases
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Fetch failed');
//     }
//   } catch (error) {
//     console.error('Error during fetch:', error.message);
//     throw error;
//   }
// };






const fetchData = async (url, method = 'GET', body = null) => {
  console.log(`${basicURL}${url}`);

  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: body ? JSON.stringify(body) : null,
    };

    console.log(options);

    console.log(`${basicURL}${url}`);

    const response = await fetch(`${basicURL}${url}`, options);
     const data = await response.json();
    console.log("response in fetch data", data);
    return data;
    // if (response.ok) {
    //   if (method == 'GET') {
    //     const data = await response.json();
    //     console.log(data);
    //     return data;
    //   }
    //   // else
    //   //   return response.status;
    // } 
    // else {
    //   // Handle error cases
    //   const errorData = await response.json();
    //   throw new Error(errorData.message || 'Fetch failed');
    // }
  } 
  catch (error) {
    console.error('Error during fetch:', error.message);
    throw error;
  }
};

export default fetchData;
