import {useTheme} from '@react-navigation/native';
export function getColor() {
  return useTheme().colors;
}
