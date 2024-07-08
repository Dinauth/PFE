import React, {useState} from 'react';
import {Callout} from 'react-native-maps';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions  } from "react-native";
import { Icon } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {Marker} from 'react-native-maps';
import { restaurantData } from '../global/data';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { colors } from '../global/style';




export function Map() {


    const MyCustomMarkerView=()=>{
        return (
            <Image 
            source={require('../../assets/car.jpeg')}
            style={{width:30,height:30}}
            />
        )
    }
    const MyCustomCalloutView=()=>{
        return (
            <View>
                <Text>Livreur</Text>
            </View>
        )
    }

    return(

        <View style={styles.container}>
          
          <View style={{zIndex:1,flex:0.5,marginTop:15}}>
            <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyCD_w3EHdzAIVIDa4r3o7khz4sRHYtUJpI',
        language: 'en',
      }}
      onFail={error=>console.log(error)}
    />
            </View>


            <View style={{flex:1}}>

          
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{...styles.map,width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
       region={{
        "latitude": 43.2951,
        "longitude": -0.3708,
        "latitudeDelta": 0.05,
        "longitudeDelta": 0.05
       }}
     >
        
        <Marker coordinate={{latitude: 43.31028119846862, longitude: -0.37968434890362524}}>
            <MyCustomMarkerView />
            <Callout style={{width:60,height:15,backgroundColor:'white'}}>
    <MyCustomCalloutView  />
  </Callout>
        </Marker>

        {
        restaurantData.map(item=><View key ={item.id}>
            <Marker
      coordinate={{latitude: item.coordinates.lat, longitude: item.coordinates.lng}}
      title={item.restaurantName}
      description={item.foodType}
    />
        </View>)
     }
        
        
     </MapView>
     </View>
     
   </View>
    )
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    container_m: {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
        zIndex:0
       
      },
})