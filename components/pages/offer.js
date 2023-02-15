
import { View, ScrollView, SafeAreaView, Text, Pressable, Image, ImageBackground } from "react-native";
import { shopcss } from "./shopcss";
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { offercss } from "./offercss";


const productlist = [
    {
        id: 1,
        imgurl: require('../../assets/Mcivor.jpeg'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 19",
        offerrs: "R 10"
    },
    {
        id: 2,
        imgurl: require('../../assets/Mcivor.jpeg'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 20",
        offerrs: "R 10"
    },
    {
        id: 3,
        imgurl: require('../../assets/Mcivor.jpeg'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 30",
        offerrs: "R 10"
    },
    {
        id: 4,
        imgurl: require('../../assets/Mcivor.jpeg'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 40",
        offerrs: "R 10"
    },
    {
        id: 5,
        imgurl: require('../../assets/Mcivor.jpeg'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 19",
        offerrs: "R 10"
    },
    {
        id: 6,
        imgurl: require('../../assets/Mcivor.jpeg'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 19",
        offerrs: "R 10"
    },
    {
        id: 7,
        imgurl: require('../../assets/Mcivor.jpeg'),
        title: "Amstel Lager Can (1 x 440ML)..",
        rs: "R 19",
        offerrs: "R 10"
    }
]

export default function Offer() {
    return (

        <ScrollView style={{ backgroundColor: "#1c1c1c" }}>
            <SafeAreaView>

                <View style={offercss.mainbox}>
                    {/* <View style={shopcss.shopbox}>
                        <Text style={shopcss.shoptext}>Shop</Text>
                    </View> */}
                    <View>
                        <View>
                            <View style={offercss.trendingmainbox}>

                                {

                                    productlist.map((items) => (
                                        <View key={items} style={offercss.trendingbox}>

                                            <View style={offercss.trendingimagebox}>
                                                <View style={offercss.imagenewbox}>
                                                    <View style={{ height: 100, width: 125 }}>
                                                        <Image source={{ uri: items.imgurl }} style={{ width: "100%", height: "100%" }} />
                                                    </View>
                                                    <View style={offercss.weeklyofferbox}>
                                                        <Pressable style={offercss.weeklybox}>
                                                            <Text style={offercss.weeklytext}>Weekly Offer</Text>
                                                        </Pressable>
                                                    </View>

                                                    <View style={offercss.addtocartmainbox}>
                                                        <Pressable style={offercss.addtocartbox}>
                                                            <Entypo name="shopping-cart" color="#dca743" size={14} />
                                                            <Text style={offercss.addtocarttext}>ADD TO CART</Text>
                                                        </Pressable>
                                                    </View>
                                                </View>


                                                <View style={offercss.productboxitem}>
                                                    <Text style={offercss.trendingboxtext}>{items.title}</Text>
                                                    <Text style={offercss.trendingboxtext}>
                                                    <del style={{fontSize:12}}>{items.offerrs}</del>
                                                       <Text style={{fontSize:15}}> {items.rs}</Text></Text>
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
