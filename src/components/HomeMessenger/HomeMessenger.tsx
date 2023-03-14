import React, {useEffect} from 'react';

import {FlatList} from 'react-native';

import {useTypedNavigation} from 'src/hooks';
import {UserChatListT} from 'src/types';

import {UserChatCard} from '../ui';

interface HomeMessengerProps {
  users: UserChatListT[];
  onSearchChange?: (text: string) => void;
  onPressCard: (item: UserChatListT) => void;
}

export function HomeMessenger({
  users,
  onSearchChange,
  onPressCard,
}: HomeMessengerProps) {
  const navigation = useTypedNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'left',
      headerTitle: 'Сообщения',
      headerSearchBarOptions: {
        placeholder: 'Search',
        hideWhenScrolling: true,
        onChangeText({nativeEvent: {text}}) {
          onSearchChange?.(text);
        },
      },
    });
  });

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <UserChatCard onPress={onPressCard} {...item} />;
      }}
      data={users}
    />
  );
}
