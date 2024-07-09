import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/style";
import { Icon } from "react-native-elements";
import { InfoCard } from "./infoCard";


export const Card = ({navigation,route})=>{
    const {card}=route.params
    return(
        <View style={{flex:1}}>
        <View style={styles.container}>
            
           
                        <View style={styles.view1}>
                                <Icon 
                                    name="arrow-left"
                                    type="material-community"
                                    color={colors.black}
                                    size={25}
                                    onPress={()=>navigation.navigate("Home")}
                                />
                                <Text style={styles.text1}>Your cart</Text>
                                </View>
                            
                                
                                 <View style={{flex:1}}>
            <InfoCard
            route={route}
            navigation={navigation}
            />
        </View>

                 
        </View>

       

    </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        top:0,
        left:0,
        right:0
    },
    text1:{
        color:colors.black,
        fontSize:18,
        fontWeight:'bold',
        marginLeft:40
    },
    scene:{
        flex:1
    },
    view1:{
       flexDirection:'row',
       alignItems:'center',
       padding:10,
       backgroundColor:colors.buttons,
       top:0,
        left:0,
        right:0,
        paddingTop:25

    },
    empty:{
        flex:1,

    }
})