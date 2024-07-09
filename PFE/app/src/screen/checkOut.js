import React,{useContext,useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckoutHeader } from "../components/checkOutHeader";
import { Orders } from "./orders";
import { SignInContext } from "../context/authContext";


export const Checkout = ({navigation,route,id})=>{
    const {dispatchSignedIn} = useContext(SignInContext)
    const {signedIn} = useContext(SignInContext)
    let order=[]
    useEffect(()=>{
        console.log("checkout",signedIn.userCard.length)
        console.log("checkout1",signedIn.orderCard)
        console.log("checkout2",signedIn)
        order=signedIn.userCard
        if (signedIn.userCard[0] ) {
            
            dispatchSignedIn({type:"ORDER_UPDATE",payload:{orderCard:signedIn.userCard}})
            console.log('order',signedIn.orderCard)
            dispatchSignedIn({type:"CARD_UPDATE",payload:{userCard:[]}})
            console.log(order)
            
            
    
    }
      },[navigation,route])
    return(
        <View style={styles.container}>
            <CheckoutHeader
            id={0}
            navigation={navigation}
            />
            {
                console.log('order1',order)
            }
            <Orders
            navigation={navigation}
            route={route}
            order={order}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
})