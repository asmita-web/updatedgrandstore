import React from 'react';
import { Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './components/pages/homepage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Contact from './components/pages/contact';
import Categories from './components/pages/categories';
import Brand from './components/pages/Brand';
import Signin from './components/pages/signin';
import CustomDrawerContent from './components/pages/CustomDrawerContent';
import About from './components/pages/aboutus';
import shop from './components/pages/shop';
import Wine from './components/pages/wine';
import Trade from './components/pages/trade';
import Offer from './components/pages/offer';
import Cart from './components/pages/cart';
import ProductDetails from './components/pages/productdetails';
import {createStackNavigator} from '@react-navigation/stack'
import Login from './components/pages/loginnavigator/login/login';
import Register from './components/pages/loginnavigator/login/register/register';
import Header from './components/header';
import Loginnavigator from './components/pages/loginnavigator/loginnavigator';
import Headerleft from './components/pages/headerleft';
import Cartdata from './components/pages/cartdata';




const stack = createStackNavigator();

function Shopnavigator(){
    return(
        <stack.Navigator initialRouteName="shoppage">
            <stack.Screen
           options={({ navigation, route }) => ({
            title:"Shop",
                headerShown:true,
                headerLeft:()=>(
                    <Ionicons style={{paddingLeft:10}} onPress={() =>navigation.goBack()} name="arrow-back" size={20} color="white" />

                ),
                headerStyle:{
                    backgroundColor:"#2b2b2b",
                    fontFamily: 'Times New Roman,sans-serif',
                    
                },
                headerTintColor: '#a8a8a8',

          })}
           
            // canGoBack
             name="shoppage" component={shop}/>
            <stack.Screen
            options={({ navigation, route }) => ({
                title:"Product",
                    headerShown:true,
                    headerLeft:()=>(
                        <Ionicons style={{paddingLeft:10}} onPress={() =>navigation.goBack()} name="arrow-back" size={20} color="white" />
    
                    ),
                    headerStyle:{
                        backgroundColor:"#2b2b2b",
                        fontFamily: 'Times New Roman,sans-serif',
                        
                    },
                    headerTintColor: '#a8a8a8',
                    headerRight:(props)=><Cartdata {...props}/>
              })}
             name="shopproduct" component={ProductDetails}/>
            

        </stack.Navigator>
    )
}

function Tradenavigator(){
    return(
        <stack.Navigator initialRouteName="tradepaget">
            <stack.Screen
           options={({ navigation, route }) => ({
            title:"Tradehome",
                headerShown:false,
                headerLeft:()=>(
                    <Ionicons style={{paddingLeft:10}} onPress={() =>navigation.goBack()} name="arrow-back" size={20} color="white" />

                ),
                headerStyle:{
                    backgroundColor:"#2b2b2b",
                    fontFamily: 'Times New Roman,sans-serif',
                    
                },
                headerTintColor: '#a8a8a8',

          })}
           
            // canGoBack
             name="tradehome" component={HomeScreen}/>
            <stack.Screen
            options={({ navigation, route }) => ({
                title:"Trade",
                    headerShown:true,
                    headerLeft:()=>(
                        <Ionicons style={{paddingLeft:10}} onPress={() =>navigation.goBack()} name="arrow-back" size={20} color="white" />
    
                    ),
                    headerStyle:{
                        backgroundColor:"#2b2b2b",
                        fontFamily: 'Times New Roman,sans-serif',
                        
                    },
                    headerTintColor: '#a8a8a8',
    
              })}
             name="tradepaget" component={Trade}/>
            

        </stack.Navigator>
    )
}

function Offernavigator(){
    return(
        <stack.Navigator initialRouteName="offerpage">
            <stack.Screen
           options={({ navigation, route }) => ({
            title:"Offerhome",
                headerShown:false,
                headerLeft:()=>(
                    <Ionicons style={{paddingLeft:10}} onPress={() =>navigation.goBack()} name="arrow-back" size={20} color="white" />

                ),
                headerStyle:{
                    backgroundColor:"#2b2b2b",
                    fontFamily: 'Times New Roman,sans-serif',
                    
                },
                headerTintColor: '#a8a8a8',

          })}
           
            // canGoBack
             name="offerhome" component={HomeScreen}/>
            <stack.Screen
            options={({ navigation, route }) => ({
                title:"Offer",
                    headerShown:true,
                    headerLeft:()=>(
                        <Ionicons style={{paddingLeft:10}} onPress={() =>navigation.goBack()} name="arrow-back" size={20} color="white" />
    
                    ),
                    headerStyle:{
                        backgroundColor:"#2b2b2b",
                        fontFamily: 'Times New Roman,sans-serif',
                        
                    },
                    headerTintColor: '#a8a8a8',
                    headerRight:(props)=><Cartdata {...props}/>
    
              })}
             name="offerpage" component={Offer}/>
            

        </stack.Navigator>
    )
}

function Contactnavigator(){
    return(
        <stack.Navigator initialRouteName="contactpage">
            <stack.Screen
           options={({ navigation, route }) => ({
            title:"Contacthome",
                headerShown:false,
                headerLeft:()=>(
                    <Ionicons style={{paddingLeft:10}} onPress={() =>navigation.goBack()} name="arrow-back" size={20} color="white" />

                ),
                headerStyle:{
                    backgroundColor:"#2b2b2b",
                    fontFamily: 'Times New Roman,sans-serif',
                    
                },
                headerTintColor: '#a8a8a8',

          })}
           
            // canGoBack
             name="contacthome" component={HomeScreen}/>
            <stack.Screen
            options={({ navigation, route }) => ({
                title:"Contact Us",
                    headerShown:true,
                    headerLeft:()=>(
                        <Ionicons style={{paddingLeft:10}} onPress={() =>navigation.goBack()} name="arrow-back" size={20} color="white" />
    
                    ),
                    headerStyle:{
                        backgroundColor:"#2b2b2b",
                        fontFamily: 'Times New Roman,sans-serif',
                        
                    },
                    headerTintColor: '#a8a8a8',
    
              })}
             name="contactpage" component={Contact}/>
            

        </stack.Navigator>
    )
}

function Winenavigator(){
    return(
        <stack.Navigator 
       
        
         initialRouteName="winepage">
            <stack.Screen 

options={({ navigation, route }) => ({
    title:"Wine",
        headerShown:true,
        headerLeft:()=>(
            <Ionicons style={{paddingLeft:10}} onPress={() =>navigation.goBack()} name="arrow-back" size={20} color="white" />

        ),
        headerStyle:{
            backgroundColor:"#2b2b2b",
            fontFamily: 'Times New Roman,sans-serif',
            
        },
        headerTintColor: '#a8a8a8',
        headerRight:(props)=><Cartdata {...props}/>

  })}
             
             name="winepage" component={Wine}/>
            {/* <stack.Screen 
             options={{
                title:"Product",
                headerShown:true,
                headerLeft:()=>(
                    <Ionicons onPress={() =>navigation.goBack()} name="arrow-back" size={20} color="black" />

                )
            }}

            name="winehome" component={HomeScreen}/> */}
            <stack.Screen 

options={({ navigation, route }) => ({
    title:"Product",
        headerShown:true,
        headerLeft:()=>(
            <Ionicons style={{paddingLeft:10}} onPress={() =>navigation.goBack()} name="arrow-back" size={20} color="white" />

        ),
        headerStyle:{
            backgroundColor:"#2b2b2b",
            fontFamily: 'Times New Roman,sans-serif',
            
        },
        headerTintColor: '#a8a8a8',

  })}
             name="wineproduct" component={ProductDetails}/>
        </stack.Navigator>
    )
}






const Drawer = createDrawerNavigator();
function Sidebar() {
    return (
        <Drawer.Navigator initialRouteName='Homescreen' options={{
        }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name='Homescreen'
                component={Loginnavigator}
                options={{
                    title: "Home",
                    // header:()=><Header/>,
                    // drawerIcon: ({ focused }) => (
                    //     <Ionicons name='ios-home' size={20} color={focused ? '#dca743' : 'white'} />
                    // ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    },
                    headerShown: false,
                    // headerStyle:{
                    //     backgroundColor:"#212121",
                    // },
                    // headerRight:()=>(
                    //     <Header/>
                    // )

                }}
            />
            <Drawer.Screen
                options={{
                    title:"About Us",
                    // drawerLabel: "About Us",
                    // drawerIcon: ({ focused }) => (
                    //     <FontAwesome name='user' size={20} color={focused ? '#dca743' : 'white'} />
                    // ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    },
                       headerStyle:{
                        // backgroundColor:"#212121",
                        color:"#a8a8a8"
                    },

                }}
                name="Aboutus" component={About} />
            <Drawer.Screen
                options={{
                    title: "Shop",
                    // drawerIcon: ({ focused }) => (
                    //     <Feather name='file-text' size={20} color={focused ? '#dca743' : 'white'} />
                    // ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    },  
                    // headerShown:false,
                     headerStyle:{
                            // backgroundColor:"#212121",
                            color:"#a8a8a8"
                        },
                        headerShown:false
                }}
                name="Shop" component={Shopnavigator} />



            <Drawer.Screen
                options={{
                    title: "Wine",
                    // drawerIcon: ({ focused }) => (
                    //     <Ionicons name='chatbox-ellipses' size={20} color={focused ? '#dca743' : 'white'} />
                    // ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    },
                       
                    headerStyle:{
                        backgroundColor:"#212121",
                        color:"#a8a8a8"
                    },
                    
                    headerShown:false
                }}
                name="Wine" component={Winenavigator} />
            <Drawer.Screen
                options={{
                    drawerLabel: "Trade",
                    // drawerIcon: ({ focused }) => (
                    //     <AntDesign name='star' size={20} color={focused ? '#dca743' : 'white'} />
                    // ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"grey",
                        borderBottomWidth:1,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    },

                       headerStyle:{
                        // backgroundColor:"#212121",
                        color:"#a8a8a8"
                    },
                    headerShown:false

                }}
                name="Trade" component={Tradenavigator} />
            <Drawer.Screen
                options={{
                    title: "Offers",
                    // drawerIcon: ({ focused }) => (
                    //     <FontAwesome5 name='edit' size={20} color={focused ? '#dca743' : 'white'} />
                    // ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"grey",
                        borderBottomWidth:1,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    },

                       headerStyle:{
                        backgroundColor:"#212121",
                        color:"#a8a8a8"
                    },
                    headerShown:false

                }}
                name="Offer" component={Offernavigator} />
            <Drawer.Screen
                options={{
                    drawerLabel: "Contact",
                    // drawerIcon: ({ focused }) => (
                    //     <AntDesign name='infocirlce' size={20} color={focused ? '#dca743' : 'white'} />
                    // ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    },

                       headerStyle:{
                        // backgroundColor:"#212121",
                        color:"#a8a8a8"
                    },
                    headerShown:false

                }}
                name="PrivacyPolicy" component={Contactnavigator} />
            {/* <Drawer.Screen
                options={{
                    drawerLabel: "FAQ's",
                    drawerIcon: ({ focused }) => (
                        <AntDesign name='questioncircle' size={20} color={focused ? '#dca743' : 'white'} />
                    ),
                    drawerLabelStyle: {
                        color: "white",
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    }
                }}
                name="Faqs" component={Notification} /> */}
        </Drawer.Navigator>

    )
}
const Tab = createBottomTabNavigator();

function Routing() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#151515',
                },
            }}
            // screenOptions={{
            //     tabBarActiveBackgroundColor: "#151515", tabBarInactiveBackgroundColor: "#151515",
            // }}
            >
                <Tab.Screen name="Home"
                    options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: '#212121',

                        },
                        
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 700,
                            color: "white",
                            fontSize: 12
                        },
                        headerShown: false,
                        tabBarLabel: 'Home',

                        tabBarIcon: ({ focused }) => (
                            <Feather name="home" color={focused ? '#dca743' : 'white'} size={20} />
                        ),
                        tabBarLabelStyle:{
                            color:"#a8a8a8",
                            fontFamily: 'Times New Roman,sans-serif',

                        }
                    }}
                    component={Sidebar} />


                <Tab.Screen name="Categories"
                    options={{
                        title: "Categories",
                        headerStyle: {
                            backgroundColor: '#212121',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <AntDesign name="appstore1" color={focused ? '#dca743' : 'white'} size={20} />
                        ),
                        tabBarLabelStyle:{
                            color:"#a8a8a8",
                            fontFamily: 'Times New Roman,sans-serif',

                        }

                    }}
                    component={Categories} />
                <Tab.Screen name="Brands"
                    options={{
                        title: 'Brands',
                        headerStyle: {
                            backgroundColor: '#212121',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        // headerLeft: () => {
                        //     return(
                        //         <View onpress={navigator.back()}>
                        //         <Ionicons name="arrow-back" size={30} color="black" />

                        //         </View>

                        //     )

                        // }
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome5 name="wine-glass" color={focused ? '#dca743' : 'white'} size={20} />
                        ),
                        tabBarLabelStyle:{
                            color:"#a8a8a8",
                            fontFamily: 'Times New Roman,sans-serif',

                        }

                    }}
                    component={Brand} />
                <Tab.Screen name="Orders"
                    options={{
                        title: "Orders",
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Feather name="file-text" color={focused ? '#dca743' : 'white'} size={20} />
                        ),
                        tabBarLabelStyle:{
                            color:"#a8a8a8",
                            fontFamily: 'Times New Roman,sans-serif',

                        },
                       

                    }}
                    component={Signin} />

                <Tab.Screen name="Search"
                    options={{
                        title: "Search",
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        // headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome name="search" color={focused ? '#dca743' : 'white'} size={20} />
                        ),

                        tabBarLabelStyle:{
                            color:"#a8a8a8",
                            fontFamily: 'Times New Roman,sans-serif',

                        }

                    }}
                    component={Cart} />





            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Routing;
