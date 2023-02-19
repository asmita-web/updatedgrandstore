import React from "react";
import { View, StyleSheet,Text,ScrollView,SafeAreaView,TextInput,Pressable } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { proceedcss } from "./proceedstyle";


const Proceed = () => {
  return (
    <ScrollView style={{ backgroundColor: "#1c1c1c"}}>
      <SafeAreaView>
      <View>
     

      <View style={proceedcss.infomaincontent}>
        <View style={proceedcss.getintouch}>
          <Text style={proceedcss.getintouchtext}>Billing / Shipping Details</Text>
        </View>
        <View style={proceedcss.textinput}>
        <TextInput placeholder="First name" style={proceedcss.inputbox}
                  keyboardType="numeric" />
                <TextInput placeholder="Last name" style={proceedcss.inputbox}
                  keyboardType="numeric" />
                <TextInput placeholder="email" style={proceedcss.inputbox}
                  keyboardType="numeric" />
                <TextInput placeholder="Phone" style={proceedcss.inputbox}
                  keyboardType="numeric" />
                <TextInput placeholder="Enter Message" editable
                  multiline
                  numberOfLines={4} style={proceedcss.inputbox}
                  keyboardType="numeric" />
                <View style={{ marginTop: 13 }}>
                  <Pressable style={proceedcss.sendmessage}
                  >
                    <Text style={proceedcss.sendmessagetext}>SUBMIT</Text>
                  </Pressable>
                </View>
        </View>
      </View>
    </View>
      </SafeAreaView>

    </ScrollView>
    
  );
};



export default Proceed;