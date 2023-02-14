import React from "react";
import { StyleSheet } from "react-native";

export const brandcss = StyleSheet.create({
    headermainbox: {
        paddingBottom: 10,
        paddingTop: 30,
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: "#ffa500"
    },

    allcategorybox: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    allcategory: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        justifyContent: "center"
    },

    categorytext: {
        fontSize: 15,
        fontWeight: 700
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
        gap: 20
    },
    categorybox: {
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        gap: 15,
        width: "15%"
    },
    imagebox: {
        width: "90%",
        height: "45%",
        borderWidth: 2,
        borderColor: "#dca743",
        borderRadius: 50
    },
    categoryboxtext: {
        color: "#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
    },

    trendingtextbox: {
        paddingTop: 25,
        paddingBottom: 25

    },
    trendingtext: {
        color: "#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
        textAlign: "left",
        fontSize:15,
        fontWeight:700
    },


    trendingmainbox: {
        flexWrap: "wrap",
        // alignItems: "stretch",
        flexDirection: "row",
        paddingBottom: 10,
        // borderBottomWidth: 1,
        // borderColor: "grey",

        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 10
    },
    trendingbox: {
        justifyContent: "center",
        alignItems: "center",
        height: 115,
        gap: 7,
        width: "31%",
        marginBottom:25
    },
    trendingimagebox: {
        width: "100%",
        height: "100%",
        // borderWidth: 2,
        // borderColor: "black",
        borderRadius: 5,
        alignItems: "center",
        gap: 15
    },
    trendingboxtext: {
        fontWeight: 400,
        color: "#dfdfdf",
        fontFamily: 'Times New Roman,sans-serif',
    },
    trendingtitle: {
        alignItems: "center",
        flexDirection: "row",
        gap: 5
    },
    trendingtitlemainbox: {
        gap: 5,
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 19,
        alignItems: "flex-start",
        flexDirection: "column",
        justifyCcontent: "center",
        alignItems: "flex-start"
    },
    trendingboxsubtext: {
        color: "#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
    },

})