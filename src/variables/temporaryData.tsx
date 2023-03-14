import {MarkerType, OrderInfo} from 'src/types';

export const orders: OrderInfo[] = [
  {
    id: '1',
    creator: 'Ваня',
    reward: 200,
    latlng: {
      latitude: 51.799488,
      longitude: 55.064512,
    },
    description:
      'Нужно вынести 5 большх пакетов мусора. Мусорка не так и далеко от дома',
    title: 'Вынос мусора',
  },
  {
    id: '2',
    creator: 'Андрей',
    reward: 500,
    latlng: {
      latitude: 51.800157,
      longitude: 55.065184,
    },
    description: 'Почистить унитаз и раковину',
    title: 'Чистка ванны',
  },
  {
    id: '3',
    creator: 'Саша',
    reward: 1000,
    latlng: {
      latitude: 51.800122,
      longitude: 55.070554,
    },
    description:
      'Нужно отнести ковер на хиим чиску и принести обратно на 12 этаж, стирка уже оплачена в другом сервисе',
    title: 'Стирка ковра',
  },
  {
    id: '4',
    creator: 'Сергей',
    reward: 1800,
    latlng: {
      latitude: 51.797502,
      longitude: 55.066561,
    },
    description: 'Необходимо вытереть всю пыль в здании',
    title: 'Чистка от пыли',
  },
];

export const markers: MarkerType[] = orders.map(
  ({id, latlng, title, description}) => ({
    id,
    latlng,
    title,
    description,
  }),
);
