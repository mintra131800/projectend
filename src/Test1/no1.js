import React, { useState } from 'react'
import { View, StyleSheet, Alert, FlatList, } from 'react-native'
import uuid from 'uuid-random'
import Druglist from './no3'
import Drugadd from './no2'

const No1 = () => {

  const [items, setItems] = useState([
    { id: uuid(), text: 'ยาพารา', price: '2' },
  ])

  const deleteItem = (id) => {
    setItems(prevItem => {
      return prevItem.filter(item => item.id != id)
    })
  }

  const addItem = (text, price) => {
    if (!text) {
      Alert.alert("Error", "กรุณาใส่ข้อมูล", [{ text: "ยืนยัน" }]);
    }
    else if (!price) {
      Alert.alert("Error", "กรุณาใส่ราคา", [{ text: "ยืนยัน" }]);
    }
    else {
      setItems(prevItem => {
        return [{ id: uuid(), text, price }, ...prevItem];
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewlist}>
        <FlatList data={items}
          renderItem={({ item }) => (
            <Druglist item={item}
              deleteItem={deleteItem}
            />)
          }
        />
      </View>
      <View style={styles.viewlist3}></View>
      <View style={styles.viewlist2}>
        <Drugadd addItem={addItem} />
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#D1EDE1'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  viewlist: {
    flex: 1,
    marginTop: 10,
  },
  viewlist3: {
  },
  viewlist2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 300
  },
})

export default No1;