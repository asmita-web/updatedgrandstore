import React from "react";
import { StyleSheet } from "react-native";

export const categorycss = StyleSheet.create({
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
        justifyContent:"center"
    },

    categorytext:{
        fontSize:15,
        fontWeight:700
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
        height:100,
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

})