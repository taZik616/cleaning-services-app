import React from 'react';

import {HomeMarket} from 'src/components/HomeMarket';
import {MarkerType} from 'src/types';

export function HomeMarketScreen() {
  // const {navigate} = useTypedNavigation();
  return <HomeMarket markers={markers} />;
}

const markers: MarkerType[] = [
  {
    latlng: {
      latitude: 51.799488,
      longitude: 55.064512,
    },
    description: "Vadim's home",
    title: 'Br. Korostelevykh 42',
  },
  {
    latlng: {
      latitude: 51.800157,
      longitude: 55.065184,
    },
    description: "Oleg's home",
    title: 'Stanochni 10',
  },
  {
    latlng: {
      latitude: 51.800122,
      longitude: 55.070554,
    },
    description: "Sanya's home",
    title: 'Tambovskaia 12',
  },
  {
    latlng: {
      latitude: 51.797502,
      longitude: 55.066561,
    },
    description: "Sergey's home",
    title: 'Br. Korostelevykh 34',
  },
];
