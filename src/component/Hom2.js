import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInput, TouchableHighlight} from 'react-native-gesture-handler';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-navigation';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const Separator = () => <View style={styles.separator} />;
const deviceHeight = Dimensions.get('window').height;
export default class Hom2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showMe: false,
      showEdit: false,
      users:['+Create Account'],
      moneys:['0'],
      value:'',
      money:'',
      
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
    
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  onChangeTextInput = (text) => {
    this.setState({
      value: text
    });
  };
  onChangeMoneyInput = (text) => {
    this.setState({
      money: text
    });
  };
  onAddUsers=()=> {
    if(this.state.value === ''){
      alert('กรุณาคีย์ข้อมูลให้ครบถ้วน')
     } else {
    this.setState((prevState) => {
      return { 
        show:false,
        showEdit:false,
        users: [ prevState.value],
        moneys:[prevState.money]
      };
    });
  }
  };
 
  render() {
    const {selectedStartDate} = this.state;
    
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

   
    const onPress = () => {
      this.setState({showMe: false});
    };
    const {navigation} = this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
      
        <View
          style={{
            flexDirection: 'row',
            height: 100,
          }}>
          <View
            style={{
              backgroundColor: '#97CEF2',
              flex: 1,
              fontWeight: '900',
              padding: 15,
            }}>
            <View style={{alignItems: 'flex-end', width:'100%'}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({showMe: true})
                }
                }>
                <Icon size={25} name={'book'} color={'#fff'} />
              </TouchableOpacity>
            </View>
          

            <Modal
              transparent={true}
              visible={this.state.showMe}
              animationType={'fade'}>
              <TouchableWithoutFeedback
                onPress={onPress}
                style={{flex: 1, width: '100%'}}>
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
                      height: '55%',
                      borderTopRightRadius: 20,
                      borderTopLeftRadius: 20,
                      paddingHorizontal: 20,
                      maxHeight: deviceHeight * 5,
                    }}>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                      <Text
                        style={{
                          fontSize: 27,
                          height: 35,
                        }}>
                        สรุป
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: 'gray',
                          height: 30,
                          marginBottom: 10,
                        }}>
                        ดูสรุปต่างๆ แผนภูมิและรูปภาพ
                      </Text>
                    </View>
                    <Separator />
                    <TouchableOpacity
                    
                      style={{
                        padding: 13,
                        borderRadius: 10,
                        backgroundColor: '#E3A8F9',
                        marginVertical: 7,
                      }}
                      onPress={() =>
                        this.props.navigation.navigate('Summary')
                        
                      }>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '500',
                          color: '#BC19F8',
                        }}>
                        สรุปรายปี
                      </Text>

                      <Text style={{fontSize: 10, color: '#CA59F4'}}>
                        ดูสรุปรายปี
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        padding: 13,
                        borderRadius: 10,
                        backgroundColor: '#FCDEF6',
                        marginVertical: 7,
                      }}
                      onPress={() =>
                        this.props.navigation.navigate('Summary')
                      }>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '500',
                          color: '#FA5FDB',
                        }}>
                        สรุปรายเดือน
                      </Text>

                      <Text style={{fontSize: 10, color: '#FB9DE8'}}>
                        ดูสรุปรายเดือน
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        padding: 13,
                        borderRadius: 10,
                        backgroundColor: '#FCCC9D',
                        marginVertical: 7,
                      }}
                      onPress={() =>
                        this.props.navigation.navigate('Summary')
                      }>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '500',
                          color: '#F2963B',
                        }}>
                        สรุปรายวัน
                      </Text>

                      <Text style={{fontSize: 10, color: '#FBB773'}}>
                        ดูสรุปรายวัน
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

            <TouchableOpacity
              onPress={() => {
                this.setState({show: true});
              }}
              style={styles.buttonFacebookStyle}
              activeOpacity={0.5}>
              <Image
                source={require('../../assets/image/005-wallet.png')}
                style={styles.buttonImageIconStyle}
              />

              <View style={{width: '78%', height: 30}}>
              {this.state.users.map((item) => (
                <Text style={{color: '#fff', textAlign: 'center'}}key={item}>
                {item}
                
              </Text>
            ))}
            
              </View>
              <Icon name={'caret-down'} size={20} color={'#fff'}/>
            </TouchableOpacity>

            <ScrollView>
              <Modal transparent={true} visible={this.state.show}>
                <View
                  style={{
                    backgroundColor: '#00000aaa',
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <Icon
                    style={{margin: 30, color: '#D9D3DB'}}
                    name={'times-circle'}
                    size={40}
                    onPress={() => {
                      this.setState({show: false});
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: 10,
                      width: 300,
                      height: 380,
                      marginTop: 20,
                    }}>
                    <View style={{flex: 1}}>
                      <View style={styles.top}>
                        <View
                          style={{
                            height: 350,
                            padding: 5,
                            margin: 5,
                          }}>
                          <View style={{alignItems: 'center'}}>
                            <Text
                              style={{
                                textAlign: 'center',
                                color: 'black',
                                fontWeight: '600',
                                fontSize: 20,
                              }}>
                              บัญชี
                            </Text>
                            <Text style={{color: '#98959A'}}>
                              แก้ไขข้อมูลของบัญชี
                            </Text>
                          </View>

                          <View style={{margin: 10}}>
                            <Text style={{color: 'black'}}>ชื่อ</Text>
                          </View>
                          <View
                            style={{
                              width: 280,
                              height: 60,
                              backgroundColor: '#eee',
                              marginTop: 3,
                              borderRadius: 7,
                            }}>
                            <TextInput
                              placeholder="+ Create Account"
                              onChangeText={this.onChangeTextInput}></TextInput>
                          </View>
                          <View style={{margin: 10}}>
                            <Text style={{color: 'black'}}>
                              เงินสดคงเหลือ(เริ่มต้น)
                            </Text>
                          </View>
                          <View
                            style={{
                              width: 280,
                              height: 60,
                              backgroundColor: '#eee',
                              marginTop: 3,
                              borderRadius: 7,
                            }}>
                            <TextInput
                              style={{textAlign: 'right', marginRight: 5}}
                              placeholder="0"
                              keyboardType='numeric'
                              onChangeText={
                                this.onChangeMoneyInput
                              }></TextInput>
                          </View>
                          <View
                            style={{
                              width: 280,
                              height: 40,
                              backgroundColor: '#5CB415',
                              marginTop: 30,
                              borderRadius: 7,
                            }}>
                            <TouchableOpacity
                              onPress={this.onAddUsers}
                              style={{marginTop: 5}}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  marginHorizontal: 100,
                                }}>
                                <Icon
                                  name={'check'}
                                  size={20}
                                  style={{
                                    color: '#fff',
                                    alignItems: 'center',
                                  }}></Icon>
                                <Text
                                  style={{
                                    textAlign: 'center',
                                    color: '#FFF',
                                    fontSize: 15,
                                    marginLeft: 5,
                                  }}>
                                  บันทึก
                                </Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </ScrollView>
          </View>
        </View>
        {/* ********************************************************************************* */}
        <SafeAreaView style={styles.container}>
          <View style={{marginTop:5}}>
            <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>
              <View style={{flex: 1,marginRight:7,marginLeft:7}}>
                <View style={{flex: 1, width: '100%'}}>
                  <ScrollView>
                    <View style={styles.top}>
                      <View
                        style={{
                          height: 350,
                          padding: 5,
                          margin: 5,
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            source={require('../../assets/image/005-wallet.png')}
                            style={styles.buttonImageIconStyle}
                          />
                          <View style={{width: 250, height: 40}}>
                          {this.state.users.map((item) => (
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 6,
                                fontSize: 15,
                                fontWeight: '700',
                                marginLeft: 20,
                              }}key={item}>
                              {item}
                            </Text>
                          ))}
                          
                          </View>

                          <View style={{ marginTop: 10}}>
                            <TouchableOpacity
                              onPress={() => {
                                this.setState({showEdit: true});
                              }}>
                              <Text>แก้ไข</Text>
                            </TouchableOpacity>
                          </View>

                          <Modal transparent={true} visible={this.state.showEdit}>
                            <View
                              style={{
                                backgroundColor: '#00000aaa',
                                flex: 1,
                                alignItems: 'center',
                              }}>
                              <Icon
                                style={{margin: 30, color: '#D9D3DB'}}
                                name={'times-circle'}
                                size={40}
                                onPress={() => {
                                  this.setState({showEdit: false});
                                }}
                              />
                              <View
                                style={{
                                  backgroundColor: '#ffffff',
                                  borderRadius: 10,
                                  width: 300,
                                  height: 380,
                                  marginTop: 20,
                                }}>
                                <View style={{flex: 1}}>
                                  <View style={styles.top}>
                                    <View
                                      style={{
                                        height: 350,
                                        padding: 5,
                                        margin: 5,
                                      }}>
                                      <View style={{alignItems: 'center'}}>
                                        <Text
                                          style={{
                                            textAlign: 'center',
                                            color: 'black',
                                            fontWeight: '600',
                                            fontSize: 20,
                                          }}>
                                          บัญชี
                                        </Text>
                                        <Text style={{color: '#98959A'}}>
                                          แก้ไขข้อมูลของบัญชี
                                        </Text>
                                      </View>

                                      <View style={{margin: 10}}>
                                        <Text style={{color: 'black'}}>
                                          ชื่อ
                                        </Text>
                                      </View>
                                      <View
                                        style={{
                                          width: 280,
                                          height: 60,
                                          backgroundColor: '#eee',
                                          marginTop: 3,
                                          borderRadius: 7,
                                        }}>
                                        <TextInput
                                          placeholder="+ Create Account"
                                          onChangeText={
                                            this.onChangeTextInput
                                          }
                                          
                                          ></TextInput>
                                      </View>
                                      <View style={{margin: 10}}>
                                        <Text style={{color: 'black'}}>
                                          เงินสดคงเหลือ(เริ่มต้น)
                                        </Text>
                                      </View>
                                      <View
                                        style={{
                                          width: 280,
                                          height: 60,
                                          backgroundColor: '#eee',
                                          marginTop: 3,
                                          borderRadius: 7,
                                        }}>
                                        <TextInput
                                          style={{
                                            textAlign: 'right',
                                            marginRight: 5,
                                          }}
                                          placeholder="0"
                                          keyboardType='numeric'
                                          onChangeText={
                                            this.onChangeMoneyInput
                                          }
                                          
                                          ></TextInput>
                                      </View>
                                      <View
                                        style={{
                                          width: 280,
                                          height: 40,
                                          backgroundColor: '#435BE3',
                                          marginTop: 30,
                                          borderRadius: 7,
                                        }}>
                                        <TouchableOpacity
                                           onPress={this.onAddUsers}
                                          style={{marginTop: 5}}>
                                          <View
                                            style={{
                                              flexDirection: 'row',
                                              marginHorizontal: 100,
                                            }}>
                                            <Icon
                                              name={'check'}
                                              size={20}
                                              style={{
                                                color: '#fff',
                                                alignItems: 'center',
                                              }}></Icon>
                                            <Text
                                              style={{
                                                textAlign: 'center',
                                                color: '#FFF',
                                                fontSize: 15,
                                                marginLeft: 5,
                                              }}>
                                              บันทึก
                                            </Text>
                                          </View>
                                        </TouchableOpacity>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </Modal>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <View
                            style={{
                              width: 50,
                              height: 20,
                              backgroundColor: '#48A0DA',
                              borderRadius: 15,
                            }}>
                            <Text style={{textAlign: 'center', color: 'white'}}>
                              0 วัน
                            </Text>
                          </View>
                          <View style={{paddingHorizontal: 5}}></View>
                          <View
                            style={{
                              width: 70,
                              height: 20,
                              backgroundColor: '#48A0DA',
                              borderRadius: 15,
                            }}>
                            <Text style={{textAlign: 'center', color: 'white'}}>
                              0 รายการ
                            </Text>
                          </View>
                        </View>
                        <Separator />
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            source={require('../../assets/image/001-money.png')}
                            style={{width: 25, height: 25, marginLeft: 5}}
                          />
                          <Text
                            style={{
                              flex: 1,
                              color: 'black',
                              marginTop: 4,
                              fontSize: 13,
                              fontWeight: '600',
                              paddingHorizontal: 10,
                            }}>
                            เงินสด
                          </Text>
                          {this.state.moneys.map((item)=>( 
                          <Text style={{marginRight: 5}}
                          key={item}
                          >
                            {item + ' ' + 'bath'}
                          </Text>
                          ))}
                         
                        </View>
                        <Separator />
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            source={require('../../assets/image/004-credit-card-1.png')}
                            style={{width: 25, height: 25, marginLeft: 5}}
                          />
                          <Text
                            style={{
                              flex: 1,
                              color: 'black',
                              marginTop: 4,
                              fontSize: 13,
                              fontWeight: '600',
                              paddingHorizontal: 10,
                            }}>
                            บํญชีธนาคาร
                          </Text>
                          <Text style={{marginRight: 5}}>0 bath</Text>
                        </View>
                        <Separator />
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            source={require('../../assets/image/003-bank.png')}
                            style={{width: 25, height: 25, marginLeft: 5}}
                          />
                          <Text
                            style={{
                              flex: 1,
                              color: 'black',
                              marginTop: 4,
                              fontSize: 13,
                              fontWeight: '600',
                              paddingHorizontal: 10,
                            }}>
                            รายรับค้างรับ
                          </Text>
                          <Text style={{marginRight: 5}}>0 bath</Text>
                        </View>
                        <Separator />
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            source={require('../../assets/image/money-bag.png')}
                            style={{width: 25, height: 25, marginLeft: 5}}
                          />
                          <Text
                            style={{
                              flex: 1,
                              color: 'black',
                              marginTop: 4,
                              fontSize: 13,
                              fontWeight: '600',
                              paddingHorizontal: 10,
                            }}>
                            หนี้สิน
                          </Text>
                          <Text style={{marginRight: 5}}>0 bath</Text>
                        </View>
                        <Separator />

                        <View style={{flexDirection: 'row'}}>
                          
                          <Text
                            style={{
                              flex: 1,
                              color: 'black',
                              marginTop: 4,
                              fontSize: 13,
                              fontWeight: '600',
                              marginLeft: 5,
                            }}>
                            รวม(ไม่รวมหนี้สิน)
                          </Text>
                            {this.state.moneys.map((item)=>(
                            <Text style={{marginRight: 5}}
                            key={item}
                            
                            >
                              
                            {item + ' ' + 'bath'}
                            
                          </Text>))}
                          
                        </View>
                        <Separator />

                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              flex: 1,
                              color: 'black',
                              marginTop: 4,
                              fontSize: 13,
                              fontWeight: '600',
                              paddingHorizontal: 10,
                            }}>
                            รวม
                          </Text>
                          {this.state.moneys.map((item)=>(
                          <Text style={{marginRight: 5}}
                          key={item}
                          >
                            {item+ ' ' + 'bath'}
                          </Text>))}
                          
                        </View>
                        <Separator />
                      </View>
                    </View>
                  </ScrollView>
                </View>
                {/*******************************************************************************************/}
                
                <View style={{flex: 1, width: '100%',marginTop:10}}>
                  <ScrollView>
                    <View style={styles.top}>
                      <View
                        style={{
                          height: 270,
                          padding: 5,
                          margin: 5,
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            source={require('../../assets/image/006-schedule.png')}
                            style={{width: 40, height: 40}}
                          />
                          <Text
                            style={{
                              color: 'black',
                              marginTop: 6,
                              fontSize: 15,
                              fontWeight: '700',
                              paddingHorizontal: 10,
                            }}>
                            วันนี้
                          </Text>
                          
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <View
                            style={{
                              width: 70,
                              height: 20,
                              backgroundColor: '#eee',
                              borderRadius: 15,
                            }}>
                            <Text
                              style={{textAlign: 'center', color: '#7F8C8D'}}>
                              0 รายการ
                            </Text>
                          </View>
                          <View style={{paddingHorizontal: 5}}></View>
                          <View
                            style={{
                              width: 70,
                              height: 20,
                              backgroundColor: '#FCF3CF',
                              borderRadius: 15,
                            }}>
                            <Text
                              style={{textAlign: 'center', color: '#F7DC6F'}}>
                              0 bath
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#92EE64',
                            width: '90%',
                            height: '30%',
                            marginTop: 15,
                            marginLeft: 15,
                            borderRadius: 15,
                            
                          }}>
                          <Text
                            style={{
                              color: '#358D08',
                              paddingHorizontal: 15,
                              marginTop: 15,
                              fontWeight: '700',
                              fontSize: 15,
                            }}>
                            รายรับ
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: '#358D08',
                                paddingHorizontal: 15,
                                marginTop: 10,
                              }}>
                              จำนวน 0 bath
                            </Text>
                            <Text
                              style={{
                                color: '#358D08',
                                paddingHorizontal: 135,
                              }}>
                              0 bath
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#F49584',
                            width: '90%',
                            height: '30%',
                            marginTop: 15,
                            marginLeft: 15,
                            borderRadius: 15,
                          }}>
                          <Text
                            style={{
                              color: '#E03011',
                              paddingHorizontal: 15,
                              marginTop: 15,
                              fontWeight: '700',
                              fontSize: 15,
                            }}>
                            รายจ่าย
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: '#E03011',
                                paddingHorizontal: 15,
                                marginTop: 10,
                              }}>
                              จำนวน 0 bath
                            </Text>
                            <Text
                              style={{
                                color: '#E03011',
                                paddingHorizontal: 135,
                              }}>
                              0 bath
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>
                {/*******************************************************************************************/}
                <View style={{flex: 1, width: '100%',marginTop:10}}>
                  <ScrollView>
                    <View style={styles.top}>
                      <View
                        style={{
                          height: 270,
                          padding: 5,
                          margin: 5,
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            source={require('../../assets/image/006-schedule.png')}
                            style={{width: 30, height: 30, marginLeft: 5}}
                          />
                          <Text
                            style={{
                              color: 'black',
                              marginTop: 6,
                              fontSize: 15,
                              fontWeight: '700',
                              paddingHorizontal: 10,
                            }}>
                            เดือนนี้
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <View
                            style={{
                              width: 70,
                              height: 20,
                              backgroundColor: '#eee',
                              borderRadius: 15,
                              marginTop: 5,
                            }}>
                            <Text
                              style={{textAlign: 'center', color: '#7F8C8D'}}>
                              0 รายการ
                            </Text>
                          </View>
                          <View style={{paddingHorizontal: 5}}></View>
                          <View
                            style={{
                              width: 70,
                              height: 20,
                              backgroundColor: '#FCF3CF',
                              borderRadius: 15,
                              marginTop: 5,
                            }}>
                            <Text
                              style={{textAlign: 'center', color: '#F7DC6F'}}>
                              0 bath
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#92EE64',
                            width: '90%',
                            height: '30%',
                            marginTop: 15,
                            marginLeft: 15,
                            borderRadius: 15,
                            
                          }}>
                          <Text
                            style={{
                              color: '#358D08',
                              paddingHorizontal: 15,
                              marginTop: 15,
                              fontWeight: '700',
                              fontSize: 15,
                            }}>
                            รายรับ
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: '#358D08',
                                paddingHorizontal: 15,
                                marginTop: 10,
                              }}>
                              จำนวน 0 bath
                            </Text>
                            <Text
                              style={{
                                color: '#358D08',
                                paddingHorizontal: 135,
                              }}>
                              0 bath
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#F49584',
                            width: '90%',
                            height: '30%',
                            marginTop: 15,
                            marginLeft: 15,
                            borderRadius: 15,
                          }}>
                          <Text
                            style={{
                              color: '#E03011',
                              paddingHorizontal: 15,
                              marginTop: 15,
                              fontWeight: '700',
                              fontSize: 15,
                            }}>
                            รายจ่าย
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: '#E03011',
                                paddingHorizontal: 15,
                                marginTop: 10,
                              }}>
                              จำนวน 0 bath
                            </Text>
                            <Text
                              style={{
                                color: '#E03011',
                                paddingHorizontal: 135,
                              }}>
                              0 bath
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>
                {/* ********************************************* */}
                <View style={{ 
                  width: '100%',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius:10,
    marginBottom:10
    }}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          scaleFactor={400}
        />
        </View>
        {/* ******************************************************************* */}
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    backgroundColor: '#eee',
    width:'100%'
  },

 
  
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#48A0DA',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 45,
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
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
}
});
