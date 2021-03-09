import React, { Component } from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Home extends Component {
    render() {
        const{navigation}=this.props;
        return (
            <View style={styles.container}>
                 <Image source={require('../../assets/image/ying.jpg')} style={{height: 250, width: 150}}/> 
                <View style={{marginTop:20,flexDirection:'row'}}>
                    <View style={{marginRight:15}}><Icon name={'hand-point-right'} size={25}/></View>
                <TouchableOpacity style={styles.Toch1} onPress={()=>this.props.navigation.navigate('Detail')}>
                <Icon name={'server'} size={25} color={'#fff'} style={styles.icon}/>
                <Text style={{margin:10,color:'#fff',fontSize:15}}>ข้อมูลส่วนตัว</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20,flexDirection:'row'}}>
            <View style={{marginRight:15}}><Icon name={'hand-point-right'} size={25}/></View>
                <TouchableOpacity style={styles.Toch2} onPress={()=>this.props.navigation.navigate('Home')}>
                <Icon name={'arrow-left'} size={25} color={'#fff'} style={styles.icon}/>
                <Text style={{margin:10,color:'#fff',fontSize:15}}>กลับหน้าแรก</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:'#C3CBF6'
    },
    Toch:{
        backgroundColor:'#68B5F3',
        width:200,
        height:40,
        borderRadius:10,
        flexDirection:'row'

    },
    Toch1:{
        backgroundColor:'#233FD5',
        width:200,
        height:40,
        borderRadius:10,
        flexDirection:'row'

    },
    Toch2:{
        backgroundColor:'#DA0A59',
        width:200,
        height:40,
        borderRadius:10,
        flexDirection:'row'

    },
    icon:{
        margin:5
    }
    
  });
  
