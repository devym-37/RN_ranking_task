import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '~/screens/Home';
import SearchScreen from '~/screens/Search';
import RankingScreen from '~/screens/Ranking';
import AlarmScreen from '~/screens/Alarm';
import SettingScreen from '~/screens/Setting';

Ionicons.loadFont();
SimpleLineIcons.loadFont();

const Tab = createBottomTabNavigator();



const BottomNav = () => {
    return (
        <>
            <Tab.Navigator 
                initialRouteName="Ranking"
                tabBarOptions={{
                    activeTintColor: '#e91e63',
                    showLabel: false
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="ios-home-outline" color={color} size={30} />
                            ),
                }}/>
                <Tab.Screen 
                    name="Search" 
                    component={SearchScreen} 
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="search-outline" color={color} size={30} />
                            ),
                }}/>
                <Tab.Screen 
                    name="Ranking" 
                    component={RankingScreen} 
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="trophy-outline" color={color} size={30} />
                            ),
                }}/>
                <Tab.Screen 
                    name="Alarm" 
                    component={AlarmScreen} 
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="notifications-outline" color={color} size={30} />
                            ),
                }}/>
                <Tab.Screen 
                    name="Setting" 
                    component={SettingScreen} 
                    options={{
                        tabBarIcon: ({ color }) => (
                            <SimpleLineIcons name="emotsmile" color={color} size={30} />
                            ),
                }}/>
            </Tab.Navigator>
        </>
    )
};


export default BottomNav;