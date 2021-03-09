import React, { useState } from 'react';
import { Animated, Button, ImageBackground, Dimensions, ScrollView, View, StyleSheet, Text, TextInput, Image, TouchableOpacity, SafeAreaView, FlatList, Alert, Modal, TouchableWithoutFeedback } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import uuid from 'uuid-random'
import {Container, ListItem, Body, Right} from 'native-base';
import {
    addTransactionAddbank,
    addTransactionBank,
    addTransactionDebt,
    addTransactionDeletebank
} from '../../store/action/transactionAction';

import { deleteTransaction, deleteTransactionAddbank,deleteTransactionDeletebank } from '../../store/action/transactionAction';
import Transaction from '../../store/reducer/Transaction';




const Balance = ({ navigation, title, id }) => {
    const [items, setItems] = useState([
        { price: '' },
    ])


    const addMoney = async () => {
        if (!price) {
            return alert('Please fill all fields');
        }
        const id = Math.floor(Math.random() * 100000000);
        const newTransaction = {
            id,
            title,
            price: +price,
        };
        await dispatch(addTransactionAddbank(newTransaction));

    }
    const deleteMoney = async () => {
        if (!price) {
            return alert('Please fill all fields');
        }
        const id = Math.floor(Math.random() * 100000000);
        const newTransaction = {
            id,
            title,
            price: +price,
        };
        await dispatch(addTransactionDeletebank(newTransaction));

    }
    const [price, setprice] = useState('');
    const [ShoweAdd, setShoweAdd] = useState(false);
    const dispatch = useDispatch();

    const [modalBank, setModalBank] = useState(false);
    const [modalBankdelete, setModalBankdelete] = useState(false);
    const [modalMoney, setModalMoney] = useState(false);

    const { transactionsAddbank } = useSelector((state) => state.transactions);
    
    const pricesAddbank = transactionsAddbank.map((transaction) => transaction.price);
    const totalPriceAddbank = pricesAddbank.reduce((prev, cur) => (prev += cur), 0);

    const { transactionsDeletebank } = useSelector((state) => state.transactions);
    const pricesDeletebank = transactionsDeletebank.map((transaction) => transaction.price);
    const totalPriceDeletebank = pricesDeletebank.reduce((prev, cur) => (prev += cur), 0);

    const { transactionsHome } = useSelector((state) => state.transactions);
    const pricesHome = transactionsHome.map((transaction) => transaction.price);
    const totalPriceHome = pricesHome.reduce((prev, cur) => (prev += cur), 0);

    const { transactionsBank } = useSelector((state) => state.transactions);
    const pricesBank = transactionsBank.map((transaction) => transaction.price);
    const totalPriceBank = pricesBank.reduce((prev, cur) => (prev += cur), 0);

   
    const total = ((totalPriceBank + totalPriceAddbank) - totalPriceDeletebank);
    const expense =
        pricesBank
            .filter((pricesBank) => pricesBank < 0)
            .reduce((prev, cur) => (prev += cur), 0)
            .toFixed(2) * -1;
    const expense1 =
        pricesBank
            .filter((pricesBank) => pricesBank > 0)
            .reduce((prev, cur) => (prev += cur), 0)
            .toFixed(2) * +1;
    return (
        
        <View style={styles.Box}>

            <View
                style={{ width: '100%', alignItems: 'flex-start', height: 70, flexDirection: 'row' }}>
                <Image source={require('../../../assets/image/credicon.png')}
                    style={{ width: 70, height: 70, marginTop: 10 }} />
                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'black',
                            fontFamily: 'Lato-Regular',
                            fontWeight: '700',
                        }}>
                        ชื่อบัญชี {title}

                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Lato-Medium',
                            fontSize: 20,
                            color: 'black',
                            fontWeight: '700',
                            marginTop: 10
                        }}>
                        <Text>ยอดเงินคงเหลือ</Text> {total} Bath
        </Text>
                </View>
                <TouchableOpacity onPress={() => { setModalBank(true) }}>
                    <Icon name='ellipsis-v' size={30} color={'black'} />
                </TouchableOpacity>
            </View>



            <Modal
                transparent={true}
                visible={modalBank}
                animationType="slide"

            >
                <TouchableWithoutFeedback
                    style={{ flex: 1, width: '100%' }}
                    onPress={() => {
                        setModalBank(!modalBank);
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#000000aa',
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}>

                        <View
                            style={{
                                backgroundColor: '#eee',
                                width: '100%',
                                height: '50%',
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20,
                                paddingHorizontal: 20,

                            }}>
                            <View style={{
                                width: '90%',
                                height: 60,
                                marginTop: 50,
                                backgroundColor: "#E6F576",
                                alignSelf: "center",
                                borderRadius: 10,
                                flexDirection: 'row'
                            }}>
                                <TouchableOpacity onPress={() => { setModalMoney(true) }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ margin: 12, color: '#F38C18', fontSize: 17 }}>ฝากเงินเข้า</Text>
                                        <Image source={require('../../../assets/image/005-wallet.png')}
                                            style={{ width: 40, height: 40, marginHorizontal: 180,marginTop:5 }}
                                        />
                                    </View>

                                </TouchableOpacity>
                            </View>
                            <Modal
                                transparent={true}
                                visible={modalMoney}
                            >
                                <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                                    <Icon style={{ margin: 20, color: '#D9D3DB' }} name={'times-circle'} size={40} onPress={() => {
                                        setModalMoney(!modalMoney);
                                    }} />
                                    <View style={{ backgroundColor: '#ffffff', borderRadius: 10, width: 300, height: 500 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 10, textAlign: "center" }}>ฝากเงินเข้า</Text>
                                        <Text style={{ fontSize: 15, marginTop: 5, textAlign: "center" }}>ฝากเงินไปยังงบัญชีธนาคาร</Text>
                                        <Text style={{ margin: 10 }}>ต้นทาง</Text>
                                        <View style={{ width: 250, height: 70, backgroundColor: 'pink', marginLeft: 25, borderRadius: 10, flexDirection: "row" }}>
                                            <Image
                                                source={require('../../../assets/image/money.png')}
                                                style={{ width: 45, height: 45, margin: 7, borderRadius: 5 }} />
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={{ color: '#fff', marginTop: 10, marginLeft: 10, fontSize: 17 }}>กระเป๋าเงิน</Text>
                                                <Text style={{ color: '#fff', marginLeft: 10, fontSize: 17 }}>{totalPriceHome - totalPriceAddbank + totalPriceDeletebank}</Text>
                                            </View>

                                        </View>

                                        <Text style={{ margin: 10 }}>จำนวน</Text>
                                        <TextInput onChangeText={(price) => setprice(price)} keyboardType='numeric' placeholder='0.0' style={{ width: 250, textAlign: "right", height: 70, backgroundColor: '#eee', marginLeft: 25, borderRadius: 10, fontSize: 17 }}></TextInput>
                                        <Text style={{ margin: 10 }}>ปลายทาง</Text>
                                        <View style={{ width: 250, height: 70, backgroundColor: '#00aaaa', marginLeft: 25, borderRadius: 10, flexDirection: "row" }}>
                                            <Image source={require('../../../assets/image/credicon.png')}
                                                style={{ width: 45, height: 45, margin: 7, borderRadius: 5 }} />
                                            <View style={{ flexDirection: "column" }}>
                                                <Text style={{ color: '#fff', marginTop: 10, marginLeft: 10, fontSize: 17 }}>ฝากเงินเข้า</Text>
                                                <Text style={{ color: '#fff', fontSize: 17, marginLeft: 10 }}>{totalPriceBank + totalPriceAddbank - totalPriceDeletebank}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => {
                                            setModalMoney(!modalMoney);
                                            addMoney(price)
                                        }}
                                            style={{ width: 150, height: 45, backgroundColor: "yellow", marginLeft: 80, marginTop: 30, borderRadius: 10 }}>
                                            <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 17, fontWeight: '700' }}>บันทึก</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>




                            <View style={{
                                width: '90%',
                                height: 60,
                                marginTop: 30,
                                backgroundColor: "pink",
                                alignSelf: "center",
                                borderRadius: 10,
                                flexDirection: 'row'
                            }}>
                                <TouchableOpacity onPress={() => { setModalBankdelete(true) }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ margin: 12, color: 'red', fontSize: 17 }}>ถอนเงินออก</Text>
                                        <Image source={require('../../../assets/image/001-money.png')}
                                            style={{ width: 40, height: 40, marginHorizontal: 170,marginTop:7 }}
                                        />
                                    </View>

                                </TouchableOpacity>
                            </View>

                            <Modal
                                transparent={true}
                                visible={modalBankdelete}
                            >
                                <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                                    <Icon style={{ margin: 20, color: '#D9D3DB' }} name={'times-circle'} size={40} onPress={() => {
                                        setModalBankdelete(!modalBankdelete);
                                    }} />
                                    <View style={{ backgroundColor: '#ffffff', borderRadius: 10, width: 300, height: 500 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 10, textAlign: "center" }}>ถอนเงินออก</Text>
                                        <Text style={{ fontSize: 15, marginTop: 5, textAlign: "center" }}>ถอนเงินออกจากบัญชีธนาคาร</Text>
                                        <Text style={{ margin: 10 }}>ต้นทาง</Text>
                                        <View style={{ width: 250, height: 70, backgroundColor: '#00aaaa', marginLeft: 25, borderRadius: 10, flexDirection: "row" }}>
                                            <Image source={require('../../../assets/image/credicon.png')}
                                                style={{ width: 45, height: 45, margin: 7, borderRadius: 5 }} />
                                            <View style={{ flexDirection: "column" }}>
                                                <Text style={{ color: '#fff', marginTop: 10, marginLeft: 10, fontSize: 17 }}>ฝากเงินเข้า</Text>
                                                <Text style={{ color: '#fff', fontSize: 17, marginLeft: 10 }}>{totalPriceBank + totalPriceAddbank - totalPriceDeletebank}</Text>
                                            </View>
                                        </View>


                                        <Text style={{ margin: 10 }}>จำนวน</Text>
                                        <TextInput onChangeText={(price) => setprice(price)} keyboardType='numeric' placeholder='0.0' style={{ width: 250, textAlign: "right", height: 70, backgroundColor: '#eee', marginLeft: 25, borderRadius: 10, fontSize: 17 }}></TextInput>
                                        <Text style={{ margin: 10 }}>ปลายทาง</Text>
                                        <View style={{ width: 250, height: 70, backgroundColor: 'pink', marginLeft: 25, borderRadius: 10, flexDirection: "row" }}>
                                            <Image
                                                source={require('../../../assets/image/money.png')}
                                                style={{ width: 45, height: 45, margin: 7, borderRadius: 5 }} />
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={{ color: '#fff', marginTop: 10, marginLeft: 10, fontSize: 17 }}>กระเป๋าเงิน</Text>
                                                <Text style={{ color: '#fff', marginLeft: 10, fontSize: 17 }}>{totalPriceHome - totalPriceAddbank + totalPriceDeletebank}</Text>
                                            </View>

                                        </View>
                                        <TouchableOpacity onPress={() => {
                                            setModalBankdelete(!modalBankdelete);
                                            deleteMoney(price)
                                        }}
                                            style={{ width: 150, height: 45, backgroundColor: "yellow", marginLeft: 80, marginTop: 30, borderRadius: 10 }}>
                                            <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 17, fontWeight: '700' }}>บันทึก</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>



                            <View style={{
                                width: '90%',
                                height: 60,
                                marginTop: 30,
                                backgroundColor: "#F2C1FC",
                                alignSelf: "center",
                                borderRadius: 10,
                                flexDirection: 'row'
                            }}>
                                <TouchableOpacity onPress={() => { setShoweAdd(true) }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ margin: 12, color: '#8F10A8', fontSize: 17 }}>ความเคลื่อนไหว</Text>
                                        <Image source={require('../../../assets/image/checklist.png')}
                                            style={{ width: 40, height: 40, marginHorizontal: 145,marginTop:5 }}
                                        />
                                    </View>

                                </TouchableOpacity>

                                <Modal
                                    transparent={true}
                                    visible={ShoweAdd}
                                >
                                    <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                                        
                                        <View style={{ backgroundColor: '#eee', borderRadius: 10, width: '90%', height: '95%',marginTop:10 }}>
                                            <ScrollView style={{ width: '100%', height: "100%" }}>
                                                <View>
                                                    <Text style={{ fontSize: 17, fontWeight: '700', textAlign: "center", marginTop: 10 }}>
                                                        ความเคลื่อนไหว
                                    </Text>
                                                    <View style={{ marginTop: 7, width: 100, height: 30, backgroundColor: "#59CC16", borderRadius: 5, alignSelf: "center" }}>
                                                        <Text style={{ textAlign: 'center', color: "#fff",fontSize:15 }}>{title}</Text>

                                                    </View>
                                                    <View style={{
                                                        width: '80%',
                                                        height: 40,
                                                        backgroundColor: '#fff',
                                                        alignSelf: "center",
                                                        marginTop: 10,
                                                        borderRadius: 10,
                                                    }}>
                                                        <Text style={{ margin: 5, fontSize: 15, fontWeight: "700" }}>{transactionsDeletebank.length + transactionsAddbank.length} รายการ</Text>
                                                    </View>
                                                </View>

                                            </ScrollView>
                                            
                                            <View style={{width:'100%',height:'78%'}}>
                                            {transactionsAddbank.length > 0 &&
                                                <FlatList
                                                    keyExtractor={(item, index) => item.id.toString()}
                                                    data={transactionsAddbank}
                                                    renderItem={({ item }) => (
                                                        <ScreenAddbank title={item.title} price={item.price} id={item.id} />
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
                                          
                                            {
                                                transactionsAddbank.length+transactionsDeletebank.length == 0 &&
                                                <View style={{ width: '100%', height: "85%" }}>
                                                    <View style={{ alignSelf: "center",marginTop:"50%" }}>
                                                        <Text style={{ fontSize: 15, fontWeight: '700' }}>
                                                            ไม่มีข้อมูล
                                                </Text>
                                                    </View>

                                                </View>

                                            }
                                            <View style={{ alignSelf: 'center', width: "100%" }}>
                                                <TouchableOpacity onPress={() => {
                                            setShoweAdd(!ShoweAdd);
                                        }}  style={{
                                                    width: "80%",
                                                    alignSelf: 'center',
                                                    height: 40,
                                                    backgroundColor: "#59CC16",
                                                    margin: 10,
                                                    shadowColor: "#000",
                                                    shadowOffset: {
                                                        width: 3,
                                                        height: 2,
                                                    },
                                                    shadowOpacity: 0.5,
                                                    shadowRadius: 3.84,
                                                    elevation: 3,
                                                    borderRadius:10
                                                }}>
                                                    <Text style={{color:'#fff',fontSize:20,textAlign:'center',marginTop:5}}>✔ ตกลง</Text>
                                                </TouchableOpacity>
                                                </View>
                                            </View>

                                        </View>
                                    </View>
                                </Modal>
                            </View>


                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>


            <View
                style={{
                    alignItems: 'flex-end',
                    width: '10%',
                }}>

                <View style={{ flex: 1 }}>
                    <View style={{ width: 50, height: 100, marginHorizontal: 100 }}>
                        <View style={{ justifyContent: "center" }}>

                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: 350, height: 100 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ width: 100, height: 50 }}>
                                <Text
                                    style={{
                                        marginTop: 17,
                                        color: 'black',
                                        fontSize: 15,
                                        fontWeight: '700',

                                    }}>
                                    รายจ่ายรวม
                            </Text>
                            </View>
                            <View style={{ width: 150, height: 50 }}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontSize: 18,
                                        fontWeight: '700',
                                        color: 'red',

                                    }}>
                                    ▼{expense + totalPriceDeletebank} Bath
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', width: 300, height: 50 }}>
                            <View style={{ width: 100, height: 50 }}>
                                <Text
                                    style={{
                                        marginTop: 17,
                                        color: 'black',
                                        fontSize: 15,
                                        fontWeight: '700',
                                        marginLeft: 25
                                    }}>
                                    รายรับรวม
                                </Text>
                            </View>
                            <View style={{ width: 150, height: 50 }}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontSize: 18,
                                        fontWeight: '700',
                                        color: '#009BFC',
                                        marginLeft: 22
                                    }}>
                                    ▲{expense1 + totalPriceAddbank} Bath
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Box: {

        width: '100%',
        height: 250,
        borderRadius: 15,
        flexDirection: 'row',
        padding: 22,
        backgroundColor: '#F9F9F9',
        shadowOffset: {
            width: 3,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 3,
        borderRadius: 5
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#eee",
        padding: 10,
    },

    box: {
        height: 170,
        padding: 5,
        marginTop: 15,
    },
    separator: {
        marginVertical: 9,
        borderBottomColor: 'black',
    },
    containerbutton: {
        alignItems: "center",
    },
    text: {
        marginTop: 10,
        width: 80,
        height: 30,
        borderRadius: 15,
        color: '#FFF',
        textAlign: "center",
        backgroundColor: '#FF9900',
    }
});



export default Balance;


function ScreenAddbank({ title, id, price }) {
    const dispatch = useDispatch();
    let date = new Date();

    return (
        <View
            style={{
                paddingHorizontal: 30,
                paddingVertical: 7,
                

            }}>
            <View style={{ backgroundColor: '#fff', width: '100%', height: 100, borderRadius: 10, flexDirection: 'row',
             shadowColor: "#000",
             shadowOffset: {
                 width: 2,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             elevation: 3,
     
         }}>
                <Image source={require('../../../assets/image/003-bank.png')}
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
                        <View style={{ width: 70, height: 30,backgroundColor:"red",borderRadius:5}}>
                           <TouchableOpacity onPress={() => {
                                        dispatch(deleteTransactionAddbank(id));
                                    }} style={{width:70,height:30,backgroundColor:"Red"}}>
                                        <Text style={{textAlign:"center",margin:5,color:"#fff"}}>ลบข้อมูล</Text>
                                
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
            <View style={{ backgroundColor: '#fff', width: '100%', height: 100, borderRadius: 10, flexDirection: 'row',
            shadowColor: "#000",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
         }}>
                <Image source={require('../../../assets/image/006-salary.png')}
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
                        <View style={{ width: 70, height: 30,backgroundColor:"red",borderRadius:5}}>
                           <TouchableOpacity onPress={() => {
                                        dispatch(deleteTransactionDeletebank(id));
                                    }} style={{width:70,height:30,backgroundColor:"Red"}}>
                                        <Text style={{textAlign:"center",margin:5,color:"#fff"}}>ลบข้อมูล</Text>
                                
                            </TouchableOpacity>
                            </View>
                    </View>
                </Right>
            </View>
        </View>
    );
}