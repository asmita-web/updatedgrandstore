import React from "react";
import { View, Text, ScrollView, SafeAreaView, Image, Pressable } from "react-native";
import { productdcss } from "./productDcss";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'




const productdetail = [
    {
        id: 1,
        imgurl: require('../../assets/vodka.png'),
        title: "Allesverloren Shiraz 2019 ( 1x750ml)",
        price: "R 149",
        detail: "Wine is an alcoholic drink typically made from fermented grapes. Yeast consumes the sugar in the grapes and converts it to ethanol and carbon dioxide, releasing heat in the process. Different varieties of grapes and strains of yeasts are major factors in different styles of wine.",
    }
]

const options = [
    {
        id:1,
        pack: "Single"
    },
    {
        id:2,
        pack: "6-pack"
    },
    {
        id:3,
        pack: "24-pack"
    }
]

export default function ProductDetails() {
    return (

        <ScrollView style={{ backgroundColor: "#1c1c1c", }}>
            <SafeAreaView>
                <View style={productdcss.maincontainer}>
                    <View >

                        {
                            productdetail.map((item, index) => (
                                <View key={index} style={productdcss.detailsbox}>
                                    <View style={productdcss.imagewidth}>
                                        <Image style={{ width: "100%", height: "100%" }} source={{ uri: item.imgurl }} />
                                    </View>
                                    <View>
                                        <Text style={productdcss.producttitle}>{item.title}</Text>
                                        <Text style={productdcss.productprice}>{item.price}</Text>
                                    </View>
                                    <View>
                                        <Text style={productdcss.productdetails}>{item.detail}</Text>
                                    </View>

                                    <View style={productdcss.selectbox}>
                                        <label style={productdcss.labelbox}>Option</label>
                                        <select style={productdcss.selectboxitem}>
                                            {
                                                options.map((item,index) => (
                                                    <option key={index} value={item.pack}>{item.pack}</option>
                                                ))
                                            }
                                        </select>
                                        {/* <Dropdown/> */}
                                    </View>
                                    <View>
                                        <Pressable style={productdcss.addtocartbox}>
                                            <Entypo name="shopping-cart" color="#dca743" size={15} />
                                            <Text style={productdcss.addtocarttext}>ADD TO CART</Text>
                                        </Pressable>
                                    </View>

                                    <View style={productdcss.whishlistmainbox}>
                                        <View style={productdcss.whishlistbox1}>
                                            <View style={productdcss.whishlistbox}>
                                                <AntDesign name="heart" color="#a8a8a8" size={15} />
                                                <Text style={productdcss.whichlisttext}>ADD TO WISHLIST</Text>
                                            </View>

                                            <View style={productdcss.whishlistbox}>
                                                <FontAwesome5 name="cut" color="#a8a8a8" size={15} />
                                                <Text style={productdcss.whichlisttext}>ADD TO COMPARE</Text>
                                            </View>
                                        </View>

                                    </View>


                                    
                                </View>
                            ))
                        }


                    </View>

                </View>
            </SafeAreaView>
        </ScrollView>
    )
}