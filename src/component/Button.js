import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

import ResponsibleTouchArea from './ResponsibleTouchArea';

export default class Button extends Component {
  renderIcon () {
    if (this.props.icon) {
      return this.props.icon;
    }
  }

  render () {
    let fontStyle = {fontWeight: this.props.weight || 'normal'};
    
    return <ResponsibleTouchArea
      {...this.props}
      wrapperStyle={[styles.wrapper, this.props.wrapperStyle]}
      innerStyle={[styles.inner, this.props.innerStyle]}>
      {this.renderIcon()}
      <Text style={[styles.caption, fontStyle]}>{this.props.caption}</Text>
    </ResponsibleTouchArea>
  }
}

let styles = StyleSheet.create({
  wrapper: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
  },
  inner: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    color: 'white',
    backgroundColor: 'transparent',
  }
});