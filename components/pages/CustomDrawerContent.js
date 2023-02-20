
import React, { useEffect } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { customecss } from './customecss';


export default function CustomDrawerContent(props) {

    useEffect(() => {
        console.log("...props", props)
        console.log("navigate", props.navigation)
    }, [])

    const Loginnavigatorpage = () => {
        props.navigation.navigate('Signin')
    }

    return (


        <View>
            <View>
                <Text style={{backgroundColor:"#ffa500"}} onPress={() => { Loginnavigatorpage() }}>
                    <View style={customecss.profilebox} >

                        <View style={customecss.profile}><FontAwesome style={customecss.profiletext1} name="user" size={20} color="white" /></View>
                        <View><Text style={customecss.profiletext}>Please Sign in</Text></View>


                    </View>
                </Text>


                <View style={customecss.menu}>
                    <View>
                        <DrawerItemList {...props} >

                        </DrawerItemList>
                    </View>
                    {/* <DrawerContentScrollView {...props}>
                
               </DrawerContentScrollView> */}
                </View>
            </View>
        </View>
        // <DrawerContentScrollView {...props}>
        //   <DrawerItemList {...props} />
        //   <DrawerItem
        //     label="Close drawer"
        //     onPress={() => props.navigation.closeDrawer()}
        //   />
        //   <DrawerItem
        //     label="Toggle drawer"
        //     onPress={() => props.navigation.toggleDrawer()}
        //   />
        // </DrawerContentScrollView>
    );
}