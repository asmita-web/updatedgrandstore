import React from "react";
import { StyleSheet } from "react-native";

export const cartcss = StyleSheet.create({

    maincartbox: {
        height: "100vh",
        backgroundColor: "#1c1c1c",
        padding: 20,

    },
    cartbox: {
        flexDirection: "row",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#393939",
        borderRadius:5,
        backgroundColor: '#212223',
        shadowColor: '#000',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.6,
        shadowRadius: 24,

    },
    cartimage: {
        width: 45,
        height: 45,
        // padding:10
    },
    cartproductname: {
        color: "#a8a8a8",
        fontSize: 15,
        fontWeight: 700,
        
        textAlign: "center",

    },
    cartinnerimagebox: {
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
      
        width: "100%",
        flex: 1,
        justifyContent: "center",
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 0,
        paddingLeft: 0
    },
    headingtitlebox: {
        backgroundColor: "#212223",
      
        height: 41,
        borderWidth: 1,
       
    },

    textbreak: {
        flexDirection: 'row'
    },
    cartproduct: {
        flex: 3,
        flexWrap: 'wrap'
    },
    subtextcart: {
        color: "#a8a8a8",
        fontSize: 12,
        fontWeight: 700,
        // padding: 5px 5px;
        textAlign: "left",
        paddingBottom: 10
    },
    quantity: {
        paddingLeft:5,
        paddingRight:5,
        borderWidth: 1,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        borderRadius:3
    },
    qtytext: {
        color: "#a8a8a8",
        borderRightWidth:1,
        borderRightColor:"white",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        fontFamily: 'Times New Roman,sans-serif',
    },
    qtytext1: {
        color: "#a8a8a8",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        fontFamily: 'Times New Roman,sans-serif',
    },
    packprice:{
        color: "#a8a8a8",
        fontSize: 12,
        fontWeight: 700,
        // padding: 5px 5px;
        textAlign: "left",
        fontFamily: 'Times New Roman,sans-serif',
       
    },
    subprice:{
        color: "#a8a8a8",
        fontSize: 15,
        fontWeight: 700,
        // padding: 5px 5px;
        textAlign: "center",
        fontFamily: 'Times New Roman,sans-serif',
       
    },
    dividecart:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:10,
        paddingBottom: 10
    },
    proceedbutton:{
        backgroundColor:"#212223",   
        flexDirection:"row",
        justifyContent:"center",
        gap:5,
        borderColor:"#c99742",
        borderWidth:2,
        width: "75%",
        padding: 8
        
    },
    proceedtext:{
        color:"#c99742",
        fontFamily: 'Times New Roman,sans-serif',
        fontSize: 16,
        fontWeight: 500,
        textTransform: 'uppercase'
    },
    checkoutbox:{
        padding:15,
        borderColor:"#4d4d4d",
        borderWidth:1,
        marginTop: 40,
        borderRadius:5,
        marginLeft: 10
    },
    carttotaltext:{
        fontSize: 20,
       fontWeight: 500,
       color:"#a8a8a8",
       fontFamily: 'Times New Roman,sans-serif',
    },
    subtotaltext:{
        fontSize: 15,
       fontWeight: 500,
       color:"#c99742",
       fontFamily: 'Times New Roman,sans-serif',
    },
    subtotalprice:{
       
       fontSize: 18,
       fontWeight: 700,
       color:"#c99742",
       fontFamily: 'Times New Roman,sans-serif',
    },
    subtotalbox:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:5,
       paddingBottom: 25
    },
    carttextbox:{
    paddingTop:20,
    paddingBottom:20
    },
    checkouttextbox: {
    paddingBottom:20
    },
    qtynumber:{
        color:"#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
    }






})