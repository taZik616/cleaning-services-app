import {NavigatorScreenParams} from '@react-navigation/native';

// NAVIGATION

export type TabParamList = {
  homeMain: undefined;
  homeOrders: undefined;
  homeMessenger: undefined;
};
export type RootStackParamList = {
  home?: NavigatorScreenParams<TabParamList>;
  welcome: undefined;
  chat: undefined;
};

// INTERFACES

export interface UserChatListT {
  id: string;
  name: string;
  surname: string;
  lastMessage?: string;
  isYouLastSender: boolean;
  avatarUri: string;
  unreadMessagesCount: number;
  lastMessageDate: number;
}

export interface MarkerType {
  id: string;
  latlng: {latitude: number; longitude: number};
  title: string;
  description: string;
}

export interface OrderInfo {
  id: string;
  title: string;
  description: string;
  reward: number;
  creator: string;
  latlng: {latitude: number; longitude: number};
}

// HELPERS

export type sheetPointsT = [number, number];

export type ArrayElementType<
  ArrayType extends readonly unknown[] | null | undefined,
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
