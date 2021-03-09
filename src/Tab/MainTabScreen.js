import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image
    
  } from 'react-native';
  import {Provider} from 'react-redux';
  import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
  import { createStackNavigator } from '@react-navigation/stack';
  
  import Icons from 'react-native-vector-icons/FontAwesome';
 
import Hom2 from '../component/Hom1';
import Summary2 from '../component/Summary2';
import List1 from '../component/List1';
import test from '../Test1/no1';

 import LinkSummary from '../link/LinkSummary';
 import LinkData from '../link/LinkData';

 import Menuu from '../component/Menu';
 import Login from '../component/Login';
import Homecategory from '../../screens/Home'

import AddTransaction from '../../Expense/Components/AddTransaction';
import HomeScreen from '../../Expense/Components/Homescreen';
import store from '../../Expense/store';

 


const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const DataStack = createStackNavigator();
const MenuStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#6E6C6C"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'หน้าหลัก',
        tabBarColor: '#97CEF2',
        tabBarIcon: ({ color }) => (
          <Image
                            source={require('../../assets/image/009-home.png')}
                            style={{width: 25, height: 25}}
                          />
        ),
      }}
    />
    <Tab.Screen
      name="List"
      component={ListStackScreen}
      options={{
        tabBarLabel: 'รายการ',
        tabBarColor: '#97CEF2',
        tabBarIcon: ({ color }) => (
          <Image
          source={require('../../assets/image/checklist.png')}
          style={{width: 25, height: 25}}
        />
        ),
      }}
    />
   
    <Tab.Screen
      name="Data"
      component={DataStackScreen}
      options={{
        tabBarLabel: 'ข้อมูล',
        tabBarColor: '#97CEF2',
        tabBarIcon: ({ color }) => (
          <Image
          source={require('../../assets/image/folder.png')}
          style={{width: 25, height: 25}}
        />
        ),
      }}
    />
    <Tab.Screen
      name="Menu"
      component={MenuStackScreen}
      options={{
        tabBarLabel: 'เมนู',
        tabBarColor: '#97CEF2',
        tabBarIcon: ({ color }) => (
          <Image
          source={require('../../assets/image/menu.png')}
          style={{width: 25, height: 25}}
        />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <Provider store={store}>
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#97CEF2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Hom2" component={Hom2} options={{
      title: 'ภาพรวม',
      headerLeft: () => (
        <Icons.Button name={"bars"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.openDrawer()}></Icons.Button>
      )
    }} />
    <HomeStack.Screen name="Summary2" component={Summary2} options={{
      title: 'สรุป',
      headerLeft: () => (
        <Icons.Button name={"arrow-left"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.navigate('Hom2')}></Icons.Button>
      )
    }} />
  </HomeStack.Navigator>
  </Provider>
);

const ListStackScreen = ({ navigation }) => (
  <Provider store={store}>
  <ListStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#97CEF2',
      
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft:55 
    }
    
  }}>
    <ListStack.Screen name="HomeScreen" component={HomeScreen} options={{
      title: 'รายการของฉัน',
      headerLeft: () => (
        <Icons.Button name={"bars"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.openDrawer()}></Icons.Button>
      )
    }} />
    <ListStack.Screen name="Add" component={AddTransaction} options={{
      title: 'เพิ่มรายการ',
      headerLeft: () => (
        <Icons.Button name={"arrow-left"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.navigate('HomeScreen')}></Icons.Button>
      )
    }} />
    <ListStack.Screen name="Data" component={LinkData} options={{
      title: 'ข้อมูล',
      headerLeft: () => (
        <Icons.Button name={"arrow-left"} size={25} backgroundColor="#97CEF2"  onPress={() => navigation.navigate('HomeScreen')}></Icons.Button>
      )
    }} />
  
    
  </ListStack.Navigator>
  </Provider>
);

const DataStackScreen = ({ navigation }) => (
  <Provider store={store}>
  <DataStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#97CEF2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DataStack.Screen name="Data" component={LinkData} options={{
      title: 'ข้อมูล',
      headerLeft: () => (
        <Icons.Button name={"bars"} size={25} backgroundColor="#97CEF2" onPress={() => navigation.openDrawer()}></Icons.Button>
      )
    }} />
  </DataStack.Navigator>
  </Provider>
);
const MenuStackScreen = ({ navigation }) => (
  <Provider store={store}>
  <MenuStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#97CEF2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <MenuStack.Screen name="Menuu" component={Menuu} options={{
      title: 'เมนู',
      headerLeft: () => (
        <Icons.Button name={"bars"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.openDrawer()}></Icons.Button>
      )
    }} />
     <MenuStack.Screen name="Login" component={Login} options={{
      title: 'ล็อกอิน',
      headerLeft: () => (
        <Icons.Button name={"arrow-left"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.navigate('Menuu')}></Icons.Button>
      )
    }} />
    <HomeStack.Screen name="Hom2" component={Hom2} options={{
      title: 'ภาพรวม',
      headerLeft: () => (
        <Icons.Button name={"bars"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.openDrawer()}></Icons.Button>
      )
    }} />
  </MenuStack.Navigator>
  </Provider>
);