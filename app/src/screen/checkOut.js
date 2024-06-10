import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckoutHeader } from "../components/checkOutHeader";


export const Checkout = ({navigation,id})=>{
    return(
        <View style={styles.container}>
            <CheckoutHeader
            id={0}
            navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
})