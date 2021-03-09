import React, { useState,useEffect } from 'react';
import { Animated, Dimensions, ScrollView, View, StyleSheet, Text, TextInput, Image, TouchableOpacity, SafeAreaView, FlatList, Alert, Modal, } from 'react-native';
import { Button } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../store/action/transactionAction';
import axios from 'axios';


const Balance = ({ navigation }) => {
    const [ShoweAdd, setShoweAdd] = useState(false);
    const [modalAddlist, setModalAddlist] = useState(false);
    

    const [Showlist,setShowlist]=useState([]);  
    useEffect(() => {
        async function fetchData() {
          const res = await axios.get('http://192.168.43.86:5000/showlist');
          setShowlist(res.data.list);
        }
        fetchData();
      },[]);
      console.log(Showlist)
   
    
    return (
        <View style={styles.Box}>
            <View
                style={{ width: '100%', alignItems: 'flex-start', height: 70 }}>

                <Text
                    style={{
                        fontSize: 20,
                        color: '#DCA74C',
                        fontFamily: 'Lato-Regular',
                        fontWeight: '700',
                    }}>
                    ยอดเงินคงเหลือ
        </Text>
                <Text
                    style={{
                        fontFamily: 'Lato-Medium',
                        fontSize: 32,
                        color: '#DCA74C',
                        fontWeight: '700',
                    }}>
                     Bath
        </Text>

            </View>

            <View
                style={{
                    alignItems: 'flex-end',
                    width: '30%',
                }}>

                <View style={{ flex: 1 }}>
                    <View style={{ width: 50, height: 100, marginHorizontal: 100 }}>
                        <View style={{ justifyContent: "center" }}>
                            <Button
                                rounded

                                style={{

                                    padding: 10,
                                    marginTop: 15,
                                    marginLeft: 60,
                                    borderWidth: 3,
                                    borderColor: '#fff',
                                    backgroundColor: '#D2ACF4',
                                    justifyContent: "center",

                                    width: 100,
                                }}
                                onPress={() => { setModalAddlist(true) }}>
                                <Text style={{ color: '#fff', fontWeight: '700', fontSize: 15 }}>
                                    + รายการ
                            </Text>
                            </Button>
                        </View>
                    </View>

                    
                    <Modal
                      transparent={true}
                      visible={modalAddlist}
                    >
                      <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#ffffff', borderRadius: 10, width: '95%', height: 370,marginTop:150 }}>
                            <View style={{width:'100%',height:60,backgroundColor:"#eee",borderTopLeftRadius:10,borderTopRightRadius:10}}>
                            <Text style={{alignSelf:'center',fontSize:17,fontWeight:'700'}}>การสร้างรายการ</Text>
                            <Text style={{alignSelf:"center",color:'#3DE269'}}>เลือกตัวเลือกสำหรับการสร้างรายการ</Text>
                            </View>
                            <View style={{width:'90%',height:80,backgroundColor:"#C6EEFE",borderRadius:10,alignSelf:'center',marginTop:20,flexDirection:"row"}}>
                               <TouchableOpacity onPress={()=>{navigation.navigate('Add'),setModalAddlist(!modalAddlist);}}>
                                   <View style={{width:'100%',height:"100%",flexDirection:'row'}}>
                                       <View style={{flexDirection:'column',width:250,height:"100%"}}>
                                <Text style={{color:'#2086B1',fontSize:17,marginTop:10,marginLeft:10}}>
                                    เพิ่มรายการ
                                </Text>
                                <Text style={{marginLeft:10,color:'#909394'}}>
                                    สร้างรายการรายรับ-รายจ่าย ด้วยงินสดหรือบัญชีธนาคาร
                                </Text>
                                </View>
                                <View style={{width:50,height:50,marginLeft:30}}>
                                <Image source={require('../../../assets/image/004-dictionary.png')}
                            style={{ width: 45, height: 45, marginTop: 15, borderRadius: 15 }} />
                                </View>
                                </View>
                                
                                
                               </TouchableOpacity>
                            </View>
                            <View style={{width:'90%',height:80,backgroundColor:"#8CF8B4",borderRadius:10,alignSelf:'center',marginTop:20,flexDirection:"row"}}>
                              <TouchableOpacity onPress={()=>{navigation.navigate('Data'),setModalAddlist(!modalAddlist)}}>
                              <View style={{width:'100%',height:"100%",flexDirection:'row'}}>
                                       <View style={{flexDirection:'column',width:250,height:"100%"}}>
                                  <Text style={{fontSize:17,marginLeft:10,marginTop:10,color:'#05B848',fontWeight:'700'}}>เพิ่มรายการอื่นๆ</Text>
                                  </View>
                                <View style={{width:50,height:50,marginLeft:30}}>
                                <Image source={require('../../../assets/image/010-gold.png')}
                            style={{ width: 45, height: 45, marginTop: 15, borderRadius: 15 }} />
                                </View>
                                </View>

                              </TouchableOpacity>
                            </View>
                            <View style={{width:250,borderColor:"#70678A",borderWidth:2,height:70,backgroundColor:"#9171F2",borderRadius:10,alignSelf:'center',marginTop:30}}>
                               <TouchableOpacity onPress={() => {
                          setModalAddlist(!modalAddlist);
                        }} style={{width:"100%",height:'100%'}}>
                            <Text style={{fontSize:18,fontWeight:"700",textAlign:'center',marginTop:17,color:"#fff"}}>✖ ยกเลิกการทำรายการ</Text>

                               </TouchableOpacity>
                            </View>
                            </View>
                            </View>
                    </Modal>

                    <View style={{ flexDirection: 'row', width: 350, height: 100 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ width: 100, height: 50 }}>
                                <Text
                                    style={{
                                        marginTop: 17,
                                        color: '#DCA74C',
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
                                    ▼ Bath
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', width: 300, height: 50 }}>
                            <View style={{ width: 100, height: 50 }}>
                                <Text
                                    style={{
                                        marginTop: 17,
                                        color: '#DCA74C',
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
                                    ▲ Bath
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
        height: 220,
        borderRadius: 15,
        flexDirection: 'row',
        padding: 22,
        backgroundColor: '#F4F787',
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 15,
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
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    top: {
        flex: 1,
        backgroundColor: '#ffffff',
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