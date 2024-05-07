import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import {createNativeStackNavigator, createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import { SignWelcome } from '../screen/auth/welcome';
import { Sign } from '../screen/auth/sign';
import { Home } from '../screen/HomeScreen';
import { ClientTab } from './clientTabs';
import { Map } from '../screen/mapRestaurant';
import { DrawerNavigator } from './drawerNavigator';


const AuthStack = createStackNavigator();


export function Auth() {

    return(
        
        <AuthStack.Navigator>

<AuthStack.Screen
            name = "welcome"
            component = {SignWelcome}
            options = {{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />

<AuthStack.Screen
            name = "signIn"
            component = {Sign}
            options = {{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />



<AuthStack.Screen
            name = "Drawer"
            component = {DrawerNavigator}
            options = {{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />


<AuthStack.Screen
            name = "Map"
            component = {Map}
            options = {{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
        
            
        </AuthStack.Navigator>

        

        


    )
    
}