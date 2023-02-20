import React from "react";
import { StyleSheet } from "react-native-web";

export const logincss = StyleSheet.create({
maincontainer:{
    height:"100vh",
    backgroundColor:"#1c1c1c",
    padding:12,
},

fontcolor:{
    color: "#a8a8a8",
    fontFamily: 'Times New Roman,sans-serif',
},
sendmessage: {
    backgroundColor: '#212223',
    borderRadius:3,
    paddingTop: 12,
    paddingLeft: 15,
    paddingBottom: 12,
    paddingRight: 15,
    borderColor: "#c99742",
    width: "30%",
    borderWidth:2
},
sendmessagetext: {
    fontSize: 15,
    fontWeight: 600,
    textAlign: "center",
    color: '#be9742',
    fontFamily: 'Times New Roman,sans-serif',

},
inputbox: {
    // backgroundColor:"white",
    padding: 10,
    borderColor: "white",
    borderRadius:3,
    borderWidth: 1,
    width: "100%",
    color: "#a8a8a8"
},
customerlogin:{
   paddingBottom:20
},
customerlogintext:{
    fontFamily: 'Times New Roman,sans-serif',
    color: "#c99742",
    fontSize:22,
    fontWeight: 600,
    textAlign: "center"
},
logintextlabel:{
    fontFamily: 'Times New Roman,sans-serif',
    fontSize: 17,
    color: "#a8a8a8",
    lineHeight:35
},

loginbox:{
    // flexDirection: "column",
    justifyContent: "center",
    gap: 15
},
loginmainbox:{
    paddingBottom:20,
    paddingTop:46,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth:1,
    borderColor:"#4f4f4f"
},
lostpasswordboxtext:{
    fontFamily: 'Times New Roman,sans-serif',
    fontSize: 15,
    color: "#c99742",
    textAlign:"center",
    lineHeight:30,
    
},
lostyouracconttext:{
    fontFamily: 'Times New Roman,sans-serif',
    fontSize: 15,
    color: "#a8a8a8",
    textAlign:"center",
    lineHeight:30,
},
lostpassbox:{
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomColor: "#545454",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: "#545454",
}
    
})