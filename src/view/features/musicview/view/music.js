import React from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import AppHeader from '../../_header/view/header';
import musicStyle from '../style/style';
import {connect, useSelector} from 'react-redux';
import {
  getMusicList,
  selectedCategories,
} from '../../../../redux/actions/action';
import {FlatList} from 'react-native-gesture-handler';
import {appBarHeight} from '../../../../core/app/extension/dimension';
import {CategoriesCard} from '../_components/music_categories_card/music_categories_card';

const MusicList = props => {
  const styles = musicStyle();
  const musicdata = useSelector(state => state.data);
  const [data, setData] = React.useState({});
  const [selected, setSelected] = React.useState('');

  var list = Object.keys(data ?? {});
  var datalist = [];
  var taglist = new Set();

  React.useEffect(() => {
    props.getMusicList();
  }, []);

  React.useEffect(() => {
    setData(musicdata.data);
  }, [props.isLoading]);

  const renderCategories = ({item}) => (
    <CategoriesCard
      selected={selected}
      item={item}
      callback={() => getItemsByCategory(item)}
    />
  );

  return (
    <SafeAreaView style={styles.main}>
      <AppHeader title="Choose Music" />
      {props.isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.background}>
          <View style={styles.categories}>
            <FlatList
              style={{height: appBarHeight()}}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={getCategoriesData().sort((a, b) => b < a)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderCategories}
            />
          </View>
          <Text>{JSON.stringify(selected ? props.categories : datalist)}</Text>
        </View>
      )}
    </SafeAreaView>
  );

  function getCategoriesData() {
    list.map(key => {
      let elm = data[key];
      elm.key = key;
      datalist.push(elm);
    });
    datalist.map(i => {
      i.tags.map(tag => {
        taglist.add(tag);
      });
    });
    return ['All'].concat(Array.from(taglist));
  }

  function getItemsByCategory(text) {
    let filtered = datalist.filter(i => i.tags.includes(text));
    if (text == 'All') {
      setSelected(text);
      props.selectedCategories(datalist);
    } else {
      setSelected(text);
      props.selectedCategories(filtered);
    }
  }
};

const mapStateToProps = state => {
  return {
    data: state.data,
    err: state.err,
    isLoading: state.isLoading,
    categories: state.categories,
  };
};

export default connect(mapStateToProps, {getMusicList, selectedCategories})(
  MusicList,
);
