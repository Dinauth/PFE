import React, {useState} from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, TouchableWithoutFeedback, ImageBackground  } from "react-native";
import { Icon } from 'react-native-elements';
import { SearchComponent } from '../components/searchComponent';
import { categoryData } from '../global/data';
import { colors } from '../global/style';

const SCREEN_WIDTH = Dimensions.get('window').width


export function Search({navigation}) {

    return(
        <View style={styles.container}>
           
           <SearchComponent />
           <View>
                <FlatList 
                    style={{marginBottom:1}}
                    data= {categoryData}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>(
                        <TouchableWithoutFeedback
                        onPress={()=>{
                            navigation.navigate("searchScreenResult",{item:item.name})
                        }}
                        >
                            <View  style={styles.imageView}>
                                <ImageBackground 
                                    style={styles.image}
                                    source ={item.image}
                                >
                                <View style={styles.textView}>
                                    <Text style={{color:colors.grey1}}>{item.name}</Text>
                                </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}

                    horizontal ={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={ <Text style={styles.listHeader}>
                        Top categorie
                    </Text>}
                    ListFooterComponent={<Footer/>}
                />
           </View>
        </View>
    )
    
}

const Footer = ()=>{
    return(
        <View style={{marginTop:20,marginBottom:30}}>
           <View>
                <FlatList 
                    style={{}}
                    data= {categoryData}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>(
                        <TouchableWithoutFeedback
                        onPress={()=>{
                            navigation.navigate("searchScreenResult",{item:item.name})
                        }}
                        >
                            <View  style={styles.imageView}>
                                <ImageBackground 
                                    style={styles.image}
                                    source ={item.image}
                                >
                                <View style={styles.textView}>
                                    <Text style={{color:colors.grey1}}>{item.name}</Text>
                                </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}

                    horizontal ={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={ <Text style={styles.listHeader}>
                        More categorie
                    </Text>}
                    
                />
           </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:20,
        paddingTop:20
    },
    imageView : {
        borderRadius:10,
        justifyContent:'center',
        alignItems:"center",
        width:SCREEN_WIDTH*0.4475,
        height:SCREEN_WIDTH*0.4475,
        marginLeft:SCREEN_WIDTH*0.035,
        marginBottom:SCREEN_WIDTH*0.035
    },
    image:{
        height:SCREEN_WIDTH*0.4475,
        width: SCREEN_WIDTH*0.4475,
        borderRadius:10
    },
    listHeader:{
        fontSize:16,
        color:colors.grey2,
        paddingBottom:10,
        marginLeft:12
    },
    textView:{
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgba(52,52,52,0.3)"
    }
})