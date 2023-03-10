import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Button, Checkbox, Spacer, Text} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

interface WelcomeProps {
  onContinue: () => void;
}

export function Welcome({onContinue}: WelcomeProps) {
  const {styles} = useThematicStyles(rawStyles);
  const insets = useSafeAreaInsets();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      {/* <Image source={welcomeImage} style={styles.image} /> */}
      <View style={styles.container}>
        <Spacer height={insets.top} />
        <Text t4 style={styles.textStyle} color={Color.primary}>
          Welcome
        </Text>
        <Checkbox onPress={() => setIsChecked(pr => !pr)} value={isChecked}>
          <Text t14>Согласен с условиями использования</Text>
        </Checkbox>
        <Spacer height={12} />
        <Button style={styles.buttonContainer} onPress={onContinue}>
          На главную
        </Button>
        <Spacer height={insets.bottom + 16} />
      </View>
    </>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleText: {
    marginBottom: 16,
    marginTop: 15,
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  alphaTitle: {
    position: 'absolute',
    top: '45%',
    fontSize: 90,
  },
  buttonContainer: {
    width: '85%',
  },
  textStyle: {
    textShadowColor: Color.bg4,
    textShadowRadius: 1,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 7,
  },
});
