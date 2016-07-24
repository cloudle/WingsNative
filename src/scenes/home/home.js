import React, { Component } from 'react';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextInput
} from 'react-native';

import styles from './homeStyle';
import * as coreStyles from '../../styles/core';
import * as textStyles from '../../styles/text';

import AboutPage from '../about/about';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = { counter: 0 };
    // this.ticker = this.setInterval(() => this.tick(), 100);
  }

  tick () {
    this.setState({counter: this.state.counter + 1})
  }

  reset = () => {
    this.requestAnimationFrame(() => {
      this.setState({counter: 0});
    });
  };

  next = () => {
    this.props.navigator.push({component: AboutPage});
  };

  render() {
    return (
      <ScrollView contentContainerStyle={[coreStyles.container]}>
        <View style={coreStyles.heading}>
          <Text style={[textStyles.h2, textStyles.light, textStyles.bold]}>REAL ESTATE!!</Text>
        </View>
        <View style={coreStyles.content}>
          <TextInput style={styles.field} placeholder="Username.." />
          <TextInput style={styles.field} placeholder="password!" />
          <Text style={[textStyles.light, textStyles.h2]}>
            Welcome to Twin's product!
          </Text>
          <Text style={[textStyles.light, textStyles.bold]}>{this.state.counter}</Text>
          <Text style={[styles.instructions, textStyles.light]}>
            To get started, edit index.ios.js
          </Text>
          <Text style={[styles.instructions, textStyles.light]}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <TouchableHighlight style={styles.signInButton} onPress={this.next}>
            <Text style={[textStyles.light, textStyles.h2]}>
              Sign In
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

export default ReactMixin.onClass(Home, TimerMixin);