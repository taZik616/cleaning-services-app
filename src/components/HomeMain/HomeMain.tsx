import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';

import {Color} from 'src/themeTypes';
import {MarkerType, OrderInfo} from 'src/types';

import {BottomSheet} from '../bottom-sheet';
import {Button, CustomMapMarker, Spacer, Text} from '../ui';

interface HomeMainProps {
  markers?: MarkerType[];
  orders?: OrderInfo[];
  onPressDoIt?: (id: string) => void;
}

export function HomeMain({markers = [], orders, onPressDoIt}: HomeMainProps) {
  const [selectedOrder, setSelectedOrder] = useState<OrderInfo | undefined>();
  const onPressMarker = (id: string) => {
    orders && setSelectedOrder(orders.find(item => item.id === id));
  };
  const cleanSelectedOrder = () => {
    setSelectedOrder(undefined);
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.799488,
          longitude: 55.064512,
          latitudeDelta: 0.0099,
          longitudeDelta: 0.002,
        }}>
        {markers.map((marker, index) => {
          return (
            <CustomMapMarker
              onPressMarker={onPressMarker}
              key={index}
              marker={marker}
            />
          );
        })}
      </MapView>
      {selectedOrder && (
        <BottomSheet
          title={selectedOrder?.title}
          closeDistance={100}
          onClose={cleanSelectedOrder}>
          <Text color={Color.textSecond1} t11>
            #{selectedOrder?.id}
          </Text>
          <Spacer height={6} />
          <Text t11>Описание:</Text>
          <Spacer height={4} />
          <Text t9>{selectedOrder?.description}</Text>
          <Spacer height={12} />
          <Text t9>Клиент: {selectedOrder?.creator}</Text>
          <View style={styles.costContainer}>
            <Text t10>Цена:</Text>
            <Spacer height={2} />
            <Text t6>{selectedOrder?.reward} ₽</Text>
          </View>
          <Spacer height={16} />
          <Button onPress={() => onPressDoIt?.(selectedOrder.id)}>
            Выполнить
          </Button>
        </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  costContainer: {
    alignSelf: 'flex-end',
  },
});
