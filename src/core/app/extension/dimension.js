import {Dimensions} from 'react-native';

export function getHeight() {
  return Dimensions.get('window').height;
}

export function getWidth() {
  return Dimensions.get('window').width;
}

export function appBarHeight() {
  return getHeight() * 0.065;
}
