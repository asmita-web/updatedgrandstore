import React from "react";
import { StyleSheet } from "react-native";

export const profilecss = StyleSheet.create({

    profilebox: {
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        gap: 15,
        paddingTop: 30,
        paddingBottom: 30


    },
    profiletext: {
        fontSize: 17,
        fontWeight: 500,
        color: "white",
        fontFamily: 'Times New Roman,sans-serif',


    },
    signinmainbox: {
        gap: 20,
        padding: 20,
        backgroundColor: "#dca743",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor:"#dca743"
    },
    user: {
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        backgroundColor: "#151515",
        borderRadius: 20,
        height: 40
    },
    pleasesignin: {
        fontSize: 17,
        fontWeight: 700,
        fontFamily: 'Times New Roman,sans-serif',

    },
    containerbox:{
        paddingTop:25,
        flexDirection:"column",
        gap:20
    },
    
   containerinnerbox:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:20,
   },
   walletbox:{
    flexDirection:"row",
    justifyContent:"left",
    alignItems:"center",
    gap:10,
    borderWidth:1,
    borderColor:"white",
    padding: 20,
    width: "45%",
    height: 40
   },
   walletetext:{
     fontSize:15,
     color:"#a8a8a8",
     fontWeight: 700,
    fontFamily: 'Times New Roman,sans-serif',
   }
})