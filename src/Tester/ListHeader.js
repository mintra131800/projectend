import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'


export default class ListHeader extends React.Component {
    constructor(props) {
      super(props);
      this.title=props.title
    }
    render(){
    return (
        <View style={styles.header}>
            <Text style={{fontSize:30}}>{this.title}</Text>
        </View>
    )
    }
}  
const styles=StyleSheet.create({
    header:{
       alignItems:'center',
       backgroundColor:'blue'
       
    }
})









/*const ListHeader=(props)=> {
    return (
        <View style={styles.header}>
            <Text style={{fontSize:30}}>{props.title}</Text>
        </View>
    )
}  
const styles=StyleSheet.create({
    header:{
       alignItems:'center',
       backgroundColor:'blue'
       
    }
})
export default ListHeader;*/