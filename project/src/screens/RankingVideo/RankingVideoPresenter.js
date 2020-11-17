import React, {useMemo, useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const Width = Dimensions.get('window').width;

const RankingVideoPresenter = ({
  data,
  renderItem,
  keyExtractor,
  isFetching,
  onEndReached,
}) => {
  console.log('data.length ====== >', data.length);
  const renderListFooterComponent = useMemo(() => {
    if (!isFetching) return null;

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
        <Text style={{fontSize: 16}}>Loading More</Text>
      </View>
    );
  }, [isFetching]);

  const renderOnViewableItemsChanged = useCallback(
    ({viewableItems, changed}) => {
      console.log('viewableItems', viewableItems);
      console.log('changed', changed);
    },
    [],
  );

  const _viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <View style={styles.container}>
      <View style={styles.notifications}>
        <Text>{`Display ${data.length} Items`}</Text>
        <Text>{`Current Item : `}</Text>
      </View>
      <FlatList
        data={data}
        onViewableItemsChanged={renderOnViewableItemsChanged}
        viewabilityConfig={_viewabilityConfig}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderListFooterComponent}
        removeClippedSubviews={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  notifications: {
    marginTop: 10,
    marginBottom: 10,
    width: Width,
    marginLeft: 60,
  },
});

export default RankingVideoPresenter;
