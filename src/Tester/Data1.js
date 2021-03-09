import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity, Button
} from 'react-native';
const ViewBoxesWithColorAndText = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                height: 60,
            }}
        >
            <View style={{
                backgroundColor: "#97CEF2",
                flex: 1,
                fontWeight: '900',
                padding: 5,
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: '#FFFFFF',
                    fontFamily: "SanamDeklenchaya",
                    
                }}>ข้อมูล</Text>  

                
                  
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      backgroundColor: "#48A0DA",
      padding: 10,
      borderRadius:15,
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
      container1: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
      },
      buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
      },
      buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#48A0DA',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
      },
      buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
      },
      buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 100,
      },
      buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
      },
    });
export default ViewBoxesWithColorAndText;