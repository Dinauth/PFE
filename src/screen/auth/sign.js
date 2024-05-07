import React, {useState, useRef} from 'react';
import * as Animable from "react-native-animatable";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { colors, parameters, title } from '../../global/style';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import { Header } from '../../components/header';


export function Sign({navigation}) {


        const[textInput, setTextInput] = useState(false)

        const textInput1 = useRef(1)
        const textInput2 = useRef(2)






    return (
        <View style={styles.container}>

<Header title="MY ACCOUNT" type="arrow-left" navigation = {navigation} />

        <View style = {styles.sign}>
                <Text style={title}>
                        Sign-In
                </Text>
        </View>

        <View style = {styles.text0}>
                <Text style = {styles.text}>
                       Please enter the email and password
                </Text>
                <Text style = {styles.text}>
                      registered with your account
                </Text>
        </View>


        <View style = {styles.input}>
            <View>
                <TextInput
                style = {styles.email}
                placeholder='Email'
                ref={textInput1}
                />

                
            </View>
            <View  style = {styles.password}>
                <Animable.View   animation={textInput ? "" : "fadeInLeft"} duration={400}>
        <Icon
        name = "lock"
        iconStyle={{color:colors.grey3}}
        type='material'
        />

       
                

                </Animable.View >
                <TextInput
               style={{width:"80%"}}
               placeholder='Password'
               ref={textInput2}
               onFocus={()=>{
                setTextInput(false)
               }}
               onBlur={()=>{
                setTextInput(true)
               }}
               />
                <Animable.View  animation={textInput ? "" : "fadeInLeft"} duration={400}>
                    
                <Icon
        name = "visibility-off"
        iconStyle={{color:colors.grey3}}
        type='material'
        style={{marginRight:10}}
        />


                </Animable.View>
               

                
            </View>

                
        </View>

        <View>
            <Button 
            title="SIGN IN"
            buttonStyle={parameters.buttonStyle}
            titleStyle={parameters.buttonTitle}
            onPress={()=>{
                navigation.navigate("Drawer")
            }}
            />
        </View>


               <View style = {{alignItems:"center"}}>
                <Text style={{...styles.text1, textDecorationLine:"underline"}}>Forgot Password ?</Text>
               </View>

               <View style = {{alignItems:"center", marginTop:20, marginBottom:20}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>OR</Text>
               </View>

               <View style={{marginHorizontal:10, marginTop:10}}>
                <SocialIcon 
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    style={styles.SocialIcon}
                    onPress={()=>{

                    }}
                    
                />
               </View>

               <View style={{marginHorizontal:10, marginTop:10}}>
                <SocialIcon 
                    title='Sign In With Google'
                    button
                    type='google'
                    style={styles.SocialIcon}
                />
               </View>

               <View style = {{ marginLeft:20}}>
                <Text style={{...styles.text1}}>New on your app ?</Text>
               </View>
               <View style={{alignItems:"flex-end", marginHorizontal:20}}>
                 <Button 
                    title='Create an account'
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createTitle}
                 />
               </View>

        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    sign: {
        marginLeft:20,
        marginTop:10
    },
    text0: {
        alignItems:"center",
        marginTop:10
    },
    input: {
        marginTop:30
    },
     text:{
        color: colors.grey3,
        fontSize:16,
     },
     text1:{
        color: colors.grey3,
        fontSize:16,
        alignItems:"center",
        marginTop:20,
        
     },
     email:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15
     },
     password:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft:15
     },
     SocialIcon:{
        borderRadius: 12,
        heigh:50
     },
     createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
       
        height:40,
        paddingHorizontal:15,
       

        
     },
     createTitle:{
        color:"#ff8c52",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
     }
})