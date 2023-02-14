import React from "react";
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { profilecss } from "./signincss";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function Signin() {
    return (
        <View style={{backgroundColor:"#1a1a1a",height:"100vh"}}>
            <View style={{padding:20}}>
                <View style={profilecss.profilebox} >
                    <View><Ionicons style={profilecss.profiletext} name="arrow-back" size={20} color="black" /></View>
                    <View><Text style={profilecss.profiletext}>Profile</Text></View>
                </View>

                <View style={profilecss.signinmainbox}>
                    <View style={profilecss.user}>    
                        <FontAwesome name="user" color="white" size={20}/>
                    </View>
                    <View>  
                        <Text style={profilecss.pleasesignin}>Please Sign In</Text>  
                    </View>
                </View>

                <View style={profilecss.containerbox}>
                    <View style={profilecss.containerinnerbox}>
                    <View style={profilecss.walletbox}>
                        <View style={profilecss.walletetext}><Entypo name="wallet" size={15} color="white"/></View>
                        <View style={profilecss.walletetext}>Wallet</View>
                    </View>
                    <View style={profilecss.walletbox}>
                        <View style={profilecss.walletetext}><AntDesign name="heart" size={15} color="white"/></View>
                        <View style={profilecss.walletetext}>Wishlist</View>
                    </View>

                   
                    </View>
                    <View style={profilecss.containerinnerbox}>
                    <View style={profilecss.walletbox}>
                        <View style={profilecss.walletetext}><Ionicons name="gift" size={15} color="white"/></View>
                        <View style={profilecss.walletetext}>Coupons</View>
                    </View>
                    <View style={profilecss.walletbox}>
                        <View style={profilecss.walletetext}><Fontisto name="headphone" size={15} color="white"/></View>
                        <View style={profilecss.walletetext}>Help Center</View>
                    </View>
                    </View>
                   
                   
                </View>
                
            </View>
        </View>
    )
}