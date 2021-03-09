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
  import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
  import { createStackNavigator } from '@react-navigation/stack';
  
  import Icons from 'react-native-vector-icons/FontAwesome';
  
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

 import Home from '../projectYing/Home'
 import Detail from '../projectYing/Detail'
 import Profile from '../projectYing/Profile'
 import Card from '../Test1/Card';
 import Swiper from '../Test1/Swiper2';
 import Carousel from '../Test1/Carousel'
import Icon from "react-native-vector-icons/FontAwesome";

const HomeStack = createStackNavigator();
const CardStack = createStackNavigator();
const CarouselStack = createStackNavigator();
const SwiperStack = createStackNavigator();


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
        tabBarLabel: 'Home',
        tabBarColor: '#97CEF2',
        tabBarIcon: ({ color }) => (
          <Icon name={'home'} size={20} color={'#fff'} />
        ),
      }}
    />
    <Tab.Screen
      name="Card"
      component={CardStackScreen}
      options={{
        tabBarLabel:'Card',
        tabBarColor: '#97CEF2',
        tabBarIcon: ({ color }) => (
          <Icon name={'cart-plus'} size={20} color={'#fff'} />
        ),
      }}
    />
    <Tab.Screen
      name="Carousel"
      component={CarouselStackScreen}
      options={{
        tabBarLabel: 'Carousel',
        tabBarColor: '#97CEF2',
        tabBarIcon: ({ color }) => (
          <Icon name={'sliders'} size={20} color={'#fff'} />
        ),
      }}
    />
    <Tab.Screen
      name="Swiper"
      component={SwiperStackScreen}
      options={{
        tabBarLabel: 'Swiper',
        tabBarColor: '#97CEF2',
        tabBarIcon: ({ color }) => (
          <Icon name={'slideshare'} size={20} color={'#fff'} />
        ),
      }}
    />
    
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#97CEF2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen  name="Home" component={Home} options={{  
        title:"หน้าแรก",headerLeft: () => (
          <Icons.Button name={"bars"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.openDrawer()}></Icons.Button>
        )
        }}/>
        <HomeStack.Screen  name="Profile" component={Profile} options={{  
        title:"โปรไฟล์",
        headerLeft: () => (
          <Icons.Button name={"bars"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.openDrawer()}></Icons.Button>
        )
        }}/>
        <HomeStack.Screen  name="Detail" component={Detail} options={{  
        title:"ข้อมูลส่วนตัว",
        headerLeft: () => (
          <Icons.Button name={"bars"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.openDrawer()}></Icons.Button>
        )
        }}/>
  </HomeStack.Navigator>
);

const CardStackScreen = ({ navigation }) => (
  <CardStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#97CEF2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <CardStack.Screen name="Card" component={Card} options={{
      title: 'Card',
      headerLeft: () => (
        <Icons.Button name={"bars"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.openDrawer()}></Icons.Button>
      )
    }} />
    
  </CardStack.Navigator>
);

const CarouselStackScreen = ({ navigation }) => (
  <CarouselStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#97CEF2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <CarouselStack.Screen name="Carousel" component={Carousel} options={{
      title: 'Carousel',
      headerLeft: () => (
        <Icons.Button name={"bars"} size={20} backgroundColor="#97CEF2" onPress={() => navigation.openDrawer()}></Icons.Button>
      )
    }} />
  </CarouselStack.Navigator>
);

const SwiperStackScreen = ({ navigation }) => (
  <SwiperStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#97CEF2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <SwiperStack.Screen name="Swiper" component={Swiper} options={{
      title: 'Swiper',
      headerLeft: () => (
        <Icons.Button name={"bars"} size={25} backgroundColor="#97CEF2" onPress={() => navigation.openDrawer()}></Icons.Button>
      )
    }} />
  </SwiperStack.Navigator>
);
