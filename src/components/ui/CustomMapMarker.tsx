import React from 'react';

import {Marker} from 'react-native-maps';

import {MarkerType} from 'src/types';

interface CustomMapMarkerProps {
  marker: MarkerType;
  onPressMarker: (id: string) => void;
}

export function CustomMapMarker({marker, onPressMarker}: CustomMapMarkerProps) {
  return (
    <Marker
      onPress={() => onPressMarker(marker.id)}
      coordinate={marker.latlng}
    />
  );
}
