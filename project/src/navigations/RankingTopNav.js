import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import RankingVideoScreen from '~/screens/RankingVideo';
import RankingProductScreen from '~/screens/RankingProduct';
import RankingCreatorScreen from '~/screens/RankingCreator';

const Tab = createMaterialTopTabNavigator();

const RankingTopNav = () => {
    return ( 
            <Tab.Navigator
                initialRouteName="인기 영상"
                tabBarOptions={{
                    activeTintColor: '#e91e63',
                    inactiveTintColor: '#D3D1D0',
                    tabStyle: { height: 35, marginTop: 10 }, 
                    labelStyle: { fontSize : 15, fontWeight: "600", height: 50 },
                    indicatorStyle: { height: 1, backgroundColor: '#e91e63' },
                }}
            >
                <Tab.Screen name="인기 영상" component={RankingVideoScreen} />
                <Tab.Screen name="HOT 크리에이터" component={RankingCreatorScreen} />
                <Tab.Screen name="인기 제품" component={RankingProductScreen} />
            </Tab.Navigator>
        );
};

export default RankingTopNav;

