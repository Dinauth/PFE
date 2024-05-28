import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MenuCard } from "../../components/menuCard";
import { productData, restaurantData,menuDetailedData } from "../../global/data";
import { colors } from "../../global/style";


export const RouteMenu = ({navigation,route})=>{

    return(
        <View style={{flex:1}}>
            <View style={styles.view2}>
                <FlatList 
            style = {{backgroundColor:colors.cardBackground}}
            data ={menuDetailedData}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item,index})=>(
                        <TouchableOpacity>
                             <MenuCard
                                productName ={item.meal}
                                image ={item.image}
                                price ={item.price}
                                productDetails = {item.details}
                             />
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                />
           
            </View>
           
        </View>
    )
}
export const Route2 = ()=>(<View style={styles.scene}/>)
export const Route3 = ()=>(<View style={styles.scene}/>)

const styles = StyleSheet.create({
    scene:{
        flex:1
    },
    view2:{
        marginTop:5,
        paddingBottom:20
    },
    scene2:{
        backgroundColor:'#673ab7'
    }
})