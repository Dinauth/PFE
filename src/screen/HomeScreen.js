import React, {useState} from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions  } from "react-native";
import { Icon } from 'react-native-elements';
import { HomeHeader } from '../components/HeaderHome';
import { colors, parameters } from '../global/style';
import CountDown from 'react-native-countdown-component';
import { categoryData,restaurantData } from '../global/data';
import { FoodCard } from '../components/FoodCard';


const SCREEN_WIDTH = Dimensions.get('window').width

export function Home({navigation}) {

    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setindexCheck] = useState("0")
    
    return(
        <View style={styles.container}>
            <HomeHeader 
                navigation={navigation}
            />
<ScrollView
stickyHeaderIndices={[0]}
showsVerticalScrollIndicator={true}
>
    <View style={{backgroundColor:colors.cardBackground, paddingBottom:5}}>
            <View style ={{marginTop:20, flexDirection:'row', justifyContent:'space-evenly'}}>
                <TouchableOpacity
                    onPress={()=>{
                        setDelivery(true)
                    }}
                >
                    <View style = {{...styles.deliveryButton,backgroundColor:delivery ? colors.buttons : colors.grey5}}>
                        <Text style={styles.deliveryText}>Delivery</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>{
                        setDelivery(false)
                        navigation.navigate("Map")
                    }}
                >
                    <View style = {{...styles.deliveryButton,backgroundColor:delivery ? colors.grey5 : colors.buttons}}>
                        <Text style={styles.deliveryText}>Pick up</Text>
                    </View>
                </TouchableOpacity>
            </View>
    </View>
    <View style={styles.filter}>
            <View style={styles.location}>
                <View style={{flexDirection:'row', alignItems:'center', paddingLeft:10}}>
                    <Icon 
                        type = "material-community"
                        name = 'map-marker'
                        color = {colors.grey1}
                        size={26}
                    />
                    <Text >my location</Text>

                    
                </View>
                <View style={styles.clock}>
                <Icon 
                        type = "material-community"
                        name = 'clock-time-four'
                        color = {colors.grey1}
                        size={26}
                    />
                    <Text >Now</Text>

                </View>
            </View>
            <View>
            <Icon 
                        type = "material-community"
                        name = 'tune'
                        color = {colors.grey1}
                        size={26}
                    />
            </View>
        </View>

<View style={styles.headerView}>
    <Text style={styles.headerText}>Categories</Text>
</View>
<View>
    <FlatList 
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        data={categoryData}
        keyExtractor={(item)=>item.id.toString()}
        extraData={indexCheck}
        renderItem={({item, index})=>(
             <Pressable 
             onPress={()=>{
                setindexCheck(item.id)
             }}>
                <View style = {indexCheck === item.id ? {...styles.smallCardSelected}: {...styles.smallCard}}>
                    <Image 
                    style={{height:60, width:60, borderRadius:30}}
                    source= {item.image}
                    />
                    <View >
                    <Text style = {indexCheck === item.id ? {...styles.smallCardTextS}: {...styles.smallCardText}}>{item.name}</Text>
                    </View>
                    
                </View>
             </Pressable>
    )}
     />
</View>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Free Delivery</Text>
            </View>

            <View>

             <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style = {{marginLeft:15,fontSize:16, marginTop:10, marginRight:5}}>option changing in</Text>
             {/* <CountDown
        until={3600}
        //onFinish={() => alert('finished')}
        //onPress={() => alert('hello')}
        size={14}
        digitStyle = {{backgroundColor:colors.lightgreen}}
        digitTxtStyle = {{color:colors.cardBackground}}
        timeToShow={['M','S']}
        timeLabels={{m:'Min', s:'Sec'}}
      /> */}
             </View>

                <FlatList 
                     style = {{marginTop:10, marginBottom:10}}
                     horizontal={true}
                     data={restaurantData}
                     keyExtractor={(item, index)=>index.toString()}
                     showsHorizontalScrollIndicator = {false}
                     renderItem={({item})=>(
                        <View style = {{marginRight:5}}>
                            <FoodCard
                                screenWidth={ SCREEN_WIDTH*0.8}
                                image={item.image}
                                restaurantName = {item.restaurantName}
                                numberOfReview = {item.numberOfReview}
                                businessAddress = {item.businessAddress}
                                farAway         = {item.farAway}
                                averageReview = {item.averageReview}
                                
                                
                            />
                        </View>

                     )
                    }
                />
            </View>


            <View style={styles.headerView}>
                <Text style={styles.headerText}>Promotion available</Text>
            </View>

            <View>
                <FlatList 
                     style = {{marginTop:10, marginBottom:10}}
                     horizontal={true}
                     data={restaurantData}
                     keyExtractor={(item, index)=>index.toString()}
                     showsHorizontalScrollIndicator = {false}
                     renderItem={({item})=>(
                        <View style = {{marginRight:5}}>
                            <FoodCard
                                screenWidth={ SCREEN_WIDTH*0.8}
                                image={item.image}
                                restaurantName = {item.restaurantName}
                                numberOfReview = {item.numberOfReview}
                                businessAddress = {item.businessAddress}
                                farAway         = {item.farAway}
                                averageReview = {item.averageReview}
                                
                                
                            />
                        </View>

                     )
                    }
                />
            </View>

            <View style={styles.headerView}>
                <Text style={styles.headerText}>Restaurant in your area</Text>
            </View>
            <View style={{width:SCREEN_WIDTH, paddingTop:10}}>
{
    restaurantData.map(item =>(
        <View key = {item.id} style={{paddingBottom:20}}>


                        <FoodCard
                                screenWidth={ SCREEN_WIDTH*0.95}
                                image={item.image}
                                restaurantName = {item.restaurantName}
                                numberOfReview = {item.numberOfReview}
                                businessAddress = {item.businessAddress}
                                farAway         = {item.farAway}
                                averageReview = {item.averageReview}
                                
                                
                            />

        </View>
    ))
}
            </View>
            </ScrollView>

            { delivery &&
                <View style={styles.floatButton}>
                <TouchableOpacity
                 onPress={()=>{
                    navigation.navigate("Map")
                }}
                >
                    <Icon 
                        name="place"
                        type="material"
                        size={32}
                        color={colors.buttons}
                       
                    />
                    <Text style={{color:colors.grey2}}>Map</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {flex:1},
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5
    },
    deliveryText:{
        marginLeft:5,
        fontSize:16
    },
    location:{
        flexDirection:'row',
        backgroundColor:colors.grey5, 
        borderRadius:15, 
        paddingVertical:3,
        justifyContent:"space-between", 
        paddingHorizontal:20
},
    filter:{
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-evenly", 
        marginHorizontal:10, 
        marginVertical:10
    },
    clock:{
        flexDirection:'row', 
        alignItems:'center', 
        marginLeft:20, 
        backgroundColor:colors.cardBackground,
        borderRadius:15,
        paddingHorizontal:5,
        marginRight:20
},
headerText:{
    color:colors.grey2,
    fontSize:22,
    fontWeight:"bold",
    paddingLeft:10
},
headerView:{
    backgroundColor:colors.grey5,
    paddingVertical:3
},
smallCard:{
    borderRadius:30,
    backgroundColor:colors.grey5,
    justifyContent:"center",
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
},
smallCardSelected:{
    borderRadius:30,
    backgroundColor:colors.buttons,
    justifyContent:"center",
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
},
smallCardText:{
    fontWeight:"bold",
    color: colors.cardBackground
},
smallCardTextS:{
    fontWeight:"bold",
    color: colors.grey2
},
floatButton:{
    position:'absolute',
    backgroundColor:'white',
    bottom:10,
    right:15,
    width:60,
    height:60,
    borderRadius:30,
    alignItems:'center',
    elevation:10
}
})
