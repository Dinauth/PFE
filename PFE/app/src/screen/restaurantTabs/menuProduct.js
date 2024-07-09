import React, {useState} from "react";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import { Route2, Route3, RouteMenu } from "./menuRoute";
import { menu } from "../../global/data";
import { colors } from "../../global/style";
import { Icon } from "react-native-elements";
import { TabBar, TabView } from "react-native-tab-view";
import { RestaurantHeader } from "../../components/restaurantHeader";

const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH

export const MenuProd = ({navigation,route})=>{
    const [routes]=useState(menu)
    const [index,setIndex]=useState(0)



const renderScene = ({route})=>{
    switch (route.key) {
        case 1:
            
            return <RouteMenu
            route={route}
            navigation={navigation}/>
        case 2:
            
            return <Route2
            route={route}
            navigation={navigation}/>
        case 3:
            
            return <Route3
            route={route}
            navigation={navigation}
            />
       
        default:
            return null;
    }
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


    return(
        <View style={styles.container}>
            
           
                        <View style={styles.view1}>
                                <Icon 
                                    name="arrow-left"
                                    type="material-community"
                                    color={colors.black}
                                    size={25}
                                    onPress={()=>navigation.goBack()}
                                />
                                <Text style={styles.text1}>Menu</Text>
                                </View>
                                <TabView
                            navigationState={{index,routes}}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={initialLayout}
                            renderTabBar={renderTabBar}
                            tabBarPosition="top"
                            navigation = {navigation}
                            route = {route}
                        />
                                

                 
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
    view2:{
        marginTop:5,
        paddingBottom:20
    },
    scene2:{
        backgroundColor:'#673ab7'
    }, 
    tab:{
        padding:0,
        backgroundColor:colors.buttons,
        justifyContent:'space-between',
        //alignItems:'center'
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
    /*view14:{
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
    },*/
})