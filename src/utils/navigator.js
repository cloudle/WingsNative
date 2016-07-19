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
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from '../utils/fontello';
import ResponsibleTouchArea from '../component/ResponsibleTouchArea';

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: appConst.mainBlue,
  },
  backIcon: {
    color: 'white',
    padding: 5,
  },
	menuIcon: {
		color: 'white',
	},
	areaWrapper: {
		flex: 1,
		// backgroundColor: 'red',
		justifyContent: 'center'
	},
	title: {
		color: 'white',
	}
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
		return <View style={styles.areaWrapper}>
			<ResponsibleTouchArea
				staticRipple={true} onPress={() => navigator.pop()}>
				<Text style={styles.backIcon}>
					<MaterialIcon name="chevron-left" style={{fontSize: 30}}/>
				</Text>
			</ResponsibleTouchArea>
		</View>
	},
	RightButton: (route, navigator, index, navState) => {
		return <View style={[styles.areaWrapper, {marginRight: 10, flexDirection: 'row'}]}>
			<ResponsibleTouchArea
				innerStyle={{padding: 10, paddingRight: 8, paddingBottom: 8}}
				staticRipple={true}>
				<Text style={styles.menuIcon}>
					<Icon name="appbar-globe" style={{fontSize: 22}}/>
				</Text>
			</ResponsibleTouchArea>
			<ResponsibleTouchArea
				innerStyle={{padding: 10, paddingRight: 8}}
				staticRipple={true}>
				<Text style={styles.menuIcon}>
					<Icon name="menu" style={{fontSize: 22}}/>
				</Text>
			</ResponsibleTouchArea>
		</View>
	},
	Title: (route, navigator, index, navState) => {
		return <View style={styles.areaWrapper}>
			<Text style={styles.title}>{route.title}</Text>
		</View>
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
      navigationBar={<NavigationBar
			  routeMapper={this.props.scene.routerMapper || routerMapper}
			  style={styles.navigationBar}/>}
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