import React from "react";
import { View, Text, Button, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'

const categories = [
    {
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
]

const bestseller = [
    {
        imgurl: require('../../assets/vodka.png'),
        title: "Smirnoff",
        subtitle: "Vodka New 80",
        price: "R 1000"
    },
    {
        imgurl: require('../../assets/vodka.png'),
        subtitle: "Vodka New 80",
        title: "Smirnoff",
        price: "R 1000"
    },
    {
        imgurl: require('../../assets/vodka.png'),
        title: "Smirnoff",
        subtitle: "Vodka New 80",
        price: "R 1000"
    },
    {
        imgurl: require('../../assets/vodka.png'),
        title: "Smirnoff",
        subtitle: "Vodka New 80",
        price: "R 1000"
    },
    {
        imgurl: require('../../assets/vodka.png'),
        title: "Smirnoff",
        subtitle: "Vodka New 80",
        price: "R 1000"
    },
    {
        imgurl: require('../../assets/vodka.png'),
        title: "Smirnoff",
        subtitle: "Vodka New 80",
        price: "R 1000"
    },

]


export default function HomeScreen() {
    return (
        <ScrollView>
            <SafeAreaView style={{backgroundColor:"#1a1a1a"}}>

                <View style={{

                    backgroundColor: "black",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    alignItems: "center"
                }}>
                    <View>
                        <FontAwesome5 name="bars" size={10} color="white" />
                    </View>
                    <View style={{ width: "15%", height: 50 }}>
                        <Image style={{ width: "100%", height: "100%" }} source={require('../../assets/logo.png')} />
                    </View>
                    <View>
                        <FontAwesome5 name="shopping-cart" size={10} color="white" />
                    </View>
                </View>
                <View style={{ padding: 13 }}>
                    <View style={{ width: "100%", height: 130 }}>
                        <Image style={{ width: "100%", height: "100%" }} source={require('../../assets/mcivor.png')} />
                    </View>
                    <View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingTop:30,
                            paddingBottom:30,
                            alignItems:"center"
                        }}>
                            <Text style={{color:"white"}}>Categories</Text>
                            <Pressable 
                            style={{
                                paddingTop:5,
                                flexDirection:"row",
                                alignItems:"center",
                                gap:5,
                                justifyContent:"center",
                                background:"#dca743",
                                paddingBottom:5,
                                paddingLeft:12,
                                paddingRight:12
                            }}>
                                <Text style={{color:"white"}}>View All</Text>
                            </Pressable>
                        </View>
                        <View style={{ flexWrap: "wrap", alignItems: "stretch", flexDirection: "row", gap: 6, paddingBottom: 10, borderBottomWidth: 1, borderColor: "grey" }}>
                            {
                                categories.map((items) => (
                                    <View style={{
                                        width: 65, justifyContent: "center", alignItems: "flex-start", height: 70,
                                        justifyContent: "center"
                                    }}>

                                        <View style={{ width: 35, height: 35, }}>
                                            <Image style={{ width: "100%", resizeMode:"cover", height: "100%", borderRadius: 50 }} source={{ uri: items.imgurl }} />
                                        </View>
                                        <View>
                                            <Text style={{color:"white"}}>{items.title}</Text>
                                        </View>

                                    </View>

                                )

                                )

                            }
                        </View>
                        <View style={{ width: "100%", height: 130, paddingTop: 20, }}>
                            <Image style={{ width: "100%", height: "100%", resizeMode:"cover", }} source={require('../../assets/image1.png')} />
                        </View>
                        <View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingTop:30,
                                paddingBottom:30,
                                alignItems:"center"
                            }}>
                                <Text style={{color:"white"}}>Best Sellers</Text>
                                <Pressable
                                style={{
                                    paddingTop:5,
                                    flexDirection:"row",
                                    alignItems:"center",
                                    gap:5,
                                    justifyContent:"center",
                                    background:"#dca743",
                                    paddingBottom:5,
                                    paddingLeft:12,
                                    paddingRight:12
                                }}>
                                    <Text>View All</Text>
                                    <AntDesign name="right" size={10} color="white"/>
                                </Pressable>
                            </View>
                            <ScrollView horizontal={true}>
                            <View style={{flexDirection:"row",gap:15}}>
                                {
                                    bestseller.map(item => (
                                        <View style={{
                                            borderRadius: 3,
                                            backgroundColor: "#212121",
                                            padding: 15,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 2
                                        }}>
                                            <View style={{ width: 35, height: 35, }}>
                                                <Image style={{ width: "100%", height: "100%" }} source={{ uri: item.imgurl }} />

                                            </View>
                                            <View style={{
                                                color:"white",
                                                fontSize:12
                                            }}>
                                                {item.title}
                                            </View>
                                            <View style={{
                                                color:"white",
                                                fontSize:12
                                            }}>
                                                {item.subtitle}
                                            </View >
                                            <View style={{
                                                color:"white",
                                                fontSize:13
                                            }}>{item.price}</View>
                                        </View>
                                    ))
                                }

                            </View>
                            </ScrollView>
                          
                        </View>
                        <View style={{ width: "100%", height: 130, paddingTop:30,paddingBottom:10 }}>
                            <Image style={{ width: "100%", height: "100%", resizeMode:"cover" }} source={require('../../assets/image2.png')} />
                        </View>

                        <View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingTop:30,
                                paddingBottom:30,
                                alignItems:"center"
                            }}>
                                <Text style={{color:"white"}}>Trending Products</Text>
                                <Pressable
                                style={{
                                    paddingTop:5,
                                    flexDirection:"row",
                                    alignItems:"center",
                                    gap:5,
                                    justifyContent:"center",
                                    background:"#dca743",
                                    paddingBottom:5,
                                    paddingLeft:12,
                                    paddingRight:12
                                }}>
                                    <Text style={{color:"white"}}>View All</Text>
                                    <AntDesign name="right" size={10} color="white"/>
                                </Pressable>
                            </View>
                            <ScrollView horizontal={true}>
                            <View style={{flexDirection:"row",gap:15}}>
                                {
                                    bestseller.map(item => (
                                        <View style={{
                                            borderRadius: 3,
                                            backgroundColor: "black",
                                            padding: 15,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 2
                                        }}>
                                            <View style={{ width: 35, height: 35, }}>
                                                <Image style={{ width: "100%", height: "100%" }} source={{ uri: item.imgurl }} />

                                            </View>
                                            <View style={{
                                                color:"white",
                                                fontSize:12
                                            }}>
                                                {item.title}
                                            </View>
                                            <View style={{
                                                color:"white",
                                                fontSize:12
                                            }}>
                                                {item.subtitle}
                                            </View >
                                            <View style={{
                                                color:"white",
                                                fontSize:13
                                            }}>{item.price}</View>
                                        </View>
                                    ))
                                }

                            </View>
                            </ScrollView>
                          
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>


    );
}