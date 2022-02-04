import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './styles';
import useUsers from '../../hooks/use-users';
import {UserListItem} from '../../components';
import {ActivityIndicator} from 'react-native-paper';
const UsersScreen = () => {
  const [users, loading, getNextPage] = useUsers();
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={({item}) => (
          <UserListItem
            name={item.first_name + ' ' + item.last_name}
            email={item.email}
            avatar={item.avatar}
          />
        )}
        onEndReachedThreshold={0}
        onEndReached={getNextPage}
        ListFooterComponent={() => {
          return (
            <View>
              {loading && (
                <ActivityIndicator size="large" style={{margin: 20}} />
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default UsersScreen;
