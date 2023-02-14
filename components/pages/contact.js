import React from "react";
import { View, StyleSheet,Text,ScrollView,SafeAreaView,TextInput,Pressable } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { contactcss } from "./contactcss";


const Contact = () => {
  return (
    <ScrollView style={{ backgroundColor: "#1c1c1c"}}>
      <SafeAreaView>
      <View>
      <View>
        <View style={{padding:20}}>
          <View style={contactcss.infobox}>
            <View style={contactcss.phone}><FontAwesome name="phone" size={20} color="black"/></View>
            <View ><Text style={contactcss.infotext}>+27 82 496 7256</Text></View>
          </View>

          <View style={contactcss.infobox}>
            <View ><AntDesign name="earth" size={20} color="black"/></View>
            <View ><Text style={contactcss.infotext}>info@grandstore.co.za</Text></View>
          </View>

          <View style={contactcss.infobox}>
            <View style={contactcss.phone}><Ionicons name="location-sharp" size={20} color="black"/></View>
            <View ><Text style={contactcss.infotext}>Nivarp International Pvt ltd.<br/> Rosebank mall,
            PO Box 1022, Saxonwold. 2196.<br/> Johannesburg. South Africa.</Text></View>
          </View>
        </View>
      </View>

      <View>
        <View>
          <Text>Get In Touch</Text>
        </View>
        <View>
        <TextInput placeholder="First name" style={contactcss.inputbox}
                  keyboardType="numeric" />
                <TextInput placeholder="Last name" style={contactcss.inputbox}
                  keyboardType="numeric" />
                <TextInput placeholder="email" style={contactcss.inputbox}
                  keyboardType="numeric" />
                <TextInput placeholder="Phone" style={contactcss.inputbox}
                  keyboardType="numeric" />
                <TextInput placeholder="Enter Message" editable
                  multiline
                  numberOfLines={4} style={contactcss.inputbox}
                  keyboardType="numeric" />
                <View style={{ marginTop: 13 }}>
                  <Pressable style={contactcss.sendmessage}
                  >
                    <Text style={contactcss.sendmessagetext}>Send Message</Text>
                  </Pressable>
                </View>
        </View>
      </View>
    </View>
      </SafeAreaView>

    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Contact;