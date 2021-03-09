import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
// import Carousel from '../Test1/Carousel';
import Axios from 'axios';

const Menu = ({ navigation }) => {

  
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  // const [test, setTest] = useState([]);
  // const user = res.data.username

  const checkLogin = async () => {
    let res = await Axios.get(
      'http://192.168.43.86:5000/login?username=' + username + '&password=' + password);

    if (res.data.error === false) {
      Alert.alert("Register is successful, Please login")
      navigation.navigate('Hom2')
    } else {
      Alert.alert("Your cannot register, Please register again")
    }
    console.log('username:' + username + ',' + 'password:' + password)
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.5 }}>
        <View style={{ backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'skyblue', borderRadius: 10 }}>
            <Image source={require('../../assets/image/005-wallet.png')} style={{ width: 70, height: 80 }}></Image>
          </View>
          <Text style={{ textAlign: "center", fontSize: 18, color: "#FFFFFF", marginTop: 15 }}>ผู้เยี่ยมชม</Text>
          <Text style={{ textAlign: "center", fontSize: 16, color: "#EBEBEB" }}>ยินดีต้อนรับ นี่คือ Wallet Story</Text>
        </View>
      </View>
     
      <View style={{ flex: 0.5, alignItems: 'center', margin: 10 }}>
        <View style={{ flexDirection: 'row', margin: 5 }}>
          <View>
            <Text style={{ fontSize: 17, marginLeft: 5 }}>Username:  </Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', borderColor: 'blue', borderWidth: 1, }}>
            <TextInput
              style={styles.textInputuser}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', margin: 5 }}>
          <View>
            <Text style={{ fontSize: 17, marginLeft: 5 }}>Password:  </Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', borderColor: 'blue', borderWidth: 1, }}>
            <TextInput
              style={styles.textInputuser}
              onChangeText={(text) => setpassword(text)}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ width: 100, height: 50, backgroundColor: "#E3B5F3", marginLeft: 40, marginTop: 30, borderRadius: 10 }}>
              <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 15, color: '#A813DB' }}>สมัครสมาชิก</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => checkLogin()} style={{ width: 100, height: 50, backgroundColor: "#A2F6F9", marginLeft: 40, marginTop: 30, borderRadius: 10 }}>
              <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 15, color: '#09A7AD' }}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
    // <View style={{
    //   flex: 1,
    //   flexDirection: 'column',
    //   justifyContent: 'flex-start',
    //   alignItems: 'stretch',
    // }}>


    //   <KeyboardAvoidingView
    //     behavior={Platform.OS === "ios" ? "padding" : "height"}
    //     style={styles.container}
    //   >
    //     <View style={{
    //       flex: 0.5,
    //       flexDirection: 'column',
    //       justifyContent: 'flex-start',
    //       alignItems: 'stretch',
    //     }}>
    // <View style={{ height: 250, backgroundColor: 'skyblue' }}>
    //   <View style={{
    //     width: 100, height: 100, backgroundColor: 'skyblue', borderRadius:
    //       10, marginLeft: 160, marginTop: 15,
    //   }}>
    //     <Image source={require('../../assets/image/005-wallet.png')} style={{ width: 70, height: 70, margin: 15, }}></Image>
    //   </View>
    //   <Text style={{ textAlign: "center", fontSize: 18, color: "#FFFFFF", marginTop: 15 }}>ผู้เยี่ยมชม</Text>
    //   <Text style={{ textAlign: "center", fontSize: 16, color: "#EBEBEB" }}>ยินดีต้อนรับ นี่คือ Wallet Story</Text>

    //   <View style={styles.fixToText}>
    //     <Button
    //       title="สมัครสมาชิก"

    //     />
    //   </View>
    // </View>

    //     </View>
    //     <View style={{flex: 0.5}}>
    //       <View style={{ flexDirection: 'row' }}>
    //         <Text style={{ fontSize: 17, marginLeft: 5 }}>Username:  </Text>
    // <View style={{
    //   width: "65%", justifyContent: 'center', borderColor: 'blue',
    //   borderWidth: 1,
    // }}>

    //   <TextInput
    //     style={styles.textInputuser}
    //     onChangeText={(text) => setUsername(text)}

    //   />
    //         </View>
    //       </View>
    //       <View style={{ flexDirection: 'row', marginTop: 20 }}>
    //         <Text style={{ fontSize: 17, marginLeft: 5 }}>Password:  </Text>
    //         <View style={{
    //           width: "65%", justifyContent: 'center', borderColor: 'blue',
    //           borderWidth: 1,
    //         }}>
    // <TextInput style={{ fontSize: 20 }}
    //   style={styles.textInputuser}
    //   onChangeText={(text) => setUsername(text)}

    // />
    //         </View>
    //       </View>
    // <View style={{ flexDirection: "row", marginLeft: 55 }}>
    //   <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ width: 100, height: 50, backgroundColor: "#E3B5F3", marginLeft: 40, marginTop: 30, borderRadius: 10 }}>
    //     <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 15, color: '#A813DB' }}>สมัครสมาชิก</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={() => checkLogin} style={{ width: 100, height: 50, backgroundColor: "#A2F6F9", marginLeft: 40, marginTop: 30, borderRadius: 10 }}>
    //     <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 15, color: '#09A7AD' }}>เข้าสู่ระบบ</Text>
    //   </TouchableOpacity>

    // </View>
    //     </View>



    //   </KeyboardAvoidingView>
    // </View>
  )
};
export default Menu;
const styles = StyleSheet.create({
  photo: {
    flex: 0.3,
    width: 100,
    height: 80,
    padding: 20,
    marginTop: 5,
    backgroundColor: "pink",
    borderRadius: 20,
    marginLeft: 50
  },
  fixToText: {
    padding: 15,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: "center",
    borderRadius: 20,
  },
});

