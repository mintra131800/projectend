/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/*import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hom1 from './src/component/Hom1';
import Hom2 from './src/component/Hom2';
import Summary from './src/component/Summary';
import Summary2 from './src/component/Summary2';
import Data1 from './src/component/Data1';
import Data2  from './src/component/Data2';
import List1 from './src/component/List1';
import List2 from './src/component/List2';
import Menu1 from './src/component/Menu1';
 import Menu2 from './src/component/Menu2';
 
 //import App from './src/link/App';
 import LinkList from './src/link/LinkList';
 import LinkHome from './src/link/LinkHome';
 import LinkSummary from './src/link/LinkSummary'
import { Menu } from 'react-native-paper';*/
  
/*class HomScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinkHome/>
      </View>
    )
  }
}
class ListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinkList/>
      </View>
    )
  }
}
class SummaryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
          <LinkSummary/>
        
        
      </View>
    )
  }
}
class DataScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Data1/>
        <Data2/>
      </View>
    )
  }
}
class MenuScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Menu1/>
        <Menu2/>
         
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eee'
  }
});
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={20} name={'home'}/>
          </View>
        ),
      }
    },
    List: {
      screen: ListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={20} name={'list'} />
          </View>
        ),
      }
    },
    Summary: {
      screen: SummaryScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={20} name={'calendar'} />
          </View>
        ),
      }
    },
    Data: {
      screen: DataScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={20} name={'database'} />
          </View>
        ),
      }
    },
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={20} name={'bars'} />
          </View>
        ),
      }
    },
  },
  

 
  {
    initialRouteName: 'Home',
    activeColor: '#FFFFFF',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#97CEF2' },
  }
  
);


export default createAppContainer(TabNavigator);*/


/*import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinkList from './src/link/LinkList';
 import LinkHome from './src/link/LinkHome';
 import LinkSummary from './src/link/LinkSummary';
 import LinkData from './src/link/LinkData';
 import LinkMenu from './src/link/LinkMenu';
const Tab = createBottomTabNavigator();
function BottomTabNavigator  ()  {
  return (
      
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LinkHome} options={{title:"ภาพรวม",tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: '#ABB7FC' }]} size={20} name={'home'}/>
          </View>
        ),}} />
      <Tab.Screen name="List" component={LinkList} options={{ title:"รายการ", tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: '#99A8FE' }]} size={20} name={'list'} />
          </View>
        )}}/>
      <Tab.Screen name="Summary" component={LinkSummary} options={{title:"สรุป",tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: '#7E91FB' }]} size={20} name={'calendar'} />
          </View>
        )}} />
      <Tab.Screen name="Data" component={LinkData} options={{title:"ข้อมูล",tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: '#6178F8' }]} size={20} name={'database'} />
          </View>
        )}} />
      <Tab.Screen name="Menu" component={LinkMenu} options={{title:"เมนู",tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: '#1638F7' }]} size={20} name={'bars'} />
          </View>
        )}} />
    </Tab.Navigator>
    
  )
};
const Stack = createStackNavigator();
function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#97CEF2" } }}>
      <Stack.Screen name="Home" component={LinkHome} options={{ title: 'ภาพรวม',headerTintColor:'#fff',headerTitleAlign:'center'}} />
    </Stack.Navigator>
  );
}
function ListScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#97CEF2" } }}>
      <Stack.Screen name="List" component={LinkList} options={{ title: 'รายการ',headerTintColor:'#fff',headerTitleAlign:'center'}} />
    </Stack.Navigator>
  );
}
function SummaryScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#97CEF2" } }}>
      <Stack.Screen name="Summary" component={LinkSummary} options={{ title: 'สรุป',headerTintColor:'#fff',headerTitleAlign:'center'}}/>
    </Stack.Navigator>
  );
}
function DataScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#97CEF2" } }}>
      <Stack.Screen name="Data" component={LinkData} options={{ title: 'ข้อมูล',headerTintColor:'#fff',headerTitleAlign:'center'}}/>
    </Stack.Navigator>
  );
}
function MenuScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#97CEF2" } }}>
      <Stack.Screen name="Menu" component={LinkMenu}options={{ title: 'เมนู',headerTintColor:'#fff',headerTitleAlign:'center'}} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={BottomTabNavigator} options={{title:"หน้าหลัก",tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={20} name={'bar'} />
          </View>
        )}} />
        <Drawer.Screen name="Hom" component={HomeScreen} options={{title:"ภาพรวม",tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={20} name={'bar'} />
          </View>
        )}} /> 
        <Drawer.Screen name="List" component={ListScreen} options={{title:"รายการ",tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={20} name={'bar'} />
          </View>
        )}} />
        <Drawer.Screen name="Summary" component={SummaryScreen} options={{title:"สรุป",tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={20} name={'bar'} />
          </View>
        )}} />
        <Drawer.Screen name="Data" component={DataScreen} options={{title:"ข้อมูล",tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={20} name={'bar'} />
          </View>
        )}} />
        <Drawer.Screen name="Menu" component={MenuScreen} options={{title:"เมนุ",tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={20} name={'bar'} />
          </View>
        )}} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  )
}*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './src/Tab/MainTabScreen';


import { DrawerContent } from './src/Tab/DrawerContent';

const Drawer = createDrawerNavigator();

const  App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="หน้าแรก" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;











