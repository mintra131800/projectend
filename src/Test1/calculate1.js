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
import {Dimensions} from 'react-native';
import { Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {

    const [value, onChangeText] = React.useState('');
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")

    const onRegister = async () => {
        let res = await Axios.post("http://192.168.43.86:5000/register",{
          username:username,
          password:password,
          fname:fname,
          lname:lname,

        })
        if(res.data.error === false){
          Alert.alert("Register is successful, Please login")
          navigation.navigate('Menu')
        }else{
          Alert.alert("Your cannot register, Please register again")
        }
      }
  return (

    <View style={styles.container}>

      <View style={{
        alignItems: 'center',
        marginTop: 10,
      }}>
        <Icons.Button name={"user-alt"} color={'#000'} size={62} backgroundColor="#fff" />
      </View>

      <View style={styles.inputContent}>
        <View style={styles.textUser}>
          <View style={{ width: "30%", flexDirection: 'column-reverse', justifyContent: 'center' }}>
            <Text style={{ color: '#000', fontSize: 18 }}>Username:</Text>
          </View>
          <View style={{
            width: "65%", justifyContent: 'center', borderColor: 'blue',
            borderWidth: 1,
          }}>
            <TextInput
              style={styles.textInputuser}
              onChangeText={(text) => setUsername(text)}
              
            />
          </View>
        </View>
      </View>


      <View style={styles.inputContent2}>
        <View style={styles.textUser}>
          <View style={{ width: "30%", flexDirection: 'column-reverse', justifyContent: 'center' }}>
            <Text style={{ color: '#000', fontSize: 18 }}>Password:</Text>
          </View>

          <View style={{
            width: "65%", justifyContent: 'center', borderColor: 'blue',
            borderWidth: 1,
          }}>
            <TextInput
              secureTextEntry={true}
              style={styles.textInputuser}
              onChangeText={(text) => setPassword(text)}
           
            />
          </View>
        </View>
      </View>

      <View style={styles.inputContent2}>
        <View style={styles.textUser}>
          <View style={{ width: "30%", flexDirection: 'column-reverse', justifyContent: 'center' }}>
            <Text style={{ color: '#000', fontSize: 18 }}>First Name:</Text>
          </View>

          <View style={{
            width: "65%", justifyContent: 'center', borderColor: 'blue',
            borderWidth: 1,
          }}>
            <TextInput
              secureTextEntry={true}
              onChangeText={(text) => setFname(text)}
             
            />
          </View>
        </View>
      </View>

      <View style={styles.inputContent2}>
        <View style={styles.textUser}>
          <View style={{ width: "30%", flexDirection: 'column-reverse', justifyContent: 'center' }}>
            <Text style={{ color: '#000', fontSize: 18 }}>Last Name:</Text>
          </View>

          <View style={{
            width: "65%", justifyContent: 'center', borderColor: 'blue',
            borderWidth: 1,
          }}>
            <TextInput
              style={styles.textInputuser}
              onChangeText={(text) => setLname(text)}
              
            />
          </View>
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
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textUser: {
    height: 45,
    flexDirection: 'row',
    margin: 10,
    padding: 3,
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
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  TextLogin: {
    color: '#D1EDE1',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
