import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import { entry } from '../entry'
import * as appActions from '../store/action/applicationAction';
import ResponsibleTouchArea from '../component/ResponsibleTouchArea';
import Icon from '../utils/fontello';

import { styles as navigatorStyles } from './defaultRouterMapper';

class RightButtons extends Component {
	static contextTypes = {
		drawer: React.PropTypes.object
	};

	toggleDrawer () {
		this.props.dispatch(appActions.toggleDrawer(null, true));
	}

	renderGlobe () {
		return <ResponsibleTouchArea key="globe"
			innerStyle={{padding: 10, paddingRight: 9, paddingBottom: 9}}
			staticRipple={true}>
			<Text style={styles.menuIcon}>
				<Icon name="appbar-globe" style={{fontSize: 22}}/>
			</Text>
			<View style={styles.notificationRect}>
				<Text style={styles.notificationCount}>9+</Text>
			</View>
		</ResponsibleTouchArea>
	}

	renderBurger () {
		return <ResponsibleTouchArea key="burger"
			innerStyle={{padding: 10, paddingRight: 8}}
			staticRipple={true}
			onPress={this.context.drawer.open}>
			<Text style={styles.menuIcon}>
				<Icon name="menu" style={{fontSize: 22}}/>
			</Text>
		</ResponsibleTouchArea>
	}

	renderButtons () {
		if (this.props.scene && this.props.scene.rightButton) {
			return;
		}

		return [this.renderGlobe(), this.renderBurger()];
	}

	render () {
		return <View style={[navigatorStyles.areaWrapper, styles.areaWrapper]}>
			{this.renderButtons()}
		</View>
	}
}

function mapStateToProps (state) {
	return {
		scene: state.app.scene,
		drawer: state.app.drawer,
	}
}

export default connect(mapStateToProps)(RightButtons);

const styles = StyleSheet.create({
	areaWrapper: {
		paddingRight: 5,
		flexDirection: 'row',
	},
	menuIcon: {
		color: 'white',
	},
	notificationRect: {
		position: 'absolute',
		top: 0, right: 0,
		borderRadius: 3,
		backgroundColor: 'red',
		flexDirection: 'row',
		width: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	notificationCount: {
		color: 'white',
		backgroundColor: 'transparent',
		paddingTop: 2, paddingBottom: 2,
		paddingLeft: 5, paddingRight: 5,
		textAlign: 'center',
		fontSize: 12,
		fontWeight: '800',
	}
});

export const buttons = {
	empty: 'EMPTY',
};