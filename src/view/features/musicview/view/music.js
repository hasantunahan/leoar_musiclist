import { useTheme } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

const MusicList = () => {
    const {colors} = useTheme()
    return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <Text>hello</Text>
    </View>
  );
};

export default MusicList;
