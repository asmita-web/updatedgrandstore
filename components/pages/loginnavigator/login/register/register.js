import React from "react";
import { View, Text, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { registercss } from "./registercss";
import { logincss } from "../logincss";

const data = [
  {
    id: 1,
    title: "Mr"
  },
  {
    id: 2,
    title: "Mrs"
  },
  {
    id: 3,
    title: "Miss"
  },
  {
    id: 4,
    title: "Ms"
  },

]
const Register = () => {
  return (
    <ScrollView style={{ backgroundColor: "#1c1c1c" }}>
      <SafeAreaView>
        <View style={logincss.maincontainer}>
          <View style={registercss.loginmainbox}>
            <View style={registercss.infomaincontent}>
              <View style={registercss.getintouch}>
                <Text style={registercss.getintouchtext}>Customer Registration</Text>
              </View>
              <View style={registercss.textinput}>

                <View tyle={registercss.selectbox}>
                  <Text style={registercss.labelcolor}>Title</Text>
                  <select style={registercss.selectboxitem}>
                    <option>Select</option>
                    {
                      data.map((item, index) => (
                        <option key={index} value={item.title}>{item.title}</option>
                      ))
                    }
                  </select>
                </View>
                <View>
                  <Text style={registercss.labelcolor}>First Name</Text>
                  <TextInput style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>
                <View>
                  <Text style={registercss.labelcolor}>Last Name</Text>
                  <TextInput style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>
                <View>
                  <Text style={registercss.labelcolor}>Email Id</Text>
                  <TextInput style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>
                <View>
                  <Text style={registercss.labelcolor}>
                    Phone No
                  </Text>
                  <TextInput style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>

                <View>
                  <Text style={registercss.labelcolor}>
                    Password
                  </Text>
                  <TextInput placeholder="Phone" style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>

                <View>
                  <Text style={registercss.labelcolor}>
                    Confirm Password
                  </Text>
                  <TextInput placeholder="Phone" style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>


                <View style={{
                  marginTop: 13, justifyContent: "center",
                  alignItems: "center"
                }}>
                  <Pressable style={registercss.sendmessage}
                  >
                    <Text style={registercss.sendmessagetext}>REGISTER</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={registercss.lostpassbox}>
              <Text style={registercss.lostyouracconttext}>Already have an account?<Text style={registercss.lostpasswordboxtext}>LOG IN HERE</Text></Text>
            </View>
          </View>

        </View>
      </SafeAreaView>

    </ScrollView>

  );
};



export default Register;