import React, { Component } from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Home extends Component {
    render() {
        const{navigation}=this.props;
        return (
            <View style={styles.container}>
                 <Image source={require('../../assets/image/ying.jpg')} style={{height: 150, width: 100}}/> 
                <Text style={{fontSize:25,fontWeight:'700',color:'#64656B',marginTop:15}}>ยินดีต้อนรับเข้าสู่หน้าแรก</Text>
            <View style={{marginTop:20}}>
                <TouchableOpacity style={styles.Toch} onPress={()=>this.props.navigation.navigate('Profile')}>
                <Icon name={'user'} size={25} color={'#fff'} style={styles.icon}/>
                <Text style={{margin:10,color:'#fff',fontSize:15}}>ไปที่หน้าโปรไฟล์</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20}}>
                <TouchableOpacity style={styles.Toch1} onPress={()=>this.props.navigation.navigate('Detail')}>
                <Icon name={'server'} size={25} color={'#fff'} style={styles.icon}/>
                <Text style={{margin:10,color:'#fff',fontSize:15}}>ไปที่ข้อมุลส่วนตัว</Text>
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
        backgroundColor:'#5FD50C',
        width:200,
        height:40,
        borderRadius:10,
        flexDirection:'row'

    },
    icon:{
        margin:5
    }
    
  });
  
