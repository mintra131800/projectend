import React, { useState } from 'react';
import { Animated, Button, ImageBackground, Dimensions, ScrollView, View, StyleSheet, Text, TextInput, Image, TouchableOpacity, SafeAreaView, FlatList, Alert, Modal, TouchableWithoutFeedback } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import uuid from 'uuid-random'
import { addTransactionCredit, addTransactionCredit1 } from '../../store/action/transactionAction';

import { deleteTransaction, deleteTransactionBank } from '../../store/action/transactionAction';
const Separator = () => (
    <View style={styles.separator} />
);
const deviceWidth = Dimensions.get('window').width - 30;
const Balance = ({ navigation, titleIncom }) => {
    const [items, setItems] = useState([
        { title: '', priceIncome1: '', titleIncom: "", priceIncom: "", nameIncom: "" },
    ])


    const addIncome = async () => {
        if (!priceIncom || !price ) {
            return alert('Please fill all fields');
        }
        const id = Math.floor(Math.random() * 100000000);
        const newTransaction = {
            id,
            titleIncom,
            priceIncome,
            price: +price,
        };
        await dispatch(addTransactionCredit(newTransaction));

    }
    const [priceIncom, setpriceIncom] = useState('');
    const [price, setprice] = useState('');
    const [ShoweAdd, setShoweAdd] = useState(false);
    const [ShoweAddmoney, setShoweAddmoney] = useState(false);
    const [ShoweAddbank, setShoweAddbank] = useState(false);
    const [ShoweBank, setShoweBank] = useState(false);
    const dispatch = useDispatch();

    const { transactionsCredit } = useSelector((state) => state.transactions);
    const prices = transactionsCredit.map((transaction) => transaction.priceIncom);
    const totalPrice = prices.reduce((prev, cur) => (prev += cur), 0).toFixed(2);

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
        <View>
            <View style={styles.Box}>

                <View
                    style={{ width: '100%', alignItems: 'flex-start', height: '100%' }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../../assets/image/001-money.png')}
                            style={{ width: 70, height: 70, marginTop: 10, backgroundColor: "#BBFEAC", borderRadius: 15 }} />
                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',
                                    fontFamily: 'Lato-Regular',
                                    fontWeight: '700',
                                }}>
                                {titleIncom}
                            </Text>
                            <View style={{ height: 20, backgroundColor: "#F6F3A6", marginLeft: 10, width: 100, borderRadius: 15 }}>
                                <Text style={{ color: '#FB8910' }}>กำลังดำเนินการ</Text>
                            </View>
                        </View>
                    </View>

                    <Text
                        style={{
                            fontFamily: 'Lato-Medium',
                            fontSize: 20,
                            color: 'black',
                            fontWeight: '700',
                            marginTop: 10
                        }}>
                        / {totalPrice} Bath

        </Text>
                    <View
                        style={{ marginTop: -100 }}>
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
                                        ▼{expense} Bath
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
                                        ▲{expense1} Bath
                                </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            <TouchableOpacity
                onPress={() => {
                    setShoweAdd(true);
                }}
                style={{
                    width: 150,
                    height: 50,
                    backgroundColor: 'red',
                    alignSelf: "center",
                    marginTop: 250,
                    borderRadius: 7
                }}>
                <Text style={{ textAlign: "center", margin: 10 }}>แก้ไขรายการเพิ่มเติม</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={ShoweAdd}
                animationType="slide"

            >
                <TouchableWithoutFeedback
                    style={{ flex: 1, width: '100%' }}
                    onPress={() => {
                        setShoweAdd(!ShoweAdd);
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
                            <TouchableOpacity onPress={() => {
                                setShoweAddmoney(true);
                            }} style={{
                                width: '90%',
                                height: 60,
                                marginTop: 50,
                                backgroundColor: "pink",
                                alignSelf: "center",
                                borderRadius: 10,
                                flexDirection: 'row'
                            }}>
                                <Text style={{ fontSize: 17, margin: 10 }}>รับเงินสด</Text>
                                <Image source={require('../../../assets/image/001-money.png')}
                                    style={{ width: 35, height: 35, marginTop: 5, marginHorizontal: 190 }} />

                            </TouchableOpacity>
                            <Modal
                                transparent={true}
                                visible={ShoweAddmoney}
                            >
                                <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                                    
                                    <View style={{ backgroundColor: '#ffffff', borderRadius: 10, width:'80%', height: '90%',marginTop:15 }}>
                                        <Text style={{alignSelf:'center',fontSize:17,fontWeight:'700'}}>รับเงินสด</Text>
                                        <Text style={{alignSelf:'center',fontSize:15}}>สร้างรายการรายรับ</Text>
                                        <Text style={{marginLeft:10,marginTop:5,fontSize:15}}>วันที่</Text>
                                        <View style={{width:270,height:60,backgroundColor:"red",alignSelf:"center",margin:5,borderRadius:10}}>
                                            <TouchableOpacity>

                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{marginLeft:10,marginTop:5,fontSize:15}}>เหลืออยู่</Text>
                                        <View style={{width:270,height:60,backgroundColor:"red",alignSelf:"center",margin:5,borderRadius:10}}>
                                            <TouchableOpacity>

                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{marginLeft:10,marginTop:5,fontSize:15}}>กระเป๋าเงิน</Text>
                                        <View style={{width:270,height:60,backgroundColor:"red",alignSelf:"center",margin:5,borderRadius:10}}>
                                            <TouchableOpacity>

                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{marginLeft:10,marginTop:5,fontSize:15}}>จำนวน</Text>
                                        <View style={{width:270,height:50,backgroundColor:"#eee",alignSelf:"center",margin:5,borderRadius:10}}>
                                            <TouchableOpacity>

                                            </TouchableOpacity>
                                        </View>
                                       
                                        <View style={{width:270,marginTop:20,height:50,backgroundColor:"red",alignSelf:"center",margin:5,borderRadius:10}}>
                                            <TouchableOpacity onPress={() => {
                                        setShoweAddmoney(!ShoweAddmoney);
                                    }}>
                                            <Text style={{alignSelf:"center",marginTop:10,fontSize:17,color:'#fff'}}>✔ บันทึก</Text>
                                            </TouchableOpacity>
                                        </View>

                                        </View>
                                        </View>
                                        </Modal>
                            <TouchableOpacity onPress={() => {
                                        setShoweAddbank(!ShoweAddbank);
                                    }} style={{
                                width: '90%',
                                height: 60,
                                marginTop: 20,
                                backgroundColor: "pink",
                                alignSelf: "center",
                                borderRadius: 10,
                                flexDirection: 'row'
                            }}>
                                <Text style={{ fontSize: 17, margin: 10 }}>รับเงินแล้วฝากเข้าบัญชี</Text>
                                <Image source={require('../../../assets/image/002-credit-card.png')}
                                    style={{ width: 35, height: 35, marginTop: 5, marginHorizontal: 90 }} />
                            </TouchableOpacity>
                            <Modal
                                transparent={true}
                                visible={ShoweAddbank}
                            >
                                <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                                    
                                    <View style={{ backgroundColor: '#ffffff', borderRadius: 10, width:'80%', height: '90%',marginTop:15 }}>
                                        <Text style={{alignSelf:'center',fontSize:17,fontWeight:'700'}}>รับเงินแล้วฝากเข้าบัญชี</Text>
                                        <Text style={{alignSelf:'center',fontSize:15,marginLeft:20,marginRight:10,textAlign:'center'}}>รับเงินและฝากเข้าบัญชีธนาคาร โดยสร้างรายการรายรับโดยอัตโนมัติ</Text>
                                        <Text style={{marginLeft:10,marginTop:5,fontSize:15}}>วันที่</Text>
                                        <View style={{width:270,height:60,backgroundColor:"red",alignSelf:"center",margin:5,borderRadius:10}}>
                                            <TouchableOpacity>

                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{marginLeft:10,marginTop:5,fontSize:15}}>เหลืออยู่</Text>
                                        <View style={{width:270,height:60,backgroundColor:"red",alignSelf:"center",margin:5,borderRadius:10}}>
                                            <TouchableOpacity>

                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{marginLeft:10,marginTop:5,fontSize:15}}>บัญชีธนาคาร</Text>
                                        <View style={{width:270,height:60,backgroundColor:"red",alignSelf:"center",margin:5,borderRadius:10}}>
                                            <TouchableOpacity>

                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{marginLeft:10,marginTop:5,fontSize:15}}>จำนวน</Text>
                                        <View style={{width:270,height:50,backgroundColor:"#eee",alignSelf:"center",margin:5,borderRadius:10}}>
                                            <TouchableOpacity>

                                            </TouchableOpacity>
                                        </View>
                                       
                                        <View style={{width:270,marginTop:20,height:50,backgroundColor:"red",alignSelf:"center",margin:5,borderRadius:10}}>
                                            <TouchableOpacity onPress={() => {
                                        setShoweAddbank(!ShoweAddbank);
                                    }}>
                                            <Text style={{alignSelf:"center",marginTop:10,fontSize:17,color:'#fff'}}>✔ บันทึก</Text>
                                            </TouchableOpacity>
                                        </View>

                                        </View>
                                        </View>
                                        </Modal>

                            <TouchableOpacity onPress={() => {
                                        setShoweBank(!ShoweBank);
                                    }} style={{
                                width: '90%',
                                height: 60,
                                marginTop: 20,
                                backgroundColor: "pink",
                                alignSelf: "center",
                                borderRadius: 10,
                                flexDirection: 'row'
                            }}>
                                <Text style={{ fontSize: 17, margin: 10 }}>ความเคลื่อนไหว</Text>
                                <Image source={require('../../../assets/image/004-dictionary.png')}
                                    style={{ width: 35, height: 35, marginTop: 7, marginHorizontal: 145 }} />

                            </TouchableOpacity>
                            <Modal
                                transparent={true}
                                visible={ShoweBank}
                            >
                                <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                                    
                                    <View style={{ backgroundColor: '#ffffff', borderRadius: 10, width:'80%', height: '90%',marginTop:15 }}>
                                    <View style={{width:'100%',height:'85%'}}></View>
                                       
                                        <View style={{width:270,marginTop:20,height:50,backgroundColor:"red",alignSelf:"center",margin:5,borderRadius:10}}>
                                            <TouchableOpacity onPress={() => {
                                        setShoweBank(!ShoweBank);
                                    }}>
                                            <Text style={{alignSelf:"center",marginTop:10,fontSize:17,color:'#fff'}}>✔ บันทึก</Text>
                                            </TouchableOpacity>
                                        </View>

                                        </View>
                                        </View>
                                        </Modal>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
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
        borderRadius: 5,
        marginTop: 25
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