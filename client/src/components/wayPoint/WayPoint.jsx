import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

const WayPoint = ({ location, landmarkName, onAddButtonClick }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Blue circle */}
            <div
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'blue',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                {/* Waypoint icon (replace with your SVG or icon component) */}
                📍
            </div>

            {/* Name of the place */}
            <span style={{ marginLeft: '10px' }}>{landmarkName}</span>

            {/* + Button */}
            <button onClick={() => onAddButtonClick(location)}>
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
            </button>
        </div>
    );
};

export default WayPoint;
