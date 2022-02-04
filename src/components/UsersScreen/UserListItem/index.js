import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
const UserListItem = ({name, email, avatar}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: avatar}} style={styles.image} />
      <View style={styles.nameContainer}>
        <Entypo name="user" size={18} color={'black'} />
        <Text style={styles.nameStyle}>{name}</Text>
      </View>

      <View style={styles.emailContainer}>
        <MaterialCommunityIcons name="email" size={18} color={colors.grey} />
        <Text style={styles.emailStyle}>{email}</Text>
      </View>
    </View>
  );
};

export default UserListItem;
