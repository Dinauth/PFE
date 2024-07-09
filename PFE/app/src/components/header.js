import React from 'react';

import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from '../global/style';
import { Icon } from 'react-native-elements';

export  function Header({title,type, navigation}){

    return (
        <View style={styles.header}>

<View style={styles.icons} >
    <Icon
    type = "material-community"
    name = {type}
    color = {colors.heaherText}
    size={28}
    onPress={()=>{
        navigation.goBack()
    }}
    >
       

    </Icon>

</View>
<View>
            <Text style ={styles.heaherText}>
            {title}
            </Text>
</View>
        </View>
    )
}


const styles = StyleSheet.create({
    header :{
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    },
    heaherText: {
        color:colors.heaherText,
        fontSize:22,
        fontWeight: "bold",
        marginLeft:30
    },
    icons: {
 
        marginLeft:10
    }
})