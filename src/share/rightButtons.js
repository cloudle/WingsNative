import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import ResponsibleTouchArea from '../component/ResponsibleTouchArea';
import Icon from '../utils/fontello';

import { styles as navigatorStyles } from './defaultRouterMapper';

class RightButtons extends Component {
	renderGlobe () {
		return <ResponsibleTouchArea
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
		return <ResponsibleTouchArea
			innerStyle={{padding: 10, paddingRight: 8}}
			staticRipple={true}>
			<Text style={styles.menuIcon}>
				<Icon name="menu" style={{fontSize: 22}}/>
			</Text>
		</ResponsibleTouchArea>
	}

	render () {
		return <View style={[navigatorStyles.areaWrapper, styles.areaWrapper]}>
			{this.renderGlobe()}
			{this.renderBurger()}
		</View>
	}
}

function mapStateToProps (state) {
	return {
		scene: state.app.scene
	}
}

export default connect()(RightButtons);

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

export const rightItems = {
	NotificationGlobe: 'NOTIFICATION-GLOBE',
	Burger: 'BURGER',
};