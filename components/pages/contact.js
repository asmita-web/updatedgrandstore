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
      <View style={contactcss.infomaincontent}>
        <View style={contactcss.addressbox}>
          <View style={contactcss.infobox}>
            <View style={contactcss.phone}><FontAwesome name="phone" size={20} color="black"/></View>
            <View ><Text style={contactcss.infotext}>+27 82 496 7256</Text></View>
          </View>

          <View style={contactcss.infobox}>
            <View style={contactcss.phone}><AntDesign name="earth" size={20} color="black"/></View>
            <View ><Text style={contactcss.infotext}>info@grandstore.co.za</Text></View>
          </View>

          <View style={contactcss.infobox}>
            <View style={contactcss.phone}><Ionicons name="location-sharp" size={20} color="black"/></View>
            <View ><Text style={contactcss.infotext}>Nivarp International Pvt ltd.
            </Text>
            <Text style={contactcss.infotext}>Rosebank mall,</Text>
            <Text style={contactcss.infotext}>
            PO Box 1022, Saxonwold. 2196.
            </Text>
            <Text style={contactcss.infotext}>
            Johannesburg. South Africa.
            </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={contactcss.infomaincontent}>
        <View style={contactcss.getintouch}>
          <Text style={contactcss.getintouchtext}>Get In Touch</Text>
        </View>
        <View style={contactcss.textinput}>
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
                    <Text style={contactcss.sendmessagetext}>SUBMIT</Text>
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