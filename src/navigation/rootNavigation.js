import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Auth } from "./authNavigation";


export function RootNavigation() {

    return(
        <NavigationContainer>
            <Auth />
        </NavigationContainer>
    )
    
}