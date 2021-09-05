import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Tab from './Tab';
import AkumaNoMi from '../screens/AkumaNoMi'
import Checkout from '../screens/Checkout';
export default() =>(
    <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
        headerShown:false
    }}
    >
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="AkumaNoMi" component={AkumaNoMi} />
        <Stack.Screen name="Checkout" component={Checkout} />
        
    </Stack.Navigator>
);

