import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    Dimensions,
    ActivityIndicator
} from 'react-native';

import VideoCard from '~/components/VideoCard';

const Width = Dimensions.get("window").width;

const RankingVideoPresenter = ({ loading, data, _getData, _onEndReached, _convertLoading  }) => {
    console.log('data', loading)
    return ( 
        <View style = { styles.container } >
            <View style={ styles.notifications}>
                <Text>{"Front Data"}</Text>
                <Text>{"Current Data"}</Text>
                <Text>{"Back Data"}</Text>
            </View>
            { data.length !== 0 ? <FlatList 
              data={data}
              renderItem={(item, index) => <VideoCard key={`${item.index}`} item={item} />}
              keyExtractor={(item, index) => index.toString()}
              onEndReached={_onEndReached}
            //   initialNumToRender={15}
              onScroll={_convertLoading}
              windowSize={2}
              ListFooterComponent={() => loading && <View style={{flex: 1, justifyContent: "center"}}><ActivityIndicator /></View>}
            /> : null}
        </View > 
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    notifications:{ 
        marginTop: 10, 
        marginBottom: 10, 
        width: Width, 
        marginLeft: 60 
    }
})

export default RankingVideoPresenter;