import React from 'react';
import {View, Text, FlatList, TouchableOpacity,ScrollView,Image} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, Body, Right} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';

function screenAddbank({title, id, price}) {
    const dispatch = useDispatch();
    let date = new Date();
   
    return (      
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 7,
        }}>
        <View style={{backgroundColor:'#fff',width:'90%',height:100,borderRadius:10,flexDirection:'row',
         shadowColor: "#000",
         shadowOffset: {
             width: 2,
             height: 2,
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 3,
         backgroundColor: 'red',
         borderRadius: 10,
 
      }}>
        <Image source={require('../assets/image/003-bank.png')}
                        style={{ width:50, height: 50,marginTop:10,backgroundColor:"pink",borderRadius:10 }} />
  
          <View style={{width:100,height:40,marginTop:10}}>
            <Text style={{fontSize: 17, margin: 10}}>
              ฝากเงิน
            </Text>
            </View>
          
            <Text style={{color:"#818280"}}>
             {(date.toLocaleString())}
           </Text>
          <Right>
              <View style={{width:120,height:30,backgroundColor:'green',marginRight:10,borderRadius:15}}>
                  
            <Text
              style={{
                  textAlign:"center",
                  
                fontFamily: 'Lato-Bold',
                fontSize: 17,
                fontWeight: '400',
                color: price > 0 ? '#009BFC' : '#ff4500',
              }}>
              {price > 0 ? `▲${price} Bath` : `▼${Math.abs(price)} Bath`}
            </Text>
            <View style={{width:120,height:20}}>
            <TouchableOpacity>
            <Icon
             onPress={() => {
                dispatch(deleteTransactionBank(id));
              }}
              style={{margin:10}}
              name="delete"
              size={30}
              color="red"
            />
          </TouchableOpacity>
           
           </View>
            </View>
          </Right>
          </View>
      </View>
    );
  }
  export default screenAddbank;
