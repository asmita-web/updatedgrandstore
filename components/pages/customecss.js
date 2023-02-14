import React from "react";
import { StyleSheet } from 'react-native';

export const customecss = StyleSheet.create({

    profilebox: {
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        gap: 15,
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: "#ffa500",
        paddingLeft: 20,
        paddingRight:20


    },
    profiletext: {
        fontSize: 17,
        fontWeight: 500,
        color: "black",
        fontFamily: 'Times New Roman,sans-serif',


    },
    profiletext1: {
        fontSize: 17,
        fontWeight: 500,
        color: "white",
        fontFamily: 'Times New Roman,sans-serif',


    },
    profile: {
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        backgroundColor: "#151515",
        height: 45,
        borderRadius: 50
    },
    menu:{
        height: "100vh",
        backgroundColor:"#151515"
    }
})