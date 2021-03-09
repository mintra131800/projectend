import React, {useCallback, useRef, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const Slide1 = () => {
  const exampleItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
      image: require('../../assets/image/a1.png'),
    },
    {
      title: 'Item 2',
      text: 'Text 2',
      image: require('../../assets/image/a1.jpg'),
    },
    {
      title: 'Item 3',
      text: 'Text 3',
      image: require('../../assets/image/a3.jpg'),
    },
    {
      title: 'Item 4',
      text: 'Text 4',
      image: require('../../assets/image/a4.jpg'),
    },
   
  ];
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);

  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={styles.slideItem}>
        <Image style={styles.itemImage} source={item.image} />
      </View>
    );
  }, []);

  return (
    <View style={styles.slideView}>
      <Carousel
        layout={'default'}
        ref={ref}
        data={carouselItems}
        sliderWidth={410}
        itemWidth={320}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
        loop={true}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={2000}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  slideItem: {
    borderRadius: 20,
  },
  slideView: {
    flexDirection: 'column',
    marginTop: 0.5,
  },
  itemImage: {
    height: 350,
    width: 350,
    borderWidth: 5,
    borderColor: '#fff',
  },
});
export default Slide1;