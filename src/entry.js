import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './store/store';
import { updateScene } from './store/action/applicationAction';

import {
  StyleSheet,
  Platform,
  AppRegistry,
  StatusBar,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import {
  initialRoute,
  sceneRenderer,
  sceneConfigure,
  navigationBar,
  logger
} from './utils/navigator';

import Drawer from './utils/drawer';
import Navigator from './utils/navigator';
import * as configures from './utils/configures';
import * as coreStyles from './styles/core';

class wings extends Component {
  logger = logger;

  constructor (props) {
    super(props);
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return <Provider store={store}>
      <Drawer>
        <Navigator renderScene={sceneRenderer.bind(this)}/>
      </Drawer>
    </Provider>
  }
}

AppRegistry.registerComponent('wings', () => wings);