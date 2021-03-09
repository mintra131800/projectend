import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
  TextInput,Platform,Text
} from 'react-native';
import propTypes from 'prop-types'

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome'
import List2 from './List2'
export default class List11 extends React.Component {
  constructor(props){
    super(props)
    
    this.state={
        isVisible:false,
        chosenDate:'',
        text:''
    };
    
    this.calender=props.calender
}
handlePicker=(datetime)=>{
this.setState({
    isVisible:false,
    chosenDate:moment(datetime).format('MMMM, DD YYYY HH:mm')
})
}
showPicker=()=>{
this.setState({
    isVisible:true
})
}
hidePiker=()=>{
this.setState({
    isVisible:false,
   
})
}
onChange = (textValue) => {
  this.setState({
      text: textValue
  });
}
addItem =(text) => {
  if ( ! text) {
   Alert.alert('Error', 'กรุณากรอกข้อความ',[{ text: "OK" }]);
  } else {
    this.setState((prevItems) => {
      return{
        items: [...prevItems.items,{id:uuid(),text}],
        
      }

    });
  }
};
  render(props) {
    const { addItem} = this.props;
    return (
          <SafeAreaView style={styles.container} >


            <ScrollView Vertical={true} showsVerticalScrollIndicator={false} >

              <View style={{ flex: 1, backgroundColor: '#eee', height: 1300 }}>
                <View style={{ flex: 1, width: '100%', marginTop: 20 }}>

                  <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>

                    <View style={[styles.top, styles.box]}>
                      
                      <View style={{ flexDirection: 'row', }}>
                        <View style={{ backgroundColor: '#D6EAF8', width: 40, height: 35, marginTop: 7, marginLeft: 5, borderRadius: 50 }}>

                          <Image source={require('../../assets/image/overtime.png')}
                            style={{ width: 25, height: 25, marginLeft: 7, marginTop: 5 }} />

                        </View>
                        <Text>
                        {this.textt}</Text>
                        <View style={{ flexDirection: 'column' }}>
                          <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>วันที่และเวลา</Text>
                          <Text style={{ marginLeft: 15, color: "#707B7C" }}>วันที่ของรายการ</Text>
                        </View>
                        
                      </View>
                      <Text>
                    {this.calender}</Text>
                      <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                        <View style={{ width: 340, height: 50, backgroundColor: '#D6EAF8', borderRadius: 10 }}>
                        <TouchableOpacity  onPress={this.showPicker}>
                        <Text style={{color:'green',fontSize:20,textAlign:'center',marginTop:5}} >
                {this.state.chosenDate}
                
                </Text>
                    
                
                <DateTimePicker
                isVisible={this.state.isVisible}
                onConfirm={this.handlePicker}
                onCancel={this.hidePiker}
                placeholder="Select your birthday"
                textColor="red"
                ></DateTimePicker></TouchableOpacity>
                        </View>

                      </View>
                    </View>
                  </ScrollView>
                </View>
                {/*******************************************************************************************/}
                
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
                        <TouchableOpacity>
                          <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                            <View style={{ width: 340, height: 50, backgroundColor: '#ECD0F9', borderRadius: 10 }}>

                              <Text>เอาไว้ใส่หมวดหมู่</Text>

                            </View>
                          </View>
                        </TouchableOpacity>


                      </View>
                    </View>
                  </ScrollView>
                </View>
                {/*******************************************************************************************/}

                <View style={{ flex: 1, width:'100%', marginTop: 15 }}>
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
                          <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>จำนวน</Text>
                            <Text style={{ marginLeft: 15, color: "#707B7C" }}>จำนวนเงิน?</Text>
                          </View>
                          <View style={{
                            backgroundColor: '#eee', width: 40, height: 35,
                            borderRadius: 5, marginTop: 7, marginHorizontal: 170
                          }}>
                            <TouchableOpacity>
                              <Image source={require('../../assets/image/calculator.jpg')}
                                style={{ width: 25, height: 25, margin: 5 }} />
                            </TouchableOpacity>


                          </View>
                        </View>


                        <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                          <View style={{ width: 300, height: 50, backgroundColor: '#eee', borderRadius: 10 }}>

                            <TextInput style={{ textAlign: 'right' }} placeholder="0" onChangeText={this.onChange} ></TextInput>


                          </View>
                          <Text style={{ marginLeft: 5, marginTop: 10 }} >bath</Text>
                        </View>

                      </View>
                    </View>
                  </ScrollView>
                </View>
                {/*******************************************************************************************/}
                <View style={{ margin: 5 }}>
                  <Text style={{ fontWeight: '700', fontSize: 18 }}>ถ้ามี</Text>
                  <Text style={{ color: '#A1A1A1' }}>
                    เพิ่มรายละเอียดของรายการ
</Text>
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
                          <View style={{ flexDirection: 'column', width: 240 }}>
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

                        <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                          <View style={{ width: 320, height: 70, backgroundColor: '#eee', borderRadius: 10 }}>

                            <TextInput style={{}}>...</TextInput>


                          </View>

                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>




                {/*******************************************************************************************/}

                <View style={{ flex: 1, width: '100%', marginTop: 20 }}>
                  <ScrollView >
                    <View style={styles.top}>
                      <View style={{
                        height: 150, padding: 5,
                        marginTop: 15
                      }}>
                        <View style={{ flexDirection: 'row' }}>

                          <View style={{ backgroundColor: '#EAA9F5', width: 40, height: 35, borderRadius: 5, marginTop: 7, marginLeft: 5 }}>

                            <Image source={require('../../assets/image/tag.jpg')}
                              style={{ width: 25, height: 25, marginLeft: 7, marginTop: 5 }} />

                          </View>
                          <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>แท็ก</Text>
                            <Text style={{ marginLeft: 15, color: "#707B7C" }}>จับกลุ่มกิจกรรมของฉันด้วยแท็ก</Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                          <View style={{ width: 120, height: 25, backgroundColor: '#EBDEF0', borderRadius: 15 }}>
                            <Text style={{ textAlign: 'center', color: '#EAA9F5' }}>จำนวน 0 รายการ</Text>
                          </View>


                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>
                {/*******************************************************************************************/}
                {/*******************************************************************************************/}

                <View style={{ flex: 1, width: '100%', marginTop: 5 }}>
                  <ScrollView >
                    <View style={styles.top}>
                      <View style={{
                        height: 170, padding: 5,
                        marginTop: 15
                      }}>
                        <View style={{ flexDirection: 'row' }}>

                          <View style={{ width: 40, height: 35, borderRadius: 5, marginTop: 7 }}>

                            <Image source={require('../../assets/image/photo.png')}
                              style={{ width: 35, height: 35, marginLeft: 5 }} />

                          </View>
                          <View style={{ flexDirection: 'column', width: 280 }}>
                            <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>รูปภาพ</Text>
                            <Text style={{ marginLeft: 15, color: "#707B7C" }}>รวมรูปภาพที่ถูกแนบไว้ในร่ยการ</Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 15, margin: 15 }}>
                          <View style={{ width: 330, height: 100, backgroundColor: '#eee', borderRadius: 10 }}>
                            <View>
                              <TouchableOpacity>
                                <Image source={require('../../assets/image/photo.png')}
                                  style={{ width: 35, height: 35, marginLeft: 5, marginTop: 40, marginLeft: 150 }} />
                              </TouchableOpacity>
                            </View>

                          </View>

                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity style={{backgroundColor:'#0000000a'}}
            onPress={() => addItem(this.state.text)}
            >
              <View style={{
                width: 100, height: 40, backgroundColor: '#4B87EC', marginLeft: 140,
                flexDirection: 'row', borderRadius: 11
              }}>
                <Icon style={{ color: '#ffffff', margin: 5 }} size={30} name={'save'} />
                <Text style={{ fontSize: 20, marginLeft: 2, color: '#ffffff' }}>บันทึก</Text>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

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
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 40,
    width: 40,
    resizeMode: "stretch",
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
  },
});
