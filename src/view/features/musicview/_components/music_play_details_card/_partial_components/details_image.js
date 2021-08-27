import React from 'react';
import {Image, View} from 'react-native';
import AppImageNetwork from '../../../../../../core/app/component/image';
import playDetailsStyle from '../style/style';
const DetailsImage = ({image}) => {
  const styles = playDetailsStyle();
  return (
    <View style={styles.imagecoverview}>
      <View style={styles.align_justify_center}>
        <AppImageNetwork
          isNetwork={true}
          position={'absolute'}
          url={image}
          resizeMode={'cover'}
        />
        <Image
          source={require('../../../../../../../assets/image/play.png')}
          style={{height: 22, width: 22}}
        />
      </View>
    </View>
  );
};

export default DetailsImage;
