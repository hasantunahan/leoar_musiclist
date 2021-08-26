import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {getColor} from '../../../../core/app/extension/color';
import {appBarHeight, getWidth} from '../../../../core/app/extension/dimension';
import {lowPadding} from '../../../../core/app/extension/padding';
const header = props =>
  StyleSheet.create({
    main: {
      backgroundColor: getColor().background,
      height: appBarHeight(),
      width: getWidth(),
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: getColor().text,
      shadowOffset: {
        width: 20,
        height: 0,
      },
      shadowOpacity: 0.5,
      elevation: 5,
    },
    row: {
      flexDirection: 'row',
      padding: lowPadding(),
      width: getWidth(),
      paddingLeft: 15,
      paddingRight: 15,
      justifyContent: 'space-between',
    },
    headerbutton: {
      color: getColor().text,
    },
    headertitle: {
      fontWeight: '700',
      fontSize: 16,
      color: getColor().text,
    },
  });
function headerStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => header({colors}), [colors]);
  return styles;
}
export default headerStyle;
