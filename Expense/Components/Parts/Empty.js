import React from 'react';
import {View, Text} from 'react-native';

const Empty = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={{color: '#ff4500', fontWeight: '700', fontSize: 20}}>
        ไม่พบข้อมูล
      </Text>
    </View>
  );
};

export default Empty;