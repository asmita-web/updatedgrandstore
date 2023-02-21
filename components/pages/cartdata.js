import React from "react";
import { useEffect } from "react";
import { StyleSheet, View, text } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Cartdata(props) {
   useEffect(()=>{
   data()
   },[])
    const data =()=>{
        console.log("data",props)
    }
    return (

        <View style={{paddingRight:20}}>
            <FontAwesome5 name="shopping-cart" size={13} color="black" />

        </View>
    )
}