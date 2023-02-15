import React from "react";
import { View,Text, Image, ScrollView, SafeAreaView,Pressable,TextInput } from "react-native";
import { Tradecss } from "./tradecss";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Trade = () => {
    return (
        <ScrollView>
            <SafeAreaView style={{ backgroundColor: "#1c1c1c" }}>
                <View style={{ width: "100%", height: 100 }}>
                    <Image style={{ width: "100%", height: "100%", resizeMode: "cover" }} source={require('../../assets/Tradebanner.jpg')} />
                </View>
                <View style={Tradecss.mainboxabout}>
                    <View style={{paddingBottom:25}}>
                        <View style={Tradecss.header}>
                            <Text style={Tradecss.headertitle}>Our Drive. Our Passion.</Text>
                        </View>
                        <View style={Tradecss.mainverclebox}>
                            <View style={Tradecss.verticleline}></View>
                            <View>
                                <Entypo name="dot-single" color="#c39f5f" size={30} />
                            </View>
                            <View style={Tradecss.verticleline}></View>
                        </View>
                        <View>
                            <Text style={Tradecss.headertext}>
                                Nivarp International Pty Ltd is a licenced wholesale Distributor of
                                Alcoholic Beverages in South Africa. We are facilitators, Importers
                                and Exporter of various beverages to different parts of the world.
                                We also have an independent wine trading house. Our company has
                                developed the reputation as being one of the most effective and
                                reliable independent wine negociants in the country through its
                                customer service and innovation in wine supply solutions.

                            </Text>
                            <Text style={Tradecss.headersubtext}>
                                Our Company has excellent supply channels throughout the various South
                                African wine growing regions and has created close relationships with
                                many selected reputable vineyards.
                            </Text>

                            <Text style={Tradecss.headersubtext}>
                                We boast of a highly professional and efficient team that focuses on
                                creative and flexible solutions to our global customers’ requirements.
                            </Text>
                            <Text style={Tradecss.headersubtext}>
                                Our basis of high quality, South African wines have been recognised
                                by wine lovers throughout the world due to our fresh air, fertile soil
                                and moderate climate. Our vineyards are under careful management by our
                                professional viticulture teams throughout the year because we know high
                                quality grapes is the basis for making beautiful wines.

                            </Text>
                            <Text style={Tradecss.headersubtext}>

                                All the grapes are handled meticulously during harvest and the winemaking
                                processes are conducted attentively at the winery. We believe in primarily
                                manual methods and minimal intervention to reduce influence to the natural
                                characteristics of the wine. From the grape all the way to the finished wine
                                in the bottle, we focus on every step ensuring we produce quality wines that
                                reflect world class standards.

                            </Text>
                            <View style={{ width: "100%", height: 200, paddingTop: 10, paddingBottom: 10 }}>
                                <Image style={{ width: "100%", height: "100%" }} source={require('../../assets/TheGSCustomerRelation.jpg')} />
                            </View>
                            <Text style={Tradecss.headersubtext}>

                                Nivarp International integrates plenty of resources in the wine industry
                                to help you with your business. Our wine tasting panel communicates with
                                winemakers to find the most suitable wine for you and your target market;
                                and our production teams are responsible for all packaging aspects including
                                coordination of labels, bottles, closures and cartons. From various documents
                                to logistics, our import &amp; export teams pay close attention to every detail
                                through the whole export process, arranging the shipment, preparation of all the
                                documents required for customs clearance and apply for the further necessary
                                documents if needed to the  respective destination country. “An A to Z solution”

                            </Text>

                            <Text style={Tradecss.headersubtext}>

                                We also offer brand solutions to clients who have their own brands but
                                need help in production and marketing from an international perspective.

                            </Text>

                            <Text style={Tradecss.headersubtext}>

                                Our professional production, branding and marketing team together with our
                                creative visual design team promise to deliver an efficient strategy in order
                                to accelerate your domestic or international wine business.

                            </Text>

                            <View style={{ width: "100%", height: 200, paddingTop: 10, paddingBottom: 10 }}>
                                <Image style={{ width: "100%", height: "100%" }} source={require('../../assets/TheGSimportexport.jpg')} />
                            </View>
                            <Text style={[Tradecss.headersubtext, Tradecss.headingboldtext]}><b>We provide the following:</b></Text>
                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Blending wine style adjustments including oak,
                                    sweetness, colour</Text>
                            </View>

                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Bottling</Text>
                            </View>

                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Label design printing</Text>
                            </View>

                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Bar codes</Text>
                            </View>

                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Shipping logistics</Text>
                            </View>

                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Export documentation for bulk or bottled wine</Text>
                            </View>

                            <Text style={[Tradecss.icontextcolor, Tradecss.headingboldtext]}><b>Buyers' private label bottling (OEM) <br />
                                specifications include:</b></Text>

                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Bottle size and shape</Text>
                            </View>


                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Cork or screw cap</Text>
                            </View>



                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Capsules colour</Text>
                            </View>



                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>6 pack or 12 pack cartons</Text>
                            </View>

                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Printed or plain corks and cartons</Text>
                            </View>

                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Dividers</Text>
                            </View>

                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>Slip sheet or pallet packing</Text>
                            </View>

                            <View style={Tradecss.circleiconbox}>
                                <Entypo name="dot-single" color="#a8a8a8" size={20} />
                                <Text style={Tradecss.icontextcolor}>20' or 40' containers</Text>
                            </View>

                            <Text style={Tradecss.headersubtext}>
                                Further information on the wine export
                                approval process can be found on
                            </Text>

                            <Text style={Tradecss.headersubtext}>
                                As an exporter we adhere to all the Procedure for
                                the preparation and transportation of wine.
                            </Text>

                            <Text style={Tradecss.headersubtext}>
                                We also keep records and retention samples of each loads
                                for exports.

                            </Text>
                        </View>
                    </View>


                    <View>
                        {/* <View style={Tradecss.infobox}>
                            <View style={Tradecss.phone}><AntDesign name="earth" size={20} color="black" /></View>
                            <View >
                                <Text style={Tradecss.infotextlabel}>Private Label Development</Text>
                                <Text style={Tradecss.infotext}>
                                    We work with quality suppliers and service providers to offer our
                                    clients the best private label options available. We customize the
                                    product to the client’s specifications.
                                </Text>
                            </View>
                        </View> */}

                        {/* <View>
                            <View style={Tradecss.phone}>
                                <AntDesign name="earth" size={20} color="black" />
                            </View>
                            <View>
                            <View>
                            <Text style={Tradecss.infotext}>
                                    We work with quality suppliers and service providers to offer our
                                    clients the best private label options available. We customize the
                                    product to the client’s specifications.
                                </Text>
                            </View>
                            </View>
                            
                        </View> */}

                        {/* <View style={Tradecss.infobox}>
                            <View style={Tradecss.phone}><AntDesign name="earth" size={20} color="black" /></View>
                            <View style={Tradecss.textadjust}>
                                <Text style={Tradecss.infotextlabel}>Sourcing &amp; Blending</Text>
                                <Text style={Tradecss.infotext}>
                                    We have the capability to offer a wide range of 
                                    bulk wines
                                    from all the wine regions in South Africa.
                                </Text>
                            </View>
                        </View> */}

                        {/* <View style={Tradecss.infobox}>
                            <View style={Tradecss.phone}><AntDesign name="earth" size={20} color="black" /></View>
                            <View >
                                <Text style={Tradecss.infotextlabel}>Procurement &amp; Filling</Text>
                                <Text style={Tradecss.infotext}>
                                We manage the supply chain of all the packaging material used in 
                                our products. The services include the filling, warehousing and all 
                                the applicable documentation and approvals.
                                </Text>
                            </View>
                        </View> */}

                        {/* <View style={Tradecss.infobox}>
                            <View style={Tradecss.phone}><AntDesign name="earth" size={20} color="black" /></View>
                            <View >
                                <Text style={Tradecss.infotextlabel}>Transport &amp; Shipping</Text>
                                <Text style={Tradecss.infotext}>
                                Our logistics department offers a wide range of services and 
                                will take care of all your needs. We can offer different 
                                incoterms (FOB, CIF, DAP) and will take care of container 
                                loading, documentation and door to door insurance.
                                </Text>
                            </View>
                        </View> */}
                    </View>

                    <View style={Tradecss.infomaincontent}>
        <View style={Tradecss.getintouch}>
          <Text style={Tradecss.getintouchtext}>Fill Out The Form Below</Text>
        </View>
        <View style={Tradecss.textinput}>
        <TextInput placeholder="Your Name" style={Tradecss.inputbox}
                  keyboardType="numeric" />
                <TextInput placeholder="Email" style={Tradecss.inputbox}
                  keyboardType="numeric" />
                <TextInput placeholder="Phone" style={Tradecss.inputbox}
                  keyboardType="numeric" />
                <TextInput placeholder="Company Name" style={Tradecss.inputbox}
                  keyboardType="numeric" />
                <View style={{ marginTop: 13 }}>
                  <Pressable style={Tradecss.sendmessage}
                  >
                    <Text style={Tradecss.sendmessagetext}>SUBMIT</Text>
                  </Pressable>
                </View>
        </View>
      </View>










                </View>
            </SafeAreaView>
        </ScrollView>

    );
};


export default Trade;