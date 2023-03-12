import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {formatDateLastMessage} from 'src/helpers';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {UserChatListT} from 'src/types';
import {Text} from './text';

export function UserChatCard({
  onPress,
  ...item
}: UserChatListT & {onPress: (item: UserChatListT) => void}) {
  const {styles} = useThematicStyles(rawStyles);
  const {
    name,
    surname,
    unreadMessagesCount,
    avatarUri,
    isYouLastSender,
    lastMessageDate,
    lastMessage,
  } = item;

  return (
    <Pressable
      onPress={() => onPress(item)}
      style={({pressed}) => [styles.container, pressed && styles.pressedCard]}>
      <Image style={styles.avaStyle} source={{uri: avatarUri}} />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} t11>{`${name} ${surname}`}</Text>
        <Text numberOfLines={1} color={Color.textSecond1} t11>
          {(isYouLastSender && 'Вы: ') + (lastMessage ?? '')}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text color={Color.textSecond1} numberOfLines={1} t11>
          {formatDateLastMessage(lastMessageDate)}
        </Text>
        {unreadMessagesCount ? (
          <View style={styles.badgeCounter}>
            <Text
              style={[
                styles.badgeText,
                unreadMessagesCount < 10 && styles.circle,
              ]}
              color={Color.bg1}
              t11>
              {unreadMessagesCount}
            </Text>
          </View>
        ) : (
          <></>
        )}
      </View>
    </Pressable>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  pressedCard: {
    backgroundColor: Color.cardSelected,
  },
  avaStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 6,
    justifyContent: 'space-around',
  },
  badgeCounter: {
    borderRadius: 100,
    padding: 2,
    alignSelf: 'flex-end',
    backgroundColor: Color.textSecond1,
  },
  badgeText: {
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  circle: {
    aspectRatio: 1,
  },
  rightContainer: {
    justifyContent: 'space-between',
  },
});
