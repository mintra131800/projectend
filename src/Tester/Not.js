import React,{Component} from 'react';
import {View,Text} from 'react-native'



class Not extends Component{

    constructor(props){
        super(props);
        this.notId=props.notId
        this.notcontent=props.notcontent
    }
    render(props){
        return(
            
            <View style={{width:400,height:100,backgroundColor:'yellow'}}>
                <Text style={{fontSize:30,color:"red"}}>
                id:{this.notId} </Text>
                <Text style={{fontSize:30,color:"red"}}>
                content:{this.notcontent}
                </Text>
            </View>

        )
    }

}

export default Not;