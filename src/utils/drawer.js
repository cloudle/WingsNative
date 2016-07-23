import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Drawer from 'react-native-drawer';
import Menu from './menu';
import * as applicationActions from '../store/action/applicationAction';

class WingsDrawer extends Component {
  render () {
    return <Drawer
      {...drawerConfig}
      {...this.props}
      open={this.props.drawerOpen}
      disabled={this.props.scene.disableDrawer}/>
  }
}

function mapStateToProps (state) {
  return {
    scene: state.app.scene,
    drawerOpen: state.app.drawerOpen,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    appActions: bindActionCreators(applicationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WingsDrawer);

const drawerStyles = {
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 0
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
  tapToClose: true,
  openDrawerOffset: 0.2,
  panOpenMask: .1,
  styles: drawerStyles,
  tweenHandler: (ratio) => ({
    drawer: { shadowRadius: ratio * 100, shadowOpacity: ratio + 0.5 }
  })
};