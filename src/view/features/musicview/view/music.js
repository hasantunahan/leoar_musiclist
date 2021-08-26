import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import AppHeader from '../../_header/view/header';
import musicStyle from '../style/style';
import { connect, useSelector } from 'react-redux';
import { getMusicList } from '../../../../redux/actions/action';
const MusicList = (props) => {
  const [data,setData] = React.useState(null);

  React.useState(()=>{
    setData(props.data)
    console.log(props.data);
  },[props.data])


  const styles = musicStyle()
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.background}>
        <AppHeader title="Choose Music" />
        <Button title="Getir" onPress={() => {
          props.getMusicList()
        }} />
        <Text>{JSON.stringify(props.data)}</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    err: state.err,
    isLading: state.isLading
  }
}

export default connect(mapStateToProps, { getMusicList })(MusicList);
