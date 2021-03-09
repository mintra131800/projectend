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
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInput, TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-navigation';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const Separator = () => <View style={styles.separator} />;
const deviceHeight = Dimensions.get('window').height;
export default class Hom2 extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      value: '+Create Account ',
      money: ' 0',
      showMe: false,
      showEdit: false,
      myTextInput: '+Creat Account',
      users: ['+creay'],
    };
  }

  /*onChangeTextInput = (event) => {
    this.setState({value: event});
  };*/
  onChangeMoneyInput = (text) => {
    this.setState({
      money: text
    });
  };
  onChangInput = (event) => {
    this.setState({
      myTextInput: event,
    });
  };
  onAddUsers = () => {
    this.setState((prevState) => {
      return {
        myTextInput: ' ',
        show:false,
        users: [ prevState.myTextInput],
      };
    });
  };

  render() {
    let {value, money, onTouch} = this.state;
    let popupRef = React.createRef();

    const onShowPopup = () => {
      popupRef.show();
    };

    const onClosePopup = () => {
      popupRef.close();
    };
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
            <View style={{alignItems: 'flex-end', width: 350, height: 22}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({showMe: true});
                }}>
                <Icon size={25} name={'book'} color={'#fff'} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                this.setState({show: true});
              }}
              style={styles.buttonFacebookStyle}
              activeOpacity={0.5}>
              <Image
                source={require('../../assets/image/d1.png')}
                style={styles.buttonImageIconStyle}
              />

              <View style={{width: 310, height: 30}}>
                {this.state.users.map((item) => (
                  <Text style={styles.users} key={item}>
                    {item}
                  </Text>
                ))}
              </View>
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
                            placeholder="+Create Account"
                              onChangeText={this.onChangInput}
                            />
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
                              onChangeText={
                                this.onChangeMoneyInput
                              }></TextInput>
                          </View>
                          <View
                            style={{
                              width: 280,
                              height: 40,
                              backgroundColor: '#435BE3',
                              marginTop: 30,
                              borderRadius: 7,
                            }}>
                            <Button
                              title="Add user name"
                              onPress={() => {
                                this.setState({show: false});
                              }}
                              onPress={this.onAddUsers}
                            />
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
          <View style={{margin: 5}}>
            <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>
              <View style={{flex: 1}}>
                <View style={{flex: 1, width: 340}}>
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
                            source={require('../../assets/image/d1.png')}
                            style={styles.buttonImageIconStyle}
                          />
                          <View style={{width: 200, height: 40}}>
                            {this.state.users.map((item) => (
                              <Text
                                style={{
                                  color: 'black',
                                  marginTop: 6,
                                  fontSize: 15,
                                  fontWeight: '700',
                                  marginLeft: 20,
                                }}
                                key={item}>
                                {item}
                              </Text>
                            ))}
                          </View>

                          <View style={{marginLeft: 5, marginTop: 10}}>
                            <TouchableOpacity
                              onPress={() => {
                                this.setState({showEdit: true});
                              }}>
                              <Text>แก้ไข</Text>
                            </TouchableOpacity>
                          </View>

                          <Modal
                            transparent={true}
                            visible={this.state.showEdit}>
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
                                          onChangeText={this.onChangeTextInput}
                                          value={value}></TextInput>
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
                                          onChangeText={this.onChangeMoneyInput}
                                          money={money}></TextInput>
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
                                          onPress={() => {
                                            this.setState({showEdit: false});
                                          }}
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
                            source={require('../../assets/image/money.png')}
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
                          <Text style={{marginRight: 5}}>
                            {money + ' ' + 'bath'}
                          </Text>
                        </View>
                        <Separator />
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            source={require('../../assets/image/credicon.png')}
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
                            source={require('../../assets/image/money-bag.jpg')}
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
                            source={require('../../assets/image/neesin.jpg')}
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

                          <Text style={{marginRight: 5}}>
                            {money + ' ' + 'bath'}
                          </Text>
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
                          <Text style={{marginRight: 5}}>
                            {money + ' ' + 'bath'}
                          </Text>
                        </View>
                        <Separator />
                      </View>
                    </View>
                  </ScrollView>
                </View>
                {/*******************************************************************************************/}
                <View style={{flex: 1, width: 340, marginTop: 10}}>
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
                            source={require('../../assets/image/overtime.png')}
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
                            backgroundColor: '#D7BDE2',
                            width: '90%',
                            height: '30%',
                            marginTop: 15,
                            marginLeft: 15,
                            borderRadius: 15,
                            color: '#8E44AD',
                          }}>
                          <Text
                            style={{
                              color: '#F257C7',
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
                                color: '#F257C7',
                                paddingHorizontal: 15,
                                marginTop: 10,
                              }}>
                              จำนวน 0 bath
                            </Text>
                            <Text
                              style={{
                                color: '#F257C7',
                                paddingHorizontal: 145,
                              }}>
                              0 bath
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#F5C6E8',
                            width: '90%',
                            height: '30%',
                            marginTop: 15,
                            marginLeft: 15,
                            borderRadius: 15,
                          }}>
                          <Text
                            style={{
                              color: '#8E44AD',
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
                                color: '#8E44AD',
                                paddingHorizontal: 15,
                                marginTop: 10,
                              }}>
                              จำนวน 0 bath
                            </Text>
                            <Text
                              style={{
                                color: '#8E44AD',
                                paddingHorizontal: 145,
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
                <View style={{flex: 1, width: 340, marginTop: 10}}>
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
                            source={require('../../assets/image/kawaii.jpg')}
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
                            backgroundColor: '#D7BDE2',
                            width: '90%',
                            height: '30%',
                            marginTop: 15,
                            marginLeft: 15,
                            borderRadius: 15,
                            color: '#8E44AD',
                          }}>
                          <Text
                            style={{
                              color: '#F257C7',
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
                                color: '#F257C7',
                                paddingHorizontal: 15,
                                marginTop: 10,
                              }}>
                              จำนวน 0 bath
                            </Text>
                            <Text
                              style={{
                                color: '#F257C7',
                                paddingHorizontal: 145,
                              }}>
                              0 bath
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#F5C6E8',
                            width: '90%',
                            height: '30%',
                            marginTop: 15,
                            marginLeft: 15,
                            borderRadius: 15,
                          }}>
                          <Text
                            style={{
                              color: '#8E44AD',
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
                                color: '#8E44AD',
                                paddingHorizontal: 15,
                                marginTop: 10,
                              }}>
                              จำนวน 0 bath
                            </Text>
                            <Text
                              style={{
                                color: '#8E44AD',
                                paddingHorizontal: 145,
                              }}>
                              0 bath
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    backgroundColor: '#eee',
  },

  panel: {
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 10,
    height: 300,
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
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
});
