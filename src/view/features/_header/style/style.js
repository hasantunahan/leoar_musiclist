import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { getColor } from '../../../../core/app/extension/color';
import { appBarHeight, getWidth } from '../../../../core/app/extension/dimension';
import { lowPadding, normalPadding } from '../../../../core/app/extension/padding';
import { isIOS } from '../../../../core/app/extension/platforms';
const header = props =>
  StyleSheet.create({
    main: {
      backgroundColor: getColor().card,
      height: appBarHeight(),
      width: getWidth(),
      alignItems: 'center',
      justifyContent: isIOS() ? 'flex-end' : 'center',
      borderBottomColor: '#999999',
      borderBottomWidth: 0.2
    },
    row: {
      flexDirection: 'row',
      padding: normalPadding(),
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
  const { colors } = useTheme();
  const styles = React.useMemo(() => header({ colors }), [colors]);
  return styles;
}
export default headerStyle;
