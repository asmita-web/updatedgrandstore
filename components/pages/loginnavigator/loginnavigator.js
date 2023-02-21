import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Signin from "../signin";
// import ProductDetails from "../productdetails";
import Login from "./login/login";
import Register from "./login/register/register";
import HomeScreen from "../homepage";
import Cart from "../cart";
import Proceed from "../proceed";
import ProductDetails from "../productdetails";
import Header from "../../header";
import Ionicons from 'react-native-vector-icons/Ionicons'


const stack = createStackNavigator();
export default function Loginnavigator() {
    return (
        
            <stack.Navigator initialRouteName="Signhome">
                <stack.Screen 
                options={{
                    // headerShown:false,
                    header:(props)=><Header {...props}/>
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


                 <stack.Screen 
                 
                   options={({navigation})=>({
                    title: "Cart",
                    // headerShown:false,
                    headerStyle: {
                        backgroundColor: "#ffa500",
                        color: "black",
                        fontWeight: 700,
                        fontSize: 15,
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    headerTintColor: 'black',
                    headerLeft: () => (
                        <Ionicons style={{ paddingLeft: 10 }} onPress={() => navigation.goBack()} name="arrow-back" size={20} color="black" />

                    ),
                })}
                name="cart" component={Cart} />
                  <stack.Screen
            options={({navigation})=>({
                title: "Checkout",
                // headerShown:false,
                headerStyle: {
                    backgroundColor: "#ffa500",
                    color: "black",
                    fontWeight: 700,
                    fontSize: 15,
                    fontFamily: 'Times New Roman,sans-serif',
                },
                headerTintColor: 'black',
                headerLeft: () => (
                    <Ionicons style={{ paddingLeft: 10 }} onPress={() => navigation.goBack()} name="arrow-back" size={20} color="black" />

                ),
            })}
             name="proceedpage" component={Proceed}/>

<stack.Screen
            options={{
                title:"Product",
                headerShown:false
            }}
             name="productd" component={ProductDetails}/>
             
            </stack.Navigator>
       





    )

}