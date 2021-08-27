import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {AppText} from '../../../../../core/app/component/text';
import playDetailsStyle from './style/style';
import DetailsImage from './_partial_components/details_image';
const MusicDetailsCard = ({item}) => {
  const styles = playDetailsStyle();
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <DetailsImage image={item.thumbUrl} />
        <View style={{paddingHorizontal: 10, justifyContent: 'center'}}>
          <AppText style={styles.name} text={item.name} />
          <AppText style={styles.artist} text={item.artistName} />

          <View style={styles.row}>
            {item.tags.map(i => {
              return <AppText style={styles.tags} text={`#${i}`} />;
            })}
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 20,
            backgroundColor: '#f5f5f5',
          }}>
          <Text>Choose</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default MusicDetailsCard;
