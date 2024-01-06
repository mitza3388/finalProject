import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import Typography from '@mui/material/Typography';

const LandmarkTimeline = ({ landmarks }) => {
  return (
    <Timeline position="alternate">
      {landmarks.map((landmark, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {landmark.startTime}
            <Typography>{`Duration: ${landmark.length}`}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <ShareLocationIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {landmark.landmarkName}
            </Typography>
            <Typography>{landmark.description}</Typography>
            {/* <Typography>{`Duration: ${landmark.length}`}</Typography> */}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default LandmarkTimeline;
