import 'react-native-gesture-handler';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Header from '~/components/Header'
import BottomNav from '~/navigations/BottomNav'

const App  = () => {
    return ( 
        <NavigationContainer>
            <BottomNav />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
   
});

export default App;