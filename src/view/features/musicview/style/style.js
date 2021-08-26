import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {getColor} from '../../../../core/app/extension/color';
const musicstyle = props =>
  StyleSheet.create({
    main: {
      backgroundColor: getColor().card,
      flex:1
    },
    background :{
        backgroundColor : getColor().background,
        flex:1
    }
  });
function musicStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => musicstyle({colors}), [colors]);
  return styles;
}
export default musicStyle;
