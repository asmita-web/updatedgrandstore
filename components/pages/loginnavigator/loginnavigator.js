import React from "react"
import { Customestack } from '@react-navigation/stack';
import { Customenavigator } from '@react-navigation/native'
import Signin from "../signin";
import ProductDetails from "../productdetails";
import Login from "./login/login";
import Register from "./login/register/register";


const stack = Customestack()
export default function Loginnavigator() {
    return (
        <Customenavigator>
            <stack.Navigator initialRouteName="Signin">
                <stack.Screen name="Signin" component={Signin} />
                <stack.Screen name="Login" component={Login} />
                <stack.Screen name="Register" component={Register} />
            </stack.Navigator>
        </Customenavigator>

    )

}