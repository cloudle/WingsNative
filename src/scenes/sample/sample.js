import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as applicationActions from '../../store/action/applicationAction';

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Navigator
} from 'react-native';

import * as textStyles from '../../styles/text';
import buttonStyles from '../../styles/button';
import ResponsibleTouchArea from '../../component/ResponsibleTouchArea';

import About from '../about/about';

class Sample extends Component {
  constructor (props) {
    super(props);
  }

  gotoAbout = () => {
    this.props.navigator.push({
      component: About,
      pushDirection: Navigator.SceneConfigs.FloatFromBottom
    });
  };

  renderALot () {
    let dumps = [];
    for (i = 0; i <= 100; i++) {
      dumps.push(i);
    }

    return dumps.map((item, index) => <Text key={index}>{item}</Text>)
  }

  render () {
    return <ScrollView contentContainerStyle={{paddingTop: 65}}>
      <Text>Sign In Page!</Text>
      <TouchableHighlight onPress={this.gotoAbout.bind(this)} underlayColor="transparent">
        <Text>{this.props.scene.title} {this.props.counter}</Text>
      </TouchableHighlight>

      <View style={{flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row'}}>
        <ResponsibleTouchArea
          wrapperStyle={{backgroundColor: 'orange', borderRadius: 3}}
          innerStyle={{padding: 100}}
          onPress={this.props.increaseCounter}>
          <Text style={[textStyles.light, {backgroundColor: 'transparent'}]}>Increase</Text>
        </ResponsibleTouchArea>
      </View>

      <ResponsibleTouchArea
        wrapperStyle={{marginTop: 10, width: 200, backgroundColor: 'lightgray', borderRadius: 3}}
        innerStyle={{padding: 10}}
        rippleColor="gray"
        onPress={this.props.increaseCounter}>
        <Text style={[textStyles.light, {backgroundColor: 'transparent'}]}>Increase</Text>
      </ResponsibleTouchArea>

      {this.renderALot()}
    </ScrollView>
  }
}

function mapStateToProps (state) {
  return {
    counter: state.app.counter,
    scene: state.app.scene
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(applicationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);