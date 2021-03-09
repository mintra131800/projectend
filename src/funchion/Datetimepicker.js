import React, {Component} from 'react';
import {View, Button, AppRegistry,StyleSheet,Text,TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class DatePicker extends Component{
    constructor(){
        super()
        this.state={
            isVisible:false,
            
            
        }
    }
handlePicker=(datetime)=>{
    this.setState({
        isVisible:true,
        chosenDate:moment(datetime).format('MMMM,DD YYYY HH:mm')
    })
}
showPicker=()=>{
    this.setState({
        isVisible:true
    })
}
hidePicker=()=>{
    this.setState({
        isVisible:false,
       
    })
}
    render(){
     
        return(
            <View style={styles.container}>
                
                <TouchableOpacity style={styles.button} onPress={this.showPicker}>
                    <Text style={{color:'green',fontSize:20}}>
                        
                {this.state.chosenDate}
                </Text>
                    
                </TouchableOpacity>
                <DateTimePicker
                
                isVisible={this.state.isVisible}
                onConfirm={this.handlePicker}
                onCancel={this.hidePicker}
                >

                </DateTimePicker>
            </View>

        )
    }
}
 const styles=StyleSheet.create({
     container:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#fff'

     },
     button:{
         width:250,
         height:50,
         backgroundColor:"#eee",
         borderRadius:10,
         justifyContent:'center',
         marginTop:15
     }
 })