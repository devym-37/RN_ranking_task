import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '~/redux/store/store';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header from '~/components/Header';
import BottomNav from '~/navigations/BottomNav';

const App  = () => {
    return ( 
        <Provider store={store}>
            <NavigationContainer>
                <BottomNav />
            </NavigationContainer>
        </Provider>
    );
};

const styles = StyleSheet.create({
   
});

export default App;