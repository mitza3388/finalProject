import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RoomIcon from '@mui/icons-material/Room';

const WaypointsAccordion = ({ waypoints }) => {
  if (!waypoints || waypoints.length === 0) {
    return <div>No waypoints available</div>;
  }

  return (
    <div>
      {waypoints.map((waypoint, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <RoomIcon />
            <Typography>{waypoint.landmarkName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <strong>Description:</strong> {waypoint.description} <br />
              <strong>Start Time:</strong> {waypoint.startTime} <br />
              <strong>Length:</strong> {waypoint.length} <br />
              <strong>Next Landmark ID:</strong> {waypoint.nextLandmarkId}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default WaypointsAccordion;
