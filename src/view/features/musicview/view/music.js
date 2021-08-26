import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import AppHeader from '../../_header/view/header';
const MusicList = () => {
  const {colors} = useTheme();
  function setlog() {
    console.log('easy');
  }
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <AppHeader title="Choose Music" />
      <Text>hello</Text>
    </View>
  );
};

export default MusicList;
