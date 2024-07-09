import React from "react";
import { StyleSheet, Text, View,Dimensions, FlatList } from "react-native";
import { restaurantData } from "../global/data";
import { SearchResultComp } from "../components/searchResultComponent";
import { colors } from "../global/style";
const SCREEN_WIDTH = Dimensions.get('window').width

export function SearchResult({navigation,route}){

    return(
     <View>
        
        <View>
            <FlatList 
            style = {{backgroundColor:colors.cardBackground}}
            data ={restaurantData}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item,index})=>(
                <SearchResultComp 

                screendWidth ={SCREEN_WIDTH}
                image ={item.image}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                productData={item.productData}
                onPressRestaurantCard={()=>{
                    navigation.navigate("RestaurantHome",{id:index,name:item.restaurantName})
                }}
                />
            )}
            ListHeaderComponent={
                <View >
                    <Text style={styles.container}>{restaurantData.length} Search Result for {route.params.item}</Text>
                </View>
            }
            showsVerticalScrollIndicator={false}
            />
        </View>
        
     </View>
    )
}


const styles = StyleSheet.create({
    container:{
       
        fontSize:17,
        fontWeight:'bold',
        color:colors.grey1,
        paddingTop:20
    
    }
})