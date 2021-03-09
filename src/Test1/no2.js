import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Modal,
    Alert,
    TouchableHighlight
} from 'react-native'
import { FAB } from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import Icons from 'react-native-vector-icons/FontAwesome5';

const No2 = ({ title, addItem }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalDate, setModalDate] = useState(false);
    const [text, setText] = useState('');
    const [price, setprice] = useState('');
    const onChange = textValue => setText(textValue);
    const onChange2 = textValue2 => setprice(textValue2);

    return (
        <View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
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
                                            date => setSelectedDate(date)
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
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ margin: 10 }}>
                                <Text style={styles.textStyle}>เพิ่มรายการ</Text>
                            </View>
                            <View style={styles.viewtext}>
                                <Text style={{ marginLeft: 10, fontSize: 20, color: '#000' }}>ชื่อ : </Text>
                                <View style={styles.viewintext}>
                                    <TextInput placeholder='รายละเอียด...' style={styles.input} onChangeText={onChange}></TextInput>
                                </View>
                                <Text style={{ marginLeft: 10, fontSize: 20, color: '#000' }}>จำนวนเงิน : </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput placeholder='รายละเอียด...' style={styles.input2} onChangeText={onChange2}></TextInput>
                                </View>
                                {/* <View style={styles.viewintext}>
                                    <Text style={{ alignContent: 'center', fontSize: 20 }} onChangeText={onChange2}>{selectedDate}</Text>
                                </View> */}
                            </View>
                            <View style={{ marginTop: 25, flexDirection: 'row' }}>
                                <View style={{ marginRight: 5 }}>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#028C6A" }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible)
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </TouchableHighlight>
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#028C6A" }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                            addItem(text, price)
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Save</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <TouchableHighlight>
                <FAB
                    style={styles.fab}
                    color='#000'
                    icon="plus"
                    onPress={() => setModalVisible(true)}
                />
            </TouchableHighlight>
        </View >
    )

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    input: {
        height: 60,
        fontSize: 20,
        color: '#000',
        alignContent: 'center',
    },
    input2: {
        marginLeft: 10,
        height: 50,
        width: 280,
        fontSize: 20,
        color: '#000',
        alignContent: 'center',
        backgroundColor: '#D1EDE1',
        borderRadius: 10,
    },
    fab: {
        backgroundColor: "#028C6A",
    },
    viewtext: {
        borderRadius: 10,
        backgroundColor: '#028C6A',
        width: 300,
        height: 320,
        margin: 30,
        alignContent: 'center',
        justifyContent: 'center'
    },
    viewintext: {
        backgroundColor: '#D1EDE1',
        alignContent: 'center',
        justifyContent: 'center',
        width: 280,
        margin: 20,
        height: 50,
        marginLeft: 10,
        borderRadius: 10,
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
    modalView: {
        backgroundColor: "#D1EDE1",
        borderRadius: 10,
        width: 350,
        height: 555,
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
    openButton: {
        backgroundColor: "#028C6A",
        borderRadius: 10,
        width: 100,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: '#000',
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        textAlign: "center"
    }
})

export default No2;