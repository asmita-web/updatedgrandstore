import { StyleSheet } from 'react-native';

export const aboutcss = StyleSheet.create({

    mainboxabout: {
        backgroundColor: "#1c1c1c",
        padding: 15
    },
    header: {
        marginTop: 30,
        marginBottom: 10,
        textAlign: "center"
    },
    headertitle: {
        fontSize:20,
        color: "#c39f5f",
        fontFamily: "Times New Roman sans-serif",
        fontWeight: 500,
        lineHeight:1.5
    },
    headertext: {
        lineHeight: 24,
        fontFamily: "Times New Roman sans-serif",
        color: "#a8a8a8",
        textAlign: "justify",
        marginBottom: 10
    },
    headersubtext: {
        lineHeight: 24,
        fontFamily: "Times New Roman sans-serif",
        color: "#a8a8a8",
        textAlign: "justify"
    },
    mainverclebox:{
     flexDirection:"row",
     justifyContent:"center",
     alignItems: "center",
     gap:3,
     paddingBottom: 25
    },
    
verticleline:{
    height:2,
    width:"25%",
    backgroundColor:"#c39f5f"
},
headeritaly: {
    color: "#a8a8a8",
    textAlign: "justify",
    fontFamily: "Times New Roman sans-serif",
    lineHeight:24,
    fontStyle: 'italic',
    fontWeight:"bold"


},
mainverchairman:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems: "center",
    gap:3,
    paddingBottom:5
   },
   chairemanbox:{
    padding:15
   },
   discoverbox:{
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    // paddingTop: 56
    paddingBottom: 50
   },
   dicovertext:{
    fontWeight: 600,
    textTransform:"capitalize",
    lineHeight: 1,
    marginBottom: 15,
    color: "#c39f5f",
    textAlign: "center",
    fontFamily: "Times New Roman sans-serif",
    marginTop: 15,
   },

   headertext1: {
    lineHeight: 24,
    fontFamily: "Times New Roman sans-serif",
    color: "#a8a8a8",
    textAlign: "center",
    marginBottom: 10
},

   

})