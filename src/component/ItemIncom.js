import React, { useState } from "react";
import { TextInput } from "react-native";
import { Modal, Button,View, StyleSheet, Text, ScrollView, Image, TouchableOpacity,FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from "react-navigation";
import Addtransation from "../../Expense/Components/AddTransaction";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import uuid from 'uuid-random'
import { deleteTransactionCredit} from '../../Expense/store/action/transactionAction';


import {Container, ListItem, Body, Right} from 'native-base';


function ItemIncom({titleIncom, id, priceIncom,nameIncom}) {
    const dispatch = useDispatch();
    let date = new Date();
   
    return (
        <ScrollView>
            
      <View
      
        style={{
          paddingHorizontal: 30,
          paddingVertical: 7,
        }}>
        <View style={{backgroundColor:'#F9F9F9',width:'100%',height:120,borderRadius:10,flexDirection:'row',shadowColor: "#000",
                    shadowOffset: {
                      width: 3,
                      height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3.84,
                    elevation: 5,}}>
          <TouchableOpacity>
            <Icon
              onPress={() => {
                dispatch(deleteTransactionCredit(id));
              }}
              style={{margin:20}}
              name='delete'
              size={30}
              color="red"
            />
          </TouchableOpacity>
  
          <View style={{width:100,height:40,marginTop:10}}>
            <Text style={{fontSize: 17, fontWeight: '700', margin: 10}}>
              {titleIncom}
            </Text>
            </View>
          
  
          <Right>
              <View style={{width:120,height:30}}>
            <Text
              style={{
                  marginLeft:10,
                fontFamily: 'Lato-Bold',
                fontSize: 14,
                fontWeight: '400',
                color: priceIncom > 0 ? '#009BFC' : '#ff4500',
              }}>
              {priceIncom > 0 ? `▲${priceIncom} Bath` : `▼${Math.abs(priceIncom)} Bath`}
            </Text>
            <View style={{width:120,height:20,marginTop:5}}>
           <Text style={{color:"#818280"}}>
             {(date.toLocaleString())}
           </Text>
           </View>
            </View>
          </Right>
          </View>
      </View>
      </ScrollView>
    );
  }
  export default ItemIncom;