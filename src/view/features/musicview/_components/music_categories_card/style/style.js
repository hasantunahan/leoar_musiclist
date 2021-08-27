import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {getColor} from '../../../../core/app/extension/color';
import {appBarHeight, getWidth} from '../../../../core/app/extension/dimension';
const categoriescard = props =>
  StyleSheet.create({
    selected: {
      padding: 15,
      fontSize: 15,
      fontWeight: 'bold',
      letterSpacing: 0.3,
    },
    notSelected: {
      padding: 15,
      fontSize: 15,
      opacity: 0.5,
      letterSpacing: 0.3,
    },
  });
function categoriesCardStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => categoriescard({colors}), [colors]);
  return styles;
}
export default categoriesCardStyle;
