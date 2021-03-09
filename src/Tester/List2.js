import React,{useState} from "react";
import { View, StyleSheet,Text,Button,Image,TouchableOpacity,SafeAreaView } from "react-native";

import ListHeader  from "./ListHeader";
import ListAdd from "./ListAdd";


export default class List2 extends React.Component{
  constructor(props) {
    super(props);
    this.item ={
      id:['mintra']
    }
  }

  addItem=()=>{
    this.setState((prevItems) => {
      return {
        text:'',
        id:[prevItems.text]
      };
    });
  };
  render(){
    const{navigation}=this.props;
    return ( 
   
      <SafeAreaView style={{
        flex:1,
        height: 110,
      }}>
        <ListHeader title='My book List'/>
        
       <View style={styles.container}>
        <ListAdd addItem={this.addItem}/>
          {/* <View style={styles.Box}> 
        <View style={styles.top}>
        <Image source={require('../../assets/image/list.png')}
                    style={{width:80,height:70,marginLeft:5,marginTop:20}}/>
            <Text  style={{textAlign:"center",marginTop:30,fontWeight:'700'}}>เริ่มจากรายการแรกของคุณ</Text>
            <Text  style={{textAlign:"center",marginTop:10,color:'#9F9EA0'}}>ที่นี่คือศูนย์รวมรายรับรายจ่ายของคุณ   คุณสามารถเพิ่มรากการต่างๆของคุณได้ที่นี่</Text>
            
        </View> 
      </View>*/}
     
      <View style={{width:130}}>
      <TouchableOpacity style={styles.text}
      onPress={()=>this.props.navigation.navigate('List11')}>
       
            <Text style={{color:'#FFFFFF',fontSize:25,textAlign:'center'}}>+ รายการ</Text>
      </TouchableOpacity>
      </View>
      </View>
      </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent: "space-between",
    backgroundColor: "#eee",
    padding: 10,
    width:'100%'
  },
  top: {
  
    alignItems:"center",
    backgroundColor: "#FFFFFF",
   marginTop:100,
    
    borderRadius:20,
  },
Box:{
   alignItems:"center",
    width:"60%",
    height: "50%",
   
},
text:{
    borderRadius:10,
    fontSize:30,
    backgroundColor:'#7981F4',
},
});

