import React from 'react';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import { colors, parameters } from '../global/style';
import { Icon } from 'react-native-elements';

export function FoodCard({
    OnPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    image,
    screenWidth,
    navigation,
    id
}) {

    return(
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("RestaurantHome",{id})
        }}
        >
            <View style={{...styles.cardView,width:screenWidth}}>
<Image 
style={{...styles.image, width:screenWidth}}
source= {image}
/>
<View>
                <View>
                    <Text style={styles.rest}>
                        {restaurantName} 
                    </Text>
                </View>
                <View style={{flex:1, flexDirection:"row"}}>
                    <View style={styles.distance}>
                            <Icon
                            name='place'
                            type='material'
                            color={colors.grey2}
                            size ={38}
                            iconStyle={{marginTop:3}}
                        />
                         <Text style={styles.min}>{farAway} Min</Text>
                    </View>

                    <View style={{flex:9, flexDirection:"row"}}>
                        <Text style={styles.address}>{businessAddress}</Text>
                    </View>
                </View>
            </View>
            </View>

           
            <View style={styles.review}>
                <Text style={styles.average}>{averageReview}</Text>
                <Text style={styles.nbrReview}>{numberOfReview} reviews</Text>
            </View>
        </TouchableOpacity>
    )


    
}

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomRightRadius:5,
        borderBottomRightRadius:5
    },
    image:{
        borderTopLeftRadius:5,
        height:150,
        borderTopRightRadius:5
    },
    rest:{
        fontSize:17,
        fontWeight:"bold",
        color:colors.grey1,
        marginTop:5,
        marginLeft:10
    },
    distance:{
        flex:4,
        flexDirection:"row",
        borderRightColor:colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1
    },
    min:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey3,
    },
    address:{
        fontSize:12,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10
    },
    review:{
        position:'absolute',
        top:0,
        right:10,
        backgroundColor:'rgba(52,52,52,0.3)',
        padding:2,
        alignItems:"center",
        justifyContent:"center",
        borderBottomLeftRadius:12,
        borderTopRightRadius:5
    },
    average:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginTop:-3
    },
    nbrReview:{
        color:"white",
        fontSize:13,
        marginRight:0,
        marginLeft:0

    }

})
