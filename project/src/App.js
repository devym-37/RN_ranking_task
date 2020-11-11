/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';


import Header from '~/components/Header'
import Footer from '~/components/Footer'

const App  = () => {
    return ( 
        <>
            <Header header={"랭킹"}/>

        </>
    );
};

const styles = StyleSheet.create({
   
});

export default App;