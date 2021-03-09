
import React,{Component} from 'react';
import { Header,CheckBox, Container, Content, Tab, Tabs, Card, CardItem, } from 'native-base';
import { Text } from "react-native";


export default class iddex extends Component{

    state={
        one:false,
        two:false,
        option:''
    }
    onePressed(option){
       // alert('One');
       this.setState({one:true,two:false,option:option})
    }
    twoPressed(option){
       // alert('two')
       this.setState({one:false,two:true,option:option})
    }
    render(){
        return(
            <Container style={{backgroundColor:'#efefef'}}>
                <Header style={{backgroundColor:'#f8000',width:400,height:500}}>
                    <Content>
                        <Card>
                            <CardItem header>
                                <Text>My question</Text>

                            </CardItem>

                            <CardItem>
                        <CheckBox 
                        checked={this.state.one}
                        onPress={()=>this.onePressed('first  option')}
                        style={{marginRight:20}}
                        />
                        <Text>One</Text>
                        <CheckBox checked={this.state.two}
                        onPress={()=>this.twoPressed('Second option')}
                        style={{marginRight:20}}
                        />
                        <Text>Two</Text>
                        </CardItem>
                        <CardItem footer>
                            <Text>Your Select {this.state.option}</Text>

                        </CardItem>
                        </Card>
                    </Content>

                </Header>

            </Container>
        )
    }
}








































/*import Slides from './Header'
import Header from './Header';
import {Image,View,} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
 
// init component.
export default class App extends Component {
    render(){
        return(
            
       
    <Header headerText
    secondText='Benznest'
    path={require("../../assets/image/d1.png")}
    >
         <View style={{width:400,height:300,backgroundColor:'#eee'}}></View>
    </Header>
   
        )
}
}*/
    
