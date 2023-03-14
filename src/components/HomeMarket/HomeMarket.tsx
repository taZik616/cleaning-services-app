import React from 'react';

import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

import {MarkerType} from 'src/types';

import {CustomMapMarker} from '../ui';

interface HomeMarketProps {
  markers?: MarkerType[];
}

export function HomeMarket({markers = []}: HomeMarketProps) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 51.799488,
        longitude: 55.064512,
        latitudeDelta: 0.0099,
        longitudeDelta: 0.002,
      }}>
      {markers.map((marker, index) => {
        return <CustomMapMarker key={index} marker={marker} />;
      })}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
