import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import useResources from '../../hooks/use-resources';
import ResourceListItem from '../../components/ResourcesScreen/ResourceListItem';
import styles from './styles';
const ResourcesScreen = () => {
  const [resources, loading, getNextPage] = useResources();
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={resources}
        renderItem={({item}) => (
          <ResourceListItem
            name={item.name}
            year={item.year}
            color={item.color}
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

export default ResourcesScreen;
