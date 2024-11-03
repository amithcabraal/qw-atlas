import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { MapPin } from 'lucide-react';

interface MapComponentProps {
  onMapClick?: (e: { lngLat: [number, number] }) => void;
  markers?: Array<{ longitude: number; latitude: number; color?: string }>;
  interactive?: boolean;
}

export default function MapComponent({ 
  onMapClick, 
  markers = [], 
  interactive = true 
}: MapComponentProps) {
  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      initialViewState={{
        longitude: 0,
        latitude: 20,
        zoom: 1.5
      }}
      style={{ width: '100%', height: '100%', minHeight: '400px' }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      onClick={onMapClick}
      interactive={interactive}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
        >
          <MapPin className={`w-6 h-6 ${marker.color || 'text-red-500'}`} />
        </Marker>
      ))}
    </Map>
  );
}