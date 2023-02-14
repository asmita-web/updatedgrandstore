import React from "react";
import { View, Text, Button, SafeAreaView, ScrollView, Image, Pressable, ImageBackground } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Homecss } from "./homecss";
import { LinearGradient } from 'expo-linear-gradient';

const categories = [
    {
        id:1,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {   
        id:2,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {   
        id:3,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {   id:4,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        id:5,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        id:6,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        id:7,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        id:8,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        id:9,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        id:10,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
]

const bestseller = [
    { 
        id:1,
        imgurl: require('../../assets/vodka.png'),
        title: "Smirnoff",
        subtitle: "Vodka New 80",
        price: "R 1000"
    },
    {
        id:2,
        imgurl: require('../../assets/vodka.png'),
        subtitle: "Vodka New 80",
        title: "Smirnoff",
        price: "R 1000"
    },
    {
        id:3,
        imgurl: require('../../assets/vodka.png'),
        title: "Smirnoff",
        subtitle: "Vodka New 80",
        price: "R 1000"
    },
    {
        id:4,
        imgurl: require('../../assets/vodka.png'),
        title: "Smirnoff",
        subtitle: "Vodka New 80",
        price: "R 1000"
    },
    {
        id:5,
        imgurl: require('../../assets/vodka.png'),
        title: "Smirnoff",
        subtitle: "Vodka New 80",
        price: "R 1000"
    },
    {
        id:6,
        imgurl: require('../../assets/vodka.png'),
        title: "Smirnoff",
        subtitle: "Vodka New 80",
        price: "R 1000"
    },

]


export default function HomeScreen({navigation}) {
    return (
        <ScrollView>
            <SafeAreaView style={{ backgroundColor:"#1a1a1a" }}>

                <View style={Homecss.header}>
                    <View onPress={() => navigation.openDrawer()}>
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
                    <View style={{ width: "100%", height: 160 }}>
                        <Image style={{ width: "100%", height: "100%" }} source={require('../../assets/mcivor.png')} />
                    </View>
                    <View>
                        <View style={Homecss.categoriesBox}>
                            <Text style={Homecss.categoryText}>Categories</Text>
                            <Pressable
                                style={Homecss.viewallbox}>
                                <Text style={Homecss.viewalltext}>View All</Text>
                                <AntDesign name="right" size={10} color="white" />

                            </Pressable>
                        </View>
                        <View style={Homecss.categorymainbox}>
                            {
                                categories.map((items,index) => (
                                    <View key={index.id} style={Homecss.categorybox}>

                                        <View style={Homecss.imagebox}>
                                            <Image style={{ width: "100%", resizeMode: "cover", height: "100%", borderRadius: 50 }} source={{ uri: items.imgurl }} />
                                        </View>
                                        <View>
                                            <Text style={Homecss.categoryboxtext}>
                                                {items.title}</Text>
                                        </View>

                                    </View>

                                )

                                )

                            }
                        </View>
                        <View style={{ width: "100%", height: 160, paddingTop: 20, }}>
                            <Image style={{ width: "100%", height: "100%", resizeMode: "cover", }} source={require('../../assets/image1.png')} />
                        </View>
                        <View>
                            <View style={Homecss.categoriesBox}>
                                <Text style={Homecss.categoryText}>Best Sellers</Text>
                                <Pressable
                                    style={Homecss.viewallbox}>
                                    <Text style={Homecss.viewalltext}>View All</Text>
                                    <AntDesign name="right" size={10} color="white" />
                                </Pressable>
                            </View>
                            <ScrollView horizontal={true}>
                                <View style={Homecss.bestsellerouterbox}>
                                    {
                                        bestseller.map((item,index) => (
                                            <View key={index.id} style={Homecss.bestsellermainbox}>
                                                <View style={Homecss.bestsellerimagebox}>
                                                    <Image style={{ width: "100%", height: "100%" }} source={{ uri: item.imgurl }} />

                                                </View>
                                                <View>
                                                    <Text style={Homecss.bestsellertext}>
                                                    {item.title}
                                                    </Text>
                                                   
                                                </View>
                                                <View>
                                                    <Text style={Homecss.bestsellertext}>
                                                    {item.subtitle}
                                                    </Text>
                                                    
                                                </View >
                                                <View style={Homecss.bestsellerprice}>
                                                    <Text style={Homecss.bestsellerprice}>
                                                    {item.price}
                                                    </Text>
                                                    </View>
                                            </View>
                                        ))
                                    }

                                </View>
                            </ScrollView>

                        </View>
                        <View style={{ width: "100%", height: 160, paddingTop: 30, paddingBottom: 10 }}>
                            <Image style={{ width: "100%", height: "100%", resizeMode: "cover" }} source={require('../../assets/image2.png')} />
                        </View>

                        <View>
                            <View style={Homecss.categoriesBox}>
                                <Text style={Homecss.categoryText}>Trending Products</Text>
                                <Pressable
                                    style={Homecss.viewallbox}>
                                    <Text style={Homecss.viewalltext}>View All</Text>
                                    <AntDesign name="right" size={10} color="white" />
                                </Pressable>
                            </View>
                            <ScrollView horizontal={true}>
                                <View style={Homecss.bestsellerouterbox}>
                                    {
                                        bestseller.map((item,index) => (
                                            <View key={index.id} style={Homecss.bestsellermainbox}>
                                                <View style={Homecss.bestsellerimagebox}>
                                                    <Image style={{ width: "100%", height: "100%" }} source={{ uri: item.imgurl }} />

                                                </View>
                                                <View >
                                                    <Text style={Homecss.bestsellertext}>
                                                    {item.title}
                                                    </Text>
                                                    
                                                </View>
                                                <View >
                                                    <Text style={Homecss.bestsellertext}>
                                                    {item.subtitle}
                                                    </Text>
                                                   
                                                </View >
                                                <View >
                                                    <Text style={Homecss.bestsellerprice}>
                                                    {item.price}
                                                    </Text>
                                                    </View>
                                            </View>
                                        ))
                                    }

                                </View>
                            </ScrollView>

                        </View>
                    </View>
                </View>
                <View style={{ width: "100%", paddingBottom: 10 }}>
                
                    <ImageBackground style={{ width: "100%", height: "100%", resizeMode: "cover", resizeMode: "contain" }} source={require('../../assets/fruits.jpg')}>
                    <LinearGradient colors= {['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.30)']} style={{height:"100%"}}>
                        <View style={Homecss.backgroundbox}>
                            <Text style={Homecss.backgroundboxtitle}>Love For The Wines</Text>
                            <Text style={Homecss.backgroundsubtitle}>experience the taste of the fruit</Text>
                        </View>
                        <LinearGradient colors= {['rgba(0,0,0,0.00)','rgb(33,33,33)','rgb(33,33,33)','rgb(33,33,33)']} style={{paddingTop:30,paddingBottom:20}}>
                        <View style={Homecss.sparkingmainbox}>
                            <View style={[Homecss.sparklingbox, Homecss.sparkingboxadjust]}>
                                <View style={Homecss.sparklingitem}>Sparkling Wine</View>
                                <View style={Homecss.sparklingitem}>Sparkling Wine</View>
                                <View style={Homecss.sparklingitem}>Sparkling Wine</View>
                            </View>
                            <View style={Homecss.sparklingbox}>
                                <View style={Homecss.sparklingitem}>Sparkling Wine</View>
                                <View style={Homecss.sparklingitem}>Sparkling Wine</View>
                                <View style={Homecss.sparklingitem}>Sparkling Wine</View>
                            </View>
                        </View>
                        </LinearGradient>
                    

                        </LinearGradient>
                    </ImageBackground>
                   
                </View>

                <View style={{ width: "100%", paddingTop: 30, paddingBottom: 10 }}>
                
                <ImageBackground style={{ width: "100%", height: "100%", resizeMode: "cover", resizeMode: "contain" }} source={require('../../assets/4.jpg')}>
                <LinearGradient colors= {['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.30)']} >
                    <View style={{flexDirection:"column",justifyContent:"center",gap:25,alignItems:"center",paddingTop:30,paddingBottom:30}}>
                    <View style={Homecss.examplebox}>
                        <Text style={Homecss.backgroundboxtitle}>DISCOVER SUPER BRANDS</Text>
                        <Text style={Homecss.backgroundsubtitle}>experience the luxury teste</Text>
                       
                    </View>
                    <Pressable style={Homecss.examplebutton}>
                            <Text style={Homecss.exampletext}>Example</Text>
                        </Pressable>
                   
                    </View>
                   
                

                    </LinearGradient>
                </ImageBackground>
               
            </View>


                <View style={{ padding: 13,backgroundColor:"#1a1a1a"}}>
                            <View style={Homecss.categoriesBox}>
                                <Text style={Homecss.categoryText}>Featured Products</Text>
                                <Pressable
                                    style={Homecss.viewallbox}>
                                    <Text style={Homecss.viewalltext}>View All</Text>
                                    <AntDesign name="right" size={10} color="white" />
                                </Pressable>
                            </View>
                            <ScrollView horizontal={true}>
                                <View style={Homecss.bestsellerouterbox}>
                                    {
                                        bestseller.map((item,index) => (
                                            <View key={index.id} style={Homecss.bestsellermainbox}>
                                                <View style={Homecss.bestsellerimagebox}>
                                                    <Image style={{ width: "100%", height: "100%" }} source={{ uri: item.imgurl }} />

                                                </View>
                                                <View >
                                                    <Text style={Homecss.bestsellertext}>
                                                    {item.title}
                                                    </Text>
                                                   
                                                </View>
                                                <View >
                                                    <Text style={Homecss.bestsellertext}>
                                                    {item.subtitle}
                                                    </Text>
                                                 
                                                </View >
                                                <View>
                                                    <Text  style={Homecss.bestsellerprice}>
                                                    {item.price}
                                                    </Text>
                                                 
                                                    </View>
                                            </View>
                                        ))
                                    }

                                </View>
                            </ScrollView>

                        </View>
                
                {/* <LinearGradient
          colors={['red', 'yellow', 'green' ]}
        
        >
          <Text>Vertical Gradient</Text>
        </LinearGradient> */}
            </SafeAreaView>
        </ScrollView>


    );
}