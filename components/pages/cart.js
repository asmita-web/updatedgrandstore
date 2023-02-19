import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, Pressable } from "react-native";
import { cartcss } from "./cartcss";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'


const cartproduct = [
    {
        id:1,
        title:"Amstel Lager Can (1 x 440ML)",
        imgurl:require('../../assets/vodka.png'),
        pack:"Single",
        price:"19",
    },
    {
        id:2,
        title:"Amstel Lager Can (1 x 440ML)",
        imgurl:require('../../assets/vodka.png'),
        pack:"Single",
        price:"19",
    },
    {
        id:2,
        title:"Amstel Lager Can (1 x 440ML)",
        imgurl:require('../../assets/vodka.png'),
        pack:"Single",
        price:"19",
    }
]

export default function Cart({navigation}) {

    const [qty, setqty] = useState(1)

    return (

        <ScrollView style={{ backgroundColor: "#1c1c1c" }}>
            <SafeAreaView>
                <View style={cartcss.maincartbox}>
                    {
                        cartproduct.map((item,index)=>(
                            <View key={index} style={cartcss.dividecart}>
                            <View style={cartcss.cartbox}>
                                <View style={cartcss.cartinnerimagebox}>
    
                                    <View style={cartcss.cartimage}>
                                        <Image style={{ width: "100%", height: "100%" }} source={{uri:item.imgurl}}  />
                                    </View>
                                </View>
                                <View style={cartcss.cartinnerimagebox}>
    
                                    <View>
                                        <Text style={[cartcss.subtextcart]}>
                                            {item.title}
                                        </Text>
                                        <Text style={[cartcss.packprice]}><b>Pack: </b>
                                            {item.pack}
                                        </Text>
                                        <Text style={[cartcss.packprice]}><b>Price: </b>
                                            R {item.price}
                                        </Text>
                                    </View>
    
                                </View>
    
                                <View style={cartcss.cartinnerimagebox}>
    
                                    <View style={cartcss.quantity} >
                                        <View style={cartcss.qtytext}>
                                            <Text style={cartcss.qtynumber} onPress={() => { setqty(qty - 1) }}>
                                                -
                                            </Text>
                                        </View>
                                        <View style={cartcss.qtytext}>{qty}</View>
                                        <View onPress={() => { setqty(qty + 1) }} style={cartcss.qtytext1}>
                                            <Text style={cartcss.qtynumber} onPress={() => { setqty(qty + 1) }}>
                                                +
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={cartcss.cartinnerimagebox}>
    
                                    <View>
                                        <Text style={cartcss.subprice}>
                                           R {item.price}
                                        </Text>
                                    </View>
    
                                </View>
    
    
                            </View>
                            <View>
                                <View>
                                    <FontAwesome name="close" color="#c99742" size={10} />
                                </View>
                            </View>
                        </View>
                        ))
                    }
                   
                    <View style={cartcss.checkoutbox}>
                        <View style={cartcss.carttextbox}>
                            <Text style={cartcss.carttotaltext}>CART TOTAL</Text>
                        </View>
                        <View style={cartcss.subtotalbox}>
                            <Text style={cartcss.subtotaltext}>Sub Total(R)</Text>
                            <Text style={cartcss.subtotalprice}>19</Text>
                        </View>
                        <View style={cartcss.checkouttextbox}>
                            <Pressable style={cartcss.proceedbutton} onPress={()=>{navigation.navigate('proceedpage')}}>
                                <Entypo name="check" color="#c99742" size={16} />
                                <Text style={cartcss.proceedtext}>
                                    Proceed to Checkout
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}