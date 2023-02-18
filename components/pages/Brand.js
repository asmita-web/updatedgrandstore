import React from "react";
import { View, Text, ScrollView, SafeAreaView, Image,ImageBackground } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { brandcss } from "./brandcss";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';



const categories = [
    {
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/2.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/3.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/4.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/5.jpg'),
        title: "Beers"
    },
    {
        imgurl: require('../../assets/redwine.jpg'),
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

const trendingproduct =[
    {
        imgurl: require('../../assets/brand1.png'),
        title: "Sparking Wine",
        subtitle:"Vinologist"
    },
    {
        imgurl: require('../../assets/brand2.png'),
        title: "Sparking Wine",
        subtitle:"Zandvliet"
    },
    {
        imgurl: require('../../assets/brand3.png'),
        title: "Sparking Wine",
        subtitle:"kwv"
    },
    {
        imgurl: require('../../assets/brand4.png'),
        title: "Sparking Wine",
        subtitle:"J-C-leroux"
    },
    {
        imgurl: require('../../assets/brand1.png'),
        title: "Sparking Wine",
        subtitle:"Vinologist"
    },
    {
        imgurl: require('../../assets/brand2.png'),
        title: "Sparking Wine",
        subtitle:"Zandvliet"
    },
    {
        imgurl: require('../../assets/brand3.png'),
        title: "Sparking Wine",
        subtitle:"kwv"
    },
    {
        imgurl: require('../../assets/brand2.png'),
        title: "Sparking Wine",
        subtitle:"Zandvliet"
    },
    {
        imgurl: require('../../assets/brand1.png'),
        title: "Sparking Wine",
        subtitle:"Vinologist"
    },
    {
        imgurl: require('../../assets/brand2.png'),
        title: "Sparking Wine",
        subtitle:"Zandvliet"
    },
    {
        imgurl: require('../../assets/brand3.png'),
        title: "Sparking Wine",
        subtitle:"kwv"
    },
    {
        imgurl: require('../../assets/brand4.png'),
        title: "Sparking Wine",
        subtitle:"J-C-leroux"
    },
]
export default function Brand({navigation}) {

    const backhome =()=>{
        // navigation.navigate('Home');
        console.log(navigation.navigate('Homescreen'))
        // alert("brands")
    }
    return (
        <ScrollView>
            <SafeAreaView style={{backgroundColor: "#1a1a1a"}}>
                <View style={brandcss.headermainbox}>
                    <View style={brandcss.allcategorybox}>
                        <View style={brandcss.allcategory} >
                            <View>
                                <Text onPress={()=>{backhome()}}>
                                <Ionicons style={brandcss.categorytext} name="arrow-back" size={20} color="black" />
                                </Text>
                                </View>

                                
                            <View><Text style={brandcss.categorytext}>All Brand</Text></View>
                        </View>
                        <View style={brandcss.allcategory}>
                            <View><Feather style={brandcss.categorytext} name="search" size={20} color="black" /></View>
                            <View><MaterialIcons style={brandcss.categorytext} name="keyboard-voice" size={20} color="black" /></View>

                        </View>
                    </View>

                </View>
                <View style={{ padding: 20, backgroundColor: "#1a1a1a",height:"100vh" }}>
                    {/* <View style={brandcss.categorymainbox}>
                        {
                            trendingproduct.map((items) => (
                                <View key={items} style={brandcss.categorybox}>

                                    <View style={brandcss.imagebox}>
                                        <Image style={{ width: "100%", resizeMode: "cover", height: "100%", borderRadius: 50 }} source={{ uri: items.imgurl }} />
                                    </View>
                                    <View>
                                        <Text style={brandcss.categoryboxtext}>{items.title}</Text>
                                    </View>

                                </View>

                            )

                            )

                        }
                    </View> */}


                    <View>
                        <View style={brandcss.trendingtextbox}>
                            <Text style={brandcss.trendingtext}>Top Wine Brands</Text>
                        </View>
                        <View style={brandcss.trendingmainbox}>

                            {
                                trendingproduct.map((items, index) => (
                                    <View key={index} style={brandcss.trendingbox}>

                                        <View style={brandcss.trendingimagebox}>
                                            <ImageBackground style={{ width: "100%", resizeMode: "contain", height: "100%", borderRadius: 5 }} source={{ uri: items.imgurl }}>
                                            <LinearGradient colors= {['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.30)']} style={{height:"100%"}}>
          
                                                {/* <View style={brandcss.trendingtitlemainbox}>
                                                <View style={brandcss.trendingtitle}>
                                                    <Text style={brandcss.trendingboxtext}>{items.title}</Text>
                                                    <AntDesign name="right" size={10} color="white"/>
                                                </View>
                                                <View style={brandcss.trendingtitle}>
                                                    <Text style={brandcss.trendingboxsubtext}>{items.subtitle}</Text>
                                                </View>
                                                </View> */}
                                               
                                                </LinearGradient>
                                            </ImageBackground>
                                            <View style={brandcss.trendingtitle}>
                                                    <Text style={brandcss.trendingboxsubtext}>{items.subtitle}</Text>
                                                </View>
                                        </View>

                                    </View>

                                )

                                )

                            }
                        </View>
                    </View>




                </View>
            </SafeAreaView>
        </ScrollView>
    );
}