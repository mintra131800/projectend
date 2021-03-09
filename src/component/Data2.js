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
import { addTransactionBank,addTransactionCredit, deleteTransactionBank,addTransactionDebt,deleteTransactionDebt} from '../../Expense/store/action/transactionAction';
import CardBank from '../../Expense/Components/Parts/CardBank'
import CardIncome from '../../Expense/Components/Parts/CardIncome'
import ItemIncom from '../component/ItemIncom'
import CardDebt from '../../Expense/Components/Parts/CardDebt';

import {Container, ListItem, Body, Right} from 'native-base';

const Separator = () => (
  <View style={styles.separator} />
);
function Item({title, id, price}) {
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
              dispatch(deleteTransactionBank(id));
            }}
            style={{margin:20}}
            name='delete'
            size={30}
            color="red"
          />
        </TouchableOpacity>

        <View style={{width:100,height:40,marginTop:10}}>
          <Text style={{fontSize: 17, fontWeight: '700', margin: 10}}>
            {title}
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
              color: price > 0 ? '#009BFC' : '#ff4500',
            }}>
            {price > 0 ? `▲${price} Bath` : `▼${Math.abs(price)} Bath`}
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
function Home({ navigation}) {
  const dispatch = useDispatch();
  const [items, setItems] = useState([
    { title: '', price: '' ,titleIncom:"",priceIncom:"",name:"",titleDebt:'',priceDebt:''},
  ])
  // ***********************************************************
  const addBank = async () => {
    if (!title || !price) {
      return alert('Please fill all fields');
    }  
    const id = Math.floor(Math.random() * 100000000);
    const newTransaction = {
      id,
      title,
      price: +price,
    };
    await dispatch(addTransactionBank(newTransaction));
    setAddModalBank(!addmodalBank)
  }
  const [title, setTitle] = useState('');
  const [price, setprice] = useState('');
// ********************************************************************

const addIncome = async () => {
  if (!titleIncom || !priceIncom ) {
      return alert('Please fill all fields');
  }
  const id = Math.floor(Math.random() * 100000000);

  const newTransaction = {
      id,
      title,
      priceIncom: +priceIncom,
      priceIncom1: +priceIncom1,
  };
  await dispatch(addTransactionCredit(newTransaction));
  setModalCradit1(!modalCradit1)
  
  
};
const [titleIncom, setTitleIncom] = useState('');
const [priceIncom, setpriceIncom] = useState('');
const [priceIncom1, setpriceIncom1] = useState('');
// *************************************************************************
const addDebt = async () => {
  if (!titleDebt || !priceDebt ) {
      return alert('Please fill all fields');
  }
  const id = Math.floor(Math.random() * 100000000);

  const newTransaction = {
      id,
      title,
      priceDebt: +priceDebt,
  };
  await dispatch(addTransactionDebt(newTransaction));
  setModalDebt(!modalDebt) 
};
const [titleDebt, setTitleDebt] = useState('');
const [priceDebt, setpriceDebt] = useState('');
//////////////////////////////////////////////////////////////////////////
  const onChange = textValue => setTitle(textValue);
  const onChange2 = textValue2 => setprice(textValue2);
  const [modalCategory, setModalCategory] = useState(false);
  const [modalBank, setModalBank] = useState(false);
  const [addmodalBank, setAddModalBank] = useState(false);
  const [modalCradit, setModalCradit] = useState(false);
  const [modalCradit1, setModalCradit1] = useState(false);
  const [modalDebt, setModalDebt] = useState(false);
  const [modalDebtAdd, setModalDebtAdd] = useState(false);
  const { transactionsBank } = useSelector((state) => state.transactions);
  const prices = transactionsBank.map((transaction) => transaction.price);
  const totalPrice = prices.reduce((prev,cur) => (prev += cur), 0).toFixed(2);
  /////////////////////////////////////////////////////////////////////////////
  
  const { transactionsDeletebank } = useSelector((state) => state.transactions);
  const pricesDeletebank = transactionsDeletebank.map((transaction) => transaction.price);
  const totalPriceDeletebank = pricesDeletebank.reduce((prev,cur) => (prev += cur), 0);
  ////////////////////////////////////////////////////////////////////////////
  const { transactionsAddbank } = useSelector((state) => state.transactions);
    const pricesAddbank = transactionsAddbank.map((transaction) => transaction.price);
    const totalPriceAddbank = pricesAddbank.reduce((prev,cur) => (prev += cur), 0);
    ////////////////////////////////////////////////////////////////////////
  const { transactionsCredit } = useSelector((state) => state.transactions);
  const pricesIncom = transactionsCredit.map((transaction) => transaction.priceIncom);
  const totalPriceIncom = pricesIncom.reduce((prev,cur) => (prev += cur), 0).toFixed(2);
  return (
    
    <SafeAreaView style={styles.container} >

      <ScrollView Vertical={true} showsVerticalScrollIndicator={false} >
        <Text
          style={{ marginLeft: 5, marginTop: 10, fontSize: 15, fontWeight: '700' }}
        >ข้อมูล</Text>
        <Text
          style={{ marginLeft: 5, marginTop: 5, fontSize: 15, color: '#707B7C' }}
        >จำลองข้อมูลทางการเงินของฉัน</Text>
        <Text></Text>
        <View style={{ flex: 1, backgroundColor: '#eee', height: 450, margin: 10, }}>
          
       
          {/*******************************************************************************************/}

          {/*******************************************************************************************/}
          
          <View style={{ flex: 1, width: '100%' }}>
            <View style={[styles.top, styles.box]}>
              <TouchableOpacity onPress={() => { setModalBank(true) }}>
                <View style={{
                  height: 150, padding: 5,
                  marginTop: 15,
                }}>
                  <View style={{ flexDirection: 'row' }}>

                    <View style={{ backgroundColor: '#95A5FA', width: 40, height: 35, borderRadius: 5, marginTop: 7, marginLeft: 5 }}>

                      <Image source={require('../../assets/image/credicon.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }} />

                    </View>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>บัญชีธนาคาร</Text>
                      <Text style={{ marginLeft: 15, color: "#707B7C", marginRight: 3 }}>บัญชีธนาคารเสมือนที่สามารถฝากเงินถอนเงิน
                    ความเคลื่อนไหวของบัญชี</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 50 }}>
                    <View style={{ width: 70, height: 20, backgroundColor: '#95A5FA', borderRadius: 15 }}>
                      <Text style={{ textAlign: 'center', color: '#7F8C8D' }}>{prices.length} รายการ</Text>
                    </View>


                  </View>
                </View>
              </TouchableOpacity>
            </View>

          </View>
          <Modal
            transparent={true}
            visible={modalBank}
            animationType="slide"
          >
            <View
              style={{
                backgroundColor: '#00000aaa',
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#ffffff',
                  width: '100%',
                  height: '100%',

                }}>
                <View style={{
                  width: '100%',
                  height: "8%",
                  backgroundColor: '#97CEF2',
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

                  <Icon style={{ margin: 10, color: '#fff' }} name={'arrow-left'} size={30} onPress={() => {
                    setModalBank(!modalBank);
                  }} />
                  <View style={{ width: '80%', height: '100%' }}>
                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: "#fff" }}>บัญชีธนาคาร</Text>
                  </View>
                  
                </View>
              
                <View style={{
            width:"100%",height:"80%"}}>
                <Animated.View
          style={{
            flex:1,
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            
          }}>
          
        </Animated.View>
               
                  <View style={{backgroundColor: "#fff",width:'100%',height:'100%' }}>
                        {transactionsBank.length > 0 &&
                          <CardBank title={title}/>
                          
                        }{
                          transactionsBank.length == 0 &&
                          <View style={{flex:1}}>
                            <View style={{width:250,
                              height:250,
                              backgroundColor:"#fff",
                              margin:90,
                              marginTop:150,
                              borderRadius:10,
                              shadowOffset: {
                                width: 3,
                                height: 2,
                              },
                              shadowOpacity: 0.5,
                              shadowRadius: 3.84,
                              elevation: 3,
                              borderRadius: 5
                              }}>
                                <Image source={require('../../assets/image/credicon.png')}
                        style={{ width:70, height: 70, marginLeft: 80,marginTop:15 }} />
                        <Text style={{textAlign:"center",marginTop:5,fontSize:20,fontWeight:'700'}}>บัญชีธนาคาร</Text>
                        <Text style={{textAlign:"center",marginTop:10,color:"#818280"}}>บัญชีธนาคารช่วยให้คุณสามารถบันทึกรายการรายรับรายจ่ายในกรณีที่คุณทำธุรกรรมผ่านบัญชีได้ รวมทั้งการออมเงินอีกด้วย</Text>
                              </View>
                              

                           
                  <View style={{marginLeft:145}}>
                  <TouchableOpacity style={{
                      width: 150,
                      height: 50,
                      backgroundColor: '#97CEF2',
                      shadowOffset: {
                        width: 3,
                        height: 2,
                      },
                      shadowOpacity: 0.5,
                      shadowRadius: 3.84,
                      elevation: 3,
                      borderRadius: 5
                    }} onPress={() => { setAddModalBank(true) }}>
                      <Text style={{
                        fontSize: 17,
                        textAlign: 'center',
                        color: '#fff',
                        marginTop: 10,
                      }}>+ เพิ่มบัญชีธนาคาร</Text>

                    </TouchableOpacity>
                    </View>
                    </View>
                        }                           
                  </View>
                  </View>
                    
                  <View style={{ justifyContent: 'flex-end', alignContent: "center", alignItems: "center", width: '100%', height: '92%' }}>
                    
                    <Modal
                      transparent={true}
                      visible={addmodalBank}
                    >
                      <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                        <Icon style={{ margin: 20, color: '#D9D3DB' }} name={'times-circle'} size={40} onPress={() => {
                          setAddModalBank(!addmodalBank);
                        }} />
                        <View style={{ backgroundColor: '#ffffff', borderRadius: 10, width: 300, height: 370 }}>
                          <Text style={{ marginTop: 15, textAlign: 'center', fontSize: 20 }}>เพิ่มบัญชีธนาคาร</Text>
                          <Text style={{ marginTop: 5, textAlign: 'center', fontSize: 13 }}>สร้างบัญชีธนาคารของฉัน</Text>
                          <Text style={{ margin: 10, fontSize: 15 }}>ชื่อ</Text>
                          <View style={{ width: 250, height: 50, backgroundColor: "#eee", marginLeft: 20, borderRadius: 10 }}>
                            <TextInput placeholder="..." onChangeText={(title) => setTitle(title)}></TextInput>
                          </View>
                          <Text style={{ margin: 10, fontSize: 15 }}>คงเหลือ</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 220, height: 50, backgroundColor: "#eee", marginLeft: 20, borderRadius: 10 }}>
                              <TextInput placeholder="0" style={{ alignSelf: 'flex-end' }} keyboardType="numeric" onChangeText={(price) => setprice(price)}></TextInput>
                            </View>
                            <Text style={{ marginLeft: 5, marginTop: 15 }}>bath</Text>
                          </View>
                          <View style={{ width: 280, height: 40, backgroundColor: 'green', marginTop: 30, borderRadius: 7, marginLeft: 8 }}>
                            <TouchableOpacity onPress={() => addBank()}>
                              <View style={{ flexDirection: 'row', marginHorizontal: 100, marginTop: 5 }}>
                                <Icon name={'check'} size={20} style={{ color: '#fff', alignItems: 'center' }}></Icon>
                                <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 15, marginLeft: 5 }}>
                                  บันทึก
                            </Text></View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>

                    </Modal>
                  </View>
                 
              </View>
            </View>
          </Modal>
          {/* <View style={{ flex: 1, width: '100%' }}>

            <View style={[styles.top, styles.box]}>
              <TouchableOpacity onPress={() => { setModalCradit(true) }}>
                <View style={{
                  height: 110, padding: 5,
                  marginTop: 15
                }}>
                  <View style={{ flexDirection: 'row' }}>

                    <View style={{ width: 40, height: 35, borderRadius: 5, marginTop: 7, marginLeft: 5 }}>

                      <Image source={require('../../assets/image/credicard.jpg')}
                        style={{ width: 40, height: 40, marginLeft: 5 ,borderRadius:5}} />

                    </View>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>รายรับค้างรับ</Text>
                      <Text style={{ marginLeft: 15, color: "#707B7C" }}>รายการรายรับค้างรับเสมือนที่สามารถติดตาม
                      </Text>
                      <Text style={{ marginLeft: 15, color: "#707B7C" }}>
                      ลูกหนี้หรือรายได้ที่รอรับ</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 50 }}>
                    <View style={{ width: 70, height: 20, backgroundColor: '#FEEF7A', borderRadius: 15 }}>
                      <Text style={{ textAlign: 'center', color: '#7F8C8D' }}>{pricesIncom.length} รายการ</Text>
                    </View>


                  </View>
                </View>
              </TouchableOpacity>
            </View>

          </View>
          <Modal
            transparent={true}
            visible={modalCradit}
            animationType="slide"

          >
            <View
              style={{
                backgroundColor: '#00000aaa',
                flex: 1,

              }}>

              <View
                style={{
                  flex: 1,
                  backgroundColor: '#ffffff',

                  width: '100%',
                  height: '100%',

                }}>
                <View style={{
                  width: '100%',
                  height: "8%",
                  backgroundColor: '#97CEF2',
                  flexDirection: 'row',
                  shadowOffset: {
                    width: 3,
                    height: 2,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>

                  <Icon style={{ margin: 10, color: '#fff' }} name={'arrow-left'} size={30} onPress={() => {
                    setModalCradit(!modalCradit);
                  }} />
                  <View style={{ width: '80%', height: '100%' }}>
                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: "#fff" }}>รายรับค้างรับ</Text>
                  </View>
                </View>
                <View style={{backgroundColor: "#fff",width:'100%',height:'100%' }}>
                        {priceIncom.length > 0 &&
                          <CardIncome titleIncom={titleIncom}/>
                          
                        }{
                          priceIncom.length == 0 &&
                          <View style={{flex:1}}>
                            <View style={{width:250,
                              height:250,
                              backgroundColor:"#fff",
                              margin:90,
                              marginTop:150,
                              borderRadius:10,
                              shadowOffset: {
                                width: 3,
                                height: 2,
                              },
                              shadowOpacity: 0.5,
                              shadowRadius: 3.84,
                              elevation: 3,
                              borderRadius: 5
                              }}>
                                <Image source={require('../../assets/image/download1.jpg')}
                        style={{ width:70, height: 70, marginLeft: 80,marginTop:15 }} />
                        <Text style={{textAlign:"center",marginTop:5,fontSize:20,fontWeight:'700'}}>รายรับค้างรับ</Text>
                        <Text style={{textAlign:"center",margin:10,color:"#818280"}}>
                          หากคุณมีรายได้ที่รอรับจากผู้อื่น ที่นี่จะช่วยให้คุณติดตามรายได้ที่เหลือเหล่านั้น และอาจใช้ได้ในกรณีที่ถูกยืมเงินได้เช่นกัน
                        </Text>
                              </View>
                              

                           
                  <View style={{marginLeft:145}}>
                  <TouchableOpacity style={{
                      width: 150,
                      height: 50,
                      backgroundColor: '#97CEF2',
                      shadowOffset: {
                        width: 3,
                        height: 2,
                      },
                      shadowOpacity: 0.5,
                      shadowRadius: 3.84,
                      elevation: 3,
                      borderRadius: 5
                    }} onPress={() => { setModalCradit1(true) }}>
                      <Text style={{
                        fontSize: 17,
                        textAlign: 'center',
                        color: '#fff',
                        marginTop: 10,
                      }}>+ รายรับค้างรับ</Text>

                    </TouchableOpacity>
                    </View>
                    </View>
                        }                           
                  </View>

                <View style={{ backgroundColor: '#ffffff', width: '100%' }}>
                <Modal
                      transparent={true}
                      visible={modalCradit1}
                    >
                      <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                        <Icon style={{ margin: 20, color: '#D9D3DB' }} name={'times-circle'} size={40} onPress={() => {
                          setModalCradit1(!modalCradit1);
                        }} />
                        <View style={{ backgroundColor: '#ffffff', borderRadius: 10, width: 300, height: 450 }}>
                          <Text style={{ marginTop: 15, textAlign: 'center', fontSize: 20 }}>เพิ่มรายรับค้างรับ</Text>
                          <Text style={{ marginTop: 5, textAlign: 'center', fontSize: 13 }}>สร้างรายรับค้างรับของฉัน</Text>
                          <Text style={{ margin: 10, fontSize: 15 }}>ชื่อ</Text>
                          <View style={{ width: 250, height: 50, backgroundColor: "#eee", marginLeft: 20, borderRadius: 10 }}>
                            <TextInput placeholder="..." ></TextInput>
                          </View>
                          <Text style={{ margin: 10, fontSize: 15 }}>หมวดหมู่</Text>
                          <View style={{ width: 250, height: 50, backgroundColor: "#eee", marginLeft: 20, borderRadius: 10 }}>
                            <TextInput placeholder="เพิ่มหมวดหมู่" style={{textAlign:'center'}} onChangeText={(titleIncom) => setTitleIncom(titleIncom)}></TextInput>
                          </View>
                          <View style={{flexDirection:"row"}}>
                          <View style={{ flexDirection: 'column' }}>
                          <Text style={{ margin: 10, fontSize: 15 }}>      จำนวนเงิน</Text>
                         
                            <View style={{ width:100, height: 50, backgroundColor: "#eee", marginLeft: 20, borderRadius: 10 }}>
                              <TextInput placeholder="0" style={{ alignSelf: 'flex-end' }} keyboardType="numeric" onChangeText={(priceIncom) => setpriceIncom(priceIncom)}></TextInput>
                            </View>
                          </View>
                          

                          </View>
                          <View style={{ width: 280, height: 40, backgroundColor: 'green', marginTop: 30, borderRadius: 7, marginLeft: 8 }}>
                            <TouchableOpacity onPress={() => addIncome()}>
                              <View style={{ flexDirection: 'row', marginHorizontal: 100, marginTop: 5 }}>
                                <Icon name={'check'} size={20} style={{ color: '#fff', alignItems: 'center' }}></Icon>
                                <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 15, marginLeft: 5 }}>
                                  บันทึก
                            </Text></View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>

                    </Modal>
                </View>
              </View>
            </View>
          </Modal>
          <View style={{ flex: 1, width: '100%' }}>

            <View style={[styles.top, styles.box]}>
              <TouchableOpacity onPress={() => { setModalDebt(true) }}>
                <View style={{ height: 130, padding: 5, marginTop: 15 }}>
                  <View style={{ flexDirection: 'row' }}>

                    <View style={{ backgroundColor: '#F96478', width: 40, height: 35, borderRadius: 5, marginTop: 7, marginLeft: 5 }}>

                      <Image source={require('../../assets/image/neesin.jpg')}
                        style={{ width: 25, height: 25, marginLeft: 7, marginTop: 5 }} />

                    </View>
                    <View style={{ flexDirection: 'column', width: 300 }}>
                      <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>หนี้สิน</Text>
                      <Text style={{ marginLeft: 15, color: "#707B7C" }}>รายการหนี้สินเสมือนที่สามารถชำระหนี้สิน ผ่อนจ่าย
                   ยอดคงเหลือ และประวัติการชำระหนี้สิน</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 50 }}>
                    <View style={{ width: 70, height: 20, backgroundColor: '#FCA6B2', borderRadius: 15 }}>
                      <Text style={{ textAlign: 'center', color: '#7F8C8D' }}>0 รายการ</Text>
                    </View>



                  </View>
                </View>
              </TouchableOpacity>
            </View>

          </View>
          <Modal
            transparent={true}
            visible={modalDebt}
            animationType="slide"

          >
            <View
              style={{
                backgroundColor: '#00000aaa',
                flex: 1,

              }}>

              <View
                style={{
                  flex: 1,
                  backgroundColor: '#ffffff',
                  width: '100%',
                  height: '100%',

                }}>
                <View style={{
                  width: '100%',
                  height: "8%",
                  backgroundColor: '#97CEF2',
                  flexDirection: 'row',
                  shadowOffset: {
                    width: 3,
                    height: 2,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>

                  <Icon style={{ margin: 10, color: '#fff' }} name={'arrow-left'} size={30} onPress={() => {
                    setModalDebt(!modalDebt);
                  }} />
                  <View style={{ width: '80%', height: '100%' }}>
                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: "#fff" }}>หนี้สิน</Text>
                    
                  </View>
                  
                </View>
                {priceDebt.length > 0 &&
                <CardDebt titleDebt={titleDebt}/>
                          
              }{
                priceDebt.length == 0 &&
                <View style={{ backgroundColor: '#ffffff', width: '100%' }}>
                <View style={{flex:1}}>
                            <View style={{width:250,
                              height:250,
                              backgroundColor:"#fff",
                              margin:90,
                              marginTop:150,
                              borderRadius:10,
                              shadowOffset: {
                                width: 3,
                                height: 2,
                              },
                              shadowOpacity: 0.5,
                              shadowRadius: 3.84,
                              elevation: 3,
                              borderRadius: 5
                              }}>
                                <Image source={require('../../assets/image/neesin.jpg')}
                        style={{ width:70, height: 70, marginLeft: 80,marginTop:15 }} />
                        <Text style={{textAlign:"center",marginTop:5,fontSize:20,fontWeight:'700'}}>หนี้สิน</Text>
                        <Text style={{textAlign:"center",margin:10,color:"#818280"}}>
                          หากคุณมีหนี้สิ้นหรือรายจ่ายที่จะต้องจ่ายในอนาคต ที่นี่จะช่วยให้คุณสามารถติดตามจำนวนคงเหลือ
                        </Text>
                              </View>
                              

                           
                  <View style={{alignSelf:"center", width: 130,backgroundColor: 'red',
                      height: 50,}}>
                  <TouchableOpacity onPress={() => { setModalDebtAdd(true) }} 
                  style={{
                     
                      width:"100%",
                      height:"100%",
                      
                      shadowOffset: {
                        width: 3,
                        height: 2,
                      },
                      shadowOpacity: 0.5,
                      shadowRadius: 3.84,
                      elevation: 3,
                      borderRadius: 5
                    }}>
                      <Text style={{
                        fontSize: 17,
                        textAlign: 'center',
                        color: '#fff',
                        marginTop: 10,
                      }}>+ เพิ่มหนี้สิน</Text>

                    </TouchableOpacity>
                    <Modal
                      transparent={true}
                      visible={modalDebtAdd}
                    >
                      <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                        <Icon style={{ margin: 20, color: '#D9D3DB' }} name={'times-circle'} size={40} onPress={() => {
                          setModalDebtAdd(!modalDebtAdd);
                        }} />
                        <View style={{ backgroundColor: '#ffffff', borderRadius: 10, width: 300, height: 450 }}>
                          </View>
                          </View>
                          </Modal>
                    </View>
                    </View>
                </View>
}
              </View>
            </View>
          </Modal>*/}
         

        </View> 
      </ScrollView>

    </SafeAreaView>


  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,


    backgroundColor: '#eee',
  },
  top: {
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 3,
    margin: 10,
  },
  box: {
    height: 120,
    padding: 5,

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
export default Home;