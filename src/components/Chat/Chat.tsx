import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import chatLocale from 'dayjs/locale/ru';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {Text} from '../ui';
import {IS_IOS} from 'src/variables';

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

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      placeholder="Сообщение"
      locale={chatLocale}
      renderSend={({onSend, disabled, text, ...p}) => {
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
                {
                  marginBottom: bottom + 4,
                  marginRight: 10,
                  marginTop: IS_IOS ? 10 : 0,
                },
                !IS_IOS && {alignSelf: 'center'},
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
      onSend={messages => onSend(messages)}
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
});
