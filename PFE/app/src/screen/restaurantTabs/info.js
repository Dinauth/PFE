import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const Info = ()=>{
    return(
        <View style={styles.container}>
            <Text>No info yet</Text>
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