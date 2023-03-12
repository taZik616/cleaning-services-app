import React from 'react';

import {IS_DEVELOPMENT} from '@env';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

import {navigator} from 'src/navigator';
import {Home} from 'src/screens/Home';
import {WelcomeScreen} from 'src/screens/Welcome';
import {RootStackParamList} from 'src/types';

import {useTheme} from './hooks';
import {ChatScreen} from './screens/Chat';

const Stack = createNativeStackNavigator<RootStackParamList>();

const basicScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const gestureEnabled = {
  gestureEnabled: true,
};

export function App() {
  const {colors} = useTheme();
  const isDark = useColorScheme() === 'dark';
  const initialScreen = 'welcome';
  return (
    <NavigationContainer
      theme={{
        dark: isDark,
        colors: {
          background: colors.bg1,
          border: colors.grayStroke,
          card: colors.bg1,
          primary: colors.primary,
          text: colors.textBase1,
          notification: colors.primary,
        },
      }}
      ref={navigator}>
      <Stack.Navigator
        initialRouteName={IS_DEVELOPMENT ? 'home' : initialScreen}
        screenOptions={basicScreenOptions}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="home" component={Home} />

        <Stack.Group screenOptions={gestureEnabled}>
          <Stack.Screen name="chat" component={ChatScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
