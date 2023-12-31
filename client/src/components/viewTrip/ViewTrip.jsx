import React from 'react'
import TravelerChips from '../travelerChips/TravelerChips';
import WaypointsAccordion from '../waypointsAccordion/WaypointsAccordion';

const ViewTrip = ()=> {

    //כאן לשלוף את הנתונים של הטיול
  return (
    <div>
        <WaypointsAccordion></WaypointsAccordion>
        <TravelerChips></TravelerChips>
    </div>
  )
}


export default ViewTrip;