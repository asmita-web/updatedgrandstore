import React from "react";
import { StyleSheet } from "react-native";

export const Homecss = StyleSheet.create({

    header: {
        backgroundColor: "#212121",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        alignItems: "center",
        position:"sticky",
        // top:"0%"
    },

    categoriesBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: "center"
    },
    categoryText: {
        color: "#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
        fontSize: 18,
        fontWeight: "bold"
    },

    viewallbox: {
        paddingTop: 7,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        justifyContent: "center",
        backgroundColor: "#dca743",
        paddingBottom: 7,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius:5
    },
    viewalltext: {
        color: "white",
        fontFamily: 'Times New Roman,sans-serif',
    },

    categorymainbox: {
        flexWrap: "wrap",
        // alignItems: "stretch",
        flexDirection: "row",
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "grey",

        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap:20
    },
    categorybox: {
        justifyContent: "center",
        alignItems: "center",
        height: 75,
        gap: 8,
        width: "15%"
    },
    imagebox: {
        width: "65%",
        height: "45%",
        borderWidth: 2,
        borderColor: "#dca743",
        borderRadius: 50
    },
    categoryboxtext: {
        color: "#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
    },
    bestsellermainbox: {
        borderRadius: 3,
        backgroundColor: "#212121",
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        width:"20%",
        gap: 8,

    },
    bestsellerimagebox: {
        width:60, height:85,
    },
    bestsellertext: {
        fontSize: 15,
        color: "#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
    },
    bestsellerprice: {
        color: "#dca743",
        fontSize: 17,
        fontWeight: 600
    },
    bestsellerouterbox: {
        height:200,
        flexDirection: "row",
        gap: 15
    },
    backgroundbox: {
        gap: 5,
        padding: 15,
        alignItems: "center"
    },
    backgroundboxtitle: {
        color: "#dca743",
        fontize: 18,
        fontWeight: 600,
        fontFamily: 'Times New Roman,sans-serif',
    },
    backgroundsubtitle: {
        color: "#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
        fontSize: 15,
    },
    sparkingmainbox: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%"

    },
    sparklingbox: {
        gap: 10,
        color: "white",
        flexirection: "row",
        justifyContent: "center",
        flexDirection: "row"
    },
    sparklingitem: {
        paddingBottom: 5,
        borderRadius: 14,
        paddingTop: 5,
        backgroundColor: "#151515",
        fontSize: 10,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "grey",
        borderWidth: 1
    },
    sparkingboxadjust: {
        paddingBottom: 15
    },

    examplebutton: {
        backgroundColor: "#dca743",
        paddingTop: 5,
        paddingLeft: 20,
        borderRadius:20,
        paddingBottom: 5,
        paddingRight: 20,
    },
    exampletext: {
        color: "white",
        fontFamily: 'Times New Roman,sans-serif',
        fontSize: 15,
    },
    examplebox: {
        gap: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    stickyhead:{
        position:'relative',
        backgroundColor:"#1a1a1a"
    }


})