import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import ProductCard from '~/components/ProductCard'

const RankingProductPresenter = ({ products }) => {
    return ( 
        <View style = { styles.container } >
            <ScrollView showsVerticalScrollIndicator={false}>
                { products.length !== 0 ? products.map((product, index) => <ProductCard key={index} product={product} index={index} /> ) : null}
            </ScrollView>
        </View > 
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFF",
    },
})

export default RankingProductPresenter;