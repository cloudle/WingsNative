import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import Menu from './menu';

class WingsDrawer extends Component {
  render () {

    return <Drawer
      {...drawerConfig}
      disabled={this.props.scene.disableDrawer}
      {...this.props}
    />
  }
}

function mapStateToProps (state) {
  return {
    scene: state.app.get('scene')
  }
}

export default connect(mapStateToProps)(WingsDrawer);

const drawerStyles = {
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  main: {
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  }
};

export let drawerConfig = {
  content: <Menu/>,
  type: 'overlay',
  side: 'right',
  negotiatePan: true,
  closedDrawerOffset: -5,
  tapToClose: true,
  openDrawerOffset: 0.2,
  panOpenMask: .1,
  styles: drawerStyles,
};