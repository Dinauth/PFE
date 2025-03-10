import React,{useState,useRef,useEffect,useContext} from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { colors, parameters } from '../../global/style';
import {  Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { SignInContext } from '../../context/authContext';
import auth from '@react-native-firebase/auth'


export function SignWelcome({navigation}) {

    const {dispatchSignedIn} = useContext(SignInContext)

    useEffect(()=>{
      auth().onAuthStateChanged((user)=>{
        if(user){
          dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:user}})
        }else{
          dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
        }
      })
      
    },[])


    return (
        <View style={{flex:1}}>

                    <View style={{flex:3, justifyContent:'flex-start', alignItems:'center', marginTop:10, paddingTop:10}}>
                        <Text style={{fontSize:26, color:colors.buttons, fontWeight:"bold"}}>DISCOVER RESTAURANT</Text>
                        <Text style={{fontSize:26, color:colors.buttons, fontWeight:"bold"}}> IN YOUR AREA</Text>
                        
                    </View>
                    <View style={{flex:3, justifyContent:'center'}}>
                       <Swiper autoplay={true}>
                        <View style={styles.slide1}>
                            <Image source = {{uri:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"}}
                            style= {{height:"100%", width: "100%"}}
                             />

                        </View>

                        <View style={styles.slide2}>
                            <Image source = {{uri:"https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"}}
                            style= {{height:"100%", width: "100%"}}
                             />

                        </View>

                        <View style={styles.slide3}>
                            <Image source = {{uri:"https://hungerstation.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.a7197273.jpg&w=1440&q=75"}}
                            style= {{height:"100%", width: "100%"}}
                             />

                        </View>
                       </Swiper>
                    </View>

                    <View style={{flex:4 }}>

                    <View style={{marginHorizontal:20, marginTop:30}}>
            <Button 
            title="SIGN IN"
            buttonStyle={parameters.buttonStyle}
            titleStyle={parameters.buttonTitle}
            onPress={()=>{
                navigation.navigate("signIn")
            }}
            />
        </View>
        <View style={{marginHorizontal:20, marginTop:30}}>
                 <Button 
                    title='Create an account'
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createTitle}
                    onPress ={()=>{navigation.navigate("SignUpScreen")}}
                 />
               </View>

                    </View>

               
        
        </View>
        
    )
    
}


const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        banckgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        banckgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        banckgroundColor: '#92BBD9'
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        marginLeft:20,
        height:50,
        borderColor:colors.buttons,
        paddingHorizontal:15,
        width:"89%"

        
     },
     createTitle:{

        color:colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
     }
    
    
})