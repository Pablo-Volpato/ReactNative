import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Search from '../screens/Search';
import Treasure from '../screens/Treasure';
import Favorites from '../screens/Favorites';
import SignOut from '../screens/SignOut';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
    tabBar={props =><CustomTabBar {...props} />}
    >
        <Tab.Screen name='Home'component={Home}/>
        <Tab.Screen name='Search'component={Search}/>
        <Tab.Screen name='Treasure'component={Treasure}/>
        <Tab.Screen name='Favorites'component={Favorites}/>
        <Tab.Screen name='SignOut'component={SignOut}/>
    </Tab.Navigator>
)