// import React from "react";
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     Animated,
//     ScrollView,
//     Image,
//     Dimensions,
//     StyleSheet,
//     TextInput
// } from "react-native";


// const { width } = Dimensions.get("window");

// export default class App extends React.Component {
//     state = {
//         active: 0,
//         xTabOne: 0,
//         xTabTwo: 0,
//         translateX: new Animated.Value(0),
//         translateXTabOne: new Animated.Value(0),
//         translateXTabTwo: new Animated.Value(width),
//         translateY: -1000
//     };

//     handleSlide = type => {
//         let {
//             active,
//             xTabOne,
//             xTabTwo,
//             translateX,
//             translateXTabOne,
//             translateXTabTwo
//         } = this.state;
//         Animated.spring(translateX, {
//             toValue: type,
//             duration: 100,
//             useNativeDriver: true,
//         }).start();
//         if (active === 0) {
//             Animated.parallel([
//                 Animated.spring(translateXTabOne, {
//                     toValue: 0,
//                     duration: 100,
//                     useNativeDriver: true,
//                 }).start(),
//                 Animated.spring(translateXTabTwo, {
//                     toValue: width,
//                     duration: 100,
//                     useNativeDriver: true,
//                 }).start()
//             ]);
//         } else {
//             Animated.parallel([
//                 Animated.spring(translateXTabOne, {
//                     toValue: -width,
//                     duration: 100,
//                     useNativeDriver: true,
//                 }).start(),
//                 Animated.spring(translateXTabTwo, {
//                     toValue: 0,
//                     duration: 100,
//                     useNativeDriver: true,
//                 }).start()
//             ]);
//         }
//     };

//     render() {
//         let {
//             xTabOne,
//             xTabTwo,
//             translateX,
//             active,
//             translateXTabOne,
//             translateXTabTwo,
//             translateY
//         } = this.state;
//         const { navigation } = this.props;
//         return (
//             <View style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 justifyContent: 'flex-start',
//                 alignItems: 'stretch',
//             }}>
//                 <View style={{ flex: 1, }}>
//                     <View style={{ backgroundColor: 'skyblue' }}>

//                         <View style={{
//                             alignContent: "center",
//                             alignItems: "center",
//                             paddingTop: 20,
//                         }}>
// <Image
//     style={{
//         width: 60,
//         height: 60,
//         resizeMode: 'stretch',
//     }}
//     source={require('../../assets/image/005-wallet.png')}
// />
//                         </View>
//                         <Text style={{ textAlign: "center", fontSize: 25, padding: 15, color: "#FFFFFF" }}>Wallet Story</Text>
//                         <Text style={{ textAlign: "center", fontSize: 18, color: "#EBEBEB" }}>เริ่มต้นวางแผนการเงินกันเถอะ</Text>
//                     </View>
//                     <View
//                         style={{
//                             width: "80%",
//                             marginLeft: "auto",
//                             marginRight: "auto",
//                         }}
//                     >
//                         <View
//                             style={{
//                                 flexDirection: "row",
//                                 marginTop: 30,
//                                 marginBottom: 20,
//                                 height: 50,
//                                 position: "relative",
//                                 borderRadius: 15,
//                             }}
//                         >
//                             <Animated.View
//                                 style={{
//                                     position: "absolute",
//                                     width: "50%",
//                                     height: "80%",
//                                     top: 0,
//                                     left: 0,
//                                     backgroundColor: "#007aff",
//                                     borderRadius: 10,
//                                     margin: 5,
//                                     transform: [
//                                         {
//                                             translateX
//                                         }
//                                     ]
//                                 }}
//                             />


//                             <TouchableOpacity
//                                 style={{
//                                     flex: 1,
//                                     justifyContent: "center",
//                                     alignItems: "center",
//                                     borderWidth: 1,
//                                     borderColor: "#007aff",
//                                     borderRadius: 4,
//                                     borderRightWidth: 0,
//                                     borderTopRightRadius: 0,
//                                     borderBottomRightRadius: 0
//                                 }}
//                                 onLayout={event =>
//                                     this.setState({
//                                         xTabOne: event.nativeEvent.layout.x
//                                     })
//                                 }
//                                 onPress={() =>
//                                     this.setState({ active: 0 }, () =>
//                                         this.handleSlide(xTabOne)
//                                     )
//                                 }
//                             >
//                                 <Text
//                                     style={{
//                                         color: active === 0 ? "black" : "black"
//                                     }}
//                                 >
//                                     เข้าสู่ระบบ
//                             </Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity
//                                 style={{
//                                     flex: 1,
//                                     justifyContent: "center",
//                                     alignItems: "center",
//                                     borderWidth: 1,
//                                     borderColor: "#007aff",
//                                     borderRadius: 4,
//                                     borderLeftWidth: 0,
//                                     borderTopLeftRadius: 0,
//                                     borderBottomLeftRadius: 0
//                                 }}
//                                 onLayout={event =>
//                                     this.setState({
//                                         xTabTwo: event.nativeEvent.layout.x
//                                     })
//                                 }
//                                 onPress={() =>
//                                     this.setState({ active: 1 }, () =>
//                                         this.handleSlide(xTabTwo)
//                                     )
//                                 }
//                             >
//                                 <Text
//                                     style={{
//                                         color: active === 1 ? "black" : "black"
//                                     }}
//                                 >
//                                     สมัครสมาชิก
//                             </Text>
//                             </TouchableOpacity>
//                         </View>

//                         <ScrollView>
//                             <Animated.View
//                                 style={{
//                                     justifyContent: "center",
//                                     alignItems: "center",
//                                     transform: [
//                                         {
//                                             translateX: translateXTabOne
//                                         }
//                                     ]
//                                 }}
//                                 onLayout={event =>
//                                     this.setState({
//                                         translateY: event.nativeEvent.layout.height
//                                     })
//                                 }
//                             >
//                                 <Text>te

//                                 </Text>

//                             </Animated.View>

//                             <Animated.View
//                                 style={{
//                                     justifyContent: "center",
//                                     alignItems: "center",
//                                     transform: [
//                                         {
//                                             translateX: translateXTabTwo
//                                         },
//                                         {
//                                             translateY: -translateY
//                                         }
//                                     ]
//                                 }}
//                             >
//                                 <View style={{flexDirection:"row"}}>
//                                     <Text style={{marginTop:10,fontSize:17}}>Username: </Text>
//                                     <View style={{
//                                         width: "65%", justifyContent: 'center', borderColor: 'blue',
//                                         borderWidth: 1,
//                                     }}>
//                                         <TextInput
//                                             style={styles.textInputuser}
//                                             onChangeText={(text) => setUsername(text)}

//                                         />

//                                     </View>
//                                 </View>
//                                 <View style={{flexDirection:"row",marginTop:7}}>
//                                     <Text style={{marginTop:10,fontSize:17}}>Password: </Text>
//                                     <View style={{
//                                         width: "65%", justifyContent: 'center', borderColor: 'blue',
//                                         borderWidth: 1,
//                                     }}>
//                                         <TextInput
//                                             style={styles.textInputuser}
//                                             onChangeText={(text) => setUsername(text)}

//                                         />

//                                     </View>
//                                 </View>
//                                 <View style={{flexDirection:"row",marginTop:7}}>
//                                     <Text style={{marginTop:10,fontSize:17}}>     Fname: </Text>
//                                     <View style={{
//                                         width: "65%", justifyContent: 'center', borderColor: 'blue',
//                                         borderWidth: 1,
//                                     }}>
//                                         <TextInput
//                                             style={styles.textInputuser}
//                                             onChangeText={(text) => setUsername(text)}

//                                         />

//                                     </View>
//                                 </View>
//                                 <View style={{flexDirection:"row",marginTop:7}}>
//                                     <Text style={{marginTop:10,fontSize:17}}>       lname: </Text>
//                                     <View style={{
//                                         width: "65%", justifyContent: 'center', borderColor: 'blue',
//                                         borderWidth: 1,
//                                     }}>
//                                         <TextInput
//                                             style={styles.textInputuser}
//                                             onChangeText={(text) => setUsername(text)}

//                                         />

//                                     </View>
//                                 </View>
//                             </Animated.View>
//                         </ScrollView>
//                     </View>
//                 </View>
//             </View>


//         );
//     }
// }
// const styles = StyleSheet.create({

//     MainContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 30
//     },

//     GooglePlusStyle: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#dc4e41',
//         borderWidth: .5,
//         borderColor: '#fff',
//         height: 50,
//         borderRadius: 5,
//         margin: 20,

//     },

//     FacebookStyle: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#485a96',
//         borderWidth: .5,
//         borderColor: '#fff',
//         height: 50,
//         borderRadius: 5,
//         margin: 5,

//     },

//     ImageIconStyle: {
//         padding: 10,
//         margin: 5,
//         height: 25,
//         width: 25,
//         resizeMode: 'stretch',

//     },

//     TextStyle: {

//         color: "#fff",
//         marginBottom: 4,
//         marginRight: 20,

//     },

//     SeparatorLine: {

//         backgroundColor: '#fff',
//         width: 1,
//         height: 40

//     }

// });


import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';

import Axios from 'axios';
import { Dimensions } from 'react-native';
import { Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")

    const onRegister = async () => {
        let res = await Axios.post("http://192.168.43.86:5000/register", {
            username: username,
            password: password,
            fname: fname,
            lname: lname,

        })
        if (res.data.error === false) {
            Alert.alert("Register is successful, Please login")

        } else {
            Alert.alert("Your cannot register, Please register again")
        }
    }
    return (

        <View style={styles.container}>

            <View style={{
                alignItems: 'center',
                flex: 0.3,
                justifyContent: 'center',
                backgroundColor: 'skyblue'
            }}>
                <Image
                    style={{
                        width: 60,
                        height: 60,
                        resizeMode: 'stretch',
                    }}
                    source={require('../../assets/image/005-wallet.png')}
                />
            </View>
            
            <View style={{ flex: 0.7, margin: 15 }}>
                <View style={styles.inputContent}>
                    <View style={{ width: "30%", flexDirection: 'column-reverse', justifyContent: 'center' }}>
                        <Text style={{ color: '#000', fontSize: 18 }}>Username:</Text>
                    </View>
                    <View style={{
                        width: "65%", justifyContent: 'center', borderColor: 'blue',
                        borderWidth: 1,
                    }}>
                        <TextInput style={{ fontSize: 20 }}
                            style={styles.textInputuser}
                            onChangeText={(text) => setUsername(text)}

                        />
                    </View>
                </View>

                <View style={styles.inputContent2}>
                    <View style={{ width: "30%", flexDirection: 'column-reverse', justifyContent: 'center' }}>
                        <Text style={{ color: '#000', fontSize: 18 }}>Password:</Text>
                    </View>

                    <View style={{
                        width: "65%", justifyContent: 'center', borderColor: 'blue',
                        borderWidth: 1,
                    }}>
                        <TextInput style={{ fontSize: 18 }}
                            secureTextEntry={true}
                            style={styles.textInputuser}
                            onChangeText={(text) => setPassword(text)}

                        />
                    </View>
                </View>

                <View style={styles.inputContent2}>
                    <View style={{ width: "30%", flexDirection: 'column-reverse', justifyContent: 'center' }}>
                        <Text style={{ color: '#000', fontSize: 18 }}>First Name:</Text>
                    </View>

                    <View style={{
                        width: "65%", justifyContent: 'center', borderColor: 'blue',
                        borderWidth: 1,
                    }}>
                        <TextInput style={{ fontSize: 18 }}
                            onChangeText={(text) => setFname(text)}

                        />
                    </View>
                </View>

                <View style={styles.inputContent2}>
                    <View style={{ width: "30%", flexDirection: 'column-reverse', justifyContent: 'center' }}>
                        <Text style={{ color: '#000', fontSize: 18 }}>Last Name:</Text>
                    </View>

                    <View style={{
                        width: "65%", justifyContent: 'center', borderColor: 'blue',
                        borderWidth: 1,
                    }}>
                        <TextInput style={{ fontSize: 18 }}
                            style={styles.textInputuser}
                            onChangeText={(text) => setLname(text)}

                        />
                    </View>
                </View>

                <View>
                    <View style={{ margin: 10, marginTop: 20 }}>
                        <TouchableOpacity style={styles.ButtonLogin} onPress={() => onRegister()}>
                            <Text style={styles.TextLogin}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inputContent: {
        marginTop: 10,
        flexDirection: 'row',
    },
    inputContent2: {
        marginTop: 5,
        flexDirection: 'row',
    },
    textInputuser: {
        width: '100%',
    },
    ButtonLogin: {
        marginBottom: 20,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 10
    },
    TextLogin: {
        color: '#D1EDE1',
        fontSize: 25,
        fontWeight: 'bold',
    },
});
