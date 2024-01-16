import React, { useState, useEffect } from 'react';
import fetchData from '../../utils/fetchData';
import { useNavigate } from 'react-router-dom';
import { Button, FloatingLabel, Form, ListGroup, Modal } from 'react-bootstrap';
import './createNewTrip.css';
import LandmarkModal from '../../components/landmarkModal/LandmarkModal';
import { useTripContext } from '../../context/tripsContext';
import EquipmentList from '../../components/EquipmentList/EquipmentList';
import LandmarkTimeline from '../../components/landmarkTimeline/LandmarkTimeline';
import { useLandmarksContext } from '../../context/landmarksContext';
import SideNavbar from '../../components/sideNavbar/SideNavbar';
import InviteFriends from '../../components/inviteFriends/InviteFriends';

const CreateNewTrip = () => {
  const navigate = useNavigate();
  const { trip, updateTrip,setTrip } = useTripContext();
  // const { landmarks } = useLandmarksContext([]);
  const [showModal, setShowModal] = useState(false);
  const [showInviteFriendsModal, setShowInviteFriendsModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleShowInviteFriendsModal = () => setShowInviteFriendsModal(true); // Function to show InviteFriends modal
  const handleCloseInviteFriendsModal = () => setShowInviteFriendsModal(false); // Function to hide InviteFriends modal

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the trip context dynamically as the form changes
    updateTrip(name, value);
  };

  // useEffect(() => {
  //   console.log("landmarks in create new trip", landmarks);
  //   updateTrip('route', [...landmarks]);
  //   console.log("trip after landmark", trip);
  // }, [landmarks, trip]);
  // useEffect(() => {
  //   console.log("landmarks in create new trip", landmarks);

  //   // Compare the current trip with the new trip
  //   const isTripChanged = JSON.stringify(trip) !== JSON.stringify({ ...trip, route: landmarks });

  //   if (isTripChanged) {
  //     updateTrip('route', [...landmarks]);
  //     console.log("trip after landmark", trip);
  //   }
  // }, [landmarks, trip, updateTrip]);





  const handleSubmit = async (e) => {
    e.preventDefault();
    // updateTrip('route', [...landmarks]);
    // console.log("trip after landmark",trip);

    try {
      const response = await fetchData('trips/addNewTrip', 'POST', trip);
      console.log(response);
      if (!response) {
        console.log('Bad Request');
      } else {
        const newTrip = await response.data; // Adjust this based on your API response
        // updateTrip(newTrip); // Update the context with the newly created trip
        console.log("new trip added!!!", trip);
        setTrip({});
        // updateTrip("tripName", "");
        // updateTrip("route", []);
        console.log(trip)
        navigate('/guide');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }



  };


  return (
    <>
      <SideNavbar />
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
                <div>
                  <EquipmentList>

                  </EquipmentList>
                </div>

                <div>

                  <Button
                    className='mt-5 mb-3 bg-danger'
                    onClick={handleShowModal}>
                    Add Landmark
                  </Button>
//שינוי יעל סטאר
                  {/* <LandmarkTimeline  >

                </LandmarkTimeline> */}
                  <LandmarkTimeline  >

                  </LandmarkTimeline>
                //סוף שיניוי
                  {/* <Button
                    className='mt-4 bg-danger px-3'
                    onClick={() => navigate('/createEquipmentList')}>
                    Add --- List
                  </Button>

 */}
                </div>

              </div>

              <Button type="submit" className='w-100 mt-5'>
                Submit
              </Button>
            </div>
            <Button type="button" className='w-100 mt-3' onClick={handleShowInviteFriendsModal}>
              Invite Friends
            </Button>
          </div>
        </form>

        <LandmarkModal show={showModal} handleClose={handleCloseModal} />
        {/* InviteFriends Modal */}
        <Modal show={showInviteFriendsModal} onHide={handleCloseInviteFriendsModal}>
          <Modal.Header closeButton>
            <Modal.Title>Invite Friends</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InviteFriends />
          </Modal.Body>
        </Modal>

      </div>
    </>
  );
};



const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    width: '900px',
    height: '600px',
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

