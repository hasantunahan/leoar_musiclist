import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
const {colors} = useTheme();
export const AppText = ({text, style}) => {
  return (
    <Text numberOfLines={2} style={style ? style : {fontWeight: '500', color: colors.text}}>
      {text}
    </Text>
  );
};
