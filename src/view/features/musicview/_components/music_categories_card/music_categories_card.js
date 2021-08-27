import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {AppText} from '../../../../../core/app/component/text';
import {capitalizeFirstLetter} from '../../../../../core/app/converter/capitalize';
import categoriesCardStyle from './style/style';

export const CategoriesCard = ({item, callback, selected}) => {
  const styles = categoriesCardStyle();
  return (
    <TouchableOpacity
      onPress={() => {
        callback();
      }}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#6f6a6c',
        borderBottomWidth:
          selected == item ? 2 : !selected && item == 'All' ? 2 : 0,
      }}>
      <View>
        <AppText
          text={capitalizeFirstLetter(item)}
          style={
            selected == item
              ? styles.selected
              : !selected && item == 'All'
              ? styles.selected
              : styles.notSelected
          }
        />
      </View>
    </TouchableOpacity>
  );
};
