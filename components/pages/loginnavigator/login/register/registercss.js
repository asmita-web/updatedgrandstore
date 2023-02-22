import { StyleSheet } from "react-native";

export const registercss = StyleSheet.create({
    inputbox: {
        padding: 10,
        borderColor: "#575757",
        borderRadius: 5,
        borderWidth: 1,
        width: "100%",
        color: "#a8a8a8",
        backgroundColor: "#212223",
    },
    sendmessage: {
        backgroundColor: '#212223',
        borderRadius: 5,
        paddingTop: 12,
        paddingLeft: 15,
        paddingBottom: 12,
        paddingRight: 15,
        borderColor: "#c99742",
        width: "40%",
        borderWidth: 2
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


    getintouch: {
        paddingTop: 15,
        /* padding: 20px; */
        paddingBottom: 15
    },
    getintouchtext: {
        color: "#c99742",
        fontSize: 22,
        fontFamily: 'Times New Roman,sans-serif',
        textAlign:"center",
        fontWeight:600

    },
    textinput: {
        flexDirection: "column",
        gap: 15
    },

    selectbox: {
        width: "100%"
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
        // borderBottomColor: "#545454",
        //     borderBottomWidth: 1,
        //     borderTopWidth: 1,
        //     borderTopColor: "#545454",
    },
    labelcolor:{
        fontFamily: 'Times New Roman,sans-serif',
        fontSize: 15,
        color: "#a8a8a8",
        lineHeight:30,
    },
    maincontainer:{
        height:"100vh",
        backgroundColor:"#1c1c1c",
        padding:12,
    },

    loginmainbox:{
        paddingBottom:20,
        paddingTop:46,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth:1,
        borderColor:"#4f4f4f"
    },
  
})