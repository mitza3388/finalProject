
//import "./locationSelector.css"


import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Icon, divIcon } from 'leaflet';
// import { MarkerClusterGroup } from 'react-leaflet-cluster'; // Corrected import statement
import MarkerClusterGroup from 'react-leaflet-markercluster';





const LocationSelector = () => {
  const DEFAULT_LANGITUDE = 34.855499
  const DEFAULT_LATITUDE = 32.109333

  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setSelectedPlace({ lat, lng });
  };


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

  return (
    <div style={{ width: "300px", height: "300px" }} >
      <MapContainer
        center={[DEFAULT_LATITUDE, DEFAULT_LANGITUDE]}
        zoom={8}
        style={{ height: '100%', width: '100%', overflow: "hidden" }}
        onClick={handleMapClick}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">trip planner</a> contributors'
        />

        {selectedPlace && (
          <Marker position={[selectedPlace.lat, selectedPlace.lng]}>

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

      </MapContainer>
    </div>
  );
};

export default LocationSelector;




/*********************************** */



// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet.markercluster/dist/MarkerCluster.css';
// import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
// import 'leaflet.markercluster/dist/leaflet.markercluster';

// const LocationSelector = () => {
//   const DEFAULT_LANGITUDE = 34.855499;
//   const DEFAULT_LATITUDE = 32.109333;

//   const [selectedPlace, setSelectedPlace] = useState(null);

//   const handleMapClick = (e) => {
//     const { lat, lng } = e.latlng;
//     setSelectedPlace({ lat, lng });
//   };

//   const markers = [
//     {
//       position: [DEFAULT_LATITUDE, DEFAULT_LANGITUDE],
//       popUp: 'hiii',
//     },
//   ];

//   const customIcon = new L.Icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/128/2776/2776000.png',
//     iconSize: new L.Point(38, 38),
//   });

//   return (
//     <div style={{ width: '300px', height: '300px' }}>
//       <MapContainer
//         center={[DEFAULT_LATITUDE, DEFAULT_LANGITUDE]}
//         zoom={8}
//         style={{ height: '100%', width: '100%', overflow: 'hidden' }}
//         onClick={handleMapClick}
//         scrollWheelZoom={true}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">trip planner</a> contributors'
//         />

//         {selectedPlace && (
//           <Marker position={[selectedPlace.lat, selectedPlace.lng]}>
//             {/* ... (unchanged code) */}
//           </Marker>
//         )}

//         <L.MarkerClusterGroup>
//           {markers.map((marker, index) => (
//             <Marker
//               key={index}
//               position={marker.position}
//               icon={customIcon}
//             >
//               <Popup>{marker.popUp}</Popup>
//             </Marker>
//           ))}
//         </L.MarkerClusterGroup>
//       </MapContainer>
//     </div>
//   );
// };

// export default LocationSelector;


//import "./locationSelector.css"

