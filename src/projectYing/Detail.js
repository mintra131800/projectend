import React, { Component } from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Home extends Component {
    render() {
        const{navigation}=this.props;
        return (
            <View style={styles.container}>
                
                 <Image source={require('../../assets/image/ying.jpg')} style={{height: 100, width: 100,borderRadius:80}}/> 
                <View style={styles.detail}>
                  <Icon name={'user'} size={30} color={'#70BEE9'}> <Text style={styles.text}>ชื่อ นางสาว มินตรา ตามศรีรัมย์</Text></Icon> 
                  <Icon name={'calendar'} size={30} color={'#70BEE9'}>  <Text style={styles.text}>เกิดวันที่ 31 มกราคม 2541 อายุ22ขวบ</Text></Icon>
                  <Icon name={'cog'} size={30} color={'#70BEE9'}> <Text style={styles.text}>คณะ วิศวกรรมศาสตร์</Text></Icon>
                  <Icon name={'laptop'} size={30} color={'#70BEE9'}> <Text style={styles.text}>สาขาวิศวกรรมคอมพิวเตอร์</Text></Icon>
                  <Icon name={'facebook-square'} size={30} color={'#70BEE9'}> <Text style={styles.text}>Facebook: Mintra Yt</Text></Icon>
                  <Icon name={'instagram'} size={30} color={'#70BEE9'}> <Text style={styles.text}>Instragram: Mintra Yt</Text></Icon>

                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{marginTop:20}}>
                <TouchableOpacity style={styles.Toch1} onPress={()=>this.props.navigation.navigate('Home')}>
                <Icon name={'arrow-left'} size={25} color={'#fff'} style={styles.icon}/>
                <Text style={{margin:10,color:'#fff',fontSize:15}}>Back to Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20,paddingHorizontal:10}}>
                <TouchableOpacity style={styles.Toch2} onPress={()=>this.props.navigation.goBack()}>
                <Icon name={'backward'} size={25} color={'#fff'} style={styles.icon}/>
                <Text style={{margin:10,color:'#fff',fontSize:15}}>Previous</Text>
                </TouchableOpacity>
            </View>
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
        backgroundColor:'#C3CBF6',
        
    },
    detail:{
        margin:30
        

    },
    text:{
        fontSize:16,
        
        color:'#6E6A6B'


    },
    Toch1:{
        backgroundColor:'#5FD50C',
        width:150,
        height:40,
        borderRadius:10,
        flexDirection:'row'

    },
    Toch2:{
        backgroundColor:'#DA0A59',
        width:150,
        height:40,
        borderRadius:10,
        flexDirection:'row',

    },
    icon:{
        margin:5
    }
    
  });
  
