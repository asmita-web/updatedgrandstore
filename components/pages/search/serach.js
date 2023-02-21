
import { View, ScrollView, SafeAreaView, Text, Pressable, Image, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import { http } from "../../../Restservice";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native";
import { searchcss } from "./searchcss";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

// const productlist = [
//     {
//         id: 1,
//         imgurl: require('../../assets/Amstel.png'),
//         title: "Amstel Lager Can (1 x 440ML)..",
//         rs: "R 19"
//     },
//     {
//         id: 2,
//         imgurl: require('../../assets/Bitburger.png'),
//         title: "Amstel Lager Can (1 x 440ML)..",
//         rs: "R 20"
//     },
//     {
//         id: 3,
//         imgurl: require('../../assets/Bitburger.png'),
//         title: "Amstel Lager Can (1 x 440ML)..",
//         rs: "R 30"
//     },
//     {
//         id: 4,
//         imgurl: require('../../assets/Bitburger.png'),
//         title: "Amstel Lager Can (1 x 440ML)..",
//         rs: "R 40"
//     },
//     {
//         id: 5,
//         imgurl: require('../../assets/Bitburger.png'),
//         title: "Amstel Lager Can (1 x 440ML)..",
//         rs: "R 19"
//     },
//     {
//         id: 6,
//         imgurl: require('../../assets/Amstel.png'),
//         title: "Amstel Lager Can (1 x 440ML)..",
//         rs: "R 19"
//     },
//     {
//         id: 7,
//         imgurl: require('../../assets/Amstel.png'),
//         title: "Amstel Lager Can (1 x 440ML)..",
//         rs: "R 19"
//     }
// ]

export default function Search() {

    const [productall, setproductall] = useState([])
    useEffect(() => {
        getallcategory()
    }, [])
    const getallcategory = () => {
        axios.get(http + '/product')
            .then((response) => {
                setproductall(response.data)
                console.log("product", response)
            })
            .catch((err) => {
                console.log("product", err)
            })
    }

    
    return (

        <ScrollView style={{ backgroundColor: "#1c1c1c" }}>
            <SafeAreaView>

                <View style={searchcss.mainbox}>
                    {/* <View style={searchcss.shopbox}>
                        <Text style={searchcss.shoptext}>Shop</Text>
                    </View> */}
                    <View>
                        <View>
                            <View style={searchcss.inputboxmain}>
                                <TextInput style={searchcss.inputbox} keyboardType="numeric" placeholder="Search">
                                </TextInput>
                                <FontAwesome name="search" color="#a8a8a8" size={15} />
                            </View>
                            <View style={searchcss.trendingmainbox}>


                                {

                                    productall.map((items, index) => (
                                        <View key={index} style={searchcss.trendingbox}>

                                            <View style={searchcss.trendingimagebox}>
                                                <View style={searchcss.imagenewbox}>
                                                    <View style={{ height: 60, width: 60 }}>
                                                        <Image source={require('../../../assets/Amstel.png')} style={{ width: "100%", height: "100%" }} />
                                                    </View>

                                                    <View style={searchcss.addtocartmainbox}>
                                                        <Pressable style={searchcss.addtocartbox}>
                                                            <Entypo name="shopping-cart" color="#dca743" size={14} />
                                                            <Text style={searchcss.addtocarttext}>ADD TO CART</Text>
                                                        </Pressable>
                                                    </View>
                                                </View>


                                                <View style={searchcss.productboxitem}>
                                                    <Text style={searchcss.trendingboxtext}>{items.name}</Text>
                                                    <Text style={searchcss.trendingboxtext}>R 249</Text>
                                                </View>

                                            </View>

                                        </View>

                                    )

                                    )

                                }
                            </View>
                        </View>


                    </View>


                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
