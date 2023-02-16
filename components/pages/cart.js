import React,{useState} from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import {cartcss} from "./cartcss";

export default function Cart() {

    const [length, setlength] = useState('10');
    let productname = "Amstel Lager Can (1 x 440ML)"

    return (

        <ScrollView style={{ backgroundColor: "#1c1c1c" }}>
            <SafeAreaView>
                <View style={cartcss.maincartbox}>
                    <View style={cartcss.cartbox}>
                        <View style={cartcss.cartinnerimagebox}>
                            {/* <View style={cartcss.headingtitlebox}>
                                <Text style={cartcss.cartproductname}>IMAGE</Text>
                                </View> */}
                            <View style={cartcss.cartimage}>
                                <Image style={{ width: "100%", height:"100%" }} source={require('../../assets/vodka.png')} />
                            </View>
                        </View>
                        <View style={cartcss.cartinnerimagebox}>
                            {/* <View style={cartcss.headingtitlebox}>
                                <Text style={cartcss.cartproductname}>PRODUCT<br/> NAME</Text>
                            </View> */}
                            <View>
                                <Text style={[cartcss.subtextcart]}>
                                Amstel Lager Can (1 x 440ML)
                                </Text>
                                <Text style={[cartcss.subtextcart]}><b>Pack: </b>
                                single
                                </Text>
                                <Text style={[cartcss.subtextcart]}><b>Price: </b>
                                 R 19
                                </Text>
                            </View>

                        </View>
                        {/* <View style={cartcss.cartinnerimagebox}>
                            <View style={cartcss.headingtitlebox}>
                                <Text style={cartcss.cartproductname}>PACK</Text>
                            </View>
                            <View>
                                <Text style={cartcss.cartproductname}>single</Text>
                            </View>

                        </View> */}
                        {/* <View style={cartcss.cartinnerimagebox}>
                            <View style={cartcss.headingtitlebox}>
                                <Text style={cartcss.cartproductname}>
                                    PRICE
                                </Text>
                            </View>
                            <View>
                                <Text style={cartcss.cartproductname}>
                                    R 19
                                </Text>
                            </View>

                        </View> */}
                        <View style={cartcss.cartinnerimagebox}>
                            {/* <View style={cartcss.headingtitlebox}>
                                <Text style={cartcss.cartproductname}>QTY</Text>
                                </View> */}
                            <View>
                                <View>-</View>
                                <View>1</View>
                                <View>+</View>
                            </View>
                        </View>
                        <View style={cartcss.cartinnerimagebox}>
                            <View style={cartcss.headingtitlebox}>
                                <Text style={cartcss.cartproductname}>
                                    SUB<br/>
                                    TOTAL
                                </Text>
                            </View>
                            <View>
                                <Text  style={cartcss.subtextcart}>
                                    R 19
                                </Text>
                            </View>

                        </View>

                        <View style={cartcss.cartinnerimagebox}>
                            {/* <View style={cartcss.headingtitlebox}>
                                <Text style={cartcss.cartproductname}>
                                    REMOVE
                                </Text>
                            </View> */}
                            <View>
                                <Text style={cartcss.subtextcart}>
                                    *
                                </Text>
                            </View>

                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}