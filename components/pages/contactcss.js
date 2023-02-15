import { StyleSheet } from "react-native";

export const contactcss = StyleSheet.create({
    inputbox: {
        padding: 12,
        borderColor: "#575757",
        borderRadius:5,
        borderWidth: 1,
        width: "100%",
        color: "#a8a8a8"
    },
    sendmessage: {
        backgroundColor: '#141413',
        borderRadius:5,
        paddingTop: 12,
        paddingLeft: 15,
        paddingBottom: 12,
        paddingRight: 15,
        borderColor:"#be9742",
        width:"40%",
        borderWidth:1
    },
    sendmessagetext: {
        fontSize: 15,
        fontWeight: 600,
        textAlign: "center",
        color: '#be9742',
        fontFamily: 'Times New Roman,sans-serif',

    },
    textcolor: {
        color: "white",
        fontFamily: 'Times New Roman,sans-serif',
    },

    infotext: {
        color: "#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
    },
    infobox: {
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        gap: 20
    },
    phone: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "#c99742",
        alignItems: "center",
        justifyContent: "center"

    },
    infomaincontent: {
        margin: 15,
        borderColor: "#575757",
        borderWidth:1,
        padding: 20
    },
    infocontentinner:{
        paddingTop:40,
        gap:25,
        paddingBottom:40
    },
    addressbox:{
    paddingLeft: 20,
    gap: 30,
    paddingBottom: 30,
    paddingTop: 30
    },
    getintouch:{
    paddingTop: 15,
    /* padding: 20px; */
    paddingBottom: 15
    },
    getintouchtext:{
   color: "#c99742",
    fontSize: 20,
    fontFamily: 'Times New Roman,sans-serif',

    },
    textinput:{
   flexDirection: "column",
    gap: 15
    }
})