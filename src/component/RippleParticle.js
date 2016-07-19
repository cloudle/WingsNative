import React, { Component } from 'react';

import {
  Animated,
  Easing
} from 'react-native';

export default class RippleParticle extends Component {
  constructor (props) {
    super(props);
    this.state = {
      expandAnimation: new Animated.Value(0)
    };
  }

  componentDidMount () {
    Animated.timing(this.state.expandAnimation, {
      toValue: 1,
      duration: this.props.speed || 800,
      easing: Easing.out(Easing.cubic),
    }).start()
  }

  render () {
    let opacity = this.state.expandAnimation.interpolate({
      inputRange: [0, 1], outputRange: [0.5, 0]
    }), scale = this.state.expandAnimation.interpolate({
        inputRange: [0, 1], outputRange: [0, 1]
    }),
    styles = {
      position: 'absolute',
      ...this.props.style,
      transform: [{ scale }],
      opacity,
    };

    return <Animated.View style={styles}/>
  }
}