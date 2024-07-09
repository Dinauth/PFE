import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const Review = ()=>{
    return(
        <View style={styles.container}>
            <Text>No review yet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    }
})