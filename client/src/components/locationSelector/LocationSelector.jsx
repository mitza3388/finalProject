
//import "./locationSelector.css"


import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Icon, divIcon } from 'leaflet';
// import { MarkerClusterGroup } from 'react-leaflet-cluster'; // Corrected import statement
import MarkerClusterGroup from 'react-leaflet-markercluster';


const LocationSelector = () => {
  const DEFAULT_LANGITUDE = 34.855499
  const DEFAULT_LATITUDE = 32.109333

  const [userLocation, setUserLocation] = useState(null);
  // const [selectedPlace, setSelectedPlace] = useState(null);

  // const handleMapClick = (e) => {
  //   const { lat, lng } = e.latlng;
  //   setSelectedPlace({ lat, lng });
  // };


  const markers = [
    {
      position: [DEFAULT_LATITUDE, DEFAULT_LANGITUDE],
      popUp: "hiii"
    }
  ]

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776000.png",
    iconSize: [38, 38]
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: PerformanceObserverEntryList(33, 33, true)
    });
  }

  useEffect(() => {
    // Check if the geolocation API is available
    if ('geolocation' in navigator) {
      // Get user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }, [DEFAULT_LATITUDE, DEFAULT_LANGITUDE]);

  const [clickedLocation, setClickedLocation] = useState(null);

  const handleMapClick = async(event) => {
    const { lat, lng } = event.latlng;

    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    const streetName = data.address?.road || 'Street name not available';


    setClickedLocation({ lat, lng, streetName });
  };


  const ClickHandler = ({ onMapClick }) => {
    const map = useMapEvents({
      click: onMapClick,
    });

    return null; // This component doesn't render anything, it just attaches the event handler
  };

  return (
    <div style={{ width: "300px", height: "300px" }} >
      <MapContainer
        center={[DEFAULT_LATITUDE, DEFAULT_LANGITUDE]}
        zoom={12}
        style={{ height: '100%', width: '100%', overflow: "hidden" }}
        // onClick={handleMapClick}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">trip planner</a> contributors'
        />

        {/* {selectedPlace && (
          <Marker position={[selectedPlace.lat, selectedPlace.lng]}>

          </Marker>
        )} */}

        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]}>
            <Popup>You are here!</Popup>
          </Marker>
        )}


        {/* <MarkerClusterGroup 
        chunkedLoadeing
        iconCreateFunction={createCustomClusterIcon}
         > */}

        {/* <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        > */}

        {markers.map(marker => (
          <Marker position={marker.position} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>

        ))}
        {/* </MarkerClusterGroup> */}
        {/* </MarkerClusterGroup> */}

        <ClickHandler onMapClick={handleMapClick} />
        {clickedLocation && (
          <Marker position={[clickedLocation.lat, clickedLocation.lng]}>
            <Popup>
              <strong>Clicked Location:</strong> {clickedLocation.lat.toFixed(4)}, {clickedLocation.lng.toFixed(4)}
              <strong>Location Name:</strong> {clickedLocation.streetName}
            </Popup>
          </Marker>
        )}

      </MapContainer>
    </div>
  );
};

export default LocationSelector;






