import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Listitem = ({ item, deleteItem }) => {
  return (
    <View>
      <View style={styles.Listitem}>
        <View style={styles.ListItemView}>
          <TouchableOpacity>
          <View style={styles.ListItemView2}>
            <Text style={styles.ListItemtext}><Text style={{ color: '#D1EDE1' }}>ชื่อ :   </Text>{item.text}</Text>
            <Text style={styles.ListItemtext}><Text style={{ color: '#D1EDE1' }}>ราคา :   </Text>{item.price}</Text>
          </View>
          </TouchableOpacity>
          <View style={{ justifyContent: 'center' }}>
            <Icon
              name={'trash-alt'}
              size={26}
              color='#D1EDE1'
              onPress={() => deleteItem(item.id)} />
          </View>
        </View>
      </View>
      <View></View>
    </View>
  )

}

const styles = StyleSheet.create({
  Listitem: {
    padding: 10,
    backgroundColor: '#028C6A',
    borderBottomWidth: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  ListItemView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ListItemView2: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  ListItemtext: {
    fontSize: 18
  },
})

export default Listitem;