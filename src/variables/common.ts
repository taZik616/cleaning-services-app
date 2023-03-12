import {Platform} from 'react-native';
import {Easing} from 'react-native-reanimated';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const DEFAULT_HITSLOP = {top: 10, bottom: 10, left: 10, right: 10};

export const ANIMATION_DURATION = 300;
export const ANIMATION_TYPE = Easing.bezierFn(0.42, 0, 0.58, 0);

export const NUM_PRECISION = 2;
