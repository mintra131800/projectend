import React,{useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './ListHeader';
import uuid from 'uuid-random';
import ListItem from '../component/ListItem';
import ListAdd from './ListAdd';

export default class Listmain extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            items:[
              
            ]
        }
      };
      deleteItem= id => () => {
        const filteredData = this.state.items.filter(item => item.id !== id);
        this.setState({ items: filteredData });
      }
      addItem =(text) => {
        if ( ! text) {
         Alert.alert('Error', 'กรุณากรอกข้อความ',[{ text: "OK" }]);
        } else {
          this.setState((prevItems) => {
            return{
              items: [...prevItems.items,{id:uuid(),text}],
              
            }

          });
        }
      };
    render(){
        return(
            <View>
            
            <ListAdd addItem={this.addItem} />
            <FlatList
              data={this.state.items}
              renderItem={({item}) => (
               
                <ListItem item={item} deleteItem={this.deleteItem(item.id)} />
              )}
              
              keyExtractor={(items, index) => index.toString()}
            /> 
          </View>
        )
    }
}
      const styles = StyleSheet.create({
        header: {
          flex: 1,
        },
      });

   










/*const Listmain = () => {
  const [items, setItems] = useState([
    {id:uuid(),text:'mintrs1'},
              {id:uuid(),text:'mintrs2'},
              {id:uuid(),text:'mintrs3'}
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  const addItem = (text) => {
    if ( ! text) {
     Alert.alert('Error', 'กรุณากรอกข้อความ',[{ text: "OK" }]);
    } else {
      setItems((prevItems) => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.header}>
       <Header title="My Book List" />
      <ListAdd addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
});
export default Listmain;*/
