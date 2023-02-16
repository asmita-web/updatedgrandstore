
import React from "react";
import { StyleSheet } from "react-native";

export const productdcss = StyleSheet.create({


    imagewidth: {
        width: 200,
        height: 200,
        padding: 20,
        backgroundColor: "#212223"
    },
    maincontainer: {
        padding: 12,
        backgroundColor: "#1c1c1c",
        height: "100vh"
    },
    producttitle: {
        color: "#a8a8a8",
        fontSize: 20,
        fontWeight: 500,
        textAlign: "center",
        lineHeight: 25,
        fontFamily: 'Times New Roman,sans-serif',

    },
    productprice: {
        fontSize: 26,
        fontWeight: 400,
        fontStyle: "normal",
        letterSpacing: 0.4,
        color: "#c99742",
        textAlign: "center",
        fontFamily: 'Times New Roman,sans-serif',

    },

    productdetails: {
        color: "#a8a8a8",
        fontSize: 17,
        fontWeight: 500,
        textAlign: "justify",
        lineHeight: 24,
        fontFamily: 'Times New Roman,sans-serif',

    },
    addtocartbox: {
        borderWidth: 1,
        borderColor: "#dca743",
        backgroundColor: "#212223",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        paddingLeft: 15,
        paddingTop: 7,
        paddingBottom: 7,
        paddingRight: 15
    },


    addtocarttext: {
        color: "#dca743",
        fontFamily: 'Times New Roman,sans-serif',
        fontSize: 15
    },

    detailsbox: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    selectbox: {
        width: "80%"
    },
    selectboxitem: {
        borderRadius: 5,
        color: "#a8a8a8",
        backgroundColor: "#212223",
        borderColor: "#545454",
        // borderColor:"#dca743",
        borderWidth: 1,
        padding: 10,
        fontFamily: 'Times New Roman,sans-serif',
        fontWeight: 400
    },
    labelbox: {
        color: "#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
        textAlign: "center",
        fontSize: 18,
        paddingBottom: 15
    },
    whishlistbox: {

        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        gap: 8
    },
    whichlisttext: {
        color: "#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
        fontSize: 15,
    },
    whishlistmainbox: {
        borderBottomColor: "#545454",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: "#545454",

        width: "100%",
        paddingTop: 15,
        paddingBottom: 15
    },
    whishlistbox1: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16
    },

})