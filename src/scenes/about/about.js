import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as applicationActions from '../../store/action/applicationAction';

import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import * as textStyles from '../../styles/text';

import signIn from '../sign';

class About extends Component {
  constructor (props) {
    super(props);
  }

  goBack = () => {
    this.props.navigator.pop();
  };

  render () {
    return <View>
      <Text style={[{paddingTop: 65}]}>Hello {this.props.counter}</Text>
      <TouchableHighlight onPress={this.goBack} underlayColor="transparent">
        <Text>Back</Text>
      </TouchableHighlight>
    </View>
  }
}

function mapStateToProps (state) {
  return {
    counter: state.app.counter
  }
}

export default connect(mapStateToProps)(About);