import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

 import Menu from '../component/Menu';
 import Login from '../component/Login';
 import Setup from '../../Setup';
 import firbaseDb from '../../firbaseDb'



 
const RootStack = createStackNavigator();
 
const App = () => {
  return (
    
      <RootStack.Navigator>
        <RootStack.Screen  name="Setup" component={Setup} options={{   
        title:"ข้อมูล",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>
       <RootStack.Screen  name="Login" component={Login} options={{   
        title:"ล็อกอิน",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>
        <RootStack.Screen  name="Menu" component={Menu} options={{   
        title:"menu",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>
  
      </RootStack.Navigator>
    
  );
};
 
export default App;