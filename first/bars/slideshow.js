import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

const Slideshow = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef(null);
  const containerwidth = 334;

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(contentOffsetX / containerwidth);
    setCurrentPage(pageIndex);
  };
  
  const scrollToPage = (pageIndex) => {
    const offsetX = pageIndex * containerwidth;
    scrollViewRef.current.scrollTo({ x: offsetX, y: 0, animated: true });
    setCurrentPage(pageIndex);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (currentPage + 1) % images.length;
      scrollToPage(nextPage);
    }, 3000);
  
    return () => {
      clearInterval(interval);
    };
  }, [currentPage, images.length]);

  return (
    <View style={styles.container}>
      <View style={styles.slideshowContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={[styles.scrollContent, { width: containerwidth * images.length }]}
        >
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.image} resizeMode="cover" />
          ))}
        </ScrollView>
        <View style={{ width: 334 }} />
      </View>
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentPage ? styles.activeDot : null]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 334,
    height: 130,
    alignSelf:'center'
  },
  slideshowContainer: {
        flex: 1,
        alignSelf:'center',
        alignItems:'center'
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  image: {
    width: 334,
    height: 100,
    borderRadius:20
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top:120,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
});

export default Slideshow;

