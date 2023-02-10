import React from 'react';
import { Text, View, Button } from 'react-native';
// import { createDrawerNavigator }from '@react-navigation/drawer';
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
// import Contact from './components/pages/contact';
import Categories from './components/pages/categories';





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

function Brands() {
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
            <Text>About Page</Text>
        </View>
    );
}
// const Drawer = createDrawerNavigator();
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
                            color:"white",
                            fontSize:12
                        },
                        headerShown: false,
                        tabBarLabel: 'Home',
                       
                        tabBarIcon: ({ focused }) => (
                            <Feather name="home" color={focused ? '#dca743' : 'white'} size={20} />
                        ),
                    }}
                    component={HomeScreen} />


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
                    component={Brands} />
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
                        tabBarIcon:({focused}) => (
                            <Feather name="file-text" color={focused ? '#dca743' : 'white'} size={20} />
                        ),

                    }}
                    component={Order} />

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
                        tabBarIcon: ({focused}) => (
                            <FontAwesome name="search" color={focused ? '#dca743' : 'white'} size={20} />
                        ),

                    }}
                    component={Search} />





            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Routing;
