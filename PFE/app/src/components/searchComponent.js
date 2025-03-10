import React,{useState,useRef} from 'react';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback, Modal, TextInput, FlatList, Keyboard } from "react-native";
import { colors, parameters } from '../global/style';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'
import {categoryData} from '../global/data'
import { useNavigation } from '@react-navigation/native';
import filter from 'lodash/filter'



export function SearchComponent() {


    const navigation = useNavigation()
    const [data, setData] = useState([...categoryData])
    const [modalVisible,setModalVisible] = useState(false)
    const [texInputFossued,setTexInputFossued] = useState(true)
    const textInput = useRef(0)
    const contains = ({name},query)=>{
        const lower = name.toLowerCase();
        const q = query.toLowerCase();
        if(lower.includes(q)){
            return true
        }
        return false
    }

    const handleSearch = (text) =>{
        const dataSearch = filter(categoryData,userSearch =>{
           
            return contains(userSearch,text)
        })
        
        setData([...dataSearch])
    }

    return(
        <View style={{alignItems:'center'}}>
           <TouchableWithoutFeedback
           onPress={()=>{
            setModalVisible(true)
           }}
           >
              <View style={styles.searchArea}>
                    <Icon 
                        name="search"
                        type="material"
                        style={styles.searchIcon}
                        size={32}
                    />
                    <Text style = {{fontSize:15}}>What are you looking for</Text>
              </View>
           </TouchableWithoutFeedback>
           <Modal
            animationType='fade'
            transparent = {false}
            visible = {modalVisible}
           >

            <View style={styles.modal}>
                <View style={styles.view1}>

                    <View style={styles.textInput}>
                        <Animatable.View
                            animation={ texInputFossued ? "fadeInRight" : "fadeInLeft"}
                            duration={400}
                        
                        >
                            <Icon 
                                name ={texInputFossued ? "arrow-back" :"search"}
                                type="material"
                                iconStyle={{marginRight:5}}
                                style={styles.icon2}
                                onPress={()=>{
                                    if (texInputFossued) 
                                        setModalVisible(false)
                                        setTexInputFossued(true)
                                    
                                    
                                }}
                            />
                        </Animatable.View>
                        <TextInput 
                            style={{width:"90%"}}
                            placeholder=''
                            autoFocus ={false}
                            ref={textInput}
                            onFocus={()=>{
                                setTexInputFossued(true)
                            }}
                            onBlur={()=>{
                                setTexInputFossued(false)
                            }}

                            onChangeText={handleSearch}
                        />

                        <Animatable.View
                        animation={ texInputFossued ? "fadeInLeft" : ""}
                        duration={400}
                        >
                            <Icon 
                                name = {texInputFossued ? "cancel": null}
                                type='material'
                                style={{marginRight:-10}}
                                onPress={()=>{
                                    textInput.current.clear()
                                    handleSearch('')
                                    
                                }
                                }
                            />
                        </Animatable.View>

                    </View>

                </View>

                <FlatList 
                    data={data}
                    renderItem={({item})=>(
                        <TouchableOpacity
                        onPress={()=>{
                            Keyboard.dismiss
                            navigation.navigate("searchScreenResult",{item:item.name})
                            setModalVisible(false)
                            setTexInputFossued(true)
                        }}
                        >
                            <View style={styles.view2}>
                                <Text style={{color:colors.grey2, fontSize:15}}>{item.name}</Text>

                            </View>


                        </TouchableOpacity>
                        
                    )}
                    keyExtractor={item => item.id}
                
                />

            </View>

           </Modal>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text1:{
        color:colors.grey3,
        fontSize:16
    },
    textInput:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:0,
        borderColor:"#86939e",
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        alignContent:'center',
        paddingLeft:10,
        paddingRight:10
    },
    searchArea:{
        width:"94%",
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:'row',
        alignItems:'center'
    },
    searchIcon:{
        fontSize:24,
        padding:5,
        color:colors.grey2
    },
    view1:{
        height:50,
        justifyContent:"center",
        paddingHorizontal:10
    },
    view2:{
        flexDirection:'row',
        padding:15,
        alignItems:'center'
    },
    icon2:{
        fontSize:24,
        padding:5,
        color:colors.grey2
    },
    modal:{
        flex:1,
    }
})