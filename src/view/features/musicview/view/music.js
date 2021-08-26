import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import AppHeader from '../../_header/view/header';
import musicStyle from '../style/style';
const MusicList = () => {
  const styles = musicStyle()
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.background}>
        <AppHeader title="Choose Music" />
      </View>
    </SafeAreaView>
  );
};

export default MusicList;
