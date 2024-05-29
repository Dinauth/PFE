import React from 'react';
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import { SignWelcome } from '../screen/auth/welcome';
import { Sign } from '../screen/auth/sign';

import { SignUpScreen } from '../screen/auth/signUp';


const AuthStack = createStackNavigator();


export function Auth() {

    return(
        
        <AuthStack.Navigator>

<AuthStack.Screen
            name = "welcome"
            component = {SignWelcome}
            options = {{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />

<AuthStack.Screen
            name = "signIn"
            component = {Sign}
            options = {{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />


<AuthStack.Screen 
            name ="SignUpScreen"
            component = {SignUpScreen}
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        /> 


        
            
        </AuthStack.Navigator>

        

        


    )
    
}