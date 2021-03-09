import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet,} from 'react-native';
 
export default class Item extends React.PureComponent {
 
    render() {
        const listItemStyle = this.props.index % 2 == 0 ? styles.even : styles.odd;
        return (
            <View style={styles.listItem}> 
                    <TouchableOpacity style={[listItemStyle, styles.fillWidth]}>
                        <Text style={styles.text}>
                            {this.props.title + ': ' + this.props.id}
                        </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    listItem: {
        borderBottomWidth: 1, 
        borderColor: '#010101', 
        backgroundColor: '#B0D078', 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    odd: {
        backgroundColor: '#FFFFFF'
    },
    even: {
        backgroundColor: '#D7E2F8'
    },
    fillWidth: {
        flex: 1
    },
    text: {
        color: "black", 
        margin: 5, 
        fontSize: 14
    }
});



<View style={styles.container}>
          
          <View style={{
              width: 340,
              maxHeight: devic*70,
              backgroundColor: '#ffffff',
              margin: 5,
              borderRadius: 10,
              marginTop:20

          }}>
              <View style={{ flexDirection: 'row' }}>
                  <Icon style={{ color: '#3373DF', margin: 10 }} size={30} name={'angle-double-up'} />

                  <Text style={{ fontSize: 20, margin: 10 }}>
                      รายรับ
              </Text>
              

              </View>
              <View style={{ width: 70, height: 20, backgroundColor: '#eee', borderRadius: 15, marginLeft: 40, }}>
                  <Text style={{ textAlign: 'center', color: '#7F8C8D' }}>0 รายการ</Text>



              </View>
              <Separator />




          </View>
      
      </View>