import React from 'react';
import {View, Image} from 'react-native';

const AppImageNetwork = ({
  hiddenBorder = false,
  url,
  resizeMode = 'contain',
  width = 50,
  height = 50,
  position,
  extension,
}) => {
  return (
    <Image
      source={{uri: `${url}`}}
      style={{
        width: width,
        height: height,
        position: position ?? 'relative',
        resizeMode: resizeMode,
        borderRadius: hiddenBorder ? 0 : 10,
      }}
    />
  );
};
export default AppImageNetwork;
