// import React from 'react'

// export default function EquipmentList() {
//   return (
//     <div>EquipmentList</div>
//   )
// }
import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { useTripContext } from '../../context/tripsContext';
const EquipmentList = () => {

  const { trip, updateTrip } = useTripContext();
  const [items, setItems] = useState([]);
  
  const handleInputChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([...items, '']);
  };



  const handleSaveList = async() => {

    updateTrip('equipmentList', [...items]);



    console.log('List saved:', trip.equipmentList);
    // Add logic to save or process the list data
  };

  return (
    <div className='m-3'>
      <h5>Equipment List</h5>
      <ListGroup as="ol" className='mb-3' numbered>
        {items.map((item, index) => (
          <ListGroup.Item as="li" key={index}>
            <input className='col-10'
              type="text"
              value={item}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="primary" onClick={handleAddItem} className='mx-3'>
        Add Item
      </Button>
      <Button variant="success" onClick={handleSaveList}>
        Save List
      </Button>
    </div>
  );
};
export default EquipmentList;
