import React, {useState} from 'react';

import {HomeMessenger} from 'src/components/HomeMessenger';
import {useTypedNavigation} from 'src/hooks';
import {UserChatListT} from 'src/types';

export function HomeMessengerScreen() {
  const [users] = useState<UserChatListT[]>(fakeUserList);
  const {navigate} = useTypedNavigation();

  const onSearch = (text: string) => {
    console.log('🚀 - Search: ', text);
  };

  const onPressCard = () => {
    navigate('chat');
  };

  return (
    <HomeMessenger
      onPressCard={onPressCard}
      onSearchChange={onSearch}
      users={users}
    />
  );
}

const fakeUserList: UserChatListT[] = [
  {
    id: '1',
    name: 'Leanne',
    surname: 'Graham',
    avatarUri:
      'https://media.istockphoto.com/id/530827827/ru/векторная/силуэт-icon-мужской-аватар-портрет-случайные-человека.jpg?s=612x612&w=0&k=20&c=K2y70O5_UaH8jmUzs6xHpLsqVpy3gzSYOyEGVXBEFVM=',
    lastMessage: 'Ok, goodbye!',
    lastMessageDate: 1678591056000,
    isYouLastSender: true,
    unreadMessagesCount: 0,
  },
  {
    id: '2',
    name: 'Ervin',
    surname: 'Howell',
    avatarUri:
      'https://us.123rf.com/450wm/lacheev/lacheev2109/lacheev210900016/173818773-portrait-of-happy-clever-intelligent-young-man-in-glasses-looking-at-camera-and-smiling-headshot-of.jpg?ver=6',
    lastMessage: 'Good idea',
    lastMessageDate: 1678505178000,
    isYouLastSender: false,
    unreadMessagesCount: 5,
  },
  {
    id: '3',
    name: 'Patricia',
    surname: 'Lebsack',
    avatarUri: 'https://zhizn-zvezd.ru/wp-content/uploads/2022/07/5347590.png',
    lastMessage:
      'date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.',
    lastMessageDate: 1678953736000,
    isYouLastSender: true,
    unreadMessagesCount: 0,
  },
  {
    id: '4',
    name: 'Clementine',
    surname: 'Bauch',
    avatarUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZcZ7ow03ePgT8OV750CLQr8J7bdZ1DDTD4gezfTA_8L1BSLFHoP_RDlwMd5yHrR8Dbo&usqp=CAU',
    lastMessage: "Let's go",
    lastMessageDate: 1677727712000,
    isYouLastSender: false,
    unreadMessagesCount: 950,
  },
  {
    id: '5',
    name: 'Chelsey',
    surname: 'Dietrich',
    avatarUri:
      'https://static.vecteezy.com/system/resources/thumbnails/011/871/536/small/portrait-of-young-unsmiling-guy-in-glasses-thoughtful-teenager-looks-sideways-cartoon-person-with-a-pensive-face-expression-on-a-blue-background-hand-drawn-avatar-for-social-network-vector.jpg',
    lastMessage:
      'Огромное спасибо!😇 Долго не мог найти такой калькулятор для привязки времени к фотографиямs',
    lastMessageDate: 1584345736000,
    isYouLastSender: true,
    unreadMessagesCount: 0,
  },
];
