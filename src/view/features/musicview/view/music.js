import React from 'react';
import { View, Text, Button, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import AppHeader from '../../_header/view/header';
import musicStyle from '../style/style';
import { connect, useSelector } from 'react-redux';
import { getMusicList } from '../../../../redux/actions/action';
import { FlatList } from 'react-native-gesture-handler';
const MusicList = (props) => {
  const musicdata = useSelector((state) => state.data);
  const [key, setKey] = React.useState([]);
  const [data, setData] = React.useState({ })

  React.useEffect(() => {
    props.getMusicList()
  }, [])

  React.useEffect(() => {
    setData(musicdata.data)
  }, [props.isLoading])


  function getCategoriesData() {
    let list = Object.keys(data ?? { });
    let datalist = []
    list.map(key => {
      datalist.push(data[key])
    })
    let taglist = new Set();
    datalist.map(i => {
      i.tags.map(tag => {
        taglist.add(tag)
      });
    })
    return ["All"].concat(Array.from(taglist))
      ;
  }

  const renderCategories = ({ item }) => <View style={{ borderBottomColor: 'black', borderBottomWidth: 1.2 }}>
    <Text style={{ padding: 10 }}> {item}</Text></View>


  const styles = musicStyle()

  return (
    <SafeAreaView style={styles.main}>
      <AppHeader title="Choose Music" />
      {
        props.isLoading
          ? <View style={styles.loading}>
            <ActivityIndicator />
          </View>
          : <View style={styles.background}>
            <FlatList
              style={{ maxHeight: 40 }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={getCategoriesData()}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderCategories}
            />
            <Text>hasan</Text>
          </View>
      }
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    err: state.err,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, { getMusicList })(MusicList);
