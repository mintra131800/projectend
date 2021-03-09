// 7 Type of Graph using React Native Chart Kit
// https://aboutreact.com/react-native-chart-kit/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

//import React Native chart Kit for different kind of Chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const MyBezierLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16} // from react-native
        height={220}
        yAxisLabel={'Rs'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const MyLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Line Chart</Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const MyProgressChart = () => {
  return (
    <>
      <Text style={styles.header}>Progress Chart</Text>
      <ProgressChart
        data={[0.4, 0.6, 0.8]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const MyBarChart = () => {
  return (
    <>
      <Text style={styles.header}>Bar Chart</Text>
      <BarChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={'Rs'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};
const MyStackedBarChart = () => {
  return (
    <>
      <Text style={styles.header}>Stacked Bar Chart</Text>
      <StackedBarChart
        data={{
          labels: ['Test1', 'Test2'],
          legend: ['L1', 'L2', 'L3'],
          data: [
            [60, 60, 60],
            [30, 30, 60],
          ],
          barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const MyPieChart = () => {
  return (
    <>
      <Text style={styles.header}>Pie Chart</Text>
      <PieChart
        data={[
          {
            name: 'Seoul',
            population: 21500000,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Toronto',
            population: 2800000,
            color: '#F00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'New York',
            population: 8538000,
            color: '#ffffff',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Moscow',
            population: 11920000,
            color: 'rgb(0, 0, 255)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

const MyContributionGraph = () => {
  return (
    <>
      <Text style={styles.header}>Contribution Graph</Text>
      <ContributionGraph
        values={[
          {date: '2019-01-02', count: 1},
          {date: '2019-01-03', count: 2},
          {date: '2019-01-04', count: 3},
          {date: '2019-01-05', count: 4},
          {date: '2019-01-06', count: 5},
          {date: '2019-01-30', count: 2},
          {date: '2019-01-31', count: 3},
          {date: '2019-03-01', count: 2},
          {date: '2019-04-02', count: 4},
          {date: '2019-03-05', count: 2},
          {date: '2019-02-30', count: 4},
        ]}
        endDate={new Date('2019-04-01')}
        numDays={105}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
    </>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            {/*Example of Bezier LineChart*/}
            <MyBezierLineChart />
            {/*Example of LineChart*/}
            <MyLineChart />
            {/*Example of Progress Chart*/}
            <MyProgressChart />
            {/*Example of Bar Chart*/}
            <MyBarChart />
            {/*Example of StackedBar Chart*/}
            <MyStackedBarChart />
            {/*Example of Pie Chart*/}
            <MyPieChart />
            {/*Example of Contribution Chart*/}
            <MyContributionGraph />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});








import React, { Component } from 'react';
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
  } from 'react-native';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading="ทั่วไป">
          <>
      <SafeAreaView style={{ width: 412 }}>
        <Summary1 />
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
      <ScrollView Vertical={true} showsVerticalScrollIndicator={false} >
        
        <View style={{ width: 390, height: 500, backgroundColor: '#ffffff', borderRadius: 15,margin:10}}>
        
            <View style={{width:400,height:500}}>
          <View style={{ height:'9%', borderRadius: 70, backgroundColor: '#ACC5F0', width: '12%', margin: 15, flexDirection: 'row' }}>
            <Icon style={{ color: '#3373DF', margin: 5 }} size={35} name={'outdent'} />
            <View style={{flexDirection:'column',marginLeft:15}}>
            <Text >ทั้งหมด</Text>
            <View style={{ flexDirection:'row' }}>
                    <View style={{ width: 70, height: 20, backgroundColor: '#eee', borderRadius: 15,marginTop:5 }}>
                      <Text style={{ textAlign: 'center',color:'#7F8C8D'}}>0 รายการ</Text>
                    </View>
                    <View style={{ paddingHorizontal: 5 }}></View>
                    <View style={{ width: 70, height: 20, backgroundColor: '#FCF3CF', borderRadius: 15 ,marginTop:5}}>
                      <Text style={{ textAlign: 'center',color:'#F7DC6F' }}>0 bath</Text>
                    </View>
                  </View>
                  </View>
          </View>
          <View style={{
                    backgroundColor:'#D7BDE2',
                    width:'90%',
                    height:'15%',
                    marginTop:15,
                    marginLeft:15,
                    borderRadius:15,
                    color:'#8E44AD',
                    }}>
                    <Text style={{color:'#F257C7',paddingHorizontal:15,marginTop:15,fontWeight:'700',fontSize:15}}>
                      รายจ่าย
                    </Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#F257C7',paddingHorizontal:15,marginTop:10}}>
                      จำนวน 0 รายการ
                    </Text>
                    <Text style={{color:'#F257C7',paddingHorizontal:145}}>
                      0 bath
                    </Text>
                    </View>
                  </View>

                  <View style={{
                    backgroundColor:'#F5C6E8',
                    width:'90%',
                    height:'15%',
                    marginTop:15,
                    marginLeft:15,
                    borderRadius:15,
                    
                    }}>
                    <Text style={{color:'#8E44AD',paddingHorizontal:15,marginTop:15,fontWeight:'700',fontSize:15}}>
                      รายรับ
                    </Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#8E44AD',paddingHorizontal:15,marginTop:10}}>
                      จำนวน 0 รายการ
                    </Text>
                    <Text style={{color:'#8E44AD',paddingHorizontal:145}}>
                      0 bath
                    </Text>
                    </View>
                  </View>
          <PieChart
            data={[
              {
                name: 'S',
                population: 21500000,
                color: 'rgba(131, 167, 234, 1)',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              },
              {
                name: 'Trt',
                population: 2800000,
                color: '#F00',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              },
              {
                name: 'NY',
                population: 8538000,
                color: '#E3ACF0',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              },
              {
                name: 'Mc',
                population: 11920000,
                color: 'rgb(0, 0, 255)',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              },
            ]}
            width={Dimensions.get('window').width - 16}
            height={220}
            chartConfig={{
              backgroundColor: 'blue',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute //for the absolute number remove if you want percentage
          />
         
         </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
          </Tab>
          <Tab heading="รายจ่าย">
          <ScrollView Vertical={true} showsVerticalScrollIndicator={false} >
                                <View style={{
                                    width: 380,
                                    maxHeight: deviceHeight * 70,
                                    backgroundColor: '#ffffff',
                                    margin: 20,
                                    borderRadius: 10,

                                }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon style={{ color: '#3373DF', margin: 10 }} size={20} name={'outdent'} />

                                        <Text style={{ fontSize: 20, margin: 10 }}>
                                            รายรับ
                                    </Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('List1')}> 
                                        <Text>min</Text>
                                    </TouchableOpacity>

                                    </View>
                                    <View style={{ width: 70, height: 20, backgroundColor: '#eee', borderRadius: 15, marginLeft: 40, }}>
                                        <Text style={{ textAlign: 'center', color: '#7F8C8D' }}>0 รายการ</Text>



                                    </View>
                                    <Separator />




                                </View>
                            </ScrollView>
          </Tab>
          <Tab heading="รายรับ">
            
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 3,
      margin: 10,
    },
    header: {
      textAlign: 'center',
      fontSize: 18,
      padding: 16,
      marginTop: 16,
    },
  });