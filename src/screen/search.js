import React, {useState} from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions  } from "react-native";
import { Icon } from 'react-native-elements';
import { SearchComponent } from '../components/searchComponent';




export function Search() {

    return(
        <View style={styles.container}>
           <SearchComponent />
        </View>
    )
    
}


const styles = StyleSheet.create({
    container:{
       
       
    }
})