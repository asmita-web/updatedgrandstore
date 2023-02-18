import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Signin from "../signin";
// import ProductDetails from "../productdetails";
import Login from "./login/login";
import Register from "./login/register/register";
import HomeScreen from "../homepage";


const stack = createStackNavigator();
export default function Loginnavigator() {
    return (
        
            <stack.Navigator initialRouteName="Signhome">
                <stack.Screen 
                options={{
                    headerShown:false
                }}
                 name="Signhome" component={HomeScreen} />
                <stack.Screen 
                   options={{
                    headerShown:false
                }}
                 name="Signin" component={Signin} />
                <stack.Screen 
                   options={{
                    headerShown:false
                }}
                name="Login" component={Login} />
                <stack.Screen 
                   options={{
                    headerShown:false
                }}
                name="Register" component={Register} />
            </stack.Navigator>
       





    )

}