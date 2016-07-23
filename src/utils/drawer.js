import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Drawer from 'react-native-drawer';
import Menu from './menu';
import { entry } from '../entry';
import * as applicationActions from '../store/action/applicationAction';

class WingsDrawer extends Component {
  refDrawerToStore (instance) {
    this.props.dispatch(applicationActions.toggleDrawer(null, instance));
  }

  render () {
    return <Drawer
      {...drawerConfig}
      {...this.props}
      disabled={this.props.scene.disableDrawer}/>
  }
}

function mapStateToProps (state) {
  return {
    scene: state.app.scene,
    drawerOpen: state.app.drawerOpen
  }
}

export default connect(mapStateToProps)(WingsDrawer);

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