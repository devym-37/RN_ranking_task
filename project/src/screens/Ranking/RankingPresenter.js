import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';


import Header from '~/components/Header';
import RankingTopNav from '~/navigations/RankingTopNav';


const RankingPresenter = ({ pageTitle }) => {
    return ( 
            <View style = { styles.container }>
                <Header header={pageTitle}/> 
                <RankingTopNav />
            </View> 
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
    }
});

export default RankingPresenter;

