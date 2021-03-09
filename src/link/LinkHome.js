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
/*import List from '../component/List2';
import List11 from '../component/List11';
import Summary2 from '../component/Summary2'*/
import Hom2 from '../component/Hom2'


import Summary2 from '../component/Summary2'


 
const RootStack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen  name="Hom2" component={Hom2} options={{   
        title:"ภาพรวม",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>
        
        <RootStack.Screen name="Summary2" component={Summary2} options={{
        title:"สรุปรายการ",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>
        
        
        
      </RootStack.Navigator>
      </NavigationContainer>
    
  );
};
 
export default App;