import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';



class CarouselScreen extends Component {
  render() {
      return (
        <ScrollView
        ref={(c) => { this.parentScrollView = c; }}
      >
        <SwipeableParallaxCarousel
          data={this.props.datacarousel}
          parentScrollViewRef={this.parentScrollView}
        />
      </ScrollView>
      );
  }
}

export {CarouselScreen};