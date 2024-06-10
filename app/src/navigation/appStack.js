import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import { Map } from '../screen/mapRestaurant';
import { DrawerNavigator } from './drawerNavigator';
import { Card } from '../screen/cardScreen';
import { Checkout } from '../screen/checkOut';
import { RestaurantHome } from '../screen/restaurantHome';



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
<App.Screen
            name = "CardScreen"
            component = {Card}
            options = {{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
    <App.Screen
            name = "Checkout"
            component = {Checkout}
            options = {{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
    <App.Screen
            name = "RestaurantHome"
            component = {RestaurantHome}
            options = {{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
</App.Navigator>
)
}