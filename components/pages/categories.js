import React from "react";
import { View,Text ,ScrollView,SafeAreaView,Image} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { categorycss } from "./categorycss";


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
export default function Categories() {
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={categorycss.headermainbox}>
                    <View style={categorycss.allcategorybox}>
                        <View style={categorycss.allcategory}>
                            <View><Ionicons style={categorycss.categorytext}  name="arrow-back" size={20} color="black"/></View>
                            <View><Text style={categorycss.categorytext}>All Categories</Text></View>
                        </View>
                        <View style={categorycss.allcategory}>
                            <View><Feather style={categorycss.categorytext} name="search" size={20} color="black"/></View>
                            <View><MaterialIcons style={categorycss.categorytext} name="keyboard-voice" size={20} color="black"/></View>

                        </View>
                    </View>
                   
                </View>
                <View style={{padding:20,backgroundColor:"#1a1a1a"}}>
                <View style={categorycss.categorymainbox}>
                            {
                                categories.map((items,index) => (
                                    <View key={index} style={categorycss.categorybox}>

                                        <View style={categorycss.imagebox}>
                                            <Image style={{ width: "100%", resizeMode: "cover", height: "100%", borderRadius: 50 }} source={{ uri: items.imgurl }} />
                                        </View>
                                        <View>
                                            <Text style={categorycss.categoryboxtext}>{items.title}</Text>
                                        </View>

                                    </View>

                                )

                                )

                            }
                        </View>

                </View>
            </SafeAreaView>
        </ScrollView>
    );
}