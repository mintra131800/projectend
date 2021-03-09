
import React from 'react';


import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome'
import Hom2 from "./Hom2";
export default class MyPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
  }
    this.money = props.money
   

    }


render(){
  return (
    <>
      <SafeAreaView style={{ width: 412 }}>
        
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
      <ScrollView Vertical={true} showsVerticalScrollIndicator={false} >
        
        <View style={{ width:'100%', height: 500, backgroundColor: '#ffffff', borderRadius: 15,margin:10}}>
        
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

  );
          }
};




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




