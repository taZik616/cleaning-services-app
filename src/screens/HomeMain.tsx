import React from 'react';

import {Alert} from 'react-native';

import {HomeMain} from 'src/components/HomeMain';
import {markers, orders} from 'src/variables';

export function HomeMainScreen() {
  const onPressDoIt = (id: string) => {
    Alert.alert(
      `Вы взяли задачу #${id}`,
      'После завершения работы и подтверждения её заказчиком вы получите вознаграждение',
    );
  };
  return (
    <HomeMain onPressDoIt={onPressDoIt} orders={orders} markers={markers} />
  );
}
