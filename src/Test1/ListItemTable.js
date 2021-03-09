import { Item } from 'native-base';
import React from 'react';
import {View, Text, StyleSheet,FlatList,TouchableOpacity,Image,Modal, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Hom2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
  }
    this.text = props.text,
    this.id=props.id,
    this.path=props.path,
    this.option=props.option,
    this.chosenDate=props.chosenDate

    }
   
  
render(){
  const {deleteItem,item}=this.props;
  return (
      <View style={{width:370,height:170}}>
   <TouchableOpacity style={styles.listItem} onPress={() => {
                        this.setState({ show: true });
                    }}>
       <View style={{width:'50%',flexDirection:'column'}}>
         <View style={{width:40,height:40,backgroundColor:"yellow",borderRadius:5,marginHorizontal:20}}>

         </View>
         <View>
         <View style={{width:70,height:25,marginTop:5,marginLeft:5}}>
         <Text style={{marginLeft:5,fontSize:12,textAlign:'center'}} >{item.option}</Text>
         </View>
         <View style={{flexDirection:'row',borderRadius:15,width:50,height:25,backgroundColor:'#EA8E8E',marginLeft:17}}>
         <Icon name={'caret-down'} size={20} color={'red'} style={{margin:5}}/>
           <Text style={{textAlign:'center',color:'red'}}>{item.text}</Text>
          
           </View>
           <Text style={{width:140,height:20,fontSize:10,marginTop:5}}>{item.chosenDate}</Text>
           </View>
           <View style={{marginHorizontal:80}}>
           <Icon name='trash' size={20}
           onPress={()=>deleteItem(item.id)}
           /></View>
       </View>


       <Modal
                        transparent={true}
                        visible={this.state.show}
                        animationType={'fade'}>
                        <View
                            style={{
                                backgroundColor: '#00000aaa',
                                flex: 1,
                                alignItems: 'center',
                            }}>
                            <Icon
                                style={{ margin: 30, color: '#D9D3DB', marginLeft: 250 }}
                                name={'times-circle'}
                                size={40}
                                onPress={() => {
                                    this.setState({ show: false });
                                }}
                            />
                            <View
                                style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: 10,
                                    width: 350,
                                    height: 100,
                                    marginTop: 10,
                                }}>
                                <View style={{
                                    margin: 5,
                                    borderRadius: 10,
                                    width: 350,
                                    height: 120,
                                }}>
                                    <View style={{ width: '100%', flexDirection: 'row' }}>
                                        <View style={{ width: 60, height: 50, backgroundColor: "yellow", borderRadius: 5, margin: 5 }}>


                                        </View>
                                        <View>
                                            <View style={{ width: 150, height: 30, marginTop: 2, marginLeft: 5 }}>
                                                <Text style={{ marginLeft: 5, fontSize: 15 }} >{item.option}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', borderRadius: 15, width: 100, height: 30, backgroundColor: '#EA8E8E', marginTop: 5, marginLeft: 10 }}>
                                                <Icon name={'caret-down'} size={20} color={'red'} style={{ margin: 5 }} />
                                                <Text style={{ textAlign: 'center', margin: 5, color: 'red' }}>{item.text} bath</Text>
                                            </View>
                                        </View>
                                        
                                        <View style={{ marginHorizontal: 80 }}>
                                            <Icon name='trash' size={20}
                                                onPress={() => {
                                                    deleteItem(item.id),
                                                        this.setState({ show: false });
                                                }}
                                            /></View>
                                    </View>
                                    <View style={{ width: 300, height: 30,marginLeft:5,flexDirection:'row' }}>
                                            
                                                <Text style={{ width: 50, height: 40 }} >{item.path}</Text> 
                                                <Text style={{textAlign:'center',width:170,height:20,marginHorizontal:120}}>{item.chosenDate}</Text>
                                        </View>
                                </View>
                            </View>
                        </View>

                    </Modal>
       

   </TouchableOpacity>
   
   </View>
  );
}
}

const styles = StyleSheet.create({
    listItem: {
    padding:15,
    backgroundColor:'#fff',
    borderEndWidth:1,
    borderColor:'#eee',
    margin:5,
    borderRadius:10,
    width:150,
    height:150,
    
    
  },
  listItemView:{
    

  },
  listItemText:{
    
    

  }
});








