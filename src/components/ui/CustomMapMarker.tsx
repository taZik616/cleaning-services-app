import React from 'react';

import {Marker} from 'react-native-maps';

import {MarkerType} from 'src/types';

interface CustomMapMarkerProps {
  marker: MarkerType;
}

export function CustomMapMarker({marker}: CustomMapMarkerProps) {
  return (
    <Marker
      title={marker.title}
      description={marker.description}
      coordinate={marker.latlng}
    />
  );
}
