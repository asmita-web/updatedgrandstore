import React, { useState, useRef, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, TextInput, Pressable, Alert } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { registercss } from "./registercss";
import { logincss } from "../logincss";
import { http } from "../../../../../Restservice";
import axios from "axios";
// import SweetAlert from "react-native-sweet-alert";
// import AwesomeAlert from 'react-native-awesome-alerts';
import Swal from "sweetalert2";
import './register.css'


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

let password
let confirmpassword
const Register = ({ navigation }) => {

  useEffect(() => {
    // brand()
  }, [])
  const [title, settitle] = useState("")
  const [showAlert, setshowalert] = useState(false)
  const [customer, setcustomer] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",

  })

  // const showalert = () => {
  //   setshowalert(true)

  // };



  // const hideAlert = () => {
  //   setshowalert(false)
  // };

  const handlechange = name => (e) => {
    e.preventDefault()
    setcustomer({ ...customer, [name]: e.target.value })
    console.log(customer)
    //  console.log(customer)


  }
  const passwordhandle = (e) => {
    e.preventDefault()
    password = e.target.value
  }
  const passwordconfirm = (e) => {
    e.preventDefault()
    confirmpassword = e.target.value
  }
  const handlechangetitle = (e) => {
    e.preventDefault()
    let titleC = e.target.value
    settitle(titleC)
    //  console.log(title)
  }

  const brand = () => {
    axios.get(http + '/brand')
      .then((response) => {
        console.log(response.data)
        // Alert.alert('', 'Register Successfully', [

        //   {text: 'OK', onPress: () => console.log('OK Pressed')},
        // ]);
      })
      .catch((error) => {
        Alert.alert('', 'Error', [

          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
        console.log(error)
      })
  }

  const getswet = () => {
    Swal.fire({
      position:'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: true,
      iconColor: '#c99742',
      confirmButtonColor:"#c99742",

      // customClass:"swalwide",   
    })
   
  }
  const registerdata = () => {

    const { fname, lname, email, phone } = customer;

    let newword = "hello"
    // let data = window.btoa(newword)
    // console.log("encode",data)
    let newpass = window.btoa(password)
    console.log(password)
    let cpass = window.btoa(confirmpassword)
    if (newpass != cpass) {
      Alert.alert('Password Does Not Match')
    }
    else {
      let customerdata = {
        "title": title,
        "fname": fname,
        "lname": lname,
        "email": email,
        "phone": phone,
        "password": newpass

      }
      axios.post(http + '/customer', customerdata)
        .then((response) => {

          Swal.fire({
            position:'center',
            icon: 'success',
            title: 'Register Successfully',
            showConfirmButton: true,
            iconColor: '#c99742',
            confirmButtonColor:"#c99742",
      
            // customClass:"swalwide",   
          })
          // Swal.fire(
          //   'Register Successfully',
          //   '',
          //   'success'
          // )
          console.log(response)
          navigation.navigate('Login')
        })
        .catch((error) => {
          Alert.alert('', 'Error', [

            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
          alert("something went wrong")
          console.log("error", error)
        })
    }



    console.log(title)
    console.log(customer)
  }


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

                  <select value={title} onChange={handlechangetitle} style={registercss.selectboxitem}>
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
                  {/* <input type="text" required value={customer.fname} placeholder="First Name" onPress={handlechange} 
                  style={registercss.inputbox}/> */}

                  <TextInput name="fname" onChange={handlechange('fname')} value={customer.fname} required style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>
                <View>
                  <Text style={registercss.labelcolor}>Last Name</Text>
                  {/* <input type="text" required value={customer.lname} placeholder="Last Name"
                   onPress={handlechange} style={registercss.inputbox}/> */}

                  <TextInput name="lname" onChange={handlechange('lname')} value={customer.lname} required style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>
                <View>
                  <Text style={registercss.labelcolor}>Email Id</Text>
                  {/* <input type="email" required value={customer.email} placeholder="Email" onPress={handlechange} style={registercss.inputbox}/> */}
                  <TextInput name="email" value={customer.email} onChange={handlechange('email')} required style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>
                <View>
                  <Text required style={registercss.labelcolor}>
                    Phone No
                  </Text>
                  {/* <input type="number" required value={customer.phone} placeholder="Phone" onPress={handlechange} style={registercss.inputbox}/> */}
                  <TextInput name="phone" value={customer.phone} onChange={handlechange('phone')} required style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>

                <View>
                  <Text required style={registercss.labelcolor}>
                    Password
                  </Text>
                  {/* <input type="password" required placeholder="Password" value={customer.password}  onPress={handlechange} style={registercss.inputbox}/> */}

                  <TextInput secureTextEntry={true} value={password} onChange={passwordhandle} required placeholder="" style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>

                <View>
                  <Text style={registercss.labelcolor}>
                    Confirm Password
                  </Text>
                  {/* <input type="password" required placeholder="Confirm Password" value={customer.confirm}  onPress={handlechange} style={registercss.inputbox}/> */}

                  <TextInput secureTextEntry={true} value={confirmpassword} onChange={passwordconfirm} required placeholder="" style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>


                <View style={{
                  marginTop: 13, justifyContent: "center",
                  alignItems: "center"
                }}>
                  <Pressable style={registercss.sendmessage} onPress={() => { registerdata() }}
                  >
                    <Text style={registercss.sendmessagetext}>REGISTER</Text>
                  </Pressable>

                  <Pressable style={registercss.sendmessage} onPress={() => { getswet() }}
                  >
                    <Text style={registercss.sendmessagetext}>sweet</Text>
                  </Pressable>

                </View>
              </View>
            </View>
            <View style={registercss.lostpassbox}>
              <Text style={registercss.lostyouracconttext}>Already have an account?<Text onPress={() => { navigation.navigate('Login') }} style={registercss.lostpasswordboxtext}>LOG IN HERE</Text></Text>
            </View>
          </View>

        </View>
      </SafeAreaView>

    </ScrollView>

  );
};



export default Register;