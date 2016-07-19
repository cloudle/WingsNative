import React, { Component } from 'react';
import {
  Animated,
  Easing,
  PanResponder,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

const MAX_PARTICLE_COUNT = 5;
import RippleParticle from './RippleParticle';
import { debounce } from 'lodash';

export default class ResponsibleTouch extends Component {
  rippleIndex = 0;

  constructor (props) {
    super(props);
    this.state = {
      ripples: [],
      opacityAnimation: new Animated.Value(1)
    };

    if (this.props.debounce) {
      this.handlePress = debounce(this.handlePress.bind(this), this.props.debounce);
    }
  }

  handlePressIn (e) {
    let { locationX, locationY, pageX, pageY } = e.nativeEvent;

    this.refs.wrapperView.measure((fx, fy, wrapperWidth, wrapperHeight, px, py) => {
      let ripplePosition, rippleRadius = 0, touchX = pageX - px, touchY = pageY - py;

      if (this.props.staticRipple) {
        rippleRadius = wrapperWidth / 2;
        ripplePosition = {
          top: (wrapperHeight / 2) - rippleRadius,
          left: (wrapperWidth / 2) - rippleRadius,
        }
      } else {
        //Get the user's press location (4 places) to generate Ripple effect with correct radius! Math.sqrt(Math.pow(Xa - Xb) + Math.pow(Ya - Yb))
        if (touchX > wrapperWidth / 2) {
          if (touchY > wrapperHeight / 2) {
            // console.log("Bottom-Right");
            rippleRadius = Math.sqrt(Math.pow(touchX, 2) + Math.pow(touchY, 2));
          } else {
            // console.log("Top-Right");
            rippleRadius = Math.sqrt(Math.pow(touchX, 2) + Math.pow(touchY - wrapperHeight, 2));
          }
        } else {
          if (touchY > wrapperHeight / 2) {
            // console.log("Bottom-Left");
            rippleRadius = Math.sqrt(Math.pow(touchX - wrapperWidth, 2) + Math.pow(touchY, 2));
          } else {
            // console.log("Top-Left");
            rippleRadius = Math.sqrt(Math.pow(touchX - wrapperWidth, 2) + Math.pow(touchY - wrapperHeight, 2));
          }
        }

        rippleRadius *= 1.2;
        ripplePosition = {
          top: touchY - rippleRadius,
          left: touchX - rippleRadius,
        };
      }

      let newRipple = {
        index: this.rippleIndex++,
        style: {
          width: rippleRadius * 2,
          height: rippleRadius * 2,
          borderRadius: rippleRadius,
          backgroundColor: this.props.rippleColor || 'white',
          ...ripplePosition
        }
      }, ripples = [newRipple, ...this.state.ripples];

      if (ripples.length > MAX_PARTICLE_COUNT) {
        ripples = ripples.slice(0, MAX_PARTICLE_COUNT);
      }

      this.setState({ ripples });
    });

    this.props.onPressIn && this.props.onPressIn(e);
  }

  handlePress (e) {
    this.props.onPress && this.props.onPress(e);
  }

  renderRipples () {
    return this.state.ripples.map(ripple => {
      return <RippleParticle
        key={ripple.index}
        style={ripple.style}
        index={ripple.index}
        speed={this.props.rippleAnimationSpeed}
      />;
    })
  }

  render () {
    return <View
      ref="wrapperView"
      style={[this.props.wrapperStyle, {overflow: 'hidden'}]}
      onLayout={this.props.onLayout}>

      {this.renderRipples()}
      <TouchableOpacity
        style={this.props.innerStyle}
        onPressIn={this.handlePressIn.bind(this)}
        onPress={this.handlePress.bind(this)}
        onStartShouldSetResponderCapture={() => true}>

        {this.props.children}
      </TouchableOpacity>
    </View>
  }
}