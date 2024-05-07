import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions  } from "react-native";
import { Icon } from 'react-native-elements';
import { Home } from '../screen/HomeScreen';
import { colors } from '../global/style';
import { Orders } from '../screen/orders';
import { Search } from '../screen/search';
import { Account } from '../screen/account';


const ClientTabs = createBottomTabNavigator();

export function ClientTab() {

    return(
        <ClientTabs.Navigator
        
        screenOptions={{
            tabBarActiveTintColor:colors.buttons,
            headerShown: false,
            
            }}
        >
            <ClientTabs.Screen 
                name = "Home"
                component={Home}
                options={ 
                    {
                        
                        tabBarLabel: "Home",
                        tabBarIcon:({color,size})=>(
                            <Icon 
                            name='home'
                            type='material'
                            color={color}
                            size = {size}
                            />
                        )
                    }
                }
            />

<ClientTabs.Screen 
                name = "Search"
                component={Search}
                options={ 
                    {
                        tabBarLabel: "Search",
                        tabBarIcon:({color,size})=>(
                            <Icon 
                            name='search'
                            type='material'
                            color={color}
                            size = {size}
                            />
                        )
                    }
                }
            />


<ClientTabs.Screen 
                name = "Order"
                component={Orders}
                options={ 
                    {
                        tabBarLabel: "Order",
                        tabBarIcon:({color,size})=>(
                            <Icon 
                            name='view-list'
                            type='material'
                            color={color}
                            size = {size}
                            />
                        )
                    }
                }
            />


<ClientTabs.Screen 
                name = "Account"
                component={Account}
                options={ 
                    {
                        tabBarLabel: "Account",
                        tabBarIcon:({color,size})=>(
                            <Icon 
                            name='person'
                            type='material'
                            color={color}
                            size = {size}
                            />
                        )
                    }
                }
            />
        </ClientTabs.Navigator>
    )
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    }
})