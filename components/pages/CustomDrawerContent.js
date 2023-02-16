
import React, { useEffect } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { customecss } from './customecss';


export default function CustomDrawerContent(props,navigator) {

    useEffect(() => {
        console.log("...props", props)
    }, [])

    const Loginnavigator=()=>{
        navigator.navigate('signin')
    }

    return (


        <View>
            <View>
                <View style={customecss.profilebox} onPress={Loginnavigator}>
                    <View style={customecss.profile}><FontAwesome style={customecss.profiletext1} name="user" size={20} color="white" /></View>
                    <View><Text style={customecss.profiletext}>Please Sign in</Text></View>
                </View>

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