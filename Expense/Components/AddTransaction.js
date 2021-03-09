import React, { useState } from 'react';
import { Animated, Button, Alert, ScrollView, View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addTransaction, addTransactionBank, addTransactionCredit, addTransactionAddbank } from '../store/action/transactionAction';
import DatePicker from 'react-native-modern-datepicker';

const AddTransaction = () => {


    // const navigation = useNavigation();
    const [modalsaveDelete, setModalsaveDelete] = useState(false);
    const [modalsaveAdd, setModalsaveAdd] = useState(false);
    const [modalDate, setModalDate] = useState(false);
 
    const [datetime1, setdatetime1] = useState('');
    const [dataType1, setdataType1] = useState('');
    const [money1, setmoney1] = useState('');
    const [detail1, setdetail1] = useState('');

    const [datetime2, setdatetime2] = useState('');
    const [datatype2, setdatatype2] = useState('');
    const [money2, setmoney2] = useState('');
    const [detail2, setdetail2] = useState('');

    const [datetime3, setdatetime3] = useState('');
    const [datatype3, setdatatype3] = useState('');
    const [money3, setmoney13] = useState('');
    const [detail3, setdetail3] = useState('');

    const [datetime4, setdatetime4] = useState('');
    const [datatype4, setdatatype4] = useState('');
    const [money4, setmoney4] = useState('');
    const [detail4, setdetail4] = useState('');



    const addcash = async () => {
        let res = await Axios.post("http://192.168.43.86:5000/addcash", {

            datetime1: datetime1,
            dataType1: dataType1,
            money1: money1,
            detail1: detail1,
        })
        if (res.data.error === false) {
            Alert.alert("Register is successful, Please login")

        } else {
            Alert.alert("Your cannot register, Please register again")
        }
    }


    const delcash = async () => {
        let res = await Axios.post("http://192.168.43.86:5000/delcash", {

            datetime2: datetime2,
            dataType2: datatype2,
            money2: money2,
            detail2: detail2,
        })
        if (res.data.error === false) {
            Alert.alert("Register is successful, Please login")

        } else {
            Alert.alert("Your cannot register, Please register again")
        }
    }


    const addaccount = async () => {
        let res = await Axios.post("http://192.168.43.86:5000/addcash", {

            datetime3: datetime3,
            dataType3: datatype3,
            money3: money3,
            detail3: detail3,
        })
        if (res.data.error === false) {
            Alert.alert("Register is successful, Please login")

        } else {
            Alert.alert("Your cannot register, Please register again")
        }
    }


    const delaccount = async () => {
        let res = await Axios.post("http://192.168.43.86:5000/addcash", {

            datetime4: datetime4,
            dataType4: datatype4,
            money4: money4,
            detail4: detail4,
        })
        if (res.data.error === false) {
            Alert.alert("Register is successful, Please login")

        } else {
            Alert.alert("Your cannot register, Please register again")
        }
    }


   

    return (

        <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <ScrollView Vertical={true} showsVerticalScrollIndicator={false} >
                <View style={{
                    flex: 1,
                    borderRadius: 10,
                    width: '100%',
                    height: '100%',


                }}
                >

                    <View style={{ flex: 1, backgroundColor: '#eee', height: '110%' }}>
                        <View style={{ flex: 1, width: '100%' }}>
                            <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>
                                <View style={[styles.top, styles.box]}>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalDate}
                                        onRequestClose={() => {
                                            Alert.alert("Modal has been closed.");
                                        }}
                                    >
                                        <View style={styles.centeredView}>
                                            <View style={styles.modalViewDate}>
                                                <View>
                                                    <Text style={{ color: '#D1EDE1', fontSize: 24 }}>Date and Time</Text>
                                                </View>
                                                <View style={{ width: 350, margin: 25 }}>
                                                    <DatePicker
                                                        onSelectedChange={
                                                            date => setdatetime1(date)
                                                        }
                                                    />
                                                </View>
                                                <TouchableHighlight
                                                    style={{ ...styles.openButton, backgroundColor: "#D1EDE1" }}
                                                    onPress={() => {
                                                        setModalDate(!modalDate)
                                                    }}
                                                >
                                                    <Text style={styles.textStyle}>OK</Text>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </Modal>
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ backgroundColor: '#D6EAF8', width: 40, height: 35, marginTop: 7, marginLeft: 5, borderRadius: 50 }}>
                                            <Image source={require('../../assets/image/overtime.png')}
                                                style={{ width: 25, height: 25, marginLeft: 7, marginTop: 5 }} />
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>วันที่และเวลา</Text>
                                            <Text style={{ marginLeft: 15, color: "#707B7C" }}>วันที่ของรายการ</Text>
                                        </View>
                                        <View>
                                            <Button title="date" onPress={() => {setModalDate(true)}}/>
                                        </View>
                                    </View>


                                    <View style={styles.Boxcenter}>
                                        <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                                            <View style={{
                                                width: 340, height: 60,
                                                backgroundColor: '#CCB0F6',
                                                borderRadius: 10,
                                                shadowColor: "#000",
                                                shadowOffset: {
                                                    width: 2,
                                                    height: 2,
                                                },
                                                shadowOpacity: 0.25,
                                                shadowRadius: 3.84,
                                                elevation: 3,
                                            }}>
                                                <TextInput onChangeText={(text) => setdatetime1(text)}>
                                                    <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', marginTop: 5 }} >
                                                        {datetime1}
                                                    </Text>
                                                </TextInput>

                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        {/* *************************************** */}
                        <View style={{ flex: 1, width: '100%', marginTop: 15 }}>
                            <ScrollView >
                                <View style={styles.top}>
                                    <View style={styles.box}>
                                        <View style={{ flexDirection: 'row' }}>

                                            <View style={{ backgroundColor: '#D6EAF8', width: 40, height: 35, borderRadius: 50, marginTop: 7, marginLeft: 5 }}>

                                                <Image source={require('../../assets/image/category.png')}
                                                    style={{ width: 25, height: 25, marginLeft: 7, marginTop: 5 }} />

                                            </View>
                                            <View style={{ flexDirection: 'column' }}>

                                                <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>หมวดหมู่</Text>
                                                <Text style={{ marginLeft: 15, color: "#707B7C" }}>รายรับรายจ่าย?</Text>
                                            </View>
                                        </View>
                                        <View style={styles.Boxcenter}>
                                            <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                                                <View style={{
                                                    width: 340, height: 60,
                                                    backgroundColor: '#F4B4F5',
                                                    borderRadius: 10,
                                                    shadowColor: "#000",
                                                    shadowOffset: {
                                                        width: 2,
                                                        height: 2,
                                                    },
                                                    shadowOpacity: 0.25,
                                                    shadowRadius: 3.84,
                                                    elevation: 3,
                                                }}>


                                                    <TextInput
                                                        style={{ textAlign: 'center', fontSize: 17, color: "#98099A" }}
                                                        placeholder="Expense Title"
                                                        onChangeText={(title) => setdataType1(title)}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <TouchableOpacity >
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ width: 45, height: 45, margin: 10, borderRadius: 7 }}>
                                                </View>
                                                <View style={{
                                                    width: 150,
                                                    height: 30,
                                                    marginTop: 20,
                                                    marginLeft: 15
                                                }}>
                                                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#FFF' }}>

                                                    </Text>
                                                </View>
                                                <View style={{ marginHorizontal: 70, marginTop: 15 }}>
                                                    <Icon name={'caret-down'} size={30} color={'#fff'} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>






                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        {/* ******************************************************** */}
                        <View style={{ flex: 1, width: '100%', marginTop: 15 }}>
                            <ScrollView >
                                <View style={styles.top}>
                                    <View style={{
                                        height: 150, padding: 5,
                                        marginTop: 15,
                                    }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{
                                                backgroundColor: '#eee', width: 40, height: 35,
                                                borderRadius: 5, marginTop: 7, marginLeft: 5
                                            }}>
                                                <Image source={require('../../assets/image/money.png')}
                                                    style={{ width: 25, height: 25, margin: 5 }} />
                                            </View>
                                            <View style={{ flexDirection: 'column', width: 200, height: 50 }}>
                                                <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>จำนวน</Text>
                                                <Text style={{ marginLeft: 15, color: "#707B7C" }}>จำนวนเงิน?</Text>
                                            </View>
                                            <View style={{
                                                backgroundColor: '#eee', width: 40, height: 35,
                                                borderRadius: 5, marginTop: 7, marginHorizontal: 80
                                            }}>
                                                <TouchableOpacity>
                                                    <Image source={require('../../assets/image/calculator.jpg')}
                                                        style={{ width: 25, height: 25, margin: 5 }} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.Boxcenter}>
                                            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                                                <View style={{ width: 300, height: 60, backgroundColor: '#eee', borderRadius: 10 }}>
                                                    <TextInput style={{ fontSize: 17, alignSelf: "flex-end" }} placeholder="0" keyboardType="numeric" onChangeText={(text) => setmoney1(text)}></TextInput>
                                                </View>
                                                <Text style={{ marginLeft: 5, marginTop: 10 }} >bath</Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        {/* *************************** */}
                        <View style={{ margin: 5 }}>
                            <Text style={{ fontWeight: '700', fontSize: 18 }}>ถ้ามี</Text>
                            <Text style={{ color: '#A1A1A1' }}>
                                เพิ่มรายละเอียดของรายการ</Text>
                        </View>
                        <View style={{ flex: 1, width: '100%', marginTop: 10 }}>
                            <ScrollView >
                                <View style={styles.top}>
                                    <View style={{
                                        height: 180, padding: 5,
                                        marginTop: 15
                                    }}>
                                        <View style={{ flexDirection: 'row' }}>

                                            <View style={{ width: 40, height: 35, borderRadius: 5, marginTop: 7 }}>

                                                <Image source={require('../../assets/image/mark.png')}
                                                    style={{ width: 35, height: 35, marginLeft: 5 }} />

                                            </View>
                                            <View style={{ flexDirection: 'column', width: 260, height: 50 }}>
                                                <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>รายละเอียด</Text>
                                                <Text style={{ marginLeft: 15, color: "#707B7C" }}>เขียนรายละเอียดเพิ่มเติม</Text>
                                            </View>
                                            <View style={{
                                                backgroundColor: '#D788F9', flexDirection: 'row', width: 65, height: 30,
                                                borderRadius: 10, alignItems: 'center'
                                            }}>
                                                <TouchableOpacity>
                                                    <Icon style={[{ color: '#ffffff', margin: 5 }]} size={20} name={'bookmark'} />
                                                </TouchableOpacity>
                                                <Text style={{ color: '#ffffff', fontWeight: '500' }}>ที่เก็บ</Text>
                                            </View>
                                        </View>
                                        <View style={styles.Boxcenter}>
                                            <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                                                <View style={{ width: 320, height: 70, backgroundColor: '#eee', borderRadius: 10 }}>
                                                    <TextInput style={{}} placeholder='...' onChangeText={(text) => setdetail1(text)}></TextInput>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>




                    </View>

                </View>
            </ScrollView>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => { setModalsaveDelete(true) }}

                >
                    <View style={{
                        width: 130, height: 40, backgroundColor: '#F39E9D', marginLeft: 50,
                        flexDirection: 'row', borderRadius: 11
                    }}>
                        <Icon style={{ color: '#ffffff', margin: 5 }} size={30} name={'save'} />
                        <Text style={{ fontSize: 20, marginLeft: 2, color: '#ffffff' }}>+ รายจ่าย</Text>
                    </View>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    visible={modalsaveDelete}
                >
                    <View style={{ backgroundColor: '#000000aa', flex: 1, justifyContent: "flex-end" }}>

                        <View style={{ backgroundColor: '#ffffff', width: '100%', height: 350, marginTop: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <View style={{ width: '100%', height: 60, backgroundColor: "#eee", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: '700', textAlign: "center" }}>เพิ่มรายการ</Text>
                                <Text style={{ fontSize: 15, textAlign: 'center', color: "#878688" }}>ตัวเลือกสำหรับการบันทึกรายการ</Text>
                            </View>
                            <TouchableOpacity style={{ width: "93%", height: 70, backgroundColor: "#86F797", alignSelf: "center", marginTop: 20, borderRadius: 10 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: 'column', width: '80%', height: "100%" }}>
                                        <Text style={{ fontSize: 17, marginTop: 5, marginLeft: 10, fontWeight: '700', color: "#06CF51" }}>ชำระด้วยเงินสด</Text>
                                        <Text style={{ fontSize: 15, marginTop: 5, marginLeft: 10, color: "#06CF51" }}>เพิ่มรายการในฐานข้อมูล</Text>
                                    </View>

                                    <Image source={require('../../assets/image/001-money.png')}
                                        style={{ width: 35, height: 35, marginLeft: 5, marginTop: 15 }} />


                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: "93%", height: 70, backgroundColor: "#F7F686", alignSelf: "center", marginTop: 10, borderRadius: 10 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: 'column', width: '80%', height: "100%" }}>
                                        <Text style={{ fontSize: 17, marginTop: 5, marginLeft: 10, fontWeight: '700', color: "#F1C02B" }}>ชำระด้วยบัญชีธนาคาร</Text>
                                        <Text style={{ fontSize: 15, marginTop: 5, marginLeft: 10, color: "#F1C02B" }}>สร้างรายการและถอนเงินจากบัญชีเพื่อชำระ</Text>
                                    </View>

                                    <Image source={require('../../assets/image/008-house-insurance.png')}
                                        style={{ width: 35, height: 35, marginLeft: 5, marginTop: 15 }} />


                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => { setModalsaveDelete(!modalsaveDelete) }} style={{ width: "93%", height: 70, backgroundColor: "#F5C2FC", alignSelf: "center", marginTop: 10, borderRadius: 10 }}>
                                <Text style={{ fontWeight: "700", fontSize: 17, alignSelf: "center", marginTop: 20, color: '#8A3ED6' }}>✖ ยกเลิกการทำรายการ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => { setModalsaveAdd(true) }}

                >
                    <View style={{
                        width: 130, height: 40, backgroundColor: '#BBF39D', marginLeft: 50,
                        flexDirection: 'row', borderRadius: 11
                    }}>
                        <Icon style={{ color: '#ffffff', margin: 5 }} size={30} name={'save'} />
                        <Text style={{ fontSize: 20, marginLeft: 2, color: '#ffffff' }}>+ รายรับ</Text>
                    </View>
                </TouchableOpacity>

                <Modal
                    transparent={true}
                    visible={modalsaveAdd}
                >
                    <View style={{ backgroundColor: '#000000aa', flex: 1, justifyContent: "flex-end" }}>

                        <View style={{ backgroundColor: '#ffffff', width: '100%', height: 350, marginTop: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <View style={{ width: '100%', height: 60, backgroundColor: "#eee", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: '700', textAlign: "center" }}>เพิ่มรายการ</Text>
                                <Text style={{ fontSize: 15, textAlign: 'center', color: "#878688" }}>ตัวเลือกสำหรับการบันทึกรายการ</Text>
                            </View>
                            <TouchableOpacity onPress={() => addcash()} style={{ width: "93%", height: 70, backgroundColor: "#86F797", alignSelf: "center", marginTop: 20, borderRadius: 10 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: 'column', width: '80%', height: "100%" }}>
                                        <Text style={{ fontSize: 17, marginTop: 5, marginLeft: 10, fontWeight: '700', color: "#06CF51" }}>รับเงินสด</Text>
                                        <Text style={{ fontSize: 15, marginTop: 5, marginLeft: 10, color: "#06CF51" }}>สร้างรายการรับปกติ</Text>
                                    </View>

                                    <Image source={require('../../assets/image/001-money.png')}
                                        style={{ width: 35, height: 35, marginLeft: 5, marginTop: 15 }} />


                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onSubmit1()} style={{ width: "93%", height: 70, backgroundColor: "#F7F686", alignSelf: "center", marginTop: 10, borderRadius: 10 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: 'column', width: '80%', height: "100%" }}>
                                        <Text style={{ fontSize: 17, marginTop: 5, marginLeft: 10, fontWeight: '700', color: "#F1C02B" }}>ฝากเข้าบัญชีธนาคาร</Text>
                                        <Text style={{ fontSize: 15, marginTop: 5, marginLeft: 10, color: "#F1C02B" }}>สร้างรายการรายรับและฝากเงินเข้าบัญชีธนาคาร</Text>
                                    </View>

                                    <Image source={require('../../assets/image/008-house-insurance.png')}
                                        style={{ width: 35, height: 35, marginLeft: 5, marginTop: 15 }} />


                                </View>
                            </TouchableOpacity>
                            <View style={{ width: "93%", height: 70, backgroundColor: "#F5C2FC", alignSelf: "center", marginTop: 15, borderRadius: 10 }}>
                                <TouchableOpacity onPress={() => { setModalsaveAdd(!modalsaveAdd) }} style={{ width: "100%", height: '100%', backgroundColor: "#F5C2FC", alignSelf: "center", borderRadius: 10 }}>
                                    <Text style={{ fontWeight: "700", fontSize: 17, alignSelf: "center", marginTop: 20, color: '#8A3ED6' }}>✖ ยกเลิกการทำรายการ</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalViewDate: {
        backgroundColor: "#028C6A",
        borderRadius: 10,
        width: 350,
        height: 550,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    
    item: {
        marginVertical: 20,
    },
    Box: {
        width: '100%',
        height: 220,
        borderRadius: 15,
        flexDirection: 'row',
        padding: 22,
        backgroundColor: 'green'

    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#eee",
        padding: 10,

    },
    top1: {

        alignItems: "center",
        backgroundColor: "#FFFFFF",
        marginTop: 100,

        borderRadius: 20,
    },
    Box1: {
        alignItems: "center",
        width: "60%",
        height: "50%",

    },
    text1: {
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


    },
    text2: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        backgroundColor: 'green',
        borderRadius: 10,
        width: 130,
        height: 35
    },


    top: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    box: {
        height: 170,
        padding: 5,
        marginTop: 15,
        // backgroundColor: '#fff'

    },

    separator: {
        marginVertical: 9,
        borderBottomColor: 'black',
    },
   
    text: {
        marginTop: 10,
        width: 80,
        height: 30,
        borderRadius: 15,
        color: '#FFF',
        textAlign: "center",
        backgroundColor: '#FF9900',
    },
    Boxcenter: {
        width: 400,
        height: 100,
        alignItems: 'center',
        justifyContent: "center",


    }
});

export default AddTransaction;