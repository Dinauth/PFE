
import React, { useLayoutEffect } from "react";

import { createStackNavigator, TransitionPresets  } from "@react-navigation/stack";
import { View } from "react-native-animatable";
import { StyleSheet } from "react-native";
import { Search } from "../screen/search";
import { SearchResult } from "../screen/searchResult";
import { RestaurantHome } from "../screen/restaurantHome";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { MenuProd } from "../screen/restaurantTabs/menuProduct";
import {PreferenceScreen} from "../screen/preferences";

const clientSearch = createStackNavigator()

export function ClientStack({navigation,route}){

    useLayoutEffect(()=>{
        const routeName = getFocusedRouteNameFromRoute(route)
        if (routeName=="RestaurantHome" || "MenuProduct") {
            navigation.setOptions({tabBarVisible:false})
        }else{
            navigation.setOptions({tabBarVisible:true})
        }
    },[navigation,route])

    return(
        <clientSearch.Navigator>
            <clientSearch.Screen
            name="searchScreen"
            component={Search}
            options = {
                ()=>({
                    headerShown:false
                })
            }
            />

            <clientSearch.Screen
                name="searchScreenResult"
                component={SearchResult}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

            <clientSearch.Screen
                name="RestaurantHome"
                component={RestaurantHome}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />
            <clientSearch.Screen
                name="MenuProduct"
                component={MenuProd}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

            <clientSearch.Screen 
                name ="PreferenceScreen"
                component ={PreferenceScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />  
        </clientSearch.Navigator>
        
    )
}


const styles = StyleSheet.create({

})



