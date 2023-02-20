import React from "react";
import { useEffect } from "react";
import { StyleSheet, View, text } from "react-native";
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Headerleft(props) {
   
    useEffect(()=>(
        console.log("header",props)
    ),[])
    return (

        <View>
            <Ionicons onPress={() => props.navigation.goBack()} name="arrow-back" size={20} color="black" />
        </View>
    )
}