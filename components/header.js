import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function Header(props) {
   
//   const {opendrawer} = props;

    useEffect(() => {
        console.log("navigation...",props)
    }, [])

    const opendrawer=()=>{
        props.navigation.openDrawer()
    }
    return (
        <View style={style.container}>
            
            <View>
                <Text onPress={()=>{opendrawer()}}>
                    <FontAwesome5 name="bars" size={13} color="white" />

                </Text>
            </View>
            <View style={{ width: "15%", height: 50 }}>
                <Image style={{ width: "100%", height: "100%" }} source={require('../assets/logo.png')} />
            </View>
            <View onClick={()=>{props.navigation.navigate('cart')}}>
                <FontAwesome5 name="shopping-cart" size={13} color="white" />

            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent:"space-between",
        alignItems: "center",
        padding:16,
        backgroundColor:"#212121",
        position:"sticky",
        flexDirection:"row"
    }
})