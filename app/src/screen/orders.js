import React, {useState,useContext,useEffect} from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions  } from "react-native";

import { InfoCard } from './infoCard';
import { SignInContext } from "../context/authContext";




export function Orders({navigation,route,order}) {
    const {signedIn} = useContext(SignInContext)
    console.log('orderrrrrrrrrr',signedIn.orderCard)
    return(
        <View style={styles.container}>
            <InfoCard
            route={route}
            order={order}
            navigation={navigation}
            />

        </View>
    )
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    }
})