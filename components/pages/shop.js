import React from "react";
import { View, ScrollView, SafeAreaView, Text, Pressable, Image, ImageBackground } from "react-native";
import { shopcss } from "./shopcss";
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'


const productlist = [
    {
        id: 1,
        imgurl: require('../../assets/Amstel.png'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 19"
    },
    {
        id: 2,
        imgurl: require('../../assets/Bitburger.png'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 20"
    },
    {
        id: 3,
        imgurl: require('../../assets/Bitburger.png'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 30"
    },
    {
        id: 4,
        imgurl: require('../../assets/Bitburger.png'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 40"
    },
    {
        id: 5,
        imgurl: require('../../assets/Bitburger.png'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 19"
    },
    {
        id: 6,
        imgurl: require('../../assets/Amstel.png'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 19"
    },
    {
        id: 7,
        imgurl: require('../../assets/Amstel.png'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 19"
    }
]

export default function shop() {
    return (

        <ScrollView style={{ backgroundColor: "#1c1c1c" }}>
            <SafeAreaView>

                <View style={shopcss.mainbox}>
                    {/* <View style={shopcss.shopbox}>
                        <Text style={shopcss.shoptext}>Shop</Text>
                    </View> */}
                    <View>
                        <View>
                            <View style={shopcss.trendingmainbox}>

                                {

                                    productlist.map((items) => (
                                        <View key={items} style={shopcss.trendingbox}>

                                            <View style={shopcss.trendingimagebox}>
                                                <View style={shopcss.imagenewbox}>
                                                    <View style={{height:60,width:60}}>
                                                       <Image source={{uri:items.imgurl}} style={{width:"100%",height:"100%"}}/>
                                                    </View>

                                                    <View style={shopcss.addtocartmainbox}>
                                                        <Pressable style={shopcss.addtocartbox}>
                                                            <Entypo name="shopping-cart" color="#dca743" size={14} />
                                                            <Text style={shopcss.addtocarttext}>ADD TO CART</Text>
                                                        </Pressable>
                                                    </View>
                                                </View>


                                                <View style={shopcss.productboxitem}>
                                                    <Text style={shopcss.trendingboxtext}>{items.title}</Text>
                                                    <Text style={shopcss.trendingboxtext}>{items.rs}</Text>
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
