import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { AppText } from '../../../../../core/app/component/text';
import playDetailsStyle from './style/style';
import DetailsImage from './_partial_components/details_image';
import { Label } from '../../../../../core/init/lang/en-En';
const MusicDetailsCard = ({ item }) => {
  const styles = playDetailsStyle();
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <DetailsImage image={item.thumbUrl} />
        <View style={styles.cardtext}>
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
          style={styles.choose_btn}>
          <Text>{Label.choose}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default MusicDetailsCard;
