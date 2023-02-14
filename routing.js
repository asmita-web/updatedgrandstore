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






function Order() {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>About Page</Text>
        </View>
    );
}


function Search() {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Search Page</Text>
        </View>
    );
}
function Myprofile() {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>my profile</Text>
        </View>
    );
}
function Notification() {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Notification</Text>
        </View>
    );
}
const Drawer = createDrawerNavigator();
function Sidebar() {
    return (
        <Drawer.Navigator initialRouteName='Homescreen' options={{
        }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name='Homescreen'
                component={HomeScreen}
                options={{
                    drawerLabel: "Home",
                    drawerIcon: ({ focused }) => (
                        <Ionicons name='ios-home' size={20} color={focused ? '#dca743' : 'white'} />
                    ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    }

                }}
            />
            <Drawer.Screen
                options={{
                    title:"About Us",
                    // drawerLabel: "About Us",
                    drawerIcon: ({ focused }) => (
                        <FontAwesome name='user' size={20} color={focused ? '#dca743' : 'white'} />
                    ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    }

                }}
                name="Notification" component={About} />
            <Drawer.Screen
                options={{
                    drawerLabel: "Shop",
                    drawerIcon: ({ focused }) => (
                        <Feather name='file-text' size={20} color={focused ? '#dca743' : 'white'} />
                    ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    }
                }}
                name="Storeinfo" component={Notification} />


            <Drawer.Screen
                options={{
                    drawerLabel: "Wine",
                    drawerIcon: ({ focused }) => (
                        <Ionicons name='chatbox-ellipses' size={20} color={focused ? '#dca743' : 'white'} />
                    ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    }
                }}
                name="ChatWithUs" component={Notification} />
            <Drawer.Screen
                options={{
                    drawerLabel: "Trade",
                    drawerIcon: ({ focused }) => (
                        <AntDesign name='star' size={20} color={focused ? '#dca743' : 'white'} />
                    ),
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
                    }

                }}
                name="ReviewUs" component={Notification} />
            <Drawer.Screen
                options={{
                    drawerLabel: "Offers",
                    drawerIcon: ({ focused }) => (
                        <FontAwesome5 name='edit' size={20} color={focused ? '#dca743' : 'white'} />
                    ),
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
                    }

                }}
                name="Terms&Conditions" component={Notification} />
            <Drawer.Screen
                options={{
                    drawerLabel: "Contact",
                    drawerIcon: ({ focused }) => (
                        <AntDesign name='infocirlce' size={20} color={focused ? '#dca743' : 'white'} />
                    ),
                    drawerLabelStyle: {
                        color: "white",
                        fontFamily: 'Times New Roman,sans-serif',
                    },
                    drawerItemStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor:"#2b2b2b",
                        borderBottomWidth:1
                    }

                }}
                name="PrivacyPolicy" component={Contact} />
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
                        )

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
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome name="search" color={focused ? '#dca743' : 'white'} size={20} />
                        ),

                    }}
                    component={Search} />





            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Routing;
