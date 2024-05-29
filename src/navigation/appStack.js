import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import { Map } from '../screen/mapRestaurant';
import { DrawerNavigator } from './drawerNavigator';



const App = createStackNavigator();

export function AppStack(){

return(
<App.Navigator>
 
<App.Screen
            name = "Drawer"
            component = {DrawerNavigator}
            options = {{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />


<App.Screen
            name = "Map"
            component = {Map}
            options = {{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
</App.Navigator>
)
}