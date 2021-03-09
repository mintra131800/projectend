import { Item } from 'native-base';
import React from 'react';
import {View, Text, StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Hom2 extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text,
    this.id=props.id,
    this.path=props.path,
    this.option=props.option,
    this.chosenDate=props.chosenDate
   
    }
   
  
render(){
  const {deleteItem,item}=this.props;
  return (
   <TouchableOpacity style={styles.listItem}>
       <View style={{width:'100%',flexDirection:'row'}}>
         <View style={{width:60,height:50,backgroundColor:"yellow",borderRadius:5}}>
         

         </View>
         <View>
         <View style={{width:150,height:30,marginTop:2,marginLeft:5}}>
         <Text style={{marginLeft:5,fontSize:20}} >{item.option}</Text>
         
         </View>
         <View style={{flexDirection:'row',borderRadius:15,width:100,height:30,backgroundColor:'#EA8E8E',marginTop:5,marginLeft:10}}>
         <Icon name={'caret-down'} size={20} color={'red'} style={{margin:5}}/>
           <Text style={{textAlign:'center',margin:5,color:'red'}}>{item.text}bath</Text>
           </View>
           </View>
           <View style={{marginHorizontal:80}}>
           <Icon name='trash' size={20}
           onPress={()=>deleteItem(item.id)}
           /></View>
       </View>
       <View style={{width:300,height:30,flexDirection:'row'}}>
        
         <Text style={{width:50,height:40}} >{item.path}</Text>
         <Text style={{textAlign:'center',width:140,height:20,marginHorizontal:150}}>{item.chosenDate}</Text>
         
       </View>

   </TouchableOpacity>
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
    width:350,
    height:120,

  },
  listItemView:{
    

  },
  listItemText:{
    
    

  }
});








/*const ListItem= ({item,deleteItem}) => {
 
  return (
   <TouchableOpacity style={styles.listItem}>
       <View style={styles.listItemView}>
           <Text style={styles.listItemText}>{item.text}</Text>
           <Icon name='trash' size={20}
           onPress={()=>deleteItem(item.id)}
           />
       </View>

   </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    listItem: {
    padding:15,
    backgroundColor:'#eee',
    borderEndWidth:1,
    borderColor:'#eee'
  },
  listItemView:{
    flexDirection:'row',
    justifyContent:'space-between'

  },
  listItemText:{

  }
});
export default ListItem;*/
