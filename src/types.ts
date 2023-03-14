import {NavigatorScreenParams} from '@react-navigation/native';

// NAVIGATION

export type TabParamList = {
  homeMarket: undefined;
  homeShoppingCart: undefined;
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
  latlng: {latitude: number; longitude: number};
  title: string;
  description: string;
}

// HELPERS

export type sheetPointsT = [number, number];

export type ArrayElementType<
  ArrayType extends readonly unknown[] | null | undefined,
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
