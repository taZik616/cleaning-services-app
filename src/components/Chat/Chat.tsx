import React, {useCallback, useEffect, useState} from 'react';

// @ts-ignore
import chatLocale from 'dayjs/locale/ru';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {IS_IOS} from 'src/variables';

import {Text} from '../ui';

export function Chat() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const {bottom} = useSafeAreaInsets();
  const {styles} = useThematicStyles(rawStyles);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onChatSend = useCallback((mess: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, mess));
  }, []);

  return (
    <GiftedChat
      placeholder="Сообщение"
      locale={chatLocale}
      renderSend={({onSend, disabled, text}) => {
        const handleSend = () => {
          if (text && onSend) {
            onSend({text: text.trim()}, true);
          }
        };
        return (
          !disabled && (
            <TouchableOpacity
              onPress={handleSend}
              style={[
                styles.sendButton,
                {
                  marginBottom: bottom + 4,
                },
                !IS_IOS && styles.centered,
              ]}>
              <Text color={Color.textBlue1} t8>
                Отправить
              </Text>
            </TouchableOpacity>
          )
        );
      }}
      renderAvatar={() => <></>}
      messages={messages}
      renderUsernameOnMessage
      messagesContainerStyle={{
        paddingBottom: bottom,
      }}
      wrapInSafeArea={false}
      textInputProps={{
        style: {
          ...styles.chatInput,
          alignSelf: 'flex-start',
          marginHorizontal: 12,
          marginTop: 6,
        },
      }}
      onSend={mess => onChatSend(mess)}
      user={{
        _id: 1,
      }}
    />
  );
}

const rawStyles = StyleSheet.create({
  chatInput: {
    backgroundColor: Color.card,
    flex: 1,
    color: Color.textBase1,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  sendButton: {
    marginRight: 10,
    marginTop: IS_IOS ? 10 : 0,
  },
  centered: {
    alignSelf: 'center',
  },
});
