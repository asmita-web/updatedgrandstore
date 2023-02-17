import React from "react";
import { StyleSheet,View,Text,Image } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function Header(){
    return(
        <View style={style.container}>
            <View style={{ width:"15%",height:50}}>
                <Image style={{ width: "100%", height:"100%"}} source={require('../assets/logo.png')}/>
            </View>
            <View>
            <FontAwesome5 name="shopping-cart" size={10} color="white" />

            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center"
    }
})