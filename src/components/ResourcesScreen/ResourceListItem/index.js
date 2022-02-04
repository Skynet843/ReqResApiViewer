import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
const ResourceListItem = ({name, year, color}) => {
  return (
    <View style={[styles.container, {borderColor: color, borderWidth: 1}]}>
      <View style={[styles.color, {backgroundColor: color}]}></View>
      <View style={styles.data_wrapper}>
        <Text style={styles.nameStyle}>
          {name} ({year})
        </Text>
        <Text style={[styles.colorText, {color: color}]}>{color}</Text>
      </View>
    </View>
  );
};

export default ResourceListItem;
