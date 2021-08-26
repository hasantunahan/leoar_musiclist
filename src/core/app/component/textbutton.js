import {TouchableOpacity,Text} from 'react-native';
import React from 'react';
export const AppTextButton = ({text, onPress, textstyle,buttonstyle}) => {
  return (
    <TouchableOpacity style={buttonstyle} onPress={() => onPress()}>
      <Text style={textstyle && textstyle}>{text}</Text>
    </TouchableOpacity>
  );
};
