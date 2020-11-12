import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import CreatorCard from '~/components/CreatorCard';

const RankingCreatorPresenter = ({ creators }) => {
    return ( 
        <View style = { styles.container } >
            <ScrollView showsVerticalScrollIndicator={false}>
                { creators.length !== 0 ? creators.map((creator, index) => <CreatorCard key={index} creator={creator} index={index} /> ) : null}
            </ScrollView>
        </View > 
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#FFF",
    },
})

export default RankingCreatorPresenter;