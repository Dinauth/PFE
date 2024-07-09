import React, {useState,useContext} from 'react';

import { View, Text, StyleSheet, Switch, TouchableOpacity  } from "react-native";
import { Icon,Avatar } from 'react-native-elements';
import { colors } from '../../global/style';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import { SignInContext } from '../../context/authContext';



export function DrawerContent(props) {

    const {dispatchSignedIn} = useContext(SignInContext)

    async function signOut(){
       
        try{
           
            auth()
            .signOut()
            .then(
                ()=>{console.log("USER SUCCESSFULLY SIGNED OUT")
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
            })
    
        }catch(errot){
            Alert.alert(error.code)
        }
    }
    

    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor:colors.buttons}}>

               
            <View style={styles.avatarView}>
                <Avatar 
                    rounded
                    size={75}
                    avatarStyle= {styles.avatar}
                    source = {{uri:"https://www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg"}}
                />
                <View style={{marginLeft:15}}>
                    <Text style={{fontWeight:'bold',color:colors.cardBackground,fontSize:15}}>Admin test</Text>
                    <Text style={{color:colors.cardBackground}}>admin@test.com</Text>
                </View>
              
              


             </View>

<View style={{flexDirection:'row', justifyContent:'space-evenly', paddingBottom:5}}>


               <View style={{flexDirection:'row', marginTop:0}}>
                    <View style={{marginLeft:10, alignItems:"center", justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold', color:colors.cardBackground, fontSize:18}}>1</Text>
                            <Text style={{color:colors.cardBackground,fontSize:14}}>My Favorites</Text>
                    </View>
              </View>

              <View style={{flexDirection:'row', marginTop:0}}>
                    <View style={{marginLeft:10, alignItems:"center", justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold', color:colors.cardBackground, fontSize:18}}>0</Text>
                            <Text style={{color:colors.cardBackground,fontSize:14}}>My Card</Text>
                    </View>
              </View>


</View>

            </View>
            <DrawerItemList {...props} />
            <DrawerItem 
                label = "Help"
                icon={({color,size})=>(
                   <Icon 
                   type="material-community"
                   name = "lifebuoy"
                   color={color}
                   size={size}
                   />
                )}
            
            />


                    <View style={{borderTopWidth:1, borderTopColor:colors.grey5}}>
                        <Text style={styles.preference}>Preferences</Text>
                        <View style={styles.switchText}>
                            <Text style={styles.darkTheme}>Dark theme</Text>
                            <View style={{paddingRight:10}}>
                                <Switch 
                                    trackColor={{false:"#767577",true:"#81b0ff"}}
                                    thumbColor="#f4f3f4"
                                />

                            </View>

                        </View>
                    </View>

           


            </DrawerContentScrollView>


            <DrawerItem 
                label = "Sign Out"
                icon={({color,size})=>(
                   <Icon 
                   type="material-community"
                   name = "logout-variant"
                   color={color}
                   size={size}
                   
                   />
                )}
                onPress ={()=>{signOut()}}
            />
       
        </View>
       
    )
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    avatar:{
        borderWidth:4,
        borderColor:colors.cardBackground
    },
    avatarView:{
        flexDirection:'row', 
        alignItems:'center', 
        paddingLeft:20, 
        paddingVertical:15
},
preference:{
    fontSize:16,
    color:colors.grey2,
    paddingTop:10,
    paddingLeft:20
},
switchText:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingLeft:20,
    paddingVertical:5,
    paddingRight:10
},
darkTheme:{
    fontSize:16,
    color:colors.grey2,
    paddingTop:10,
    paddingLeft:0,
    fontWeight:'bold'
}
})