import React from "react";
import { StyleSheet } from "react-native";

export const searchcss = StyleSheet.create({

mainbox:{
    padding:20,
    backgroundColor:"#1c1c1c",
    height:"100vh"

},

shopbox:{
  padding:20,
},
shoptext:{
    fontSize:20,
    color: "#a8a8a8",
    fontFamily: "Times New Roman sans-serif",
    fontWeight: 500,
},

productbox:{
    flexWrap: "wrap",
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "grey",

    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 20
},

imagetext:{
    color: "#a8a8a8",
    fontFamily: "Times New Roman sans-serif",
},
producttitlebox:{
    justifyContent: "center",
    alignItems: "center"
},






trendingtextbox: {
    paddingTop: 25,
    paddingBottom: 25

},
trendingtext: {
    color: "#a8a8a8",
    fontFamily: 'Times New Roman,sans-serif',
    textAlign: "left"
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
    gap: 30
},
trendingbox: {
    justifyContent: "center",
    alignItems: "center",
    height:230,
    gap:50,
    width: "45%",
    marginBottom:1
},
trendingimagebox: {
    width: "100%",
    height: "100%",
    // borderWidth: 2,
    // borderColor: "black",
    borderRadius: 5,
    justifyContent:"center",
    gap:20,
    backgroundColor:"#212223"
},
trendingboxtext: {
    fontWeight: 400,
    color: "#dfdfdf",
    fontFamily: 'Times New Roman,sans-serif',
    textAlign:"center",
    lineHeight:22
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

productboxitem:{
    justifyContent:"center",
    alignItems:"center",
    gap:5,
    paddingTop:20
},
imagenewbox:{
    backgroundColor: "#212223",
    padding: 20,
    position:"relative",
    justifyContent: "center",
    alignItems: "center"
},
addtocartbox:{
    borderWidth:1,
    borderColor:"#dca743",
    backgroundColor:"#212223",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingLeft: 15,
    paddingTop: 7,
    paddingBottom:7,
    paddingRight: 15
},

addtocartmainbox:{
    position:"absolute",
    top:"95%",
    // left:"25%"
},

addtocarttext:{
    color: "#dca743",
    fontFamily: 'Times New Roman,sans-serif',
    fontSize:12
},
inputbox: {
    // backgroundColor:"white",
    padding: 10,
    // borderColor: "white",
    borderRadius:3,
    borderWidth:"none",
    width: "100%",
    color: "#a8a8a8"
},

inputboxmain:{
    paddingBottom:40,
    flexDirection:"row",
    alignItems:"center",
    gap:10
},





})