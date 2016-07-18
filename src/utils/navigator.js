import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  TouchableHighlight,
  Navigator,
  StyleSheet,
} from 'react-native'

import * as appConst from '../utils/const';
import * as textStyles from '../styles/text';
import * as routes from './routes';

import { updateScene } from '../store/action/applicationAction';
export const initialRoute = routes.projectList;

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: appConst.mainBlue,
  },
  navigatorButtonStyle: {
    color: 'white',
    lineHeight: 24,
    padding: 5,
  },
});

export let sceneConfigure = (route, routeStack) => {
  return route.pushDirection || Navigator.SceneConfigs.PushFromRight;
};

export let sceneRenderer = (route, navigator) => {
  global.nav = navigator;
  return React.createElement(route.component, {...this.props, ...route.params, route, navigator});
};

let routerMapper = {
  LeftButton: (route, navigator, index, navState) => {
    return <Text
      style={styles.navigatorButtonStyle}
      onPress={() => navigator.pop()}>
      <MaterialIcon name="chevron-left" style={{
        fontSize: 30,
        lineHeight: 30,
      }} />
    </Text>;
  },
  RightButton: (route, navigator, index, navState) => {
    return <Text style={styles.navigatorButtonStyle}>Done</Text>;
  },
  Title: (route, navigator, index, navState) => {
    return <Text style={styles.navigatorButtonStyle}>{route.title}</Text>;
  },
};

export let logger = () => {
  console.log(this.name);
};

class NavigationBar extends Component {
  render () {
    return this.props.scene.hideNavBar ? <View /> :
      <Navigator.NavigationBar {...this.props}/>
  }
}

function mapStateToProps (state) {
  return {
    scene: state.app.get('scene')
  }
}

NavigationBar = connect(mapStateToProps)(NavigationBar);

export let navigationBar = <NavigationBar
  routeMapper={routerMapper}
  style={styles.navigationBar}/>;

class WingsNavigator extends Component {
  render () {
    return <Navigator
      style={[styles.navigator, this.props.scene.containerStyle]}
      initialRoute={initialRoute}
      configureScene={sceneConfigure}
      navigationBar={navigationBar}
      onWillFocus={(scene) => this.props.dispatch(updateScene(null, scene))}
      {...this.props}
    />
  }
}

export default connect((state) => {
  return {
    scene: state.app.get('scene')
  }
})(WingsNavigator);