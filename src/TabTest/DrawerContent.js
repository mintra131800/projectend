import React from 'react';
import { View, StyleSheet, ImageBackground,Image } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const image = { uri: "https://www.amringusa.com/wp-content/uploads/2018/01/amring-products-hero-bg.jpg" }

export function DrawerContent(props) {
    return (
        <ImageBackground source={image} style={styles.image}>
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={{
                                        uri: 'https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/115547391_1181030302275433_5638327531611543428_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_eui2=AeHu6ihUI2HInK_Sc2ApYZqrh-pwem_iU5-H6nB6b-JTn_IYGanbF0uOj3lT2Tx2kvTXASSBOYNIIF8Ns-cVhi_w&_nc_ohc=VyGJIK5YKLwAX9RQx_Z&_nc_ht=scontent.fbkk13-2.fna&oh=4998cf77bd8ac3e8b6858a8828bf0ce2&oe=5FB6618D'
                                    }}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>Mintra</Title>
                                    <Caption style={styles.caption}>@Mintra</Caption>
                                </View>
                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name={'home'} size={20} color={'black'} />
                                )}
                                label="Home"
                                onPress={() => { props.navigation.navigate('Home') }}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name={'cart-plus'} size={20} color={'black'} />
        
                                )}
                                label="Card"
                                onPress={() => { props.navigation.navigate('Card') }}
                            />
                        
                        
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name={'sliders'} size={20} color={'black'} />
                                )}
                                label="Carousel"
                                onPress={() => { props.navigation.navigate('Carousel') }}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name={'slideshare'} size={20} color={'black'}  />
                                )}
                                label="Swiper"
                                onPress={() => { props.navigation.navigate('Swiper') }}
                            />
                
                            
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
});