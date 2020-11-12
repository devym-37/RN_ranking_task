import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import VideoCard from '~/components/VideoCard';


const RankingVideoPresenter = ({ data }) => {
    return ( 
        <View style = { styles.container } >
            <ScrollView showsVerticalScrollIndicator={false}>
                { data.length !== 0 ? data.map((item, index) => <VideoCard key={index} data={item} index={index} /> ) : null}
            </ScrollView>
        </View > 
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFF"
    },
})

export default RankingVideoPresenter;