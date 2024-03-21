import React, { useEffect, useRef } from 'react';

function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer.current && typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        const map = L.map(mapContainer.current).setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);
      }).catch(error => {
        console.error('Error loading Leaflet:', error);
      });
    }
  }, []);

  return <div ref={mapContainer} style={{ height: '100%', width: '100%' }} />;
}

export default Map;
