import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { getWidth } from '../../../../../../core/app/extension/dimension';
import { verticalPadding } from '../../../../../../core/app/extension/padding';
import { isIOS } from '../../../../../../core/app/extension/platforms';

const playDetails = props =>
  StyleSheet.create({
    card: {
      paddingVertical: verticalPadding(),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 8
    },
    row: {
      flexDirection: 'row',
      width: getWidth() * .6
    },
    imagecoverview: {
      marginVertical: 7,
      marginHorizontal: 5,
      borderWidth: 1,
      borderColor: 'gray',
      height: 56,
      width: 56,
      alignItems: 'center',
      borderRadius: 15,
      justifyContent: 'center'
    },
    align_justify_center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 13,
      width: isIOS() ? getWidth() * .5 : getWidth() * .6
    },
    artist: {
      fontSize: 12,
      opacity: 0.9,
    },
    tags: {
      fontSize: 11,
      opacity: 0.9,
      paddingRight: 3
    },
    choose_btn: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: '#f5f5f5',
    },
    cardtext:
      { paddingHorizontal: 10, justifyContent: 'center' }

  });
function playDetailsStyle() {
  const { colors } = useTheme();
  const styles = React.useMemo(() => playDetails({ colors }), [colors]);
  return styles;
}
export default playDetailsStyle;
