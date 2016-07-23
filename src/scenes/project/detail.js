import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScrollableTab from 'react-native-scrollable-tab-view'

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

class ProjectDetail extends Component {


  render () {
    return <ScrollableTab
      style={styles.wrapper}
      tabBarUnderlineColor="white"
      tabBarUnderlineHeight={2.5}
      tabBarUnderlineTop={true}
      tabBarBackgroundColor="#4b6baf"
      tabBarTextStyle={styles.tabBarText}
      tabBarActiveTextStyle={{opacity: 1}}>
      <ScrollView tabLabel="THÔNG TIN">
        <Text>Hi 1</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
      </ScrollView>
      <ScrollView tabLabel="THƯ VIỆN">
        <Text>Hi 2</Text>
      </ScrollView>
      <ScrollView tabLabel="CHÍNH SÁCH">
        <Text>Hi 3</Text>
      </ScrollView>
      <ScrollView tabLabel="GIỚI TÍNH">
        <Text>Hi 4</Text>
      </ScrollView>
    </ScrollableTab>
  }
}

function mapStateToProps (state) {
  return {
    scene: state.app.scene
  }
}

export default connect(mapStateToProps)(ProjectDetail);

import * as coreStyles from '../../styles/core';

const styles = StyleSheet.create({
  wrapper: {
    ...coreStyles.sceneWrapper,
  },
  tabBarText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 25,
    opacity: 0.8,
  }
});