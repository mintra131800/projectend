import React,{useState} from 'react';

import firebase from './firbaseDb';
import { StyleSheet,TextInput, ScrollView, ActivityIndicator, View, Text } from "react-native";
import {ThemeProvider, Button, Input, Image } from "react-native-elements";
import  Icon  from "react-native-vector-icons/FontAwesome";


class AddUserScreen extends React.Component {
    constructor() {
      super();
      this.dbRef = firebase.firestore().collection('users');
      this.state = {
        name: '',
        email: '',
        mobile: '',
        isLoading: false
      };
    }
  
    inputValueUpdate = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
  
    storeUser() {
      if(this.state.name === ''){
       alert('Fill at least your name!')
      } else {
        this.setState({
          isLoading: true,
        });      
        this.dbRef.add({
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile,
        }).then((_res) => {
          this.setState({
            name: '',
            email: '',
            mobile: '',
            isLoading: false,
          });
          this.props.navigation.navigate('UserScreen')
        })
        .catch((err) => {
          console.error("Error found: ", err);
          this.setState({
            isLoading: false,
          });
        });
      }
    }
  
    render() {
      if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )
      }
        return(
            <ThemeProvider theme={theme}>
                <ScrollView style={styles.container}>
                    <Image 
                        source={{ uri: 'https://camo.githubusercontent.com/057b6ae5408b97072f6a1846a4dcf2f6f9d7022a/68747470733a2f2f63646e2e7261776769742e636f6d2f6c7563617362656e746f2f72656163742d6e61746976652d616374696f6e732f6d61737465722f636f6d6d6f6e2f6d656469612f6c6f676f2e706e67'}}
                        style={{ width: 200, height: 200 }}
                        containerStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
                    />
                    <Input 
                        leftIcon={
                            <Icon 
                                name='user-o'
                                size={20}
                                color='#0085E6'
                            />
                        }
                        placeholder={'  Name'}
                        value={this.state.name}
                        onChangeText={(val) =>this. inputValueUpdate(val, 'name')}
                    />
                    <Input 
                        leftIcon={
                            <Icon 
                                name='envelope-o'
                                size={20}
                                color='#0085E6'
                            />
                        }
                        placeholder={'  Email'}
                        value={this.state.email}
                        onChangeText={(val) => this.inputValueUpdate(val, 'email')}
                    />
                    <Input 
                        leftIcon={
                            <Icon 
                                name='mobile'
                                size={30}
                                color='#0085E6'
                            />
                        }
                        placeholder={'  Mobile'}
                        value={this.state.mobile}
                        onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
                    />
                    <Button 
                        icon={
                            <Icon 
                                name='check'
                                size={15}
                                color='white'
                            />
                        }
                        title='  Add User'
                        buttonStyle={{
                            backgroundColor: "green"
                        }}
                        onPress={() => this.storeUser()}
                    />
                    
                </ScrollView>
            </ThemeProvider>
        )
    }
}

const theme = {
    Button: {
        raised: true
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AddUserScreen;

/*
componentWillMount() {
    var config = {
    apiKey: "AIzaSyDjbuu0lcWj8TBSosacDsHwY501xvNsV-4",
    authDomain: "projectname-42128.firebaseapp.com",
    projectId: "projectname-42128",
    storageBucket: "projectname-42128.appspot.com",
    messagingSenderId: "349347200699",
    appId: "1:349347200699:web:c6c308aae0e9326896f39e"
  };
if (!firebase.apps.length){
  firebase.initializeApp(config);
}

  firebase.database().ref('users').on('value', (data) => {
      console.log(data.toJSON());
  })

  // To Await 5 seconds to insert a new user
  setTimeout(() => {
      firebase.database().ref('users/003').set(
          {
              name: 'Pheng Sengvuthy 003',
              age: 24
          }
      ).then(() => {
          console.log('INSERTED !');
      }).catch((error) => {
          console.log(error);
      });
  }, 5000);

  // To Update a user
 
   
}

render() {
  return (
      <View style={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
          <Input
          leftIcon={
              <Icon
              name='user-o'
              size={20}
              color='#0085E6'
              />
          } 
          placeholder={'  Name'}
          />
      </View>
  )
  }
}

*/