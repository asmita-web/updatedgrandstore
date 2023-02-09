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
// import Contact from './components/pages/contact';



function NotificationsScreen() {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Notifications Page</Text>
        </View>
    );
}

function AboutScreen() {
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
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Home"
                    options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: 'white',
                        },

                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 700
                        },
                        headerShown: false,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <AntDesign name="home" color={focused ? '#fdca12' : '#029e9d'} size={26} />
                        ),
                    }}
                    component={HomeScreen} />


                <Tab.Screen name="About"
                    options={{
                        title: "Login",
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <AntDesign name="user" color={focused ? '#fdca12' : '#029e9d'} size={26} />
                        )

                    }}
                    component={AboutScreen} />
                <Tab.Screen name="Topdestination"
                    options={{
                        title: 'Top Destination',
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: 'black',
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
                            <Entypo name="location" color={focused ? '#fdca12' : '#029e9d'} size={26} />
                        ),


                    }}
                    component={NotificationsScreen} />
                {/* <Tab.Screen name="Upcomingtours"
                    options={{
                        title: "UpComing Tours",
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerShown: false,
                        tabBarIcon: (focused) => (
                            <MaterialIcons name="flight" color={focused?'#fdca12':'#029e9d'} size={26} />
                      ),
                     
                    }}
                    component={Upcommingtours} />
 */}




            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Routing;
