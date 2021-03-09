import * as firebase from "firebase";
import React from 'react';
import { Container, Item, Form, Input, Button, Label,Text } from "native-base";

const firebaseConfig = {
  apiKey: "AIzaSyDjbuu0lcWj8TBSosacDsHwY501xvNsV-4",
  authDomain: "projectname-42128.firebaseapp.com",
  databaseURL: "https://projectname-42128-default-rtdb.firebaseio.com",
  projectId: "projectname-42128",
  storageBucket: "projectname-42128.appspot.com",
  messagingSenderId: "349347200699",
  appId: "1:349347200699:web:c6c308aae0e9326896f39e",
  measurementId: "G-QNFZJKPTRF"
};
  firebase.initializeApp(firebaseConfig);

  export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }
    SignUp = (email, password) => {
      try {
        firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (error) {
        console.log(error.toString(error));
      }
    };
    SignIn = (email, password) => {
        try {
          firebase.auth().signInWithEmailAndPassword(email, password);
          firebase.auth().onAuthStateChanged(user => {
             alert(user.email);
          })
    } catch (error) {
          console.log(error.toString(error));
        }
      };
    render() {
        return (
          <Container>
            <Form>
            <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
              </Item>
              <Button full rounded
              onPress={() => this.SignIn(this.state.email, this.state.password)}
              >
                <Text>SignIn</Text>
              </Button>
              <Button full rounded success style={{ marginTop: 20 }}
              onPress={() => this.SignUp(this.state.email, this.state.password)}
              > 
              <Text>Signup</Text>
</Button>
            </Form>
          </Container>
        );
      }
    }