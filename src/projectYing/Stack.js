import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Profile from './Profile';
import Detail from './Detail';

const RootStack = createStackNavigator();

 
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
       <RootStack.Screen  name="Home" component={Home} options={{  
        title:"หน้าแรก",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>
        <RootStack.Screen  name="Profile" component={Profile} options={{  
        title:"โปรไฟล์",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>
        <RootStack.Screen  name="Detail" component={Detail} options={{  
        title:"ข้อมูลส่วนตัว",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>

        
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;