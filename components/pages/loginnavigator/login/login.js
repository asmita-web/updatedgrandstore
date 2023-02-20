import React from "react";
import { View, Image, ScrollView, SafeAreaView, Text, Pressable, TextInput } from "react-native";
import { logincss } from "./logincss";
import { profilecss } from "../../signincss";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Login({navigation}) {
    // const Goregister = ()=>{
    //     alert('register',navigator.naviagte('Register'))
    //     navigator.navigate('Register')
    // }
    return (

        <ScrollView style={{ backgroundColor: "#1c1c1c", }}>
            <SafeAreaView>
                <View style={logincss.maincontainer}>
                <View style={profilecss.profilebox} >
                    <View><Ionicons onPress={() => { navigation.navigate('Signhome') }} style={profilecss.profiletext} name="arrow-back" size={20} color="black" /></View>
                    <View><Text style={profilecss.profiletext}>Login</Text></View>
                </View>
                    <View style={logincss.loginmainbox}>
                        <View style={logincss.customerlogin}>
                            <Text style={logincss.customerlogintext}>Customer Login</Text>
                        </View>
                        <View>
                            <View style={logincss.loginbox}>
                                <View>
                                    <Text style={logincss.logintextlabel}>Email</Text>
                                    <TextInput placeholder="Email" style={logincss.inputbox}
                                        keyboardType="numeric" />
                                </View>
                                <View>
                                    <Text style={logincss.logintextlabel}>Password</Text>
                                    <TextInput placeholder="Password" style={logincss.inputbox}
                                        keyboardType="numeric" />
                                </View>

                                <View style={{paddingTop:15,justifyContent:"center",alignItems:"center"}}>
                                    <Pressable style={logincss.sendmessage} >
                                        <Text style={logincss.sendmessagetext}>
                                            LOGIN
                                        </Text>
                                    </Pressable>
                                </View>
                                <View style={logincss.lostpassbox}>
                                    <Text style={logincss.lostpasswordboxtext}>Lost your password?</Text>
                                    <Text style={logincss.lostyouracconttext}>Don't have an account yet? <Text onPress={()=>{navigation.navigate('Register')}} style={logincss.lostpasswordboxtext}>SIGN UP HERE</Text></Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}