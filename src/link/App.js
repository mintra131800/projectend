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

 
//import Data from './Data2';
import List1 from '../component/List1';
import List from '../component/List2';
import List11 from '../component/List11';
import Summary from '../component/Summary'
//import Hom1 from './Hom1'
//import Hom2 from './Hom2'
 
const RootStack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
         <RootStack.Screen  name="List1" component={List1} options={{  
        title:"ภาพรวม",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>
       <RootStack.Screen name="List11" component={List11} options={{
        title:"เมนูเพิ่มรายการ",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/> 
       
       <RootStack.Screen  name="List" component={List} options={{ 
        title:"รายการของฉัน",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>
        
         <RootStack.Screen name="Summary" component={Summary} options={{
        title:"สรุปรายการรายปี",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>
      
        
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;