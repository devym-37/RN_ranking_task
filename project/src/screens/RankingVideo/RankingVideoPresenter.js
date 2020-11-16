import React, {useMemo} from 'react';
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

const RankingVideoPresenter = ({  
    data, 
    getData, 
    onEndReached,
    renderItem, 
    keyExtractor,
    isFetching,
    position
}) => {
    
    const renderListFooterComponent = useMemo(() => {
        if(!isFetching) return null;
        return(
            <View style={{flex: 1, height: 50, justifyContent: "center"}}>
                <ActivityIndicator size="large" color="#e91e63" />
            </View>
        )
    }, [isFetching])

    return ( 
        <View style = { styles.container } >
            <View style={ styles.notifications}>
                <Text>{`현재 마지막 위치 data 번호 ${position}`}</Text>
                <Text>{`현재 import data ${data.length} 개`}</Text>
            </View>
            <FlatList 
              data={data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              onEndReached={onEndReached}
              onEndReachedThreshold={1}
              windowSize={1}
              ListFooterComponent={renderListFooterComponent}
            />
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