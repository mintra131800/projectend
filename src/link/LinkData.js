import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

 
import Data2 from '../component/Data2';


 
const RootStack = createStackNavigator();
 
const App = () => {
  return (
    
      <RootStack.Navigator>
       <RootStack.Screen  name="Data2" component={Data2} options={{  
        title:"ข้อมูล",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>

        
      </RootStack.Navigator>
    
  );
};
 
export default App;