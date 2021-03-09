import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import { Container, ListItem, Body, Right } from 'native-base';
import Card from './Parts/Card';
import Empty from './Parts/Empty';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction, deleteTransactionBank, deleteTransactionAddbank, deleteTransactionDeletebank } from '../store/action/transactionAction';


function Item({ title, id, price, comment }) {
  
  const dispatch = useDispatch();
  let date = new Date();

  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 7,
      }}>
      <View style={{
        backgroundColor: '#fff',
        width: '100%',
        height: 120,
        borderRadius: 10,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
        <View style={{ flexDirection: 'column', width: 100, height: 100 }}>
          <Image source={require('../../assets/image/005-wallet.png')}
            style={{ width: 40, height: 40, marginLeft: 10, marginTop: 10 }}
          />
          
            <Text style={{ margin: 15 }}>{comment}</Text>
          
          

        </View>


        <View style={{ width: 100, height: 40, marginTop: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: '700', margin: 10 }}>
            {title}
          </Text>
          <View style={{ width: 100, height: 22, backgroundColor: "#AFFBC4", borderRadius: 15 }}>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: 'Lato-Bold',
                fontSize: 15,
                fontWeight: '400',
                color: price > 0 ? '#3DA558' : '#ff4500',
              }}>
              {price > 0 ? `▲${price} Bath` : `▼${Math.abs(price)} Bath`}
            </Text>
          </View>

        </View>


        <Right>
          <View style={{ width: 120, height: 30 }}>
            <TouchableOpacity >
              <Icon
                onPress={() => {
                  dispatch(deleteTransaction(id));
                }}
                style={{ marginLeft: 30 }}
                name="delete"
                size={30}
                color="red"
              />
            </TouchableOpacity>
            <View style={{ width: 120, height: 20, marginTop: 5 }}>
              <Text style={{ color: "#818280" }}>
                {(date.toLocaleString())}
              </Text>
            </View>
          </View>
        </Right>
      </View>
    </View>
  );
}
function ScreenAddbank({ title, id, price }) {
  const dispatch = useDispatch();
  let date = new Date();

  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 7,


      }}>
      <View style={{ backgroundColor: '#fff', width: '100%', height: 100, borderRadius: 10, flexDirection: 'row' }}>
        <Image source={require('../../assets/image/003-bank.png')}
          style={{ width: 50, height: 50, marginTop: 10, backgroundColor: "pink", borderRadius: 10 }} />

        <View style={{ width: 100, height: 40, marginTop: 10 }}>
          <Text style={{ fontSize: 17, margin: 10 }}>
            ฝากเงิน
            </Text>
        </View>

        <Text style={{ color: "#818280" }}>
          {(date.toLocaleString())}
        </Text>
        <Right>
          <View style={{ width: 120, height: 25, backgroundColor: '#BBFEAC', marginRight: 10, borderRadius: 15 }}>

            <Text
              style={{
                textAlign: "center",

                fontFamily: 'Lato-Bold',
                fontSize: 17,
                fontWeight: '400',
                color: price > 0 ? '#009BFC' : '#ff4500',
              }}>
              {price > 0 ? `▲${price} Bath` : `▼${Math.abs(price)} Bath`}
            </Text>
            <View style={{ width: 70, height: 30, backgroundColor: "red", borderRadius: 5 }}>
              <TouchableOpacity onPress={() => {
                dispatch(deleteTransactionAddbank(id));
              }} style={{ width: 70, height: 30, backgroundColor: "Red" }}>
                <Text style={{ textAlign: "center", margin: 5, color: "#fff" }}>ลบข้อมูล</Text>

              </TouchableOpacity>

            </View>
          </View>
        </Right>
      </View>
    </View>
  );
}


function ScreenDeletebank({ title, id, price }) {
  const dispatch = useDispatch();
  let date = new Date();

  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 7,


      }}>
      <View style={{ backgroundColor: '#fff', width: '100%', height: 100, borderRadius: 10, flexDirection: 'row' }}>
        <Image source={require('../../assets/image/006-salary.png')}
          style={{ width: 50, height: 50, marginTop: 10, backgroundColor: "#A6F1F6", borderRadius: 10 }} />

        <View style={{ width: 100, height: 40, marginTop: 10 }}>
          <Text style={{ fontSize: 17, margin: 10 }}>
            ถอนเงิน
            </Text>
        </View>

        <Text style={{ color: "#818280" }}>
          {(date.toLocaleString())}
        </Text>
        <Right>
          <View style={{ width: 120, height: 25, backgroundColor: '#BBFEAC', marginRight: 10, borderRadius: 15 }}>

            <Text
              style={{
                textAlign: "center",

                fontFamily: 'Lato-Bold',
                fontSize: 17,
                fontWeight: '400',
                color: price > 0 ? '#ff4500' : '#ff4500',
              }}>
              {price > 0 ? `▼${price} Bath` : `▼${Math.abs(price)} Bath`}
            </Text>
            <View style={{ width: 70, height: 30, backgroundColor: "red", borderRadius: 5 }}>
              <TouchableOpacity onPress={() => {
                dispatch(deleteTransactionDeletebank(id));
              }} style={{ width: 70, height: 30, backgroundColor: "Red" }}>
                <Text style={{ textAlign: "center", margin: 5, color: "#fff" }}>ลบข้อมูล</Text>

              </TouchableOpacity>
            </View>
          </View>
        </Right>
      </View>
    </View>
  );
}


const HomeScreen = ({ navigation }) => {
  const { transactions } = useSelector((state) => state.transactions);
  console.log(transactions);
  const { transactionsBank } = useSelector((state) => state.transactions);
  console.log(transactionsBank);
  const { transactionsAddbank } = useSelector((state) => state.transactions);
  console.log(transactionsAddbank);
  const { transactionsDeletebank } = useSelector((state) => state.transactions);
  console.log(transactionsDeletebank);
  return (
    <Container>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "#eee",
          
          
        }}>
          <View style={{marginTop:15}}></View>
        <Card  navigation={navigation} />
      </Animated.View>

      <View style={{ flex: 1, marginTop: -40, backgroundColor: "#eee" }}>
        <ScrollView>
          {transactions.length > 0 &&
            <FlatList
              keyExtractor={(item, index) => item.id.toString()}
              data={transactions}
              renderItem={({ item }) => (
                <Item title={item.title} price={item.price} id={item.id} comment={item.comment}/>
              )}
            />
          }
          {transactionsDeletebank.length > 0 &&
            <FlatList
              keyExtractor={(item, index) => item.id.toString()}
              data={transactionsDeletebank}
              renderItem={({ item }) => (
                <ScreenDeletebank title={item.title} price={item.price} id={item.id} />
              )}
            />
          }
          {transactionsAddbank.length > 0 &&
            <FlatList
              keyExtractor={(item, index) => item.id.toString()}
              data={transactionsAddbank}
              renderItem={({ item }) => (
                <ScreenAddbank title={item.title} price={item.price} id={item.id} />
              )}
            />
          }
          {
            transactions.length == 0 &&
            <Empty />
          }

        </ScrollView>
      </View>

    </Container>
  );
};

export default HomeScreen;