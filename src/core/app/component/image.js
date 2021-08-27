import React from 'react';
import {View} from 'react-native';
const AppImageNetwork = ({
  hiddenBorder = false,
  url,
  resizeMode = 'contain',
  width = 40,
  height = 40,
}) => {
  return (
    <Image
      source={{uri: `${url}`}}
      style={{
        width: width,
        height: height,
        resizeMode: resizeMode,
        borderRadius: hiddenBorder ? 0 : 10,
      }}
    />
  );
};

export default AppImageNetwork;
