import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Modal,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import uuid from 'uuid-random'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { addTransactionDebt1, addTransactionHome } from '../../Expense/store/action/transactionAction';
import Data from '../component/Data2'

import Axios from 'axios'

const Separator = () => (
  <View style={styles.separator} />
);
const Hom1 = ({ navigation }) => {


  const dispatch = useDispatch();
  const [title1, setTitle1] = useState('+Create Account');
  const [price1, setPrice1] = useState('');

  // const onSubmit = async () => {
  //   if (!title1 || !price1) {
  //     return alert('Please fill all fields');
  //   }
  //   const id = Math.floor(Math.random() * 100000000);

  //   const newTransaction = {
  //     id,
  //     title1,
  //     price1: +price1,
  //   };
  //   await dispatch(addTransaction(newTransaction));
    
  //   setModalVisible(!modalVisible);
  // };


  // const [items, setItems] = useState([
  //   { text: '', price: '' },
  // ])


  // const addItem = async () => {
  //   if (!text || !price) {
  //     return alert('Please fill all fields');
  //   }
  //   const id = Math.floor(Math.random() * 100000000);
  //   const newTransaction = {
  //     id,
  //     text,
  //     price: +price,
  //   };
  //   await dispatch(addTransactionHome(newTransaction));

  // }
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
 


  const onRegister = async () => {
    let res = await Axios.post("http://192.168.43.86:5000/addmoney",{
      money0:money0,
      // password:password

    })
    if(res.data.error === false){
      Alert.alert("Register is successful, Please login")
    }else{
      Alert.alert("Your cannot register, Please register again")
    }
  }


  const [money0, setmoney0] = useState('0');
  //const [password, setpassword] = useState('');
  const onChange = textValue => setText(textValue);
  const onChange2 = textValue2 => setprice(textValue2);
  const [modalVisible, setModalVisible] = useState(false);

  const { transactions } = useSelector((state) => state.transactions);

  const prices = transactions.map((transaction) => transaction.price);
  const totalPrice = prices.reduce((prev, cur) => (prev += cur), 0);
 

  //////////////////////////////////////////////////////////////////////////////////
  const { transactionsBank } = useSelector((state) => state.transactions);

  const pricesBank = transactionsBank.map((transaction) => transaction.price);
  const totalPriceBank = pricesBank.reduce((prev, cur) => (prev += cur), 0);
  ///////////////////////////////////////////////////////////////////////////////
  const { transactionsCredit } = useSelector((state) => state.transactions);

  const pricesCredit = transactionsCredit.map((transaction) => transaction.priceIncom);
  const totalPriceCredit = pricesCredit.reduce((prev, cur) => (prev += cur), 0);
  /////////////////////////////////////////////////////////////////////////////////////////////
  const { transactionsAddbank } = useSelector((state) => state.transactions);
  const pricesAddbank = transactionsAddbank.map((transaction) => transaction.price);
  const totalPriceAddbank = pricesAddbank.reduce((prev, cur) => (prev += cur), 0);

  const { transactionsDeletebank } = useSelector((state) => state.transactions);
  const pricesDeletebank = transactionsDeletebank.map((transaction) => transaction.price);
  const totalPriceDeletebank = pricesDeletebank.reduce((prev, cur) => (prev += cur), 0);
  /////////////////////////////////////////////////////////////////////////////////////
  const { transactionsHome } = useSelector((state) => state.transactions);

  const pricesHome = transactionsHome.map((transaction) => transaction.price);
  const totalPriceHome = pricesHome.reduce((prev, cur) => (prev += cur), 0);
  //////////////////////////////////////////////////////////////////////////////////

  const total = ((totalPriceHome + totalPrice) - totalPriceAddbank + totalPriceDeletebank);
  const totalBank = ((totalPriceBank + totalPriceAddbank) - totalPriceDeletebank);
  const totalSum = ((totalPriceHome + totalPrice) + (totalPriceBank) + (totalPriceCredit));
  const totalSumSum = ((totalPriceHome + totalPrice) + (totalPriceBank) + (totalPriceCredit));

  const expense =
    prices
      .filter((price) => price < 0)
      .reduce((prev, cur) => (prev += cur), 0)
      .toFixed(2) * -1;
  const expense1 =
    prices
      .filter((price) => price > 0)
      .reduce((prev, cur) => (prev += cur), 0)
      .toFixed(2) * +1;

  return (

    <View style={styles.container}>

      <SafeAreaView style={{ flex: 1, }}>
        <View
          style={{
            flexDirection: "row",
            height: 100,

          }}
        >

          <View style={{
            backgroundColor: "#97CEF2",
            flex: 1,
            fontWeight: '900',
            padding: 15,

          }}>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
              style={styles.buttonFacebookStyle}
              activeOpacity={0.5}>
              <Image
                source={require('../../assets/image/d1.png')}
                style={styles.buttonImageIconStyle}
              />

              <View style={styles.buttonIconSeparatorStyle} />
              <View style={{ width: 200, height: 35, marginHorizontal: 40 }}>
                <Text style={styles.buttonTextStyle}>{username}</Text>
              </View>
              <View >
                <Icon size={20} name={'caret-down'} color={'#fff'} /></View>
            </TouchableOpacity>
            {transactionsHome.length > 0 &&
              <ScrollView>
                <Modal
                  transparent={true}
                  visible={modalVisible}


                >
                  <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                    <Icon style={{ margin: 20, color: '#D9D3DB' }} name={'times-circle'} size={40} onPress={() => {
                      setModalVisible(!modalVisible);
                    }} />
                    <View style={{ flex: 1, width: '90%', }}>
                      <ScrollView >
                        <View style={styles.top}>
                          <View style={{
                            height: 350,
                            padding: 5,
                            margin: 5,

                          }}>

                            <View style={{ flexDirection: 'row', width: 250, height: 50 }}>

                              <View style={{ flexDirection: 'row', width: 250, height: 50 }}>
                                <Image
                                  source={require('../../assets/image/d1.png')}
                                  style={styles.buttonImageIconStyle} />
                                <Text style={{ marginLeft: 10, color: 'black', textAlign: 'center', marginTop: 6, fontSize: 20, fontWeight: '700', paddingHorizontal: 10 }}>
                                  {/* {username} */}
                                </Text>
                              </View>

                            </View>

                            <View style={{ flexDirection: 'row' }}>
                              <View style={{ width: 50, height: 20, backgroundColor: '#48A0DA', borderRadius: 15 }}>
                                <Text style={{ textAlign: 'center', color: 'white' }}>0 วัน</Text>
                              </View>
                              <View style={{ paddingHorizontal: 5 }}></View>
                              <View style={{ width: 70, height: 20, backgroundColor: '#48A0DA', borderRadius: 15 }}>
                                <Text style={{ textAlign: 'center', color: 'white' }}>
                                  {transactionsAddbank.length + transactionsDeletebank.length + transactions.length} รายการ</Text>
                              </View>
                            </View>
                            <Separator />
                            <View style={{ flexDirection: 'row' }}>
                              <Image
                                source={require('../../assets/image/money.png')}
                                style={{ width: 25, height: 25, marginLeft: 5 }} />
                              <Text style={{ flex: 1, color: 'black', marginTop: 4, fontSize: 17, fontWeight: '600', paddingHorizontal: 10 }}>
                                เงินสด
                    </Text>
                              <Text style={{ marginRight: 5, fontSize: 17 }}>{total} Bath</Text>
                            </View>
                            <Separator />
                            <View style={{ flexDirection: 'row', }}>
                              <Image
                                source={require('../../assets/image/credicon.png')}
                                style={{ width: 25, height: 25, marginLeft: 5 }} />
                              <Text style={{ flex: 1, color: 'black', marginTop: 4, fontSize: 17, fontWeight: '600', paddingHorizontal: 10 }}>
                                บํญชีธนาคาร
                    </Text>
                              <Text style={{ marginRight: 5, fontSize: 17 }}>{totalBank} bath</Text>

                            </View>
                            <Separator />
                 

                            <View style={{ flexDirection: 'row', }}>

                              <Text style={{ flex: 1, color: 'black', marginTop: 4, fontSize: 17, fontWeight: '600', paddingHorizontal: 10 }}>
                                รวม
                    </Text>
                              <Text style={{ marginRight: 5, fontSize: 17 }}>{totalSumSum} bath</Text>
                            </View>
                            <Separator />
                            <TouchableOpacity style={{ width: "95%", height: 40, backgroundColor: '#40B824', marginLeft: 6, marginTop: 15, borderRadius: 10 }}>
                              <View>
                                <Text style={{ textAlign: "center", margin: 5, fontSize: 20, fontWeight: '700', color: '#fff' }}>☑ บัญชีปัจจุบัน</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </ScrollView>
                    </View>
                  </View>
                </Modal>
              </ScrollView>
            }
            {
              transactionsHome.length == 0 &&
              <Modal
                transparent={true}
                visible={modalVisible}


              >
                <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                  <Icon style={{ margin: 20, color: '#D9D3DB' }} name={'times-circle'} size={40} onPress={() => {
                    setModalVisible(!modalVisible);
                  }} />
                  <View style={{ backgroundColor: '#ffffff', borderRadius: 10, width: 300, height: 370 }}>



                    <View style={{ flex: 1 }}>

                      <View style={styles.top}>
                        <View style={{
                          height: 350,
                          padding: 5,
                          margin: 5,
                          
                        }}>


                          <View style={{ alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', color: 'black', fontWeight: '600', fontSize: 20 }}>บัญชี</Text>
                            <Text style={{ color: '#98959A' }}>แก้ไขข้อมูลของบัญชี</Text>

                          </View>

                          <View style={{ marginTop: 10 }}>
                            <Text style={{ color: 'black' }}>
                              ชื่อ
                    </Text>
                          </View>
                          <View style={{ width: 280,
                             height: 60,
                              backgroundColor: '#eee', 
                              marginTop: 3,
                               borderRadius: 7,
                               shadowOffset: {
                                width: 3,
                                height: 2,
                              },
                              shadowOpacity: 0.5,
                              shadowRadius: 3.84,
                              elevation: 5,
                                }}>
                            {/* <TextInput onChangeText={(username) => setusername(username)} >

                            </TextInput> */}
                          </View>
                          <View style={{ marginTop: 10 }}>
                            <Text style={{ color: 'black' }}>
                              เงินสดคงเหลือ(เริ่มต้น)
                    </Text>
                          </View>
                          <View style={{ width: 280,
                             height: 60, 
                             backgroundColor: '#eee', 
                             marginTop: 3,
                              borderRadius: 7,
                              shadowOffset: {
                                width: 3,
                                height: 2,
                              },
                              shadowOpacity: 0.5,
                              shadowRadius: 3.84,
                              elevation: 5,
                               }}>
                            <TextInput style={{ textAlign: 'right', marginRight: 5 }}
                              onChangeText={(text) => setmoney0(text)}
                            >
                            </TextInput>
                          </View>
                          <View style={{ width: 280, height: 40, backgroundColor: 'green', marginTop: 30, borderRadius: 7 }}>
                            <TouchableOpacity onPress={() => {
                              setModalVisible(!modalVisible);
                              onRegister()
                            }}>
                              <View style={{ flexDirection: 'row', marginHorizontal: 100, marginTop: 5 }}>
                                <Icon name={'check'} size={20} style={{ color: '#fff', alignItems: 'center' }}></Icon>
                                <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 15, marginLeft: 5 }}>
                                  บันทึก
                            </Text></View>
                            </TouchableOpacity>
                          </View>




                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            }

          </View>
        </View>
        {/* ********************************************************************************* */}
        <SafeAreaView style={styles.container} >

          <View style={{ margin: 10, }} >

            <ScrollView Vertical={true} showsVerticalScrollIndicator={false} >
              <View style={{ flex: 1 }}>

                <View style={{ flex: 1, width: '100%' }}>
                  <ScrollView >
                    <View style={styles.top}>
                      <View style={{
                        height: 250,
                        padding: 5,
                        margin: 5,

                      }}>

                        <View style={{ flexDirection: 'row', width: 250, height: 50 }}>

                          <View style={{ flexDirection: 'row', width: 250, height: 50 }}>
                            <Image
                              source={require('../../assets/image/d1.png')}
                              style={styles.buttonImageIconStyle} />
                            <Text style={{ marginLeft: 10, color: 'black', textAlign: 'center', marginTop: 6, fontSize: 17, fontWeight: '700', paddingHorizontal: 10 }}>
                              {money0}
                            </Text>
                          </View>

                          <View style={{ width: 50, height: 50, marginHorizontal: 70 }}>
                            <TouchableOpacity onPress={() => {
                              setModalVisible(true);
                            }}>
                              <View style={{ marginTop: 10, width: 100, height: 50 }}>
                                <Image
                                  source={require('../../assets/image/edit.png')}
                                  style={{ width: 25, height: 25 }}
                                />
                              </View>
                            </TouchableOpacity>
                          </View>


                        </View>

                        <View style={{ flexDirection: 'row' }}>
                          <View style={{ width: 50, height: 20, backgroundColor: '#48A0DA', borderRadius: 15 }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>0 วัน</Text>
                          </View>
                          <View style={{ paddingHorizontal: 5 }}></View>
                          <View style={{ width: 70, height: 20, backgroundColor: '#48A0DA', borderRadius: 15 }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>
                              {transactionsAddbank.length + transactions.length} รายการ</Text>
                          </View>
                        </View>
                        <Separator />
                        <View style={{ flexDirection: 'row' }}>
                          <Image
                            source={require('../../assets/image/money.png')}
                            style={{ width: 25, height: 25, marginLeft: 5 }} />
                          <Text style={{ flex: 1, color: 'black', marginTop: 4, fontSize: 17, fontWeight: '600', paddingHorizontal: 10 }}>
                            เงินสด
                    </Text>
                          <Text style={{ marginRight: 5, fontSize: 17 }}>{money0} Bath</Text>
                        </View>
                        <Separator />
                        <View style={{ flexDirection: 'row', }}>
                          <Image
                            source={require('../../assets/image/credicon.png')}
                            style={{ width: 25, height: 25, marginLeft: 5 }} />
                          <Text style={{ flex: 1, color: 'black', marginTop: 4, fontSize: 17, fontWeight: '600', paddingHorizontal: 10 }}>
                            บํญชีธนาคาร
                    </Text>
                          <Text style={{ marginRight: 5, fontSize: 17 }}>{money0} bath</Text>

                        </View>
                        <Separator />
                        
                        
                        
                       


                        <View style={{ flexDirection: 'row', }}>

                          <Text style={{ flex: 1, color: 'black', marginTop: 4, fontSize: 17, fontWeight: '600', paddingHorizontal: 10 }}>
                            รวม
                    </Text>
                          <Text style={{ marginRight: 5, fontSize: 17 }}>{money0} bath</Text>
                        </View>
                        <Separator />
                      </View>
                    </View>
                  </ScrollView>
                </View>
                {/*******************************************************************************************/}
                <View style={{ flex: 1, width: '100%', marginTop: 10 }}>
                  <ScrollView >
                    <View style={styles.top}>
                      <View style={{
                        height: 270,
                        padding: 5,
                        margin: 5,
                      }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Image
                            source={require('../../assets/image/overtime.png')}
                            style={{ width: 40, height: 40 }} />
                          <Text style={{ color: 'black', marginTop: 6, fontSize: 15, fontWeight: '700', paddingHorizontal: 10 }}>
                            วันนี้
                    </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <View style={{ width: 70, height: 20, backgroundColor: '#eee', borderRadius: 15 }}>
                            <Text style={{ textAlign: 'center', color: '#7F8C8D' }}>
                              {transactions.length + transactionsDeletebank.length + transactionsAddbank.length} รายการ</Text>
                          </View>
                          <View style={{ paddingHorizontal: 5 }}></View>
                          <View style={{ width: 70, height: 20, backgroundColor: '#F98E05', borderRadius: 15 }}>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>{totalPrice} bath</Text>
                          </View>
                        </View>
                        <View style={{
                          backgroundColor: '#D7BDE2',
                          width: '90%',
                          height: '30%',
                          marginTop: 15,
                          marginLeft: 15,
                          borderRadius: 15,
                          color: '#8E44AD',
                        }}>

                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#F257C7', paddingHorizontal: 15, marginTop: 15, fontWeight: '700', fontSize: 20 }}>
                              รายจ่าย
                    </Text>
                            <Text style={{ color: '#F257C7', paddingHorizontal: 130, marginTop: 20, fontSize: 17 }}>
                              {expense} bath
                    </Text>
                          </View>
                        </View>
                        <View style={{
                          backgroundColor: '#F5C6E8',
                          width: '90%',
                          height: '30%',
                          marginTop: 15,
                          marginLeft: 15,
                          borderRadius: 15,

                        }}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#8E44AD', paddingHorizontal: 15, marginTop: 15, fontWeight: '700', fontSize: 20 }}>
                              รายรับ
                    </Text>


                            <Text style={{ color: '#8E44AD', paddingHorizontal: 130, marginTop: 20, fontSize: 17 }}>
                              {expense1} bath
                    </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>
                {/*******************************************************************************************/}
                <View style={{ flex: 1, width: '100%', marginTop: 10 }}>
                  <ScrollView >
                    <View style={styles.top}>
                      <View style={{
                        height: 270,
                        padding: 5,
                        margin: 5,
                      }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Image
                            source={require('../../assets/image/kawaii.jpg')}
                            style={{ width: 30, height: 30, marginLeft: 5 }} />
                          <Text style={{ color: 'black', marginTop: 6, fontSize: 15, fontWeight: '700', paddingHorizontal: 10 }}>
                            เดือนนี้
                    </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <View style={{ width: 70, height: 20, backgroundColor: '#eee', borderRadius: 15, marginTop: 5 }}>
                            <Text style={{ textAlign: 'center', color: '#7F8C8D' }}>
                              {transactions.length + transactionsDeletebank.length + transactionsAddbank.length} รายการ</Text>
                          </View>
                          <View style={{ paddingHorizontal: 5 }}></View>
                          <View style={{ width: 70, height: 20, backgroundColor: '#F98E05', borderRadius: 15, marginTop: 5 }}>
                            <Text style={{ textAlign: 'center', color: '#Fff' }}>{totalPrice} bath</Text>
                          </View>
                        </View>
                        <View style={{
                          backgroundColor: '#D7BDE2',
                          width: '90%',
                          height: '30%',
                          marginTop: 15,
                          marginLeft: 15,
                          borderRadius: 15,
                          color: '#8E44AD',
                        }}>

                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#F257C7', paddingHorizontal: 15, marginTop: 15, fontWeight: '700', fontSize: 20 }}>
                              รายจ่าย
                    </Text>
                            <Text style={{ color: '#F257C7', paddingHorizontal: 130, marginTop: 20, fontSize: 17 }}>
                              {expense} bath
                    </Text>
                          </View>
                        </View>
                        <View style={{
                          backgroundColor: '#F5C6E8',
                          width: '90%',
                          height: '30%',
                          marginTop: 15,
                          marginLeft: 15,
                          borderRadius: 15,

                        }}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#F257C7', paddingHorizontal: 15, marginTop: 15, fontWeight: '700', fontSize: 20 }}>
                              รายรับ
                    </Text>
                            <Text style={{ color: '#F257C7', paddingHorizontal: 130, marginTop: 20, fontSize: 17 }}>
                              {expense1} bath
                    </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>


          </View>
        </SafeAreaView>
      </SafeAreaView>




    </View>
  );
};

export default Hom1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 10,
    height: 300,
  },
  header: {
    backgroundColor: '#E2F6FB',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#48A0DA',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 10,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 6,
    marginLeft: 50,
    marginTop: 5,
    textAlign: 'center'
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  container2: {
    flex: 1,
    padding: 3,
    margin: 10,
  },
  top: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,

  },
  box: {
    height: 270,

    padding: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 40,
    width: 40,
    resizeMode: 'stretch',

  },
  separator: {
    marginVertical: 9,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});