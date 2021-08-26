import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
const {colors} = useTheme();
export const AppText = ({text, style}) => {
  return (
    <Text style={style ? style : {fontWeight: '700', color: colors.text}}>
      {text}
    </Text>
  );
};
