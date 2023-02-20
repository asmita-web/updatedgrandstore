
import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { proceedcss } from "./proceedstyle";
import { RadioButton } from 'react-native-paper';

const state = [
  {
    id: 1,
    value: "EC",
    title: "Eastern Cape"
  },
  {
    id: 2,
    value: "FS",
    title: "Free State"
  },
  {
    id: 3,
    value: "GT",
    title: "Gauteng"
  },
  {
    id: 4,
    value: "KZN",
    title: "KwaZulu Natal"
  },
  {
    id: 5,
    value: "LIM",
    title: "Limpopo"
  },
  {
    id: 6,
    value: "MP",
    title: "Mpumalanga"
  },
  {
    id: 7,
    value: "NW",
    title: "North West"
  },
  {
    id: 8,
    value: "NC",
    title: "Northern Cape"
  },
  {
    id: 9,
    value: "WC",
    title: "Western Cape"
  }

]
const Proceed = () => {
  const [value, setValue] = useState('DBT');
  const [Deliveryoption, setHomeDelivery] = useState('Home_delivery');
  return (
    <ScrollView style={{ backgroundColor: "#1c1c1c" }}>
      <SafeAreaView>
        <View>


          <View style={proceedcss.infomaincontent}>
            <View style={proceedcss.getintouch}>
              <Text style={proceedcss.getintouchtext}>Billing / Shipping Details</Text>
            </View>
            <View style={proceedcss.textinput}>
              <View style={proceedcss.boxinput}>
                <Text style={proceedcss.firstnametext}>First Name</Text>
                <TextInput placeholder="First name" style={proceedcss.inputbox1}
                  keyboardType="numeric" />
              </View>

              <View style={[proceedcss.boxinput, proceedcss.boxinput2]}>
                <Text style={proceedcss.firstnametext}>Last Name</Text>
                <TextInput placeholder="Last name" style={[proceedcss.inputbox1, proceedcss.typethreebox]}
                  keyboardType="numeric" />
              </View>

              <View style={proceedcss.delivery}>
                <Text style={proceedcss.textcolor}>How would you like to receive your order?</Text>
                <RadioButton.Group onValueChange={newValue => setHomeDelivery(newValue)} value={Deliveryoption}>
                  <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <View style={proceedcss.radiobutton1}>
                      <RadioButton value="Home_Delivery" />
                      <Text style={proceedcss.infotext}>Home Delivery</Text>

                    </View>
                    <View style={proceedcss.radiobutton1}>
                      <RadioButton value="Postnet_Service" />
                      <Text style={proceedcss.infotext}>Postnet Service</Text>

                    </View>
                  </View>

                </RadioButton.Group>
              </View>

              <View style={proceedcss.boxinput}>
                <Text style={proceedcss.firstnametext}>Company Name</Text>
                <TextInput placeholder="Company Name" style={proceedcss.inputbox}
                  keyboardType="numeric" />
              </View>

              <View style={proceedcss.boxinput}>
                <Text style={proceedcss.firstnametext}>Country</Text>
                <select style={proceedcss.statecity}>
                  <option value="South Africa">South Africa</option>
                </select>

              </View>

              <View style={proceedcss.boxinput}>
                <Text style={proceedcss.firstnametext}>State</Text>
                <select style={proceedcss.statecity}>
                  <option value="">
                    Select State
                  </option>

                  {
                    state.map((item, index) => (
                      <option key={index} value={item.value}>{item.title}</option>
                    ))
                  }

                </select>

              </View>

              <View style={proceedcss.boxinput}>
                <Text style={proceedcss.firstnametext}>City</Text>
                <select style={proceedcss.statecity}>
                  <option value="">
                    Select City
                  </option>

                  {
                    state.map((item, index) => (
                      <option key={index} value={item.value}>{item.title}</option>
                    ))
                  }

                </select>

              </View>

              <View style={proceedcss.boxinput}>
                <Text style={proceedcss.firstnametext}>Address</Text>
                <View style={proceedcss.adddresinput}>
                  <TextInput placeholder="Apartment, Suit,Unit,etc" style={proceedcss.inputbox}
                    keyboardType="numeric" />
                  <TextInput placeholder="House Number And Street Name" style={proceedcss.inputbox}
                    keyboardType="numeric" />
                </View>

              </View>

              <View style={proceedcss.boxinput}>
                <Text style={proceedcss.firstnametext}>Postcode/ZIP</Text>
                <TextInput placeholder="" style={proceedcss.inputbox}
                  keyboardType="numeric" />
              </View>



              {/* <View style={{ marginTop: 13 }}>
                <Pressable style={proceedcss.sendmessage}
                >
                  <Text style={proceedcss.sendmessagetext}>SUBMIT</Text>
                </Pressable>
              </View> */}
            </View>


          </View>

          <View>
            <View style={{ padding: 10 }}>
              <Text style={proceedcss.yourordertext}>Your Order</Text>

            </View>

          </View>

          <View>
            <table style={proceedcss.tableorder}>
              <thead>
                <tr style={proceedcss.tr}>
                  <td style={proceedcss.producttitle}>Product</td>
                  <td style={proceedcss.producttitle}>Subtotal</td>
                </tr>

              </thead>
              <tbody>
                <tr style={proceedcss.tr}>
                  <td style={proceedcss.producttext}>Amstel Lager Can (1 x 440ML) × 1</td>
                  <td style={proceedcss.producttext}>R 19</td>
                </tr>
                <tr style={proceedcss.tr}>
                  <td style={proceedcss.producttext}>Subtotal</td>
                  <td style={proceedcss.producttext}>R 249</td>
                </tr>
                <tr style={proceedcss.tr}>
                  <td style={proceedcss.producttext}>Shipping</td>
                  <td style={proceedcss.producttext}>Please Enter Complete Address</td>
                </tr>
                <tr style={proceedcss.tr}>
                  <td style={proceedcss.producttext}>Total (Inc 15% VAT)</td>
                  <td>
                    <TextInput style={proceedcss.inputbox1} placeholder="" keyboardType="numeric" />
                  </td>
                </tr>
              </tbody>
            </table>
          </View>

          <View style={{ padding: 20 }}>
            <View style={proceedcss.selectpaymentbox}>
              <Text style={proceedcss.selectpaymenttext}>Select payment Mode</Text>
            </View>
            <View style={{ paddingTop: 20 }}>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={proceedcss.radiobutton}>
                  <RadioButton value="DBT" />
                  <Text style={proceedcss.infotext}>Direct Bank Deposit</Text>

                </View>
                <View style={proceedcss.radiobutton}>
                  <RadioButton value="Payfast" />
                  <Text style={proceedcss.infotext}>Online Payment</Text>

                </View>
              </RadioButton.Group>
            </View>

            <View style={{ marginTop: 30 }}>
              <Pressable style={proceedcss.sendmessage}>
                <Text style={proceedcss.sendmessagetext}>PLACE ORDER</Text>
              </Pressable>
            </View>
          </View>

        </View>
      </SafeAreaView >

    </ScrollView >

  );
};



export default Proceed;