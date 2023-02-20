import React,{useState,useRef} from "react";
import { View, Text, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { registercss } from "./registercss";
import { logincss } from "../logincss";
import { http } from "../../../../../Restservice";

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
const Register = ({navigation}) => {
  const [title, settitle]=useState("")
const [customer,setcustomer]=useState({
  fname:"",
  lname:"",
  email:"",
  phone:"",
  password:"",
  confirmpassword:""

})



const handlechange = (e)=>{
   e.preventDefault()
   setcustomer({[e.target.name]: e.target.value
   })
   console.log(customer)
  //  console.log(customer)

   
}
const handlechangetitle =(e)=>{
  e.preventDefault()
   let titleC = e.target.value
   settitle(titleC)
  //  console.log(title)
}
const registerdata=()=>{
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

                  <TextInput name={fname} onChange={handlechange} value={customer.fname} required style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>
                <View>
                  <Text style={registercss.labelcolor}>Last Name</Text>
                  {/* <input type="text" required value={customer.lname} placeholder="Last Name"
                   onPress={handlechange} style={registercss.inputbox}/> */}

                  <TextInput name={lname} onChange={handlechange} value={customer.lname} required style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>
                <View>
                  <Text style={registercss.labelcolor}>Email Id</Text>
                  {/* <input type="email" required value={customer.email} placeholder="Email" onPress={handlechange} style={registercss.inputbox}/> */}
                  <TextInput name={email} value={customer.email} onChange={handlechange} required style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>
                <View>
                  <Text required style={registercss.labelcolor}>
                    Phone No
                  </Text>
                  {/* <input type="number" required value={customer.phone} placeholder="Phone" onPress={handlechange} style={registercss.inputbox}/> */}
                  <TextInput name={phone} value={customer.phone} onChange={handlechange} required style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>

                <View>
                  <Text required style={registercss.labelcolor}>
                    Password
                  </Text>
                  {/* <input type="password" required placeholder="Password" value={customer.password}  onPress={handlechange} style={registercss.inputbox}/> */}

                  <TextInput name={password} value={customer.password} onChange={handlechange} required placeholder="Password" style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>

                <View>
                  <Text style={registercss.labelcolor}>
                    Confirm Password
                  </Text>
                  {/* <input type="password" required placeholder="Confirm Password" value={customer.confirm}  onPress={handlechange} style={registercss.inputbox}/> */}

                  <TextInput name={confirmpassword} value={customer.confirmpassword} onChange={handlechange} required placeholder="Confirm Password" style={registercss.inputbox}
                    keyboardType="numeric" />
                </View>


                <View style={{
                  marginTop: 13, justifyContent: "center",
                  alignItems: "center"
                }}>
                  <Pressable style={registercss.sendmessage} onPress={()=>{registerdata()}}
                  >
                    <Text style={registercss.sendmessagetext}>REGISTER</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={registercss.lostpassbox}>
              <Text style={registercss.lostyouracconttext}>Already have an account?<Text  onPress={()=>{navigation.navigate('Login')}} style={registercss.lostpasswordboxtext}>LOG IN HERE</Text></Text>
            </View>
          </View>

        </View>
      </SafeAreaView>

    </ScrollView>

  );
};



export default Register;