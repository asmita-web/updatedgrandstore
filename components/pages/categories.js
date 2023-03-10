import React, { useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, Image,ImageBackground } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { categorycss } from "./categorycss";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import axios from "axios";
import { http } from "../../Restservice";
import { useState } from "react";



const categories = [
    {
        id:1,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Beers"
    },
    {   
        id:2,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Bitters"
    },
    {   
        id:3,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Brandy"
    },
    {   id:4,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Champagne"
    },
    {
        id:5,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Whisky"
    },
    {
        id:6,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Ciders"
    },
    {
        id:7,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Cognac"
    },
    {
        id:8,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Gin"
    },
    {
        id:9,
        imgurl: require('../../assets/whisky.jpg'),
        title: "BeersLiqueur"
    },
    {
        id:10,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Mixer"
    },
]

const trendingproduct =[
    {
        id:1,
        imgurl: require('../../assets/2.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
    {
        id:2,
        imgurl: require('../../assets/whisky.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
    {
        id:3,
        imgurl: require('../../assets/3.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
    {
        id:4,
        imgurl: require('../../assets/4.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
    {
        id:5,
        imgurl: require('../../assets/5.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
    {
        id:6,
        imgurl: require('../../assets/redwine.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
    {
        id:7,
        imgurl: require('../../assets/2.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
    {
        id:8,
        imgurl: require('../../assets/3.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
    {
        id:9,
        imgurl: require('../../assets/4.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
    {
        id:10,
        imgurl: require('../../assets/redwine.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
    {
        id:11,
        imgurl: require('../../assets/redwine.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
    {
        id:12,
        imgurl: require('../../assets/redwine.jpg'),
        title: "Sparking Wine",
        subtitle:"Best Brand"
    },
]
export default function Categories({navigation}) {
     const [categoryall,setcategoryall]=useState([])
    useEffect(()=>{
        getallcategory()
    },[])

    const getallcategory=()=>{
        axios.get(http+'/category')
        .then((response)=>{
           setcategoryall(response.data)
           console.log(categoryall)
        })
        .catch((err)=>{
            console.log("category",err)
        })
    }

    const backhome =()=>{
        navigation.navigate('Homescreen')
    }
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={categorycss.headermainbox}>
                    <View style={categorycss.allcategorybox}>
                        <View style={categorycss.allcategory}>
                            <View>
                                <Text onPress={()=>{backhome()}}>
                                <Ionicons  style={categorycss.categorytext} name="arrow-back" size={20} color="black" />
                                </Text>
                               
                                </View>
                            <View><Text style={categorycss.categorytext}>All Categories</Text></View>
                        </View>
                        <View style={categorycss.allcategory}>
                            <View><Feather style={categorycss.categorytext} name="search" size={20} color="black" /></View>
                            <View><MaterialIcons style={categorycss.categorytext} name="keyboard-voice" size={20} color="black" /></View>

                        </View>
                    </View>

                </View>
                <View style={{ padding: 20, backgroundColor: "#1a1a1a" }}>
                    <View style={categorycss.categorymainbox}>
                        {
                            categoryall.map((items,index) => (
                                <View key={index} style={categorycss.categorybox}>

                                    <View style={categorycss.imagebox}>
                                        <Image style={{ width: "100%", resizeMode: "cover", height: "100%", borderRadius: 50 }} source={require('../../assets//whisky.jpg')} />
                                    </View>
                                    <View>
                                        <Text style={categorycss.categoryboxtext}>{items.category}</Text>
                                    </View>

                                </View>

                            )

                            )

                        }
                    </View>


                    <View>
                        <View style={categorycss.trendingtextbox}>
                            <Text style={categorycss.trendingtext}>Trending Products</Text>
                        </View>
                        <View style={categorycss.trendingmainbox}>

                            {
                                trendingproduct.map((items,index) => (
                                    <View key={index} style={categorycss.trendingbox}>

                                        <View style={categorycss.trendingimagebox}>
                                            <ImageBackground style={{ width: "100%", resizeMode: "cover", height: "100%", borderRadius: 5 }} source={{ uri: items.imgurl }}>
                                            <LinearGradient colors= {['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.30)']} style={{height:"100%"}}>
          
                                                <View style={categorycss.trendingtitlemainbox}>
                                                <View style={categorycss.trendingtitle}>
                                                    <Text style={categorycss.trendingboxtext}>{items.title}</Text>
                                                    <AntDesign name="right" size={10} color="white"/>
                                                </View>
                                                <View style={categorycss.trendingtitle}>
                                                    <Text style={categorycss.trendingboxsubtext}>{items.subtitle}</Text>
                                                </View>
                                                </View>
                                               
                                                </LinearGradient>
                                            </ImageBackground>
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