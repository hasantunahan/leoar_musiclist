import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {verticalPadding} from '../../../../../../core/app/extension/padding';

const playDetails = props =>
  StyleSheet.create({
    card: {
      paddingVertical: verticalPadding(),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    row: {
      flexDirection: 'row',
    },
    imagecoverview: {
      marginVertical: 6,
      marginHorizontal: 4,
      borderWidth: 1,
      borderColor: 'gray',
      height: 56,
      width: 56,
      alignItems: 'center',
      borderRadius: 10,
      justifyContent: 'center',
    },
    align_justify_center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 13,
    },
    artist: {
      fontSize: 12,
      opacity: 0.9,
    },
    tags: {
      fontSize: 12,
      opacity: 0.9,
      paddingRight: 3,
    },
  });
function playDetailsStyle() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => playDetails({colors}), [colors]);
  return styles;
}
export default playDetailsStyle;
