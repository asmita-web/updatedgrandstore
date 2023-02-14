import { StyleSheet } from "react-native";

export const contactcss = StyleSheet.create({
    inputbox: {
        padding: 12,
        borderColor: "#029e9d",
        borderRadius: 10,
        borderWidth:1,
        width: "100%",
        color:"#a8a8a8"
    },
    sendmessage: {
        backgroundColor:'#029e9d',
        borderRadius: 10,
        paddingTop:9,
        paddingLeft:15,
        paddingBottom:9,
        paddingRight:15
    },
    sendmessagetext: {
        fontSize:15,
        fontWeight: 500,
        textAlign:"center",
        color: 'white',
    },
    textcolor:{
        color:"white",
        fontFamily: 'Times New Roman,sans-serif',
    },

    infotext:{
        color:"#a8a8a8",
        fontFamily: 'Times New Roman,sans-serif',
    },
    infobox:{
        flexDirection:"row",
        justifyContent:"left",
        alignItems:"center",
        gap: 20
    },
    phone:{
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:"#c99742",
        alignItems: "center",
        justifyContent: "center"
    }
})