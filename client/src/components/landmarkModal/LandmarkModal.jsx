// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import CreateLandmark from '../createLandmark/CreateLandmark';


// const LandmarkModal = ({ show, handleClose }) => {
//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Create New Landmark</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <CreateLandmark handleClose={handleClose} />
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//       </Modal.Body>
//     </Modal>
//   );
// }

// export default LandmarkModal;




import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateLandmark from '../createLandmark/CreateLandmark';


const LandmarkModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Landmark</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateLandmark handleClose={handleClose} />
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Body>
      
    </Modal>
  );
}

export default LandmarkModal;

