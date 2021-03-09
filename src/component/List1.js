import React, { Component } from 'react';
import { Animated, Dimensions, ScrollView, View, StyleSheet, Text, TextInput, Image, TouchableOpacity, SafeAreaView, FlatList, Alert, Modal, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Container, Tab, Tabs, CheckBox } from 'native-base';
import {useSelector} from 'react-redux';
import uuid from 'uuid-random';
import ListItem from './ListItem';
import ListItem1 from './ListItem1';


const { width } = Dimensions.get("window");
export default class List1 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showadd: false,
      showcategory: false,
      isVisible: false,
      chosenDate: 'กรุณาเลือกวันที่',
      text: '',
      path: '',
      chosenDate1: 'กรุณาเลือกวันที่',
      text1: '',
      path1: '',
      showrevenue: false,
      showexpenditure: false,
      active: 0,
      xTabOne: 0,
      xTabTwo: 0,
      translateX: new Animated.Value(0),
      translateXTabOne: new Animated.Value(0),
      translateXTabTwo: new Animated.Value(width),
      translateY: -1000,

    
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: 'อาหาร',
      image: require('../../assets/image/007-burger.png')
    };
    this.calender = props.calender

  };
  
  onePressed(option, image) {

    this.setState({
      one: true,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option,
    })
    this.setState({
      image: image
    })
  }
  twoPressed(option, image) {

    this.setState({
      one: false,
      two: true,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option,
    })
    this.setState({
      image: image
    })
  }
  threePressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: true,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  fourPressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: true,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  fivePressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: true,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  sixPressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: true,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  sevenPressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: true,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  eightPressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: true,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  ninePressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: true,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  tenPressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: true,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  elevenPressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: true,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  twelvePressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: true,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  thirteenPressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: true,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  fourteenPressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: true,
      fifteen: false,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  fifteenPressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: true,
      sixteen: false,
      option: option
    })
    this.setState({
      image: image
    })
  }
  sixteenPressed(option, image) {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: true,
      option: option
    })
    this.setState({
      image: image
    })
  }
  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('DD MMMM YYYY HH:mm')
    })

  }
  
  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }
  hidePiker = () => {
    this.setState({
      isVisible: false,

    })
  }

  onChangeMoneyInput = (textValue) => {
    this.setState({
      text: textValue
    })

  };
  onChangeMoneyInput1 = (textValue) => {

    this.setState({
      text1: textValue
    });
  };
  onChangeimageInput = (text) => {
    this.setState({
      path: text
    })
      ;
  };
  onChangeimageInput1 = (text) => {

    this.setState({
      path1: text
    });
  };
  deleteItem = id => () => {
    const filteredData = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filteredData });
  }
  deleteI = id => () => {
    const filteredData = this.state.items1.filter(item => item.id !== id);
    this.setState({ items1: filteredData });
  }

  addItem() {
    const { text, path, option, chosenDate, text1, path1, chosenDate1 } = this.state;
    if (!text) {
      Alert.alert('Error', 'กรุณากรอกข้อความ');
    } else {
      this.setState((prevState) => {
        return {
          items: [...prevState.items, { id: uuid(), text, path, option, chosenDate, text1, path1, chosenDate1 }],

          showrevenue: false,
          showexpenditure: false,

        }

      });
    }
  };
  addItem1() {
    const { text1, path1, option, chosenDate1 } = this.state;
    if (!text1) {
      Alert.alert('Error', 'กรุณากรอกข้อความ');
    } else {
      this.setState((prevState) => {
        return {
          items1: [...prevState.items1, { id: uuid(), text1, path1, option, chosenDate1 }],

          showrevenue: false,
          showexpenditure: false,

        }

      });
    }
  };



  addcategory = () => {
    this.setState((prevState) => {
      return {
        showcategory: false,
        iconcat: [prevState.cate],
        namecat: [prevState.name]
      };
    });
  };

  handleSlide = type => {
    let {
      active,
      xTabOne,
      xTabTwo,
      translateX,
      translateXTabOne,
      translateXTabTwo
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
          useNativeDriver: true,
        }).start()
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start()
      ]);
    }
  };



  render() {
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY
    } = this.state;
    const { navigation } = this.props;

    const { images } = this.state;

    return (
      <View
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",

        }}
      >
        <View style={{ width: '100%', height: 90, alignItems: 'center' }}>
          <View style={{ width: '80%', height: 55, backgroundColor: "#97CEF2", marginTop: 10, borderRadius: 15 }}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 2,

                height: 55,
                position: "relative",
                borderRadius: 15,

              }}
            >
              <Animated.View
                style={{
                  position: "absolute",
                  width: "43%",
                  height: "75%",
                  top: 0,
                  left: 0,
                  backgroundColor: "#1E7BE7",
                  borderRadius: 10,
                  margin: 5,

                  transform: [
                    {
                      translateX
                    }
                  ]
                }}
              />


              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 0,
                  borderRadius: 4,
                  borderRightWidth: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,

                }}
                onLayout={event =>
                  this.setState({
                    xTabOne: event.nativeEvent.layout.x
                  })
                }
                onPress={() =>
                  this.setState({ active: 0 }, () =>
                    this.handleSlide(xTabOne)
                  )
                }
              >
                <Text
                  style={{
                    color: active === 0 ? "#fff" : "black",
                    alignItems: 'center'

                  }}
                >
                  รายจ่าย
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 0,
                  borderRadius: 4,
                  borderLeftWidth: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0
                }}
                onLayout={event =>
                  this.setState({
                    xTabTwo: event.nativeEvent.layout.x
                  })
                }
                onPress={() =>
                  this.setState({ active: 1 }, () =>
                    this.handleSlide(xTabTwo)
                  )
                }
              >
                <Text
                  style={{
                    color: active === 1 ? "#fff" : "black"
                  }}
                >
                  รายรับ
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <Animated.View
          style={{
            justifyContent: "center",
            alignItems: "center",
            transform: [
              {
                translateX: translateXTabOne
              }
            ]
          }}
          onLayout={event =>
            this.setState({
              translateY: event.nativeEvent.layout.height
            })
          }
        >
          <View style={{ width: '105%', height: 400, alignItems: 'center', marginTop: 5 }}>
            <FlatList

              data={this.state.items}
              renderItem={({ item }) => (
                <ListItem item={item} deleteItem={this.deleteItem(item.id)} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          <View style={{ width: 130 }}>
            <TouchableOpacity style={styles.text1}
              onPress={() => {
                this.setState({ showexpenditure: true });
              }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 25, textAlign: 'center' }}>+ รายการ</Text>
            </TouchableOpacity>

            <Modal transparent={true} visible={this.state.showexpenditure} >
              <View
                style={{
                  backgroundColor: '#00000aaa',
                  flex: 1,

                }}>

                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    width: '100%',
                    height: '100%',

                  }}>
                  <View style={{ width: '100%', height: 55, backgroundColor: 'red', flexDirection: 'row' }}>

                    <Icon
                      style={{ color: '#fff', marginTop: 10 }}
                      name={'arrow-left'}
                      size={30}
                      onPress={() => {
                        this.setState({ showexpenditure: false });
                      }}
                    />
                    <Text style={{ fontSize: 20, color: "#fff", marginLeft: 125, marginTop: 10 }}>เพิ่มรายการ</Text>
                  </View>
                  <ScrollView Vertical={true} showsVerticalScrollIndicator={false} >

                    <View style={{ flex: 1, backgroundColor: '#eee', height: '110%' }}>
                      <View style={{ flex: 1, width: '100%' }}>

                        <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>

                          <View style={[styles.top, styles.box]}>

                            <View style={{ flexDirection: 'row', }}>
                              <View style={{ backgroundColor: '#D6EAF8', width: 40, height: 35, marginTop: 7, marginLeft: 5, borderRadius: 50 }}>

                                <Image source={require('../../assets/image/overtime.png')}
                                  style={{ width: 25, height: 25, marginLeft: 7, marginTop: 5 }} />

                              </View>

                              <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>วันที่และเวลา</Text>
                                <Text style={{ marginLeft: 15, color: "#707B7C" }}>วันที่ของรายการ</Text>
                              </View>

                            </View>
                            <View style={styles.Boxcenter}>
                              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                                <View style={{
                                  width: 340, height: 50,
                                  backgroundColor: '#FB395C',
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
                                  <TouchableOpacity onPress={this.showPicker}>
                                    <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', marginTop: 5 }} >
                                      {this.state.chosenDate}

                                    </Text>


                                    <DateTimePicker
                                      isVisible={this.state.isVisible}
                                      onConfirm={this.handlePicker}
                                      onCancel={this.hidePiker}


                                    ></DateTimePicker></TouchableOpacity>
                                </View>

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
                              <View style={styles.Boxcenter}>
                                <TouchableOpacity>
                                  <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                                    <View style={{
                                      width: 340, height: 70, backgroundColor: '#D970F2', borderRadius: 10, shadowColor: "#000",
                                      shadowOffset: {
                                        width: 2,
                                        height: 2,
                                      },
                                      shadowOpacity: 0.25,
                                      shadowRadius: 3.84,
                                      elevation: 3,
                                    }}>
                                      <TouchableOpacity onPress={() => {
                                        this.setState({ showcategory: true });
                                      }}>
                                        <View>
                                          <Image />
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                          <View style={{ width: 45, height: 45, margin: 10, borderRadius: 7 }}>

                                            <Image style={{ width: 40, height: 40 }} source={this.state.image} />

                                          </View>
                                          <View style={{
                                            width: 150,
                                            height: 30,
                                            marginTop: 20,
                                            marginLeft: 15
                                          }}>

                                            <Text style={{ textAlign: 'center', fontSize: 20, color: '#FFF' }}>
                                              {this.state.option}
                                            </Text>



                                          </View>
                                          <View style={{ marginHorizontal: 70, marginTop: 15 }}>
                                            <Icon name={'caret-down'} size={30} color={'#fff'} />
                                          </View>
                                        </View>
                                      </TouchableOpacity>

                                      <Modal transparent={true} visible={this.state.showcategory}>
                                        <View
                                          style={{
                                            backgroundColor: '#00000aaa',
                                            flex: 1,
                                            alignItems: 'center',

                                          }}>

                                          <View
                                            style={{
                                              backgroundColor: '#F2F2F2',
                                              borderRadius: 10,
                                              width: 350,
                                              height: 600,
                                              marginTop: 20,

                                            }}>
                                            <Text style={{ marginTop: 10, textAlign: 'center', fontWeight: '600', fontSize: 20 }}>หมวดหมู่</Text>
                                            <Text style={{ marginTop: 5, textAlign: 'center' }}>เลือกหมวดหมู่ของรายการ</Text>
                                            <View style={{
                                              flex: 1,
                                              flexDirection: 'column',
                                              justifyContent: 'flex-start',
                                              alignItems: 'stretch',

                                            }}>
                                              <View style={{ flex: 1 }}>


                                                <View
                                                  style={{
                                                    width: "80%",
                                                    marginLeft: "auto",
                                                    marginRight: "auto",
                                                    alignItems: "center"
                                                  }}
                                                >
                                                  <View style={{ width: 100, height: 50, backgroundColor: 'red', margin: 15, borderRadius: 10 }}>
                                                    <Text style={{ textAlign: 'center', fontSize: 20, margin: 10, fontWeight: '500', color: '#fff' }}>
                                                      รายจ่าย
                                                            </Text>
                                                  </View>

                                                  <View style={{ width: '100%', height: 420, backgroundColor: "#F2F2F2" }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                      <TouchableOpacity>
                                                        <View style={styles.imagcategory}>

                                                          <Image
                                                            source={require('../../assets/image/007-burger.png')}
                                                            style={styles.imagcategory1}
                                                          />
                                                          <View style={{ flexDirection: 'row' }}>
                                                            <CheckBox
                                                              checked={this.state.one}
                                                              onPress={() =>
                                                                this.onePressed('อาหาร')
                                                              }

                                                              style={{ marginRight: 10 }}
                                                            />
                                                            <Text style={{ textAlign: 'center' }}>อาหาร</Text>
                                                          </View>
                                                        </View>
                                                      </TouchableOpacity>
                                                      <TouchableOpacity>
                                                        <View style={styles.imagcategory}>
                                                          <Image
                                                            source={require('../../assets/image/008-car.png')}
                                                            style={styles.imagcategory1}
                                                          />
                                                          <View style={{ flexDirection: 'row' }}>
                                                            <CheckBox
                                                              checked={this.state.two}
                                                              onPress={() => this.twoPressed('เดินทาง')}
                                                              style={{ marginRight: 10 }}
                                                            />
                                                            <Text style={{ textAlign: 'center' }} >เดินทาง</Text>
                                                          </View>
                                                        </View>
                                                      </TouchableOpacity>
                                                      <TouchableOpacity>
                                                        <View style={styles.imagcategory}>
                                                          <Image
                                                            source={require('../../assets/image/001-shirt.png')}
                                                            style={styles.imagcategory1}
                                                          />
                                                          <View style={{ flexDirection: 'row' }}>
                                                            <CheckBox
                                                              checked={this.state.six}
                                                              onPress={() => this.sixPressed('เสื้อผ้า')}
                                                              style={{ marginRight: 10 }}
                                                            />
                                                            <Text style={{ textAlign: 'center' }} >เสื้อผ้า</Text>
                                                          </View>

                                                        </View>
                                                      </TouchableOpacity>

                                                    </View>

                                                    <View style={{ flexDirection: 'row' }}>
                                                      <TouchableOpacity>
                                                        <View style={styles.imagcategory}>
                                                          <Image
                                                            source={require('../../assets/image/003-bank.png')}
                                                            style={styles.imagcategory1}
                                                          />
                                                          <View style={{ flexDirection: 'row' }}>
                                                            <CheckBox
                                                              checked={this.state.four}
                                                              onPress={() => this.fourPressed('ถูกยืม')}
                                                              style={{ marginRight: 10 }}
                                                            />
                                                            <Text style={{ textAlign: 'center' }} >ถูกยืม</Text>
                                                          </View>

                                                        </View>
                                                      </TouchableOpacity>
                                                      <TouchableOpacity>
                                                        <View style={styles.imagcategory}>
                                                          <Image
                                                            source={require('../../assets/image/010-shopping-cart.png')}
                                                            style={styles.imagcategory1}
                                                          />
                                                          <View style={{ flexDirection: 'row' }}>
                                                            <CheckBox
                                                              checked={this.state.five}
                                                              onPress={() => this.fivePressed('ของใช้')}
                                                              style={{ marginRight: 10 }}
                                                            />
                                                            <Text style={{ textAlign: 'center' }} >ของใช้</Text>
                                                          </View>

                                                        </View>
                                                      </TouchableOpacity>
                                                      <TouchableOpacity>
                                                        <View style={styles.imagcategory}>
                                                          <Image
                                                            source={require('../../assets/image/005-post-it.png')}
                                                            style={styles.imagcategory1}
                                                          />
                                                          <View style={{ flexDirection: 'row' }}>
                                                            <CheckBox
                                                              checked={this.state.ten}
                                                              onPress={() => this.tenPressed('อืนๆ')}
                                                              style={{ marginRight: 10 }}
                                                            />
                                                            <Text style={{ textAlign: 'center' }} >อืนๆ</Text>
                                                          </View>

                                                        </View>
                                                      </TouchableOpacity>

                                                    </View>

                                                    <TouchableOpacity style={{ marginTop: 50 }} onPress={this.addcategory}>
                                                      <View style={styles.category}>
                                                        <Icon name={'check'} size={20} color={'#fff'}>
                                                          <Text>สำเร็จ</Text>
                                                        </Icon>
                                                      </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => {
                                                      this.setState({ showcategory: false })
                                                    }}
                                                      style={styles.category}>
                                                      <View >
                                                        <Icon name={'times'} size={20} color={"#fff"}>
                                                          <Text>ยกเลิก</Text></Icon>
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
                                  </View>
                                </TouchableOpacity>
                              </View>


                            </View>
                          </View>
                        </ScrollView>
                      </View>
                      {/*******************************************************************************************/}

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
                                  <View style={{ width: 300, height: 50, backgroundColor: '#eee', borderRadius: 10 }}>
                                    <TextInput style={{ textAlign: 'right' }} placeholder="0" keyboardType="numeric" onChangeText={this.onChangeMoneyInput} ></TextInput>
                                  </View>
                                  <Text style={{ marginLeft: 5, marginTop: 10 }} >bath</Text>
                                </View>
                              </View>

                            </View>
                          </View>
                        </ScrollView>
                      </View>
                      {/*******************************************************************************************/}
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
                                    <TextInput style={{}} onChangeText={this.onChangeimageInput} placeholder='...'></TextInput>
                                  </View>
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


                      <View style={{ flex: 1, width: '100%', marginTop: 15 }}>
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
                                <View style={styles.Boxcenter}>
                                  <View style={{ flexDirection: 'column', width: 280 }}>
                                    <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>รูปภาพ</Text>
                                    <Text style={{ marginLeft: 15, color: "#707B7C" }}>รวมรูปภาพที่ถูกแนบไว้ในร่ยการ</Text>
                                  </View>
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

                  <TouchableOpacity
                    onPress={() => {
                      this.addItem(this.state.text)
                    }}
                  >
                    <View style={{
                      width: 100, height: 40, backgroundColor: '#4B87EC', marginLeft: 140,
                      flexDirection: 'row', borderRadius: 11
                    }}>
                      <Icon style={{ color: '#ffffff', margin: 5 }} size={30} name={'save'} />
                      <Text style={{ fontSize: 20, marginLeft: 2, color: '#ffffff' }}>บันทึก</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            {/* //////////////////////////////////////สิ้นสุดรายจ่าย///////////////////////////////////////////////////////// */}

          </View>



        </Animated.View>

        <Animated.View
          style={{
            justifyContent: "center",
            alignItems: "center",
            transform: [
              {
                translateX: translateXTabTwo
              },
              {
                translateY: -translateY
              }
            ]
          }}
        >
          <View style={{ width: '105%', height: 400, alignItems: 'center', marginTop: 5 }}>

            <FlatList
              data={this.state.items1}
              renderItem={({ item }) => (
                <ListItem1 item={item} deleteItem={this.deleteItem(item.id)} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <TouchableOpacity style={styles.text2}
            onPress={() => {
              this.setState({ showrevenue: true });
            }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 25, textAlign: 'center' }}>+ รายการ</Text>

          </TouchableOpacity>

          <Modal transparent={true} visible={this.state.showrevenue} >
            <View
              style={{
                backgroundColor: '#00000aaa',
                flex: 1,

              }}>

              <View
                style={{
                  flex: 1,
                  backgroundColor: '#ffffff',
                  borderRadius: 10,
                  width: '100%',
                  height: '100%',

                }}>
                <View style={{ width: '100%', height: 55, backgroundColor: 'green', flexDirection: 'row' }}>

                  <Icon
                    style={{ color: '#fff', marginTop: 10 }}
                    name={'arrow-left'}
                    size={30}
                    onPress={() => {
                      this.setState({ showrevenue: false });
                    }}
                  />
                  <Text style={{ fontSize: 20, color: "#fff", marginLeft: 125, marginTop: 10 }}>เพิ่มรายการ</Text>
                </View>
                <ScrollView Vertical={true} showsVerticalScrollIndicator={false} >

                  <View style={{ flex: 1, backgroundColor: '#eee', height: '100%' }}>
                    <View style={{ flex: 1, width: '100%' }}>

                      <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>

                        <View style={[styles.top, styles.box]}>

                          <View style={{ flexDirection: 'row', }}>
                            <View style={{ backgroundColor: '#D6EAF8', width: 40, height: 35, marginTop: 7, marginLeft: 5, borderRadius: 50 }}>

                              <Image source={require('../../assets/image/overtime.png')}
                                style={{ width: 25, height: 25, marginLeft: 7, marginTop: 5 }} />

                            </View>

                            <View style={{ flexDirection: 'column' }}>
                              <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>วันที่และเวลา</Text>
                              <Text style={{ marginLeft: 15, color: "#707B7C" }}>วันที่ของรายการ</Text>
                            </View>

                          </View>
                          <View style={styles.Boxcenter}>
                            <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                              <View style={{
                                width: 340, height: 50, backgroundColor: '#6BCD1D', borderRadius: 10, shadowColor: "#000",
                                shadowOffset: {
                                  width: 2,
                                  height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 3,
                              }}>
                                <TouchableOpacity onPress={this.showPicker}>
                                  <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', marginTop: 5 }} >
                                    {this.state.chosenDate1}

                                  </Text>


                                  <DateTimePicker
                                    isVisible={this.state.isVisible}
                                    onConfirm={this.handlePicker1}
                                    onCancel={this.hidePiker}


                                  ></DateTimePicker></TouchableOpacity>
                              </View>

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
                                <Text style={{ marginLeft: 15, color: "#707B7C" }}>รายรับ</Text>
                              </View>
                            </View>
                            <View style={styles.Boxcenter}>
                              <TouchableOpacity>
                                <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                                  <View style={{ width: 340, height: 70, backgroundColor: '#C06DFC', borderRadius: 10, shadowColor: "#000",
                                shadowOffset: {
                                  width: 2,
                                  height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 3, }}>
                                    <TouchableOpacity onPress={() => {
                                      this.setState({ showcategory: true });
                                    }}>
                                      <View>
                                        <Image />
                                      </View>
                                      <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: 45, height: 45, margin: 10, borderRadius: 7 }}>

                                          <Image style={{ width: 40, height: 40 }} source={this.state.image} />

                                        </View>
                                        <View style={{
                                          width: 150,
                                          height: 30,
                                          marginTop: 20,
                                          marginLeft: 15
                                        }}>

                                          <Text style={{ textAlign: 'center', fontSize: 20, color: '#FFF' }}>
                                            {this.state.option}
                                          </Text>



                                        </View>
                                        <View style={{ marginHorizontal: 70, marginTop: 15 }}>
                                          <Icon name={'caret-down'} size={30} color={'#fff'} />
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <Modal transparent={true} visible={this.state.showcategory}>
                                      <View
                                        style={{
                                          backgroundColor: '#00000aaa',
                                          flex: 1,
                                          alignItems: 'center',
                                          justifyContent: 'center'

                                        }}>

                                        <View
                                          style={{
                                            backgroundColor: '#F2F2F2',
                                            borderRadius: 10,
                                            width: 350,
                                            height: 600,


                                          }}>
                                          <Text style={{ marginTop: 10, textAlign: 'center', fontWeight: '600', fontSize: 20 }}>หมวดหมู่</Text>
                                          <Text style={{ marginTop: 5, textAlign: 'center' }}>เลือกหมวดหมู่ของรายการ</Text>
                                          <View style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start',
                                            alignItems: 'stretch',

                                          }}>
                                            <View style={{ flex: 1 }}>


                                              <View
                                                style={{
                                                  width: "80%",
                                                  marginLeft: "auto",
                                                  marginRight: "auto",
                                                  alignItems: 'center'
                                                }}
                                              >

                                                <View style={{ width: 100, height: 50, backgroundColor: 'green', margin: 15, borderRadius: 10 }}>
                                                  <Text style={{ textAlign: 'center', fontSize: 20, margin: 10, fontWeight: '500', color: '#fff' }}>
                                                    รายรับ
                                                            </Text>
                                                </View>

                                                {/* ///////////////////////////////////////////////รายรับ//////////////////////////////////////////////////////////////// */}
                                                <View style={{ width: '100%', height: 300, backgroundColor: "#F2F2F2" }}>
                                                  <View style={{ flexDirection: 'row' }}>
                                                    <TouchableOpacity>
                                                      <View style={styles.imagcategory}>
                                                        <Image
                                                          source={require('../../assets/image/007-pay.png')}
                                                          style={styles.imagcategory1}
                                                        />
                                                        <View style={{ flexDirection: 'row' }}>
                                                          <CheckBox
                                                            checked={this.state.eleven}
                                                            onPress={() => this.elevenPressed('ได้รับคืน')}
                                                            style={{ marginRight: 10 }}
                                                          />
                                                          <Text style={{ textAlign: 'center' }} >ได้รับคืน</Text>
                                                        </View>
                                                      </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                      <View style={styles.imagcategory}>
                                                        <Image
                                                          source={require('../../assets/image/008-house-insurance.png')}
                                                          style={styles.imagcategory1}
                                                        />
                                                        <View style={{ flexDirection: 'row' }}>
                                                          <CheckBox
                                                            checked={this.state.twelve}
                                                            onPress={() => this.twelvePressed('รายได้ธุรกิจ')}
                                                            style={{ marginRight: 10 }}
                                                          />
                                                          <Text style={{ textAlign: 'center' }} >รายได้ธุรกิจ</Text>
                                                        </View>

                                                      </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                      <View style={styles.imagcategory}>
                                                        <Image
                                                          source={require('../../assets/image/001-money.png')}
                                                          style={styles.imagcategory1}
                                                        />
                                                        <View style={{ flexDirection: 'row' }}>
                                                          <CheckBox
                                                            checked={this.state.thirteen}
                                                            onPress={() => this.thirteenPressed('รายได้')}
                                                            style={{ marginRight: 10 }}
                                                          />
                                                          <Text style={{ textAlign: 'center' }} >รายได้</Text>
                                                        </View>

                                                      </View>
                                                    </TouchableOpacity>
                                                  </View>
                                                  <View style={{ flexDirection: 'row' }}>
                                                    <TouchableOpacity>
                                                      <View style={styles.imagcategory}>
                                                        <Image
                                                          source={require('../../assets/image/009-giftbox.png')}
                                                          style={styles.imagcategory1}
                                                        />
                                                        <View style={{ flexDirection: 'row' }}>
                                                          <CheckBox
                                                            checked={this.state.fourteen}
                                                            onPress={() => this.fourteenPressed('ได้ฟรี')}
                                                            style={{ marginRight: 10 }}
                                                          />
                                                          <Text style={{ textAlign: 'center' }} >ได้ฟรี</Text>
                                                        </View>
                                                      </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                      <View style={styles.imagcategory}>
                                                        <Image
                                                          source={require('../../assets/image/010-gold.png')}
                                                          style={styles.imagcategory1}
                                                        />
                                                        <View style={{ flexDirection: 'row' }}>
                                                          <CheckBox
                                                            checked={this.state.fifteen}
                                                            onPress={() => this.fifteenPressed('ถอนเงิน')}
                                                            style={{ marginRight: 10 }}
                                                          />
                                                          <Text style={{ textAlign: 'center' }} >ถอนเงิน</Text>
                                                        </View>

                                                      </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                      <View style={styles.imagcategory}>
                                                        <Image
                                                          source={require('../../assets/image/005-post-it.png')}
                                                          style={styles.imagcategory1}
                                                        />
                                                        <View style={{ flexDirection: 'row' }}>
                                                          <CheckBox
                                                            checked={this.state.sixteen}
                                                            onPress={() => this.sixteenPressed('อืนๆ')}
                                                            style={{ marginRight: 10 }}
                                                          />
                                                          <Text style={{ textAlign: 'center' }} >อืนๆ</Text>
                                                        </View>

                                                      </View>
                                                    </TouchableOpacity>
                                                  </View>
                                                  <View style={{ flexDirection: 'row' }}>


                                                  </View>
                                                </View>
                                                <TouchableOpacity onPress={this.addcategory}>
                                                  <View style={styles.category1}>
                                                    <Icon name={'check'} size={20} color={'#fff'}>
                                                      <Text>สำเร็จ</Text>
                                                    </Icon>
                                                  </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => {
                                                  this.setState({ showcategory: false })
                                                }}
                                                  style={styles.category1}>
                                                  <View >
                                                    <Icon name={'times'} size={20} color={"#fff"}>
                                                      <Text>ยกเลิก</Text></Icon>
                                                  </View>
                                                </TouchableOpacity>



                                              </View>
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </Modal>



                                  </View>
                                </View>
                              </TouchableOpacity>
                            </View>


                          </View>
                        </View>
                      </ScrollView>
                    </View>
                    {/*******************************************************************************************/}

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
                              <View style={{ flexDirection: 'column', width: 250, height: 50 }}>
                                <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 15 }}>จำนวน</Text>
                                <Text style={{ marginLeft: 15, color: "#707B7C" }}>จำนวนเงิน?</Text>
                              </View>
                              <View style={{
                                backgroundColor: '#eee', width: 40, height: 35,
                                borderRadius: 5, marginTop: 7, marginHorizontal: 40
                              }}>
                                <TouchableOpacity>
                                  <Image source={require('../../assets/image/calculator.jpg')}
                                    style={{ width: 25, height: 25, margin: 5 }} />
                                </TouchableOpacity>
                              </View>
                            </View>
                            <View style={styles.Boxcenter}>
                              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                                <View style={{ width: 300, height: 50, backgroundColor: '#eee', borderRadius: 10 }}>
                                  <TextInput style={{ textAlign: 'right' }} placeholder="0" keyboardType='numeric' onChangeText={this.onChangeMoneyInput1} ></TextInput>
                                </View>
                                <Text style={{ marginLeft: 5, marginTop: 10 }} >bath</Text>
                              </View>
                            </View>

                          </View>
                        </View>
                      </ScrollView>
                    </View>
                    {/*******************************************************************************************/}
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
                              <View style={{ flexDirection: 'column', width: 260 }}>
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
                                  <TextInput style={{}} onChangeText={this.onChangeimageInput1} placeholder='...'></TextInput>
                                </View>
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

                    <View style={{ flex: 1, width: '100%', marginTop: 15 }}>
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

                <TouchableOpacity
                  onPress={() => {
                    this.addItem1(this.state.text1)
                  }}
                >
                  <View style={{
                    width: 100, height: 40, backgroundColor: '#4B87EC', marginLeft: 140,
                    flexDirection: 'row', borderRadius: 11
                  }}>
                    <Icon style={{ color: '#ffffff', margin: 5 }} size={30} name={'save'} />
                    <Text style={{ fontSize: 20, marginLeft: 2, color: '#ffffff' }}>บันทึก</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>




        </Animated.View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
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
  Box: {
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
  },
  category: {
    width: 275,
    height: 50,
    backgroundColor: "red",
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  category1: {
    width: 275,
    height: 50,
    backgroundColor: "green",
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  imagcategory: {
    width: 70,
    height: 75,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10
  },
  imagcategory1: {
    width: 50,
    height: 50,
    marginLeft: 7,
    marginTop: 5
  },
  Boxcenter: {
    width: 400,
    height: 100,
    alignItems: 'center',
    justifyContent: "center",

  }
});

