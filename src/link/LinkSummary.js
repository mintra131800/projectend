import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

 
//import Data from './Data2';
// import List1 from '../component/List1';
//import List from '../component/List2';
//import List11 from '../component/List11';
import Summary from '../component/Summary'
//import Hom1 from './Hom1'
//import Hom2 from './Hom2'
 
const RootStack = createStackNavigator();
 
const App = () => {
  return (
    
      <RootStack.Navigator> 
          
          <RootStack.Screen name="Summary" component={Summary} options={{
        title:"สรุป",headerTitleAlign:'center',headerStyle:{backgroundColor:"#97CEF2"},headerTintColor:"#ffffff"
        }}/>
       
        
       
        
      </RootStack.Navigator>
    
  );
};
 
export default App;