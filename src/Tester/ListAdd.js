import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ListAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onChange = (textValue) => {
        this.setState({
            text: textValue
        });
    }


    render() {

        const { addItem } = this.props;
        return (
            <View>
                <View >
             
                    <TextInput placeholder='Add Book...'
                        style={styles.input} onChangeText={this.onChange} > </TextInput></View>
                <TouchableOpacity style={styles.btn} onPress={() => addItem(this.state.text)}>
                    <Text style={styles.btnText}>
                        <Icon name='plus' size={20} />
                        Add Book
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 20

    },
    btn: {
        backgroundColor: 'darkgreen',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});









/*const ListItem= ({title,addItem}) => {
    const [text,setText]=useState('')

    const onChange=textValue=>setText(textValue);

  return (
  <View>
      <TextInput placeholder='Add Book...'
      style={styles.input} onChangeText={onChange} > </TextInput>
          <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)}>
              <Text style={styles.btnText}>
                  <Icon name='plus' size={20}/>
                  Add Book

              </Text>

          </TouchableOpacity>


  </View>
  );
};
const styles = StyleSheet.create({
  input:{
      height:60,
      padding:8,
      fontSize:20

  },
  btn:{
      backgroundColor:'darkgreen',
      padding:9,
      margin:5
  },
  btnText:{
      color:'white',
      fontSize:20,
      textAlign:'center'
  }
});
export default ListItem;*/
