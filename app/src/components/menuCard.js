import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/style";


export const MenuCard = ({productName,price,image,productDetails})=>{
    return(
        <View style ={styles.view1}>
            <View style ={styles.view2}>
                <View style ={styles.view3}>
                    <Text style ={styles.text1}>{productName}</Text>
                    <View>
                        <Text style ={styles.text2}>{productDetails}</Text>
                    </View>
                    <Text style = {styles.text3}>€ {price}</Text>
                </View>
                <View style ={{flex:2}}>
                     <Image style ={styles.image} source ={image} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1:{backgroundColor:"white",
            elevation:4,
            shadowOpacity:0.4,
            shadowColor:"black",
            margin:5,
            padding:10
},

view2: {flex:1,
        flexDirection:"row",
        padding:0,
        justifyContent:"space-between"
},

view3 :{flex:6,
        justifyContent:"space-between"
        },

text1: {
    fontSize:15,
    color:colors.grey1,
    fontWeight:"bold"
    },

    text2:{
        fontSize:15,
        color:colors.grey3,
        marginRight:2
     },

text3:{
    fontSize:15,
    color:colors.black,
    },

image:{
    borderTopLeftRadius:5,
    height:70,

    borderTopRightRadius:5
    }
})