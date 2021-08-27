import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {getColor} from '../../../../core/app/extension/color';
import {appBarHeight, getWidth} from '../../../../core/app/extension/dimension';
const musicstyle = props =>
  StyleSheet.create({
    main: {
      backgroundColor: getColor().card,
      flex: 1,
    },
    background: {
      backgroundColor: getColor().background,
      flex: 1,
    },
    loading: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categories: {
      backgroundColor: getColor().card,
      height: appBarHeight(),
      width: getWidth(),
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 3},
      shadowOpacity: 0.2,
      elevation:10
    },
  });
function musicStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => musicstyle({colors}), [colors]);
  return styles;
}
export default musicStyle;
