import React from "react";
import { StyleSheet } from "react-native";

export const cartcss = StyleSheet.create({

    maincartbox:{
        height:"100vh",
        backgroundColor:"#1c1c1c",
        padding:12,

    },
    cartbox:{
       flexDirection:"row" ,
       justifyContent:"center",
       borderWidth:1,
    //    borderColor:"#393939",
       borderColor:"white"

    },
    cartimage:{
        width:40,
        height:40,
        // padding:10
    },
    cartproductname:{
        color: "#a8a8a8",
        fontSize: 15,
        fontWeight: 700,
        // padding: 5px 5px;
        textAlign:"center",
        
    },
    cartinnerimagebox:{
        flexDirection:"column",
        alignItems:"center",
        gap:15,
        // borderColor:"#393939",
        borderWidth:1,
        width: "100%",
        flex: 1,
        borderColor:"white"
    },
    headingtitlebox:{
        backgroundColor:"#212223",
        // borderBottomColor:"#393939",
        // borderBottomColor:"white",
        // borderBottomWidth:1,
        height: 41,
        borderWidth:1,
        borderColor:"white"
    },

    textbreak:{
        flexDirection:'row'
    },
    cartproduct:{
        flex: 3, 
        flexWrap: 'wrap'
    },
    subtextcart:{
        color: "#a8a8a8",
        fontSize: 12,
        fontWeight: 700,
        // padding: 5px 5px;
        textAlign:"center",
    }


    
    
    
})