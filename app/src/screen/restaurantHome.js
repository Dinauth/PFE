import React,{useState, useContext,useEffect} from "react";
import { StyleSheet, Text, View,Dimensions, ScrollView } from "react-native";
import { RestaurantHeader } from "../components/restaurantHeader";
import { colors, fonts } from "../global/style";
import { restaurantData } from "../global/data";
import { Icon } from "react-native-elements";
import {TabView, TabBar} from 'react-native-tab-view';
import { Menu } from "./restaurantTabs/menu";
import { SignInContext } from "../context/authContext";
import { Info } from "./restaurantTabs/info";
import { Review } from "./restaurantTabs/reviews";
import { Gallery } from "./restaurantTabs/gallery";


const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH


export const RestaurantHome = ({navigation,route})=>{
    const {dispatchSignedIn} = useContext(SignInContext)
    const {signedIn} = useContext(SignInContext)
    
    
        
        useEffect(()=>{
            console.log("useEffet")
            if (route.params.state ) {
                
            if (signedIn.userCard && signedIn.userCard.length) {
                console.log(signedIn.userCard.length)
                signedIn.userCard.push(route.params.state)
                console.log("existe")
                dispatchSignedIn({type:"CARD_UPDATE",payload:{userCard:signedIn.userCard}})
                route.params.state=null
            }else{
                dispatchSignedIn({type:"CARD_UPDATE",payload:{userCard:[route.params.state]}})
                console.log("existe pas")
                route.params.state=null
            }
        }
          },[navigation,route])
          
        
        
    
    
    const {id,name}=route.params
    const [routes] = useState([
        {key:'first', title:'Menu'},
        {key:'second', title:'INFO'},
        {key:'third', title:'REVIEWS'},
        {key:'fourth', title:'GALLERY'},
    ])
const menuPress=()=>{
    navigation.navigate("MenuProduct")
}

const infoPress=()=>{
    navigation.navigate("MenuProduct")
}


    const renderTabBar = props =>(
        <TabBar
            {...props}
            indicatorStyle = {{backgroundColor:colors.cardBackground}}
            tabStyle={styles.tabStyle}
            scrollEnabled = {true}
            style={styles.tab}
            labelStyle ={styles.tabLabel}
            contentContainerStyle={styles.tabContainer}
        />
    )

    const [index,setIndex]=useState(0)
    
    


        const updateRoute = ()=>{
            return(
                <View>

                </View>
            )
        }

    return(
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <RestaurantHeader 
                        id={id}
                        navigation={navigation}
                    />
                    {restaurantData[id].discount && 
                    <View style={styles.view1}>
                        <Text style={styles.text1}>{restaurantData[id].discount}% OFF ON FOOD TOTAL</Text>
                        
                    </View>
                    }
                    <View style={styles.view2}>
                        <View style={styles.view3}>
                            <Text style={styles.text2}>{restaurantData[id].restaurantName}</Text>
                            <Text style={styles.text3 }>{restaurantData[id].foodType}</Text>
                            <View style={styles.view4}>
                                <Icon 
                                    name="star"
                                    type="material-community"
                                    color={colors.grey3}
                                    size={15}
                                />
                                <Text style={styles.text4}>{restaurantData[id].averageReview}</Text>
                                <Text style={styles.text5}>{restaurantData[id].numberOfReview}</Text>
                                <Icon 
                                    name="map-marker"
                                    type="material-community"
                                    color={colors.grey3}
                                    size={15}
                                />
                                <Text style={styles.text6}>{restaurantData[id].farAway} mi away</Text>
                            </View>
                        </View>
                      <View style={styles.view5}>
                        <Text style={styles.text6}>Collect</Text>
                        <View style={styles.view7}>
                            <Text style={styles.text7}>{restaurantData[id].collectTime}</Text>
                            <Text style={styles.text8}>min</Text>

                        </View>
                      </View>
                      <View style={styles.view8}>
                        <Text style={styles.text6}>Delivery</Text>
                        <View style={styles.view9}>
                            <Text style={styles.text9}>{restaurantData[id].collectTime}</Text>
                            <Text style={styles.text11}>min</Text>

                        </View>
                      </View>
                    </View>
                </View>
                    <View style={styles.view10}>
                        <TabView
                            navigationState={{index,routes}}
                            renderScene={updateRoute}
                            onIndexChange={setIndex}
                            initialLayout={initialLayout}
                            renderTabBar={renderTabBar}
                            tabBarPosition="top"
                        />
                    </View>
                    {
                        index === 0 && <Menu
                        onPress={menuPress}
                        />
                    }
                    {
                        index === 1 && <Info/>
                    }
                    {
                        index === 2 && <Review/>
                    }
                    {
                        index === 3 && <Gallery/>
                    }
            </ScrollView>
            
                    

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
    view1:{
        width:"100%",
        padding:3,
        alignItems:'center',
        justifyContent:'center'
    },
    text1:{
        color:'green',
        fontSize:14,
        fontWeight:'bold'
    },
    view2:{
        flexDirection:'row',
        flex:1,
        marginBottom:5,
        marginHorizontal:10,
        justifyContent:'space-between'
    },
    view3:{
        flex:8
    },
    text2:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.grey1
    },
    text3:{
        fontSize:15,
        color:colors.grey3
    },
    view4:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5
    },
    text4:{
        fontFamily:fonts.android.bold,
        fontSize:13,
        color:colors.grey3,
        marginLeft:2
    },
    text5:{
        fontFamily:fonts.android.bold,
        fontSize:13,
        color:colors.grey3,
        marginLeft:2,
        marginRight:5
    },
    text6:{
        fontFamily:fonts.android.bold,
        fontSize:13,
        color:colors.grey1,
        marginLeft:0,
        
    },
    view5:{
        flex:3,
        alignItems:'center'
    },
    view6:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.grey1
    },
    view7:{
        width:40,
        height:40,
        alignItems:"center",
        borderRadius:20,
        justifyContent:'space-around'
    },
    text7:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.grey3,
        marginTop:5
    },
    text8:{
        fontSize:13,
        color:colors.grey3,
        marginBottom:5
    },
    view8:{
        flex:3,
        alignItems:'center'
    },
    text9:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.cardBackground
    },
    view9:{
        width:40,
        height:40,
        backgroundColor:colors.buttons,
        alignItems:"center",
        borderRadius:20,
        justifyContent:"space-around"
    },
    text10:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.cardBackground,
        marginTop:5
    },
    text11:{
        fontSize:13,
        
        color:colors.cardBackground,
        marginBottom:5
    },
    view10:{
        elevation:10,
        backgroundColor:colors.pagebackground
    },
    view11:{
        backgroundColor:colors.buttons,
        heignt:50,
        alignContent:'center',
        marginBottom:0
    },
    view12:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    text12:{
        padding:10,
        fontWeight:'bold',
        fontSize:18,
        color:colors.cardBackground
        
    },
    view13:{
        borderWidth:1,
        marginRight:10,
        borderColor:colors.cardBackground,
        borderRadius:6,
        paddingBottom:2
    },
    text13:{
        paddingHorizontal:3,
        fontWeight:'bold',
        fontSize:18,
        color:colors.cardBackground,

    },
    tab:{
        padding:0,
        backgroundColor:colors.buttons,
        justifyContent:'space-between',
        alignItems:'center'
    },
    tabContainer:{
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center'
    },
    tabLabel:{
        fontWeight:'bold',
        color:colors.cardBackground
    },
    tabStyle:{
        width:SCREEN_WIDTH/4,
        maxHeight:45
    },
    view14:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        backgroundColor:colors.buttons,
        top:0,
        left:0,
        right:0,
        paddingTop:25
    },
    text14:{
        fontWeight:"bold",
        marginLeft:40,
        color:colors.black,
        fontSize:18
    },
    view15:{
        marginTop:5,
        paddingBottom:20 
    }



})