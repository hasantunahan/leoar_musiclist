import {Dimensions} from 'react-native';

export function getHeight() {
  return Dimensions.get('screen').height;
}

export function getWidth() {
  return Dimensions.get('screen').width;
}

export function appBarHeight() {
  return  getHeight() * (getWidth() > getHeight() ? 0.1 : 0.08);
}
