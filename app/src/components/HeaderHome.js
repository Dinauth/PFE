import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, parameters } from '../global/style';
import { Icon,withBadge } from 'react-native-elements';

export  function HomeHeader({navigation,card}){
   
    
  
    console.log(card,"header home")

    const BadgeIcon = card ? withBadge(getQuantity())(Icon):withBadge(0)(Icon)
        
   function getQuantity(){
    let qte=0;
    
        
        console.log(card,"header")
        card.forEach(elt=>{
            qte=qte+elt.quantity
            console.log(qte,'qye')
           
        })
        return qte
    
    }

    return(
        <View style={styles.header}>
            <View style={{alignItems:"center", justifyContent:'center', marginLeft:20}}>
                <Icon
                    type='material-community'
                    name='menu'
                    color={colors.cardBackground}
                    size ={32}
                    onPress={()=>{
                        navigation.toggleDrawer()
                    }}
                />

            </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:colors.cardBackground, fontSize:25, fontWeight:'bold'}}>Xpressfood</Text>
            </View>
            <TouchableOpacity
            onPress={()=>{
               navigation.navigate("CardScreen",{card:card}) 
            }}
            >
            { !card ?
                <View style={{alignItems:'center', justifyContent:'center', marginRight:15}}>
                <BadgeIcon 
                    type = 'material-community'
                    name = 'cart'
                    size = {35}
                    color = {colors.cardBackground}
                    
                />
            </View>:<View style={{alignItems:'center', justifyContent:'center', marginRight:20,marginTop:10}}>
                <BadgeIcon 
                    type = 'material-community'
                    name = 'cart'
                    size = {35}
                    color = {colors.cardBackground}
                    
                />
            </View>}
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        justifyContent: 'space-between'
    }
})