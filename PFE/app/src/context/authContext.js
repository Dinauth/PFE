import React, {createContext,useReducer} from 'react'
import { SignInReducer } from '../reducers/authReducer'

export const SignInContext = createContext()

 export const SignInContextProvider = (props)=>{

const[signedIn,dispatchSignedIn] = useReducer(SignInReducer,{
    userToken:null,
    userCard:[],
    orderCard:[]
})

return(
    <SignInContext.Provider value = {{signedIn,dispatchSignedIn}}>
        {props.children}
    </SignInContext.Provider>
)

}