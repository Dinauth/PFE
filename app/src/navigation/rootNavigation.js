import React,{useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Auth } from "./authNavigation";
import { AppStack } from "./appStack";
import { SignInContext } from "../context/authContext";


export function RootNavigation() {

    const {signedIn} = useContext(SignInContext)

    return(
        <NavigationContainer>
            {signedIn.userToken === null  ?   <Auth />: <AppStack />}
        </NavigationContainer>
    )
    
}