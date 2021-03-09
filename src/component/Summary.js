import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Home from '../../screens/Home';
import Home1 from '../../screens/Home1'

const devic = Dimensions.get("window").height
const Separator = () => (
  <View style={styles.separator} />
);
export default class TabsAdvancedExample extends React.Component {
  render() {
    return (
      <Container>

        <Tabs>
          <Tab heading="ทั่วไป">
            <>

              <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#eee' }}>
                  <View style={{ width: 370, height: 500, backgroundColor: '#fff', borderRadius: 15, margin: 10 }}>

                    <View style={{ width: 400, height: 500 }}>
                      <View style={{ height: '9%', borderRadius: 70, backgroundColor: '#ACC5F0', width: '12%', margin: 15, flexDirection: 'row' }}>
                        <Icon style={{ color: '#3373DF', margin: 5 }} size={35} name={'outdent'} />
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                          <Text >ทั้งหมด</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 70, height: 20, backgroundColor: '#eee', borderRadius: 15, marginTop: 5 }}>
                              <Text style={{ textAlign: 'center', color: '#7F8C8D' }}>0 รายการ</Text>
                            </View>
                            <View style={{ paddingHorizontal: 5 }}></View>
                            <View style={{ width: 70, height: 20, backgroundColor: '#FCF3CF', borderRadius: 15, marginTop: 5 }}>
                              <Text style={{ textAlign: 'center', color: '#F7DC6F' }}>0 bath</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View
                          style={{
                            backgroundColor: '#92EE64',
                            width: '85%',
                            height: '20%',
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
                            width: '85%',
                            height: '20%',
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

                      <BarChart
                        data={{
                          labels: ['รายจ่าย', 'รายรับ'],
                          datasets: [
                            {
                              data: [30, 25],
                            },
                          ],
                        }}
                        width={370}
                        height={220}

                        chartConfig={{
                          backgroundGradientFrom: '#fff',
                          backgroundGradientTo: '#fff',
                          decimalPlaces: 2,
                          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                          style: {
                            borderRadius: 16,
                          },
                        }}
                        style={{
                          marginVertical: 8,
                          borderRadius: 16,
                        }}
                      />

                    </View>
                  </View>
                </View>
              </ScrollView>
            </>
          </Tab>
          <Tab heading="รายจ่าย">
            <View style={{ flex: 1, width: '100%', height: '100%', marginBottom: 5 }}>

              <Home />

            </View>
          </Tab>
          <Tab heading="รายรับ">
            <View style={{ flex: 1, width: '100%', height: '100%', marginBottom: 5 }}>

              <Home1 />

            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',

  },
  background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },

  text1: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',

  },
  separator: {
    marginVertical: 9,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
