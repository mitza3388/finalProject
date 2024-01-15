import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const MapWithWaypoints = ({ route }) => {
    const center = [31.771959, 35.217018];
    const zoom = 8;


    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Render markers for each waypoint */}
            {route.map((waypoint, index) => (

                <Marker
                    key={index}
                    position={waypoint.location.split(',').map(Number)}
                >
                    <Popup>
                        <div>
                            <h3>{waypoint.landmarkName}</h3>
                            <p>{waypoint.description}</p>
                            {/* Add other information you want to display in the popup */}
                        </div>
                    </Popup>
                </Marker>
            ))}

            {/* Render polyline to connect waypoints */}
            <Polyline
                positions={route.map((waypoint) => waypoint.location.split(',').map(Number))}
                color="blue"
            />

        </MapContainer>
    );
};

export default MapWithWaypoints;


