// import React from 'react';
// import fetchData from '../../utils/fetchData';
// import { useNavigate } from 'react-router-dom';
// import { Button, FloatingLabel, Form } from 'react-bootstrap';
// import './createNewTrip.css';
// import { useTripContext } from '../../context/tripsContext';
// import LandmarkModal from '../../components/landmarkModal/LandmarkModal';

// const CreateNewTrip = () => {
//   const navigate = useNavigate();
//   const { trip, updateTrip } = useTripContext();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
  
//     // Update the trip context dynamically as the form changes
//     updateTrip(name, value);
//   };
    
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetchData('trips/addNewTrip', 'POST', trip);
//       console.log(response);
//       if (!response) {
//         console.log('Bad Request');
//       } else {
//         const newTrip = response.data; // Adjust this based on your API response
//         updateTrip(newTrip); // Update the context with the newly created trip
//         navigate('/guide');
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };


//   // return (
//   //   <div className="box">
//   //     <h2>Create new Trip</h2>
//   //     <form id="registerForm" onSubmit={handleSubmit}>
//   //       <label htmlFor="registerEmail">
//   //         Email
//   //         <input id="registerEmail"
//   //           type="email"
//   //           name="email"
//   //           value={formData.email}
//   //           onChange={handleChange}
//   //         />
//   //       </label>
//   //       <br />
//   //       <label htmlFor="registerPassword">
//   //         Password
//   //         <input id="registerPassword"
//   //           type="password"
//   //           name="password"
//   //           value={formData.password}
//   //           onChange={handleChange}
//   //         />
//   //       </label>
//   //       <br />
//   //       <button type="submit">Register</button>
//   //     </form>
//   //     {error && <h5 style={{ color: 'red' }}>user is already exist</h5>} 
//   //   </div>
//   // );
//   return (
//     <div className='container' style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2>Add new Trip</h2>
//         <div style={styles.inputGroup}>
//           <FloatingLabel controlId="floating input" label="Trip name" className="my-4 w-75">
//             <Form.Control
//               type="text"
//               placeholder="Trip name"
//               name='tripName'
//               value={trip.tripName}
//               onChange={handleChange}
//             />
//           </FloatingLabel>

//           <div>
//             <div className='d-flex justify-content-around'>
//               <Button
//                 className='m-3 bg-danger px-3'
//                 onClick={() => navigate('/createEquipmentList')}>
//                 Add Equipment List
//               </Button>

//               <Button
//                 className='m-3 bg-danger px-3'
//                 onClick={() => navigate('/createEquipmentList')}>
//                 Add --- List
//               </Button>

//               <Button
//                 className='m-3 bg-danger'
//                 onClick={() => navigate('/createLandmark')}
//               >
//                 Add Landmark</Button>
//             </div>

//             <Button type="submit" className='w-100'>
//               Submit
//             </Button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
// {/* <label style={styles.label} htmlFor="tripName">
//           </label>
//           <input
//             placeholder='Trip name'
//             type="text"
//             id="tripName"
//             name="tripName"
//             value={formData.tripName}
//             onChange={handleChange}
//             style={styles.input}
//           /> */}

// {/* <div style={styles.inputGroup}>
//           <label style={styles.label} htmlFor="tripDesc">
//             Trip Description:
//           </label>
//           <textarea   
//             id="tripDesc"
//             name="tripDesc"
//             value={formData.tripDesc}
//             onChange={handleChange}
//             style={styles.input}
//           ></textarea>
//         </div>

//         <div style={styles.inputGroup}>
//           <label style={styles.label} htmlFor="tripDate">
//             Choose Date:
//           </label>
//           <input
//             type="date"
//             id="tripDate"
//             name="tripDate"
//             value={formData.tripDate}
//             onChange={handleChange}
//             style={styles.input}
//           />
//   </div>*/}




// const styles = {
//   container: {
//     padding: '20px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//   },
//   form: {
//     width: '600px',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     background: '#fff',
//   },
//   inputGroup: {
//     marginBottom: '15px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '100%',
//     padding: '8px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   buttonGroup: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: '15px',
//   },
//   button: {
//     flex: '1',
//     padding: '8px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   submitButton: {
//     backgroundColor: '#3498db',
//     color: '#fff',
//     width: '100%',
//     padding: '8px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
// };

// export default CreateNewTrip;



/****************************** */

// import React, { useState } from 'react';
// import fetchData from '../../utils/fetchData';
// import { useNavigate } from 'react-router-dom';
// import { Button, FloatingLabel, Form } from 'react-bootstrap';
// import './createNewTrip.css';
// import LandmarkModal from '../../components/landmarkModal/LandmarkModal';
// import { useTripContext } from '../../context/tripsContext';

// const CreateNewTrip = () => {
//   const navigate = useNavigate();
//   const { trip, updateTrip } = useTripContext();
//   const [showModal, setShowModal] = useState(false);

//   const handleShowModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     updateTrip(name, value);
//   };
    

//   /**** */
//   const handleSave = () => {
//     // Handle save logic here
//     // This function will be called when the "Save" button is clicked in the modal
//     console.log('Saving landmark...');
//     handleCloseModal();
//   };
//   /***** */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetchData('trips/addNewTrip', 'POST', trip);
//       console.log(response);
//       if (!response) {
//         console.log('Bad Request');
//       } else {
//         const newTrip = response.data; // Adjust this based on your API response
//         updateTrip(newTrip); // Update the context with the newly created trip
//         navigate('/guide');
//       }
//       handleShowModal();
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
  
//   };


//   // return (
//   //   <div className="box">
//   //     <h2>Create new Trip</h2>
//   //     <form id="registerForm" onSubmit={handleSubmit}>
//   //       <label htmlFor="registerEmail">
//   //         Email
//   //         <input id="registerEmail"
//   //           type="email"
//   //           name="email"
//   //           value={formData.email}
//   //           onChange={handleChange}
//   //         />
//   //       </label>
//   //       <br />
//   //       <label htmlFor="registerPassword">
//   //         Password
//   //         <input id="registerPassword"
//   //           type="password"
//   //           name="password"
//   //           value={formData.password}
//   //           onChange={handleChange}
//   //         />
//   //       </label>
//   //       <br />
//   //       <button type="submit">Register</button>
//   //     </form>
//   //     {error && <h5 style={{ color: 'red' }}>user is already exist</h5>} 
//   //   </div>
//   // );
//   return (
//     <div className='container' style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2>Add new Trip</h2>
//         <div style={styles.inputGroup}>
//           <FloatingLabel controlId="floating input" label="Trip name" className="my-4 w-75">
//             <Form.Control
//               type="text"
//               placeholder="Trip name"
//               name='tripName'
//               value={trip.tripName}
//               onChange={handleChange}
//             />
//           </FloatingLabel>

//           <div>
//             <div className='d-flex justify-content-around'>
//               <Button
//                 className='m-3 bg-danger px-3'
//                 onClick={() => navigate('/createEquipmentList')}>
//                 Add Equipment List
//               </Button>

//               <Button
//                 className='m-3 bg-danger px-3'
//                 onClick={() => navigate('/createEquipmentList')}>
//                 Add --- List
//               </Button>

//               <Button className='m-3 bg-danger' onClick={handleShowModal}>
//             Add Landmark
//           </Button>
//             </div>

//             <Button type="submit" className='w-100'>
//               Submit
//             </Button>
//           </div>
//         </div>
//       </form>

//       <LandmarkModal show={showModal} handleClose={handleCloseModal} handleSave={handleSave}/>
//     </div>
//   );
// };
// {/* <label style={styles.label} htmlFor="tripName">
//           </label>
//           <input
//             placeholder='Trip name'
//             type="text"
//             id="tripName"
//             name="tripName"
//             value={formData.tripName}
//             onChange={handleChange}
//             style={styles.input}
//           /> */}

// {/* <div style={styles.inputGroup}>
//           <label style={styles.label} htmlFor="tripDesc">
//             Trip Description:
//           </label>
//           <textarea   
//             id="tripDesc"
//             name="tripDesc"
//             value={formData.tripDesc}
//             onChange={handleChange}
//             style={styles.input}
//           ></textarea>
//         </div>

//         <div style={styles.inputGroup}>
//           <label style={styles.label} htmlFor="tripDate">
//             Choose Date:
//           </label>
//           <input
//             type="date"
//             id="tripDate"
//             name="tripDate"
//             value={formData.tripDate}
//             onChange={handleChange}
//             style={styles.input}
//           />
//   </div>*/}




// const styles = {
//   container: {
//     padding: '20px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//   },
//   form: {
//     width: '600px',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     background: '#fff',
//   },
//   inputGroup: {
//     marginBottom: '15px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '100%',
//     padding: '8px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   buttonGroup: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: '15px',
//   },
//   button: {
//     flex: '1',
//     padding: '8px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   submitButton: {
//     backgroundColor: '#3498db',
//     color: '#fff',
//     width: '100%',
//     padding: '8px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
// };

// export default CreateNewTrip;


/**************** */










import React, { useState } from 'react';
import fetchData from '../../utils/fetchData';
import { useNavigate } from 'react-router-dom';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import './createNewTrip.css';
import LandmarkModal from '../../components/landmarkModal/LandmarkModal';
import { useTripContext } from '../../context/tripsContext';

const CreateNewTrip = () => {
  const navigate = useNavigate();
  const { trip, updateTrip } = useTripContext();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateTrip(name, value);
  };
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchData('trips/addNewTrip', 'POST', trip);
      console.log(response);
      if (!response) {
        console.log('Bad Request');
      } else {
        const newTrip = response.data; // Adjust this based on your API response
        updateTrip(newTrip); // Update the context with the newly created trip
        navigate('/guide');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    handleShowModal();
  };


  // return (
  //   <div className="box">
  //     <h2>Create new Trip</h2>
  //     <form id="registerForm" onSubmit={handleSubmit}>
  //       <label htmlFor="registerEmail">
  //         Email
  //         <input id="registerEmail"
  //           type="email"
  //           name="email"
  //           value={formData.email}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label htmlFor="registerPassword">
  //         Password
  //         <input id="registerPassword"
  //           type="password"
  //           name="password"
  //           value={formData.password}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <button type="submit">Register</button>
  //     </form>
  //     {error && <h5 style={{ color: 'red' }}>user is already exist</h5>} 
  //   </div>
  // );
  return (
    <div className='container' style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Add new Trip</h2>
        <div style={styles.inputGroup}>
          <FloatingLabel controlId="floating input" label="Trip name" className="my-4 w-75">
            <Form.Control
              type="text"
              placeholder="Trip name"
              name='tripName'
              value={trip.tripName}
              onChange={handleChange}
            />
          </FloatingLabel>

          <div>
            <div className='d-flex justify-content-around'>
              <Button
                className='m-3 bg-danger px-3'
                onClick={() => navigate('/createEquipmentList')}>
                Add Equipment List
              </Button>

              <Button
                className='m-3 bg-danger px-3'
                onClick={() => navigate('/createEquipmentList')}>
                Add --- List
              </Button>

              <Button className='m-3 bg-danger' onClick={handleShowModal}>
            Add Landmark
          </Button>
            </div>

            <Button type="submit" className='w-100'>
              Submit
            </Button>
          </div>
        </div>
      </form>

      <LandmarkModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};
{/* <label style={styles.label} htmlFor="tripName">
          </label>
          <input
            placeholder='Trip name'
            type="text"
            id="tripName"
            name="tripName"
            value={formData.tripName}
            onChange={handleChange}
            style={styles.input}
          /> */}

{/* <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="tripDesc">
            Trip Description:
          </label>
          <textarea   
            id="tripDesc"
            name="tripDesc"
            value={formData.tripDesc}
            onChange={handleChange}
            style={styles.input}
          ></textarea>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="tripDate">
            Choose Date:
          </label>
          <input
            type="date"
            id="tripDate"
            name="tripDate"
            value={formData.tripDate}
            onChange={handleChange}
            style={styles.input}
          />
  </div>*/}




const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    width: '600px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: '#fff',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  button: {
    flex: '1',
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  submitButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    width: '100%',
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default CreateNewTrip;

